const nodemailer = require('nodemailer');
const Message = require('../models/Message');

exports.submitContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    // Server-side validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Invalid email address format.' });
    }

    // Save message document in MongoDB
    const newMessage = new Message({ name, email, subject, message });
    await newMessage.save();

    // Nodemailer email sending setup
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;

    if (emailUser && emailPass) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: emailUser,
          pass: emailPass
        }
      });

      const mailOptions = {
        from: `"${name}" <${email}>`,
        to: emailUser, // Deliver to portfolio owner
        replyTo: email,
        subject: `JV Portfolio Contact: ${subject}`,
        text: `You received a message from ${name} (${email}):\n\nSubject: ${subject}\n\nMessage:\n${message}`
      };

      await transporter.sendMail(mailOptions);
      console.log(`Notification email sent to ${emailUser}`);
    } else {
      console.warn('Warning: EMAIL_USER or EMAIL_PASS environment variables are not set. Saved message to DB, but did not send email.');
    }

    res.status(201).json({ success: true, message: 'Message submitted successfully!' });
  } catch (error) {
    console.error('Error in submitContact controller:', error);
    res.status(500).json({ message: 'Internal server error. Please try again later.' });
  }
};
