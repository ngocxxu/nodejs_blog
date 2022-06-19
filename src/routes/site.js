const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

// Route is read from top to bottom
router.get('/search', siteController.search);

router.get('/', siteController.index);

module.exports = router;
