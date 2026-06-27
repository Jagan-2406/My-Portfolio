const express = require('express');
const router = express.Router();
const { chatRateLimiter } = require('../middleware/rateLimit');

const SYSTEM_PROMPT = `You are Jade, the AI assistant on Jagan V N's portfolio website.
Answer questions about Jagan in a friendly, professional tone.
Jagan is an AI & Data Science student at CCET (2023-2027), CGPA 8.2.
Skills: Python, Java, JavaScript, React, Node.js, Flask, MongoDB, Unity, ARCore, ML, NLP.
Projects: AR Earthquake Awareness App, Smart Appointment System (IBM Hackathon Winner 2026), Solla Marandha Kadhai (Tamil AI Platform).
Experience: IBM Full Stack Intern (Nov-Dec 2025), IBM Business Analytics Intern (Apr-May 2026).
Achievements: IBM Naan Mudhalvan Hackathon 1st Prize (Rs25,000), Data Dive Contest Winner.
Contact: vasujagan382@gmail.com | +91 9345591948.
GitHub: github.com/Jagan-2406 | LinkedIn: linkedin.com/in/jagan2406.
Keep answers short (2-4 sentences). If unsure, say 'I'll let Jagan know you asked!'`;

router.post('/', chatRateLimiter, async (req, res) => {
  try {
    const { messages } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ message: 'Messages array is required.' });
    }

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      console.warn('Warning: ANTHROPIC_API_KEY is not configured. Running in fallback sandbox mode.');
      // Fail-safe mock answers for local test/sandbox without key
      return res.json({
        response: "Hi there! I am currently running in offline sandbox mode because my API key is not configured. Jagan is a B.Tech student in AI & DS at CCET with experience in React, Python, and Unity. You can email him at vasujagan382@gmail.com!"
      });
    }

    // Call Anthropic Messages API using standard built-in fetch
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 300,
        system: SYSTEM_PROMPT,
        messages: messages
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.warn('Anthropic API request failed, using sandbox fallback. Error:', errorText);
      return res.json({
        response: "Hi! Jagan is a B.Tech AI & Data Science student at CCET (2023-2027) with a CGPA of 8.2. He has interned at IBM twice, won 1st prize at the IBM Naan Mudhalvan Hackathon, and built projects like the AR Earthquake app and Solla Marandha Kadhai Tamil platform. Let me know if you would like his contact details!"
      });
    }

    const data = await response.json();
    const botReply = data.content && data.content[0] ? data.content[0].text : "I couldn't generate a response. Please try again.";

    res.json({ response: botReply });
  } catch (error) {
    console.error('Chat routing error, using fallback:', error);
    res.json({
      response: "Hi! I'm running in sandbox mode right now. Jagan is an AI & Data Science student at CCET (CGPA 8.2). He built the AR Earthquake Awareness App, the IBM Hackathon-winning Smart Appointment Scheduling System, and Solla Marandha Kadhai. Feel free to contact him at vasujagan382@gmail.com!"
    });
  }
});

module.exports = router;
