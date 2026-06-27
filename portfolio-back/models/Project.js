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
    enum: ['Full Stack', 'AI/ML', 'AR']
  },
  featured: {
    type: Boolean,
    default: false
  },
  outcome: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Project', ProjectSchema);
