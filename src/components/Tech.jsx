import { motion } from "framer-motion";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { BallCanvas } from "./canvas";

const Tech = () => {
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
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
