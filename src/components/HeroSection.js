// src/components/HeroSection.js
import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Solusi IoT untuk Pertanian Modern</h1>
        <p>Optimalkan hasil panen Anda dengan teknologi terkini dari MKF-203.</p>
        <a href="#features" className="cta-btn">Pelajari Lebih Lanjut</a>
      </div>
    </section>
  );
};

export default HeroSection;
