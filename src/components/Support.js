// src/components/Support.js
import React, { useState } from 'react';
import './Support.css';

const Support = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can implement the logic to send this data to your personal email here
    const supportMessage = {
      email,
      name,
      message
    };

    console.log('Support Message:', supportMessage);

    // Clear form fields after submission
    setEmail('');
    setName('');
    setMessage('');
  };

  return (
    <section id="support" className="support">
      <div className="container">
        <h2>Hubungi Kami</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Nama:</label>
            <input
              type="text"
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Pesan:</label>
            <textarea
              id="message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button type="submit">Kirim Pesan</button>
        </form>
      </div>
    </section>
  );
};

export default Support;