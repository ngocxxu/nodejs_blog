const express = require("express");
const router = express.Router();

const siteController = require("../app/controllers/SiteController");

// Route is read from top to bottom
router.use("/search", siteController.search);

router.use("/", siteController.index);

module.exports = router;
