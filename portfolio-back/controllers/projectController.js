const Project = require('../models/Project');

// Get all projects
exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find({});
    res.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ message: 'Server error retrieving projects.' });
  }
};

// Get a single project by ID
exports.getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found.' });
    }
    res.json(project);
  } catch (error) {
    console.error(`Error fetching project with ID ${req.params.id}:`, error);
    res.status(500).json({ message: 'Server error retrieving project details.' });
  }
};
