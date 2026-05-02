const Destination = require('../models/Destination');

// @desc    Get all destinations
// @route   GET /api/destinations
// @access  Public
const getDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find({});
    res.json({ success: true, data: destinations });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Create a destination
// @route   POST /api/destinations
// @access  Private/Admin
const createDestination = async (req, res) => {
  try {
    const destination = await Destination.create(req.body);
    res.status(201).json({ success: true, data: destination });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { getDestinations, createDestination };
