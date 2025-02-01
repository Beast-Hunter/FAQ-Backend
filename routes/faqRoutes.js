const express = require("express");
const { getFAQs, addFAQ } = require("../controllers/faqController");
const cacheMiddleware = require("../middlewares/cacheMiddleware");

const router = express.Router();

router.get("/", cacheMiddleware, getFAQs);
router.post("/", addFAQ);

module.exports = router;
