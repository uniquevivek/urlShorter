const Url = require("../models/Url");
const generateCode = require("../utils/generateCode");

// 🔹 Create Short URL
exports.shortenUrl = async (req, res) => {
  try {
    const { originalUrl } = req.body;

    // check if already exists
    let existing = await Url.findOne({ originalUrl });
    if (existing) {
      return res.json({
        shortUrl: `${process.env.BASE_URL}/${existing.shortCode}`,
      });
    }

    const shortCode = generateCode();

    const newUrl = new Url({
      originalUrl,
      shortCode,
    });

    await newUrl.save();

    res.json({
      shortUrl: `${process.env.BASE_URL}/${shortCode}`,
    });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// 🔹 Redirect URL
exports.redirectUrl = async (req, res) => {
  try {
    const url = await Url.findOne({ shortCode: req.params.code });

    if (url) {
      url.clicks++;
      await url.save();

      return res.redirect(url.originalUrl);
    }

    res.status(404).send("URL not found");
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};