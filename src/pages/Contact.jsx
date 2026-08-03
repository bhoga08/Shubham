import "../css/Contact.css";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaPaperPlane,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <motion.div
          className="contact-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span>CONTACT</span>

          <h2>
            Let's Build Something <span>Amazing</span>
          </h2>

          <p>
            Have a project in mind or looking for a MERN Developer? I'd love to
            hear from you.
          </p>
        </motion.div>

        <div className="contact-wrapper">
          {/* LEFT */}

          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >


            <motion.div
              className="contact-card"
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
            >
              {" "}
              <div className="info-card">
                <FaEnvelope />
                <div>
                  <h3>Email</h3>
                  <p>shubhambhogal6@gmail.com</p>
                </div>
              </div>
            </motion.div>

<motion.div
              className="contact-card"
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
            >
            <div className="info-card">
              <FaPhoneAlt />
              <div>
                <h3>Phone</h3>
                <p>+91 62304 91952</p>
              </div>
            </div>
            </motion.div>


<motion.div
              className="contact-card"
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
            >
            <div className="info-card">
              <FaMapMarkerAlt />
              <div>
                <h3>Location</h3>
                <p>Punjab, India</p>
              </div>
            </div>
            </motion.div>

            
            <div className="social-icons">
              <a
                href="https://github.com/bhoga08"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/shubham-bhogal-7b20a72ba/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://www.instagram.com/bhogal_08"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.form
            className="contact-form"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="row">
              <input type="text" placeholder="Your Name" required />

              <input type="email" placeholder="Your Email" required />
            </div>

            <input type="text" placeholder="Subject" required />

            <textarea rows="7" placeholder="Write your message..." required />

            <button type="submit">
              <FaPaperPlane />
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;



