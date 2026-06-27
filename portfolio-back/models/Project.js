const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  tech: {
    type: [String],
    required: true
  },
  github: {
    type: String,
    required: true
  },
  live: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
  },
  featured: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

module.exports = mongoose.model('Project', ProjectSchema);
