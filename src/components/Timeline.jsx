import "../css/Timeline.css";
import timeline from "../data/timeline";
import { motion } from "framer-motion";

const Timeline = () => {
  return (
    <section className="timeline">

      <div className="container">

        <div className="timeline-header">

          <span className="section-tag">
            My Journey
          </span>

          <h2>
            Learning <span>Timeline</span>
          </h2>

          <p>
            My journey from learning programming fundamentals to
            building full-stack MERN applications.
          </p>

        </div>

        <div className="timeline-wrapper">

          {timeline.map((item, index) => (

            <motion.div
              className="timeline-item"
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: .6, delay: index * .2 }}
              viewport={{ once: true }}
            >

              <div className="timeline-year">
                {item.year}
              </div>

              <div className="timeline-content">

                <h3>{item.title}</h3>

                <p>{item.description}</p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Timeline;
