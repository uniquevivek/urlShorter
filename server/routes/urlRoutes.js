const express = require("express");
const {
  shortenUrl,
  redirectUrl,
} = require("../controllers/urlController");

const router = express.Router();

// API route
router.post("/shorten", shortenUrl);

// Redirect route
router.get("/:code", redirectUrl);

module.exports = router;