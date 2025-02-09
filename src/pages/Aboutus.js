import React from 'react';
import './Aboutus.css';

function AboutUs() {
  return (
    <div className="aboutus-container1">
      {/* Techy Header Section */}
      <header className="aboutus-header">
        <h1 className="aboutus-title">About Bees Soft Solutions</h1>
      </header>

      <p className="aboutus-description">
        At Bees Soft Solutions, we are dedicated to transforming innovative ideas into cutting-edge software solutions. Our mission is to empower businesses by providing tailored technology services that drive success and foster growth.
      </p>

      <h2 className="aboutus-section-title">Our Vision</h2>
      <p className="aboutus-section-description">
        To be a leader in delivering innovative and efficient software solutions that meet the evolving needs of businesses worldwide.
      </p>

      <h2 className="aboutus-section-title">Our Mission</h2>
      <p className="aboutus-section-description">
        To provide high-quality, customized software services that enhance business operations, improve efficiency, and drive growth for our clients.
      </p>

      <h2 className="aboutus-section-title">Meet Our Founder</h2>
      <div className="aboutus-founder">
  <div className="aboutus-founder-image"></div>
  <div className="aboutus-founder-details">
    <h3>Saman Weerasuriya</h3> <p>Saman Weerasuriya is a seasoned leader in technology and sports management. As Senior Manager of Network & Infrastructure at Crystal Martin Ceylon (Pvt) Ltd., he drives technological advancements. He also serves as **Senior Vice President of the Mercantile Volleyball Association (MVA) of Sri Lanka, promoting the sport and organizing major tournaments. His leadership in both fields has significantly impacted corporate innovation and athletic development, fostering growth and opportunities within Sri Lanka’s business and sports sectors.</p>
  </div>
</div>


      <div className="aboutus-section-title1">Our Values</div>
      <ul className="aboutus-values-list">
        <li>Innovation: Continuously embracing new ideas to deliver cutting-edge solutions.</li>
        <li>Integrity: Upholding honesty and transparency in all our dealings.</li>
        <li>Customer-Centricity: Prioritizing the needs and success of our clients.</li>
        <li>Excellence: Striving for the highest standards in quality and performance.</li>
      </ul>

      <h2 className="aboutus-section-title">Why Choose Us?</h2>
      <p className="aboutus-section-description">
        At Bees Soft Solutions, we combine technical expertise with a deep understanding of our clients' needs. Our team is committed to delivering solutions that are not only effective but also aligned with your business objectives. Partner with us to experience a seamless blend of innovation, quality, and dedication.
      </p>
    </div>
  );
}

export default AboutUs;
