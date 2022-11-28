const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  contraseña: {
    type: String,
    required: true,
  },
  profile_pic: {
    type: String,
  },
  about: {
    type: String,
    required: true,
  },
  contact: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model('user', dataSchema);
