const express = require('express');
const router = express.Router();
const { getDestinations, createDestination } = require('../controllers/destinationController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/')
  .get(getDestinations)
  .post(protect, admin, createDestination);

module.exports = router;
