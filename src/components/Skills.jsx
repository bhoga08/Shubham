import "../css/Skills.css";
import skills from "../data/skills";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section className="skills">

      <div className="container">

        <div className="skills-header">

          <span className="section-tag">
            My Skills
          </span>

          <h2>
            Technologies <span>I Work With</span>
          </h2>

          <p>
            Here are the technologies and tools I use to build
            modern, scalable, and responsive web applications.
          </p>

        </div>

        <div className="skills-grid">

          {skills.map((category, index) => (

            <motion.div
              className="skill-card"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >

              <h3>{category.category}</h3>

              <div className="skill-items">

                {category.items.map((skill, i) => {

                  const Icon = skill.icon;

                  return (
                    <div className="skill-item" key={i}>

                      <Icon className="skill-icon" />

                      <span>{skill.name}</span>

                    </div>
                  );

                })}

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Skills;
