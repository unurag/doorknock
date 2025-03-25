const express = require("express");
const router = express.Router();

//controllers
const { authUser, verifyOTP, otpLimiter, otpVerifyLimiter } = require('../controllers/accountController');

router.route("/").post(otpLimiter, authUser); 
router.route("/verify/code").post(otpVerifyLimiter, verifyOTP);

module.exports = router;