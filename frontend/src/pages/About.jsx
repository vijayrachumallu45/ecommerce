import React from 'react';
import { ShoppingBag, ShieldCheck, Truck, RefreshCw, Award, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="about-page page-container">
      <div className="about-hero">
        <ShoppingBag size={56} className="about-logo-icon" />
        <h1>About ShopEase</h1>
        <p className="about-lead">
          Making online shopping simple, reliable, and accessible for everyone.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-card">
          <Award className="about-icon text-primary" size={32} />
          <h3>Our Mission</h3>
          <p>
            At ShopEase, our mission is to provide high-quality products ranging from cutting-edge electronics to modern fashion and home decor, all backed by seamless customer support.
          </p>
        </div>

        <div className="about-card">
          <ShieldCheck className="about-icon text-success" size={32} />
          <h3>Trusted Quality</h3>
          <p>
            Every item listed on ShopEase is carefully inspected for authentic craftsmanship, ensuring you get maximum value for your money.
          </p>
        </div>

        <div className="about-card">
          <Truck className="about-icon text-warning" size={32} />
          <h3>Speedy Delivery</h3>
          <p>
            We partner with reliable global courier services to deliver your purchases directly to your doorstep in record time.
          </p>
        </div>

        <div className="about-card">
          <Heart className="about-icon text-danger" size={32} />
          <h3>Customer First</h3>
          <p>
            Your satisfaction is our priority. Enjoy hassle-free orders, cash on delivery options, and dedicated resolution support.
          </p>
        </div>
      </div>

      <div className="tech-stack-banner">
        <h2>Built with Modern Web Technologies</h2>
        <div className="tech-chips">
          <span className="tech-chip">React.js (Vite)</span>
          <span className="tech-chip">Node.js & Express</span>
          <span className="tech-chip">MongoDB & Mongoose</span>
          <span className="tech-chip">JWT Authentication</span>
          <span className="tech-chip">Axios HTTP Client</span>
          <span className="tech-chip">Responsive Plain CSS</span>
        </div>
      </div>
    </div>
  );
};

export default About;
