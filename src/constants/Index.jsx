import {
  FaGithub,
  FaLinkedin,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.webp";
import project4 from "../assets/project4.webp";
import project5 from "../assets/project5.webp";
import project6 from "../assets/project6.webp";
import project7 from "../assets/project7.webp";
import project8 from "../assets/project8.webp";
import project9 from "../assets/project9.webp";

export const LINKS = [
  { id: "projects", name: "projects" },
  { id: "about", name: "about" },
  { id: "technologies", name: "technologies" },
  { id: "contact", name: "Contact" },
];

export const MARQUEE_TEXT =
   ` - HTML - CSS - Bootstrap - React - Node - MongoDb - Tailwind - Javascript - Git - Github - SQL `;

export const PROJECTS = [
  {
    id: 1,
    title: "ResuMate",
    description:
      "An AI powered resume building platform that can build your resume within minutes.",
    imgSrc: project1,
    link: "https://github.com/HeyThereParth/ResuMate",
  },
  {
    id: 2,
    title: "ImageHunt",
    description:
      " An image search application built with React and styled using Tailwind CSS.",
    imgSrc: project2,
    link: "https://imagehunt-theta.vercel.app/",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A personal portfolio website to showcase projects and skills.",
    imgSrc: project3,
    link: "https://github.com/HeyThereParth/MyPortfolio",
  },
  {
    id: 4,
    title: "E-learning",
    description:
      "It is a dynamic Learning Management System built on the MERN stack, offering a seamless learning experience.",
    imgSrc: project4,
    link: "https://github.com/HeyThereParth/LMS",
  },
  {
    id: 5,
    title: "BGone",
    description: "This is a simple web-based tool that removes the background of an image and converts it to a PNG format with transparency.",
    imgSrc: project5,
    link: "https://bgone-parth-guptas-projects-67c7b09c.vercel.app/",
  },
  {
    id: 6,
    title: "Bubblegame",
    description:
      "A fast-paced web game where you match numbers on bubbles to score points before time runs out!.",
    imgSrc: project6,
    link: "https://github.com/HeyThereParth/BubbleGame",
  },
  {
    id: 7,
    title: "QR Code Generator",
    description: "This tool allows you to generate QR codes for any input text or URL quickly.",
    imgSrc: project7,
    link: "https://github.com/HeyThereParth/QR-generator",
  },
  {
    id: 8,
    title: "WebPlayground",
    description: "An  online code editor for HTML, CSS, and JavaScript.",
    imgSrc: project8,
    link: "https://github.com/HeyThereParth/WebPlayground",
  },
  {
    id: 9,
    title: "Weatherly",
    description:
      "A weather dashboard providing current weather data and forecasts.",
    imgSrc: project9,
    link: "https://weathrly-ten.vercel.app/",
  },
];

export const ABOUT =
  "As a dedicated Full Stack Developer, I specialize in creating dynamic and responsive web applications that provide seamless user experiences. With a strong foundation in both front-end and back-end technologies, I excel in building robust and scalable solutions. My expertise includes working with JavaScript frameworks such as React and Node.js, as well as proficiency in databases like MongoDB and SQL. I am passionate about continuous learning and keeping up-to-date with the latest industry trends, which allows me to implement modern practices and tools in my projects.";


export const SOCIAL_MEDIA_LINKS = [
 
  {
    href: "https://www.instagram.com/_parth_gupta_/",
    icon: <FaInstagram fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/HeyThereParth",
    icon: <FaGithub fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/parth-gupta-86b23b222",
    icon: <FaLinkedin fontSize={26} className="hover:opacity-80" />,
  },
];

export const CONTACT = {
  text: "I am always excited to collaborate on new and challenging projects. Whether you have a specific project in mind or just want to explore potential opportunities, Id love to hear from you. Lets combine our skills and expertise to create something amazing. Feel free to reach out to discuss how we can work together to achieve your goals.",
  email: "heyparth2004@gmail.com",
  phone: "",
};
