const redisClient = require('../../config/redisClient');

//Function to select available creds/sims
const getAvailableSims = async () => {
    let sim1Count = parseInt(await redisClient.get(process.env.REDIS_COUNT_SMS_SEND_SIM1)) || 0;
    let sim2Count = parseInt(await redisClient.get(process.env.REDIS_COUNT_SMS_SEND_SIM2)) || 0;

    if (sim1Count < process.env.SMS_LIMIT_PER_SIM) {
        return {
            username: process.env.SIM1_CRED_USERNAME,
            password: process.env.SIM1_CRED_PASSWORD,
            key: process.env.REDIS_COUNT_SMS_SEND_SIM1
        };
    } else if (sim2Count < process.env.SMS_LIMIT_PER_SIM) {
        return {
            username: process.env.SIM2_CRED_USERNAME,
            password: process.env.SIM2_CRED_PASSWORD,
            key: process.env.REDIS_COUNT_SMS_SEND_SIM2
        };
    } else {
        res.status(400);
        throw new Error('Cannot send SMS right now! Please try again later');
    };
};

module.exports = { getAvailableSims };