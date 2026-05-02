const ContactMessage = require('../models/ContactMessage');

// @desc    Submit a contact message
// @route   POST /api/contact
// @access  Public
const submitMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const contactMessage = await ContactMessage.create({ name, email, subject, message });
    res.status(201).json({ success: true, data: contactMessage });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get all messages
// @route   GET /api/contact
// @access  Private/Admin
const getMessages = async (req, res) => {
  try {
    const messages = await ContactMessage.find({});
    res.json({ success: true, data: messages });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { submitMessage, getMessages };
