const cron = require('node-cron');
const redisClient = require('../../config/redisClient');

// Function to reset SIM limit (100) at 12 noon every day
const resetSimLimit = async () => {
    try {
        await redisClient.set(process.env.REDIS_COUNT_SMS_SEND_SIM1, 0);
        await redisClient.set(process.env.REDIS_COUNT_SMS_SEND_SIM2, 0);
        console.log("✅ SIM limit has been reset successfully.");
    } catch (error) {
        console.error("❌ Failed to reset SIM limit:", error);
    }
};

// Schedule the cron job to run every day at 12 noon IST
cron.schedule(
    '0 12 * * *', 
    async () => {
        console.log("🔄 Running SIM limit reset job...");
        await resetSimLimit();
    }, 
    { timezone: 'Asia/Kolkata' }
);

module.exports = { resetSimLimit };
