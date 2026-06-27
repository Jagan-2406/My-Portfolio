import React, { useState } from 'react';
import { sendContactMessage } from '../services/api';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setErrorMessage('All fields are required.');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      await sendContactMessage(formData);
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
    }
  };

  const contactDetails = [
    {
      label: 'Email',
      value: 'vasujagan382@gmail.com',
      href: 'mailto:vasujagan382@gmail.com',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      )
    },
    {
      label: 'Phone',
      value: '+91 9345591948',
      href: 'tel:+919345591948',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      )
    },
    {
      label: 'WhatsApp',
      value: '+91 9345591948',
      href: 'https://wa.me/919345591948',
      icon: (
        <img src="https://cdn.simpleicons.org/whatsapp/25D366" alt="WhatsApp" width="20" height="20" style={{ display: 'block' }} />
      )
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/jagan2406',
      href: 'https://linkedin.com/in/jagan2406',
      icon: (
        <img src="https://cdn.simpleicons.org/linkedin/0A66C2" alt="LinkedIn" width="20" height="20" style={{ display: 'block' }} />
      )
    },
    {
      label: 'GitHub',
      value: 'github.com/Jagan-2406',
      href: 'https://github.com/Jagan-2406',
      icon: (
        <img src="https://cdn.simpleicons.org/github/0F172A" alt="GitHub" width="20" height="20" style={{ display: 'block' }} />
      )
    }
  ];

  return (
    <section id="contact" className="section" style={{ background: 'linear-gradient(135deg, #EFF6FF 0%, #F5F3FF 100%)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="section-eyebrow">Get In Touch</span>
          <h2 className="section-heading">Let's Connect</h2>
          <p className="section-desc">Have an internship opportunity, a project proposal, or just want to say hi?</p>
        </div>

        {/* Contact Grid */}
        <div className="contact-grid">
          {/* Left Column: Info Cards */}
          <div className="contact-info">
            {contactDetails.map((detail, index) => (
              <a
                key={index}
                href={detail.href}
                target={detail.href.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="contact-info-card glass reveal"
                data-delay={`${index * 0.08}s`}
              >
                <div className="contact-icon-wrapper">
                  {detail.icon}
                </div>
                <div className="contact-detail-info">
                  <span className="contact-label">{detail.label}</span>
                  <span className="contact-value">{detail.value}</span>
                </div>
              </a>
            ))}
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-wrapper glass reveal" data-delay="0.2s">
            {status === 'success' ? (
              <div className="form-success-wrapper">
                <div className="success-checkmark">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-h3" style={{ color: 'var(--color-text)', marginBottom: 'var(--space-xs)' }}>Message Sent!</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '15px' }}>
                  Thank you for reaching out. Jagan will reply to your email soon.
                </p>
                <button
                  className="btn-outline"
                  style={{ marginTop: 'var(--space-md)', padding: '8px 24px' }}
                  onClick={() => setStatus('idle')}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Subject of your message"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                    placeholder="Write your message here..."
                    required
                  />
                </div>

                {status === 'error' && (
                  <div style={{ color: 'var(--color-error)', fontSize: '14px', fontWeight: 500 }}>
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  className="contact-submit btn-send"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? (
                    <>
                      Sending Message...
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ animation: 'spin 1.5s linear infinite' }}>
                        <line x1="12" y1="2" x2="12" y2="6"></line>
                        <line x1="12" y1="18" x2="12" y2="22"></line>
                        <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
                        <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
                        <line x1="2" y1="12" x2="6" y2="12"></line>
                        <line x1="18" y1="12" x2="22" y2="12"></line>
                        <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
                        <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
                      </svg>
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}} />
    </section>
  );
}
