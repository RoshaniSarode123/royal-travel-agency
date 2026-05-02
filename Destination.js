const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a destination name'],
    unique: true,
    trim: true
  },
  country: {
    type: String,
    required: [true, 'Please add a country']
  },
  description: {
    type: String,
    required: [true, 'Please add a description']
  },
  image: {
    type: String,
    default: 'no-photo.jpg'
  },
  popular: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Destination', destinationSchema);
