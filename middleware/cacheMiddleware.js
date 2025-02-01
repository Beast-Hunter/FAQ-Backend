const redisClient = require("../config/redis");

const cacheMiddleware = async (req, res, next) => {
  const lang = req.query.lang || "en";
  const cacheKey = `faqs:${lang}`;

  const cachedData = await redisClient.get(cacheKey);
  if (cachedData) {
    return res.json(JSON.parse(cachedData));
  }

  next();
};

module.exports = cacheMiddleware;
