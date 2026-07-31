import "../css/Footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="container footer-container">

        {/* Left */}

        <div className="footer-left">

          <h2>
            Shubham<span>.</span>
          </h2>

          <p>
            Full Stack MERN Developer passionate about building
            modern, scalable and user-friendly web applications.
          </p>

          <div className="footer-social">

            <a href="https://github.com/bhoga08/">
              <FaGithub />
            </a>

            <a href="#">
              <FaLinkedin />
            </a>

            <a href="mailto:shubhambhogal6@gmail.com">
              <FaEnvelope />
            </a>

          </div>

        </div>

        {/* Center */}

        <div className="footer-links">

          <h3>Quick Links</h3>

          <Link to="/">Home</Link>

          <Link to="/about">About</Link>

          <Link to="/projects">Projects</Link>

          <Link to="/contact">Contact</Link>

        </div>

        {/* Right */}

        <div className="footer-right">

          <h3>Let's Connect</h3>

          <p>
            Open for internships, freelance projects and
            full-time opportunities.
          </p>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          Made with <FaHeart /> by Shubham Bhogal © 2026
        </p>

      </div>

    </footer>
  );
};

export default Footer;