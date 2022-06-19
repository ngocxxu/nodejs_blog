const express = require("express");
const router = express.Router();

const libraryController = require("../app/controllers/LibraryController");

router.use("/", libraryController.renderLib);

module.exports = router;
