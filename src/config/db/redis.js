const Redis = require('ioredis');
const redisServer = process.env.REDIS_SERVER;
const redis = new Redis({
    host: redisServer,
    port: 6379,
});

redis.on('connect', () => {
    console.log('Connected to Redis');
});

redis.on('ready', () => {
    console.log('Redis connection is ready');
});

redis.on('error', (error) => {
    console.error('Redis error:', error);
});

module.exports = redis;
  
