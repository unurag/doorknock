const axios = require('axios');

//Function to send OTP 
const sendOTP = async (phone, otp, creds) => {
    const msg = `Your OTP for DoorKnock is ${otp}`;
    try{
        const response = await axios.post(
            process.env.OTP_SERVER_URL,
            {
                message: msg, 
                phoneNumbers: [phone]
            },
            {
                auth: {
                    username: creds.username,
                    password: creds.password
                },
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
        return response;
    } catch (error) {
        if (error){
            throw new Error('Failed to send OTP.')
        };
    };
};

module.exports = { sendOTP };