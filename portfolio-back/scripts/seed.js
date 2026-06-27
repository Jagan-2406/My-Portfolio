require('dotenv').config();
const mongoose = require('mongoose');
const Project = require('../models/Project');

const projectsToSeed = [
  {
    name: "Earthquake Awareness Using Augmented Reality",
    description: "AR-based earthquake awareness app that simulates disaster scenarios to educate users on emergency preparedness through interactive experiences.",
    tech: ["Unity", "ARCore", "C#", "Android Studio"],
    github: "https://github.com/Jagan-2406/My-AR",
    live: "https://drive.google.com/file/d/1OScVx_dDAmWF2_4MeiFvqeGrTxJBppdR/view?usp=sharing",
    category: "AR",
    featured: false,
    outcome: "Deployed interactive AR app on Android — practical disaster awareness and emergency preparedness tool."
  },
  {
    name: "Smart Appointment Scheduling System",
    description: "Centralized multi-service appointment scheduling platform with secure role-based authentication for healthcare, business, and tech services.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/Jagan-2406/Appointment_Scheduling",
    live: "https://appointment-scheduling-zeta.vercel.app",
    category: "Full Stack",
    featured: true,
    outcome: "🏆 1st Prize — IBM Naan Mudhalvan Hackathon 2026 · ₹25,000 cash award"
  },
  {
    name: "Solla Marandha Kadhai — AI Tamil Language Learning Platform",
    description: "AI-powered Tamil language learning platform that generates grammatically correct Tamil sentences and real-life dialogues using NLP.",
    tech: ["Python", "Flask", "Open-Tamil", "Supabase", "gTTS", "Web Speech API", "HTML5", "CSS3", "JS", "Vercel"],
    github: "https://github.com/Jagan-2406/Solla_marandha_kadhai",
    live: "https://solla-marandha-kadhai.vercel.app",
    category: "AI/ML",
    featured: false,
    outcome: "AI-powered educational platform for interactive Tamil language learning using NLP — built for a hackathon."
  }
];

const seedDB = async () => {
  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      console.error('Error: MONGODB_URI is not set in env variables. Seed aborted.');
      process.exit(1);
    }

    console.log('Connecting to database for seeding...');
    await mongoose.connect(uri);

    // Clear projects collection
    console.log('Clearing existing projects...');
    await Project.deleteMany({});

    // Seed projects
    console.log('Inserting seed projects...');
    await Project.insertMany(projectsToSeed);

    console.log('Database seeded successfully!');
    mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDB();
