import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'; // Import custom CSS for styling

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_18s8089', // Replace with your EmailJS service ID
      'template_jmga7en', // Replace with your EmailJS template ID
      {
        name: formData.name,
        email: formData.email,
        message: formData.message
      },
      'gIAul22Kzw22LvWzi' // Replace with your EmailJS user ID
    ).then((response) => {
      alert('Message sent successfully!');
    }).catch((err) => {
      console.log('FAILED...', err);
      alert('Failed to send message, try again later.');
    });

    // Clear form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
        />

        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
