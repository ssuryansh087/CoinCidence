import React from "react";
import "./styles/MainLanding.css"; 
import CardCarousel from "./CardCarousel"; // Importing the Carousel
import CardInfo from "./CardInfo";
import CardGrid from "./CardGrid";
import {
  FaTwitter,
  FaMedium,
  FaForumbee,
  FaTelegram,
  FaDiscord,
  FaYoutube,
} from "react-icons/fa"; // Importing social icons

const Mainlanding = () => {
  return (
    <div className="landing-page">
      {/* Header */}
      <header className="header">
        <div className="logo">CoinCidence</div>
        <nav>
          <ul className="nav-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#how-to-use">How to Use</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#community">Community</a>
            </li>
          </ul>
        </nav>
        <button className="launch-btn">SignIn</button>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>Bridging the Financial Literacy Gap</h1>
        <p>
          A complete Platform for Empowering Individuals for Smarter Financial
          Decisions
        </p>
        <button className="launch-app-btn">Explore</button>
      </section>

      {/* How to Use Section */}
      <section id="how-to-use" className="how-to-use">
        <h2>What is Coincidense</h2>
        {/* 3D Carousel integrated here */}
        <CardCarousel />
      </section>

      {/* Features Section */}
      <section id="features" className="featured">
        <h2>Features</h2>
        <div className="cards">
          <div className="card">Learning Visualizer</div>
          <div className="card">Courses & Modules</div>
          <div className="card">Stock Trading</div>
          <div className="card">Cases & Events</div>
        </div>
      </section>

      <section className="automatic-slider-section">
        <h2 class="featured">Featured Products</h2>
        <CardInfo />
      </section>

      {/* Community Section */}
      <section id="community" className="community">
        <h2>Community</h2>
        <div className="social-links">
          <a href="#">
            <FaTwitter size={30} />
          </a>
          <a href="#">
            <FaMedium size={30} />
          </a>
          <a href="#">
            <FaForumbee size={30} />
          </a>
          <a href="#">
            <FaTelegram size={30} />
          </a>
          <a href="#">
            <FaDiscord size={30} />
          </a>
          <a href="#">
            <FaYoutube size={30} />
          </a>
        </div>
      </section>

      <section className="grid-cards-section">
        <h2>Featured Products</h2>
        <CardGrid />
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 CoinCidence</p>
      </footer>
    </div>
  );
};

export default Mainlanding;