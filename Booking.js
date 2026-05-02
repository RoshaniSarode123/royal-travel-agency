const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  package: {
    type: mongoose.Schema.ObjectId,
    ref: 'Package',
    required: true
  },
  travelers: {
    type: Number,
    required: [true, 'Please specify the number of travelers'],
    min: 1
  },
  date: {
    type: Date,
    required: [true, 'Please specify the travel date']
  },
  totalPrice: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled'],
    default: 'pending'
  },
  specialRequests: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Booking', bookingSchema);
