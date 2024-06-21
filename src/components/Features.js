// src/components/Features.js
import React from 'react';
import './Features.css';

// Import images from assets folder
import monitoringImage from '../assets/sensor.jpg';
import waterManagementImage from '../assets/irigasi.jpg';
import dataAnalysisImage from '../assets/analisis.jpg';

const Feature = ({ title, description, image, onSelectService }) => {
  const [showModal, setShowModal] = React.useState(false);

  const handleServiceSelect = (service) => {
    setShowModal(false);
    onSelectService(service);
  };

  return (
    <div className="feature-item">
      <img src={image} alt={title} className="feature-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="select-service-btn" onClick={() => setShowModal(true)}>
        Pilih Layanan
      </button>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>&times;</span>
            <h4>Pilih Layanan untuk {title}</h4>
            <ul>
              <li><button onClick={() => handleServiceSelect('Service A')}>Service A</button></li>
              <li><button onClick={() => handleServiceSelect('Service B')}>Service B</button></li>
              <li><button onClick={() => handleServiceSelect('Service C')}>Service C</button></li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

const Features = () => {
  const features = [
    { title: "Monitoring Tanaman", description: "Memantau kondisi tanaman secara real-time melalui sensor IoT.", image: monitoringImage },
    { title: "Pengelolaan Air", description: "Mengoptimalkan penggunaan air untuk irigasi dengan teknologi pintar.", image: waterManagementImage },
    { title: "Analisis Data", description: "Menganalisis data pertanian untuk pengambilan keputusan yang lebih baik.", image: dataAnalysisImage }
  ];

  const handleSelectService = (service) => {
    console.log(`Selected service: ${service}`);
    // Implement further actions based on selected service
  };

  return (
    <section id="features" className="features">
      <div className="container">
        <h2>Fitur Unggulan</h2>
        <div className="feature-list">
          {features.map((feature, index) => (
            <Feature
              key={index}
              title={feature.title}
              description={feature.description}
              image={feature.image}
              onSelectService={handleSelectService}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
