import {
  backend,
  carrent,
  creator,
  css,
  docker,
  figma,
  git,
  html,
  javascript,
  jobit,
  mobile,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  tripguide,
  typescript,
  web,
} from "../assets";

import placepilot from "../assets/placepilot.png";
import medimate from "../assets/MediMate.png";

import phone from "../assets/con_me/call.png";
import facebook from "../assets/con_me/facebook.png";
import github from "../assets/con_me/github.png";
import address from "../assets/con_me/home.png";
import instagram from "../assets/con_me/instagram.svg";
import linkedin from "../assets/con_me/linked_in.svg";
import twitter from "../assets/con_me/twitter.svg";

import com from "../assets/company/com.jpg";
import gsc from "../assets/company/gsc.png";
import uni from "../assets/company/ruhuna.png";
import wpf from "../assets/wpf.jpeg";

import css2 from "../assets/skills/css.png";
import figma2 from "../assets/skills/figma.png";
import react2 from "../assets/skills/react.png";
import html2 from "../assets/skills/html.png";
import js from "../assets/skills/js.png";
import node2 from "../assets/skills/node.png";
import graphql2 from "../assets/skills/graphql.png";
import mongo2 from "../assets/skills/mongodb.png";
import kubernetes from "../assets/skills/kubernetes.png";
import Linux from "../assets/skills/linux.png";
import agile from "../assets/skills/planning.png";
import python from "../assets/skills/python.png";
import net from "../assets/skills/computer.png";
import cloud2 from "../assets/skills/cloud-computing.png";
import terraform from "../assets/skills/terraform.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Journey",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const skills = [
  {
    title: "HTML",
    imageSrc: html2
  },
  {
    title: "CSS",
    imageSrc: css2
  },
  {
    title: "JavaScript",
    imageSrc: js
  },
  {
    title: "Node",
    imageSrc: node2
  },
  {
    title: "React",
    imageSrc: react2
  },
  {
    title: "GraphQL",
    imageSrc: graphql2
  },
  {
    title: "MongoDB",
    imageSrc: mongo2
  },
  {
    title: "Figma",
    imageSrc: figma2
  },
  {
    title: "Agile",
    imageSrc: agile
  },
  {
    title: "Linux",
    imageSrc: Linux
  },
  {
    title: "Python",
    imageSrc: python
  },
  {
    title: "Git",
    imageSrc: git
  },
  {
    title: "Networking",
    imageSrc: net
  },
  {
    title: "AWS",
    imageSrc: cloud2
  },
  {
    title: "Terraform",
    imageSrc: terraform
  },
  {
    title: "Docker",
    imageSrc: docker
  },
  {
    title: "kubernetes",
    imageSrc: kubernetes
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "DevOps Engineer",
    icon: backend,
  },
  {
    title: "Content Writer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const contactInfo = [
  {
    name: "Email",
    icon: github,
    link: "https://github.com/RangaDM"
  },
  {
    name: "LinkedIn",
    icon: linkedin,
    link: "in/ranga-maithreepala-0a9196262"
  },
  {
    name: "Twitter",
    icon: twitter,
    link: "#"
  },
  {
    name: "Instagram",
    icon: instagram,
    link: "https://www.instagram.com/ranga_dananjaya?igsh=YzAwZjE1ZTI0Zg=="
  },
  {
    name: "Facebook",
    icon: facebook,
    link: "https://www.facebook.com/ranga.maithreepala.3?mibextid=ZbWKwL"
  },
  {
    name: "Phone",
    icon: phone,
    link: "tel:+94772222222"
  },
  {
    name: "Address",
    icon: address,
    link: "https://goo.gl/maps/1SZkJqa7CFF2GxiZ6"
  },
];

const experiences = [
  {
    title: "Finishing O/L Exam",
    company_name: "Govt: Science College, Matale",
    icon: gsc,
    iconBg: "#383E56",
    date: "2015",
    points: [
      "I have finished my O/L exam at Govt: Science College.",
    ],
  },
  {
    title: "Finishing A/L Exam",
    company_name: "Govt: Science College, Matale",
    icon: gsc,
    iconBg: "#383E56",
    date: "2019",
    points: [
      "I completed my Advanced Level (A/L) examination in the physical science stream at Government Science College.",
    ],
  },
  {
    title: "Start Journey at University of Ruhuna",
    company_name: "UOR - Faculty of Engineering",
    icon: uni,
    iconBg: "#383E56",
    date: "2021",
    points: [
      "I started my journey with 527 friends here at the University of Ruhuna.",
      "Completed 1st year successfully.",
    ],
  },
  {
    title: "Got selected to the Department of Computer Engineering.",
    company_name: "UOR - Faculty of Engineering",
    icon: com,
    iconBg: "#383E56",
    date: "2022 - Present",
    points: [
      "I chose to join the Computer Engineering department.",
      "Currently studying 3rd year.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Ranga is a highly skilled and motivated individual who is always eager to learn and take on new challenges. He is a great team player and has a strong work ethic. He is a quick learner and has a strong understanding of software development principles.",
    name: "John Doe",
    designation: "CEO",
    company: "XYZ Company",
    image: "https://attractmorematches.com/wp-content/uploads/2023/10/Screenshot-2023-10-18-at-5.08.47-PM.png",
  },
  {
    testimonial:
    "He is a very talented and hardworking individual. He is very passionate about his work and always delivers high-quality results. He is a great team player and has excellent communication skills. He is always willing to go the extra mile to get the job done.",
    name: "Katie Johnson",
    designation: "CTO",
    company: "ABC Company",
    image: "https://attractmorematches.com/wp-content/uploads/2023/10/Screenshot-2023-10-18-at-5.08.47-PM.png",
  }
];

const projects = [
  {
    name: "Otto car sale",
    description:
    "A web application enabling users to engage in buying and selling cars, comparing prices and specifications, booking test drives, and exploring the latest car models. The platform also incorporates a car rental service, with administrative features to track rental cars and access detailed car information.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/RangaDM/otto_car_sale_webApp.git",
  },
  {
    name: "Find Cameraman",
    description:
    "We developed this mobile application as part of our third-year mobile application group project. The app serves the purpose of helping us find a cameraman tailored to our event requirements. Flutter and Firebase were the technologies employed in its creation.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "dart",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/RangaDM/Cman_mobile_app.git",
  },
  {
    name: "To Do Web App",
    description:
    "Created an intuitive web application centered around fundamental CRUD operations and an enhanced user interface/user experience (UI/UX). The application was developed using React, MongoDB, and Tailwind CSS. The app allows users to add, delete, and update tasks, as well as mark them as complete.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/RangaDM/To_Do_web_app.git",
  },
  {
    name: "WPF Application",
    description:
    "Student Manager is a desktop application developed using WPF and structured with MVVM architecture, offering efficient management of student records. It facilitates the seamless addition, editing, and deletion of student details for enhanced usability.",
    tags: [
      {
        name: "wpf",
        color: "blue-text-gradient",
      },
      {
        name: "c#",
        color: "pink-text-gradient",
      },
    ],
    image: wpf,
    source_code_link: "https://github.com/RangaDM/MVVM-Student-Management-System.git",
  },
  {
    name: "PlacePilot",
    description:
    "I created a web application using React.js to assist users in locating nearby stores and accessing relevant information. Inspired by a Google Maps article, I embarked on this project out of personal interest. From gathering requirements to deployment, I extensively researched and gained valuable insights. Integrating web scraping technology enabled us to gather accurate and current store details from online maps and directories. Features such as search functionality, pagination, and error handling were implemented to ensure a smooth user experience. Using HTML, CSS, JavaScript, and React.js, I developed the frontend, employing web scraping techniques for data acquisition from map services.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    image: placepilot,
    source_code_link: "https://github.com/RangaDM/PlacePilot_WebApp_frontend"
  },
  {
    name: "MediMate",
    description:
    "This application serves as a comprehensive tool to track and manage your medical history and the status of various health conditions. It's designed to aid in future medical decisions by providing a clear and organized view of your health history. I developed this project out of personal interest, aiming to create a solution that can make a difference in people's lives. The application is built using the MERN tech stack (MongoDB, Express.js, React.js, and Node.js), showcasing my skills in full-stack development",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: medimate,
    source_code_link: "https://github.com/RangaDM/MediMate_frontend.git"
  }
];

export { contactInfo, experiences, projects, services, technologies, testimonials, skills };

