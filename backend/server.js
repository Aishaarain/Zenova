const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:5173', 'http://localhost:5174'],
  credentials: true
}));
app.use(express.json());

// Email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Root route
app.get('/', (req, res) => {
  res.json({ 
    message: 'Zenova Backend API is running!',
    endpoints: {
      test: '/api/test',
      contact: '/api/contact (POST)',
    }
  });
});

// Test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend is working!' });
});

// Contact endpoint - Sends TWO emails
app.post('/api/contact', async (req, res) => {
  const { name, email, company, projectType, budget, message } = req.body;

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({ 
      success: false, 
      error: 'Name, email, and message are required' 
    });
  }

  try {
    // ============================================
    // EMAIL 1: To YOU (hello.zenova.co@gmail.com)
    // ============================================
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: 'hello.zenova.co@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #FACC15; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #555; }
            .value { color: #222; }
            .divider { border-top: 1px solid #eee; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2 style="margin: 0; color: #0a0a1a;">🔔 New Project Inquiry</h2>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">👤 Name:</div>
                <div class="value"><strong>${name}</strong></div>
              </div>
              <div class="field">
                <div class="label">📧 Email:</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              ${company ? `
                <div class="field">
                  <div class="label">🏢 Company:</div>
                  <div class="value">${company}</div>
                </div>
              ` : ''}
              <div class="field">
                <div class="label">📋 Project Type:</div>
                <div class="value">${projectType}</div>
              </div>
              ${budget ? `
                <div class="field">
                  <div class="label">💰 Budget Range:</div>
                  <div class="value">${budget}</div>
                </div>
              ` : ''}
              <div class="divider"></div>
              <div class="field">
                <div class="label">💬 Message:</div>
                <div class="value" style="background: #f0f0f0; padding: 15px; border-radius: 6px; margin-top: 5px;">
                  ${message}
                </div>
              </div>
              <div class="divider"></div>
              <p style="font-size: 12px; color: #888; text-align: center;">
                This inquiry came from the Zenova Lab website contact form.
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // ============================================
    // EMAIL 2: AUTO-REPLY TO THE USER
    // ============================================
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email, // Send to the person who filled the form
      subject: `Thank you for contacting Zenova Lab, ${name}!`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #FACC15; padding: 20px; border-radius: 8px 8px 0 0; text-align: center; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
            .highlight { color: #0a0a1a; font-weight: bold; }
            .footer { text-align: center; padding: 20px; font-size: 12px; color: #888; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0; color: #0a0a1a;">✨ Thank You!</h1>
            </div>
            <div class="content">
              <h2 style="color: #0a0a1a;">Hi ${name},</h2>
              
              <p>We have received your message and we're excited to learn more about your project.</p>
              
              <div style="background: #fff; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #FACC15;">
                <p style="margin: 0; font-size: 14px; color: #555;">
                  <strong>Your Message:</strong><br>
                  "${message}"
                </p>
              </div>
              
              <p><strong>What happens next?</strong></p>
              <ul style="color: #555;">
                <li>✅ We'll review your project details</li>
                <li>✅ Someone from our team will reach out within <strong>24 hours</strong></li>
                <li>✅ We'll discuss your requirements in more detail</li>
              </ul>
              
              <p style="margin-top: 20px;">
                In the meantime, feel free to connect with us on social media:
              </p>
              
              <div style="text-align: center; margin: 20px 0;">
                <a href="https://www.linkedin.com/in/zenovalab/" style="display: inline-block; margin: 0 8px; color: #0a66c2; text-decoration: none;">LinkedIn</a>
                <a href="https://www.instagram.com/zenovalab.it/" style="display: inline-block; margin: 0 8px; color: #E4405F; text-decoration: none;">Instagram</a>
                <a href="https://facebook.com/zenovalab" style="display: inline-block; margin: 0 8px; color: #1877F2; text-decoration: none;">Facebook</a>
              </div>
              
              <p style="color: #555;">
                If you have any urgent questions, feel free to reply to this email or contact us directly at 
                <a href="mailto:hello.zenova.co@gmail.com" style="color: #FACC15; text-decoration: none;">hello.zenova.co@gmail.com</a>
              </p>
            </div>
            <div class="footer">
              <p>© ${new Date().getFullYear()} Zenova Lab. All rights reserved.</p>
              <p style="margin-top: 5px; font-size: 11px;">
                This is an automated response. Please do not reply to this email directly.
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Send BOTH emails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions)
    ]);

    res.status(200).json({ 
      success: true, 
      message: 'Emails sent successfully! Both admin and user notified.' 
    });

  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to send emails. Please try again.' 
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});