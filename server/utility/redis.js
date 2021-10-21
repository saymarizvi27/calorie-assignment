let redis = require('async-redis');

let redisClient;

async function redisConnect() {
    try {
        redisClient = await redis.createClient
            (process.env.REDIS_PORT, process.env.REDIS_URL, { no_ready_check: true });
        await redisClient.auth(process.env.REDIS_PASSWORD);
    } catch (e) {
        throw new Error('Error connecting the database');
    }
}
async function checkUser(token) {
    try {
        const token1 =  await redisClient.get(token.toString());
        console.log(token1);
        return token1;
    } catch (e) {
        throw new Error('Error getting the user from redis ');
    }
}
async function saveUser(id, token) {
    try {
        await redisClient.set(token , id);
        await redisClient.expire(token , 3600);

    } catch (e) {
        console.log(e);
    }
}

module.exports = {
    redisConnect,
    saveUser,
    checkUser
}