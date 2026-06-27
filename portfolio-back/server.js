require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const projectsRoute = require('./routes/projects');
const contactRoute = require('./routes/contact');
const chatRoute = require('./routes/chat');

const app = express();

// Connect to Database
connectDB();

// Setup CORS
const allowedOrigin = process.env.CORS_ORIGIN || '*';
app.use(cors({
  origin: allowedOrigin === '*' ? '*' : allowedOrigin.split(','),
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/projects', projectsRoute);
app.use('/api/contact', contactRoute);
app.use('/api/chat', chatRoute);

// Health Check Route
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date() });
});

// 404 Route handler
app.use((req, res) => {
  res.status(404).json({ message: 'Resource not found.' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
