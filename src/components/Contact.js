import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiry: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:Beessoftsolutions@outlook.com?subject=Inquiry from ${formData.name}&body=From: ${formData.email}%0D%0A%0D%0AName: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AInquiry: ${formData.inquiry}`;

    window.location.href = mailtoLink;

    setStatus("Redirecting to your email client...");
    setTimeout(() => {
      setStatus("");
    }, 5000);
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-description">
        Have a question? Need help? Fill out the form below, and we’ll get back
        to you!
      </p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="inquiry">Inquiry</label>
          <textarea
            id="inquiry"
            name="inquiry"
            rows="4"
            value={formData.inquiry}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
      {status && <p className="status-message">{status}</p>}

      {/* Contact Details Section */}
      <section className="contact-details">
        <h2>Get in Touch</h2>
        <p><strong>Email:</strong> <a href="mailto:Beessoftsolutions@outlook.com">Beessoftsolutions@outlook.com</a></p>
        <p><strong>Phone:</strong> <a href="tel:+94771683727">077 168 3727</a></p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/company/105561719/admin/dashboard/" target="_blank" rel="noopener noreferrer">Bees Soft Solutions</a></p>
      </section>
    </div>
  );
}

export default Contact;
