const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
  },
  code: {
    type: String,
    required: true,
  },
  images: {
    type: Array,
  },
  description: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['Full-Stack', 'Back-End', 'Front-End'],
    required: true,
  },
  colaboration: {
    type: Boolean,
    required: true,
  },
  techs: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model('project', dataSchema);
