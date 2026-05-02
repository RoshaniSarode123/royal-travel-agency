const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
    trim: true,
    maxlength: [100, 'Title cannot be more than 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
    maxlength: [1000, 'Description cannot be more than 1000 characters']
  },
  destination: {
    type: mongoose.Schema.ObjectId,
    ref: 'Destination',
    required: true
  },
  price: {
    type: Number,
    required: [true, 'Please add a price']
  },
  duration: {
    type: String, // e.g., '5 Days / 4 Nights'
    required: true
  },
  groupSize: {
    type: Number,
    default: 10
  },
  image: {
    type: String,
    default: 'no-photo.jpg'
  },
  rating: {
    type: Number,
    min: [1, 'Rating must be at least 1'],
    max: [5, 'Rating cannot be more than 5'],
    default: 4.5
  },
  numReviews: {
    type: Number,
    default: 0
  },
  isFeatured: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Package', packageSchema);
