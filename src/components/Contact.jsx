import "../css/Contact.css";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="contact">

      <div className="container contact-container">

        {/* Left */}

        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
        >

          <span className="section-tag">
            Contact Me
          </span>

          <h2>
            Let's Build Something <span>Amazing</span>
          </h2>

          <p>
            I'm currently open to internships, freelance work, and
            full-time opportunities. Feel free to reach out!
          </p>

          <div className="contact-card">

            <FaEnvelope />

            <div>
              <h4>Email</h4>
              <p>yourmail@gmail.com</p>
            </div>

          </div>

          <div className="contact-card">

            <FaPhoneAlt />

            <div>
              <h4>Phone</h4>
              <p>+91 XXXXX XXXXX</p>
            </div>

          </div>

          <div className="contact-card">

            <FaMapMarkerAlt />

            <div>
              <h4>Location</h4>
              <p>Punjab, India</p>
            </div>

          </div>

          <div className="contact-social">

            <a href="#">
              <FaGithub />
            </a>

            <a href="#">
              <FaLinkedin />
            </a>

          </div>

        </motion.div>

        {/* Right */}

        <motion.form
          className="contact-form"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
        >

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <input
            type="text"
            placeholder="Subject"
          />

          <textarea
            rows="6"
            placeholder="Your Message"
          ></textarea>

          <button>
            Send Message 🚀
          </button>

        </motion.form>

      </div>

    </section>
  );
};

export default Contact;