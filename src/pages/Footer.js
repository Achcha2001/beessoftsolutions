import React from "react";
import "./Footer.css";
import logo from "../components/images/beessoftnew.webp"; // Ensure the correct path to your logo

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-logo">
          <img src={logo} alt="Bees Soft Solutions Logo" className="footer-logo-img" />
          <h2>Bees Soft Solutions</h2>
          <p>Transforming Ideas Into Reality</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>
            Email:{" "}
            <a href="mailto:Beessoftsolutions@outlook.com">
              Beessoftsolutions@outlook.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:+94771683727">077 168 3727</a>
          </p>

          {/* Social Icons */}
          <div className="social-icons">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com/company/beessoftsolutions" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Bees Soft Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
