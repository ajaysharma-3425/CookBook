const express = require("express");
const router = express.Router();
const { sendContactEmail } = require("../controllers/contactController");

// POST request /api/contact par aayegi
router.post("/", sendContactEmail);

module.exports = router;