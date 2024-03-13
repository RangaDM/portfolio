import styless from "./style.module.css";
import { motion } from "framer-motion";
import { skills } from "../constants"
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const Skills = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
        What I've learned so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          My Skills.
        </h2>
      </motion.div>
      <br/>
      <br/>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styless.skill}>
                <div className={styless.skillImageContainer}>
                  <img src={skill.imageSrc} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default SectionWrapper(Skills, "Skills")