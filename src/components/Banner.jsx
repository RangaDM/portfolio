import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import TrackVisibility from "react-on-screen";
import propic from "../assets/propic.png";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn } from "../utils/motion";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner relative w-full h-screen mx-auto">
      <div className="p-2 grid lg:grid-cols-2 items-center sm:grid-cols-1 md:grid-cols-2 xs:grid-cols-1 gap-10">
        <div>
          <h1 className={`${styles.heroHeadText} text-white pt-2 pb-2`}>
            Hi, I'm <span className="text-[#915EFF]">Ranga</span>
          </h1>
          <p className={`${styles.heroSubText} lg:pt-4`}>
            <span className={`${styles.sectionHeadText}`}>{text}</span>
            {`
                
              `}
            {index % 2 ? "" : ""}
            <br />
            <div className="lg:mt-5">I'm passionate about tech 😎</div>
          </p>
          <motion.div
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            className="mt-5 green-pink-gradient p-[1px] rounded-[20px] w-32 flex justify-center items-center h-8"
          >
            <div>
              <a
                href="src/assets/Ranga_Intern_cv.pdf"
                download
                target="_blank"
                rel="noreferrer"
                className={`font-semibold lg:mt-5`}
              >
                Download CV
              </a>
            </div>
          </motion.div>
        </div>
        <div className="p-1">
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={isVisible ? "animate__animated animate__zoomIn" : ""}
              >
                <img src={propic} alt="profile image" />
              </div>
            )}
          </TrackVisibility>
        </div>
      </div>

      <div className="absolute xs:bottom-10 lg:bottom-36 md:bottom-36 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default SectionWrapper(Banner, "banner");
