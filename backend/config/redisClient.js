const { createClient } = require('redis');
require('dotenv').config();


const redisClient = createClient({
    url: `redis://default:${process.env.REDIS_PASSWORD}@redis-12047.c212.ap-south-1-1.ec2.redns.redis-cloud.com:12047`
});

redisClient.on('error', (err) => console.log('Redis Error:', err));

async function connectRedis() {
    try {
        await redisClient.connect();
        console.log('Connected to Redis ✅');
    } catch (error) {
        console.error('Redis Connection Error ❌:', error);
    }
}

// Connect to Redis
connectRedis();

module.exports = redisClient;
