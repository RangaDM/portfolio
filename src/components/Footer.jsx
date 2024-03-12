import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="waves">
            <div className="wave" id="wave1"></div>
            <div className="wave" id="wave1"></div>
            <div className="wave" id="wave1"></div>
            <div className="wave" id="wave1"></div>
        </div>
      <ul className="flex justify-center items-center gap-4">
        <li>
          <a href=""><FaGithub /></a>
        </li>
        <li>
          <a href=""><FaLinkedin /></a>
        </li>
        <li>
          <a href=""><FaSquareXTwitter /></a>
        </li>
        <li>
          <a href=""><LuInstagram /></a>
        </li>
      </ul>
        <p className="text-center text-white mt-4">
            &copy; 2024 Ranga. All rights reserved.
        </p>
    </footer>
  );
};

export default Footer;
