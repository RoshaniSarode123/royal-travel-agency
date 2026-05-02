const Package = require('../models/Package');

// @desc    Get all packages
// @route   GET /api/packages
// @access  Public
const getPackages = async (req, res) => {
  try {
    const packages = await Package.find({}).populate('destination', 'name country');
    res.json({ success: true, data: packages });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Create a package
// @route   POST /api/packages
// @access  Private/Admin
const createPackage = async (req, res) => {
  try {
    const pkg = await Package.create(req.body);
    res.status(201).json({ success: true, data: pkg });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { getPackages, createPackage };
