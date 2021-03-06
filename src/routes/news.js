const express = require("express");
const router = express.Router();

const newsController = require("../app/controllers/NewsController");

// Route is read from top to bottom
router.get("/:id", newsController.show);

router.get("/", newsController.index);

module.exports = router;
