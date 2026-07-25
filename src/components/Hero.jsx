import "../css/Hero.css";
import {
  FaGithub,
  FaLinkedin,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

import heroImage from "../assets/hero.png";

const Hero = () => {
  return (
    <section className="hero">

      {/* Background Effects */}
      <div className="hero-blur blur-1"></div>
      <div className="hero-blur blur-2"></div>

      <div className="container hero-container">

        {/* LEFT */}

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <span className="hero-badge">
            👋 Available For Work
          </span>

          <h1>
            Hi, I'm <span>Shubham</span>
          </h1>

          <TypeAnimation
            sequence={[
              "MERN Stack Developer",
              2000,
              "Frontend Developer",
              2000,
              "Backend Developer",
              2000,
            ]}
            wrapper="h2"
            repeat={Infinity}
          />

          <p>
            I build fast, responsive and scalable web applications
            using React, Node.js, Express.js and MongoDB.
          </p>

          <div className="hero-buttons">

            <button className="primary-btn">
              View Projects
            </button>

            <button className="secondary-btn">
              Download Resume
            </button>

          </div>

          <div className="hero-socials">

            <a href="#">
              <FaGithub />
            </a>

            <a href="#">
              <FaLinkedin />
            </a>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
        >

          <div className="image-box">

            <img src={heroImage} alt="Hero" />

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