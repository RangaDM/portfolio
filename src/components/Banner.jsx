import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import TrackVisibility from "react-on-screen";
import propic from "../assets/propic.png";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn } from "../utils/motion";
import resume from "../assets/Ranga_Resume.pdf";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaFacebook } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "DevOps Engineer", "Web Developer", "CI/CD Specialist", "Infrastructure Automation"];
  const period = 2000;

  const links = [
    { url: "mailto:rangamaithreepala@gmail.com", icon: <AiOutlineMail /> },
    { url: "https://github.com/RangaDM", icon: <FaGithub /> },
    { url: "https://medium.com/@rangamaithreepala", icon: <FaMedium /> },
    { url: "https://www.linkedin.com/in/ranga-maithreepala-0a9196262/", icon: <FaLinkedin /> },
    {
      url: "https://www.instagram.com/ranga_dananjaya?igsh=YzAwZjE1ZTI0Zg==",
      icon: <LuInstagram />,
    },
    {
      url: "https://www.facebook.com/ranga.maithreepala.3?mibextid=ZbWKwL",
      icon: <FaFacebook />,
    },
  ];

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
                href={resume}
                download
                target="_blank"
                rel="noreferrer"
                className={`font-semibold lg:mt-5`}
              >
                Download CV
              </a>
            </div>
          </motion.div>
          <motion.dev className="flex flex-col items-start mt-6">
            <ul className="flex justify-center items-center gap-4">
              {links.map((link, index) => (
                <motion.li
                  key={index}
                  variants={fadeIn("right", "spring", index * 0.5, 0.75)}
                >
                  <a href={link.url}>{link.icon}</a>
                </motion.li>
              ))}
            </ul>
          </motion.dev>
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
          <div className="w-[40px] h-[70px] rounded-full border-4 border-secondary flex justify-center items-center p-2">
            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-10 h-10 rounded-full bg-secondary"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default SectionWrapper(Banner, "banner");
