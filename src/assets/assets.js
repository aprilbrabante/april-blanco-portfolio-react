import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot, FaPhoenixFramework } from 'react-icons/fa';

import profileImg from '../assets/april.png';
import projectImg1 from '../assets/project1.avif';
import projectImg2 from '../assets/project2.avif';
import projectImg3 from '../assets/project3.avif';
import projectImg4 from '../assets/project4.avif';
import projectImg5 from '../assets/project5.avif';
import projectImg6 from '../assets/project6.avif';
import projectImg7 from '../assets/project7.png';
import projectImg8 from '../assets/project8.png';

export const assets = {
    profileImg,
}


export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
      color: 'text-purple'
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Beautiful design and user experience are at the heart of everything I create.',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, efficient code following best practices and modern patterns.',
      color: 'text-blue'
    }
  ];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['React', 'Vue.js', 'Boostrap', 'Primefaces']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['Node.js', 'Javascript', 'Java', 'Python','VB6', 'VBA', 'Microsoft Powerapps']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['MongoDB', 'PostgreSQL', 'Oracle', 'MySQL']
  },
  {
    title: 'Frameworks / Workflow',
    icon: FaPhoenixFramework,
    description: 'Building applications using different frameworks.',
    tags: ['Struts', 'Django', 'Express.js', 'Vue.js', 'ServiceNow']
  },
  {
    title: 'Application Servers',
    icon: FaServer,
    description: 'Deploying and managing applications in WAS environments.',
    tags: ['IBM WAS 8.5', 'IBM WAS 9', 'WAS Liberty']
  },
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my development workflow.',
    tags: ['HP Unified Functional Testing(UFT)', 'Git', 'Postman', 'Vercel', 'Figma']
  }
];



export const projects = [
  {
    title: "E-Commerce Platform",
    description: "MERN E-Commerce Platform. A full-stack web application built with Vue.js (frontend) and Node.js / Express.js (backend) for managing products, users, and orders. ",
    image: projectImg1,
    tech: ["Vue.js", "Node.js", "MongoDB"],
    icons: [FaVuejs, FaNodeJs, FaDatabase],
    demo: "http://zuitt-bootcamp-prod-572-9119-blanco.s3-website.us-east-1.amazonaws.com/",
    code: "https://github.com/aprilbrabante/ecommerce-sample-app",
  },
  {
    title: "Blog Management App",
    description: "A real-time blog application with post messaging and comment sharing.",
    image: projectImg5,
    tech: ["Vue.js", "Node.js", "MongoDB"],
    icons: [FaVuejs, FaNodeJs, FaDatabase],
    demo: "https://blog-client-sand.vercel.app/",
    code: "https://github.com/aprilbrabante/blog_client",
  },
  {
    title: "IP Geolocation",
    description: "A simple web app for searching specific IP address information like city, region and country.",
    image: projectImg7,
    tech: ["React.js", "Node.js", "MongoDB"],
    icons: [FaReact, FaNodeJs, FaDatabase],
    demo: "https://geo-react-api-client.vercel.app/",
    code: "https://github.com/aprilbrabante/geo-react-api-client",
  },
  {
    title: "Sales API (Fastify)",
    description: "The Sales API (Fastify) is a RESTful backend service built using the high-performance Fastify framework, designed to manage and process sales-related data efficiently. It provides a structured set of endpoints for handling core business operations such as creating, retrieving, updating, and deleting sales records.",
    image: projectImg8,
    tech: ["Node.js", "MongoDB"],
    icons: [FaNodeJs, FaDatabase],
    demo: "https://sales-api-fastify.onrender.com/docs#/",
    code: "https://github.com/aprilbrabante/sales-api-fastify",
  },
  {
    title: "Fitness Tracker",
    description: "A simple web app for tracking workouts.",
    image: projectImg3,
    tech: ["Vue.js", "Node.js", "MongoDB"],
    icons: [FaVuejs, FaNodeJs, FaDatabase],
    demo: "https://fitness-api-client.vercel.app/",
    code: "https://github.com/aprilbrabante/fitnessAPI_client",
  },

];


export const workData = [
  {
    role: "Developer",
    company: "Innovior",
    duration: "May 2022 - May 2023",
    description:
      "Leading application development for enterprise clients.",
    color: "purple"
  },
  {
    role: "Systems Engineer",
    company: "SHI Designing and Manufacturing Inc.",
    duration: "August 2011 - February 2022",
    description:
      "Developed and maintained legacy web applications for japanese clients, focusing on responsive design and performance optimization.",
    color: "pink"
  }
];
