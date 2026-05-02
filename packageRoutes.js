const express = require('express');
const router = express.Router();
const { getPackages, createPackage } = require('../controllers/packageController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/')
  .get(getPackages)
  .post(protect, admin, createPackage);

module.exports = router;
