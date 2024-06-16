import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { FaFacebook } from "react-icons/fa6";
import { FaMedium } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="flex justify-center items-center gap-4">
        <li>
          <a href="https://github.com/RangaDM"><FaGithub /></a>
        </li>
        <li>
          <a href="https://medium.com/@rangamaithreepala"><FaMedium /></a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/ranga-maithreepala-0a9196262/"><FaLinkedin /></a>
        </li>
        <li>
          <a href=""><FaSquareXTwitter /></a>
        </li>
        <li>
          <a href="https://www.instagram.com/ranga_dananjaya?igsh=YzAwZjE1ZTI0Zg=="><LuInstagram /></a>
        </li>
        <li>
          <a href="https://www.facebook.com/ranga.maithreepala.3?mibextid=ZbWKwL"><FaFacebook/></a>
        </li>
      </ul>
        <p className="text-center text-white mt-4">
            &copy; 2024 Ranga. All rights reserved.
        </p>
    </footer>
  );
};

export default Footer;
