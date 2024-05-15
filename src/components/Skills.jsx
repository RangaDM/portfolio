import styless from "./style.module.css";
import { motion } from "framer-motion";
import { skills } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import TrackVisibility from "react-on-screen";
import rocket from "../assets/rocket.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";

const Skills = () => {
  const sliderRef = useRef(null);
  const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
};
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I've learned so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>My Skills.</h2>
      </motion.div>
      <br />
      <br />
      <div>
      <div>
    <Slider ref={sliderRef} {...settings}>
      {skills.map((skill, id) => {
        return (
          <div key={id} className={styless.skill}>
            <div className={`relative overflow-auto ${styless.skillImageContainer}`}>
              <img src={skill.imageSrc} alt={skill.title} />
            </div>
            <p>{skill.title}</p>
          </div>
        );
      })}
    </Slider>
  </div>
        <div className="banner p-1 pt-14 flex items-center justify-center">
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={isVisible ? "animate__animated animate__zoomIn" : ""}
              >
                <a href="https://github.com/RangaDM">
                  <img className="w-52" src={rocket} alt="rocket" />
                </a>
              </div>
            )}
          </TrackVisibility>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Skills, "");
