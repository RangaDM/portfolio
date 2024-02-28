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
  web
} from "../assets";

import com from "../assets/company/com.jpg";
import gsc from "../assets/company/gsc.png";
import uni from "../assets/company/ruhuna.png";
import wpf from "../assets/wpf.jpeg";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
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
    title: "Backend Developer",
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
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
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
];

export { experiences, projects, services, technologies, testimonials };

