const express = require("express");
const router = express.Router();

const newsController = require("../app/controllers/NewsController");

// Route is read from top to bottom
router.use("/:id", newsController.show);

router.use("/", newsController.index);

module.exports = router;
