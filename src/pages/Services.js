import React, { useState } from "react";
import "./Services.css";

const services = [
  { title: "UI/UX Design", description: "Crafting intuitive and engaging designs tailored to your audience." },
  { title: "Website Development", description: "Building responsive and high-performing websites to boost your online presence." },
  { title: "E-commerce Solutions", description: "Enabling seamless online shopping experiences to grow your business." },
  { title: "Mobile App Development", description: "Delivering cutting-edge mobile apps that captivate users." },
  { title: "Quality Assurance", description: "Ensuring your software is reliable, efficient, and bug-free." },
  { title: "Maintenance & Support", description: "Providing continuous updates and troubleshooting to keep your systems running smoothly." },
  { title: "Online Bookkeeping", description: "Simplifying financial management for your business." },
];

function Services() {
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setHoverPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="services-container" onMouseMove={handleMouseMove}>
      <header className="services-hero" style={{ "--x": `${hoverPosition.x}px`, "--y": `${hoverPosition.y}px` }}>
        <h1 className="services-title">Our Services</h1>
        <p className="services-subtitle">We bring your ideas to reality with excellence.</p>
      </header>

      <section className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Services;
