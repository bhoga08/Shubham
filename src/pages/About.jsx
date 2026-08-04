import "../css/About.css";
import aboutImage from "../assets//images/about.png";
import { FaLaptopCode, FaGraduationCap, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="about">

      <div className="container about-container">

        {/* Left */}

        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >
          <img src={aboutImage} alt="About" />
        </motion.div>

        {/* Right */}

        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >

          <span className="section-tag">
            About Me
          </span>

          <h2>
            Passionate <span>MERN Stack Developer</span>
          </h2>

          <p>
            I'm a passionate web developer who enjoys building modern,
            responsive, and user-friendly applications. I love solving
            real-world problems through clean code and intuitive design.
          </p>

          <div className="about-features">

            <div className="feature">
              <FaLaptopCode />
              <div>
                <h4>Web Development</h4>
                <p>Building scalable full-stack applications.</p>
              </div>
            </div>

            <div className="feature">
              <FaGraduationCap />
              <div>
                <h4>Continuous Learning</h4>
                <p>Always exploring new technologies.</p>
              </div>
            </div>

            <div className="feature">
              <FaRocket />
              <div>
                <h4>Career Goal</h4>
                <p>Creating impactful digital experiences.</p>
              </div>
            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default About;
