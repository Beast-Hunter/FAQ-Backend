const FAQ = require("../models/faq.model");
const translateText = require("../utils/translate");
const redisClient = require("../config/redis");

const getFAQs = async (req, res) => {
  const lang = req.query.lang || "en";
  const cacheKey = `faqs:${lang}`;

  try {
    let faqs = await FAQ.find();

    if (lang !== "en") {
      faqs = await Promise.all(
        faqs.map(async (faq) => {
          const translatedQuestion = await translateText(faq.question, lang);
          faq.translations.set(lang, translatedQuestion);
          return faq;
        })
      );
    }

    await redisClient.setEx(cacheKey, 3600, JSON.stringify(faqs));
    res.json(faqs);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const addFAQ = async (req, res) => {
  const { question, answer } = req.body;

  try {
    const newFAQ = new FAQ({ question, answer });
    await newFAQ.save();
    res.status(201).json(newFAQ);
  } catch (err) {
    res.status(500).json({ error: "Failed to save FAQ" });
  }
};

module.exports = { getFAQs, addFAQ };
