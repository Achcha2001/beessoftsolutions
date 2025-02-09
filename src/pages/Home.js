import React from "react";
import { Link } from "react-router-dom";
import logo from "../components/images/beessoftnew.webp";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <header className="hero-section1">
        <div className="hero-overlay1">
          <h1 className="hero-title">Welcome to Bees Soft Solutions</h1>
          <p className="hero-subtitle">Transforming Ideas Into Reality</p>
          <img src={logo} alt="Bees Soft Solutions Logo" className="navbar-logo1" />
        </div>
      </header>

      <section className="why-choose-us-section">
        <h2 className="section-title">Why Choose Us?</h2>
        <p className="why-text">
          At Bees Soft Solutions, we don't just build software; we create digital experiences that drive success. 
          Our cutting-edge technology, innovative design approach, and customer-focused mindset set us apart.
        </p>
        <div className="why-list">
          <div className="why-item">
            <h3>Innovative Solutions</h3>
            <p>We leverage the latest technologies to build scalable and future-ready digital solutions.</p>
          </div>
          <div className="why-item">
            <h3>Customer-Centric Approach</h3>
            <p>Your success is our priority. We tailor solutions to meet your unique business needs.</p>
          </div>
          <div className="why-item">
            <h3>Expert Team</h3>
            <p>Our team of skilled professionals brings years of industry expertise to every project.</p>
          </div>
        </div>
      </section>

      <section className="services-section">
        <h2 className="section-title">What We Offer</h2>
        <div className="services-list">
          <div className="service-item">
            <h3>UI/UX Design</h3>
            <p>Crafting intuitive and engaging designs tailored to your audience.</p>
          </div>
          <div className="service-item">
            <h3>Website Development</h3>
            <p>Building responsive and high-performing websites to boost your online presence.</p>
          </div>
          <div className="service-item">
            <h3>E-commerce Solutions</h3>
            <p>Enabling seamless online shopping experiences to grow your business.</p>
          </div>
          <div className="service-item">
            <h3>Mobile App Development</h3>
            <p>Delivering cutting-edge mobile apps that captivate users.</p>
          </div>
        </div>
        <Link to="/services" className="see-more-button">See More</Link>
      </section>

      <section className="partners-section">
        <h2 className="section-title">Our Partners</h2>
        <div className="partners-list">
          <div className="partner-item">
            <h3>Alpha Capitals</h3>
            <a href="https://alphacapitals.lk" target="_blank" rel="noopener noreferrer">
              <iframe src="https://alphacapitals.lk" title="Alpha Capitals" className="partner-frame" onClick={() => window.open('https://alphacapitals.lk', '_blank')}></iframe>
            </a>
          </div>
          <div className="partner-item">
            <h3>Mercantile Volleyball Association of Sri Lanka</h3>
            <a href="https://mva.lk" target="_blank" rel="noopener noreferrer">
              <iframe src="https://mva.lk" title="MVA Sri Lanka" className="partner-frame" onClick={() => window.open('https://mva.lk', '_blank')}></iframe>
            </a>
          </div>
          <div className="partner-item">
            <h3>Minuwangoda Toastmasters Club</h3>
            <a href="https://minuwangodatoastmasters.org/" target="_blank" rel="noopener noreferrer">
              <iframe src="https://minuwangodatoastmasters.org/" title="Minuwangoda Toastmasters" className="partner-frame" onClick={() => window.open('https://minuwangodatoastmasters.org/', '_blank')}></iframe>
            </a>
          </div>
        </div>
      </section>

      

<section className="cta-section">
  <div className="cta-overlay">
    <h2 className="cta-title">Let's Build the Future Together</h2>
    <p className="cta-text">
      Partner with us to bring innovation, AI-driven solutions, and next-gen technology to life. 
      Let's craft the digital world of tomorrow, today.
    </p>
    <Link to="/contact" className="cta-button">Contact Us</Link>
  </div>
</section>

    </div>
  );
}

export default Home;
