const asyncHandler = require("express-async-handler");
const redisClient = require("../config/redisClient");
const {
  getAvailableSims,
} = require("../services/accountController/simService");
const { sendOTP } = require("../services/accountController/otpService");
const rateLimit = require("express-rate-limit");

const axios = require("axios");
const {
  sendMessageToDiscord,
} = require("../services/accountController/discordLogging");

//Rate limit 5/15min --otp
const otpLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 5,
  message: {
    success: "false",
    message: "Too many OTP requests. Try again later.",
  },
});

const otpVerifyLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 15,
  message: {
    success: false,
    message: "Chill! Take a break too many verifications 😮‍💨",
  },
});

//@desc Send OTP to a phone number whilst maintaing 200 sms daily limit
//@route POST /v1/accounts
//@access public
const authUser = asyncHandler(async (req, res) => {
  let { phone } = req.body;
  if (!phone || phone.toString().length !== 10 || !/^\d{10}$/.test(phone)) {
    throw new Error("Phone number must be exactly 10 digits long");
  }

  const otp = Math.floor(1000 + Math.random() * 9000);

  phone = String(phone);
  phone = phone.startsWith("+91") ? phone : `+91${phone}`;

  //Check last OTP request time -- Resend OTP
  const lastOTPRequestTime = await redisClient.get(`OTP_REQUEST_TIME_${phone}`);
  const currentTime = Math.floor(Date.now() / 1000);

  if (
    lastOTPRequestTime &&
    currentTime - lastOTPRequestTime < process.env.OTP_RESEND_WAIT_TIME
  ) {
    const timeLeft =
      process.env.OTP_RESEND_WAIT_TIME - (currentTime - lastOTPRequestTime);
    return res.status(429).json({
      success: "false",
      message: `Please wait ${timeLeft} seconds before requesting new OTP`,
    });
  }

  //Getting available SIM credentials -- if sim1 limit(100/day) is reached sim2 will be used
  const creds = await getAvailableSims();
  //Calling function to send OTP
  const response = await sendOTP(phone, otp, creds);

  if (response.status === 200 || response.status === 202) {
    //Storing OTP in redis for verification for 5 mins
    await redisClient.setEx(
      `OTP_${phone}`,
      process.env.OTP_VALID_TIME,
      String(otp)
    );
    // Store last request timestamp (valid for 120s)
    await redisClient.setEx(
      `OTP_REQUEST_TIME_${phone}`,
      process.env.OTP_RESEND_WAIT_TIME,
      String(currentTime)
    );
    // Increment SMS count in redis for current sim
    await redisClient.incr(creds.key);
    res
      .status(response.status)
      .json({
        success: "true",
        message: "We have sent a verification code to you via SMS",
      });

    //Logging to discord
    await sendMessageToDiscord(`OTP Sent to **${phone}** 🫰🏻`, 5814783);
  }
});

//@desc Verify OTP and send token to register or login
//@route POST /v1/accounts/verify/code
//@access public
const verifyOTP = asyncHandler(async (req, res) => {
  let { phone, otp } = req.body;
  if (!otp || !phone) {
    res.status(400);
    throw new Error("Phone number and OTP is required");
  }

  phone = String(phone);
  phone = phone.startsWith("+91") ? phone : `+91${phone}`;

  //Retrieve OTP stored in redis
  const storedOTP = await redisClient.get(`OTP_${phone}`);

  if (!storedOTP) {
    res.status(400);
    throw new Error("OTP is invalid or expired");
  }

  if (storedOTP !== String(otp)) {
    res.status(400);
    throw new Error("OTP does not match");
  }

  await redisClient.del(`OTP_${phone}`);
  await redisClient.del(`OTP_REQUEST_TIME_${phone}`);

  res.status(200).json({ success: true, message: "OTP verified successfully" });

  //Logging to discord
  await sendMessageToDiscord(
    `User **${phone}** verified successfully ✅🤞🏻`,
    5832630
  );
});

module.exports = { authUser, verifyOTP, otpLimiter, otpVerifyLimiter };
