import "../css/Hero.css";
import { FaGithub, FaLinkedin, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import heroImage from "../assets/hero.png";

const Hero = () => {
  return (
    <section className="hero">
      {/* Background Blur */}
      <div className="hero-blur blur-1"></div>
      <div className="hero-blur blur-2"></div>

      <div className="container hero-container">
        {/* ================= LEFT ================= */}

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}

          <div className="availability-badge">
            <span className="status-dot"></span>
            Open to Internship Opportunities
          </div>

          {/* Heading */}

          <h1 className="hero-title">
            Hi, I'm <span>Shubham Bhogal</span>
          </h1>

          {/* Typing */}

          <TypeAnimation
            sequence={[
              "Full Stack MERN Developer",
              2000,
              "React.js Developer",
              2000,
              "Node.js Backend Developer",
              2000,
              "Problem Solver",
              2000,
            ]}
            wrapper="h2"
            speed={45}
            repeat={Infinity}
          />

          {/* Description */}

          <p>
            Building modern, scalable and high-performance web applications
            using the MERN stack. Passionate about creating clean user
            interfaces, efficient backend systems and exceptional user
            experiences.
          </p>

          {/* Stats */}

          <div className="hero-stats">
            <div className="stat-card">
              <h3>5+</h3>
              <span>Projects</span>
            </div>

            <div className="stat-card">
              <h3>10+</h3>
              <span>Technologies</span>
            </div>

            <div className="stat-card">
              <h3>100%</h3>
              <span>Dedication</span>
            </div>
          </div>

          {/* Buttons */}

          <div className="hero-buttons">
            <Link to="/projects">
              <button className="primary-btn">View Projects</button>
            </Link>

            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <button className="secondary-btn">Download Resume</button>
            </a>
          </div>

          {/* Social */}

          <div className="hero-socials">
            <a
              href="https://github.com/bhoga08"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        {/* ================= RIGHT ================= */}

        <motion.div
  className="hero-image"
  initial={{ opacity: 0, x: 80 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
>
  <div className="image-box">
    <img src={heroImage} alt="Shubham Bhogal" />

    <div className="tech react">
      <FaReact />
    </div>

    <div className="tech node">
      <FaNodeJs />
    </div>

    <div className="tech mongo">
      <SiMongodb />
    </div>

    <div className="tech express">
      <SiExpress />
    </div>
  </div>

 
</motion.div>
      </div>
    </section>
  );
};

export default Hero;
