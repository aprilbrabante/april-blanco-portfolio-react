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
    title: "Sales API (Fastify)",
    description: "The Sales API (Fastify) is a RESTful backend service built using the high-performance Fastify framework, designed to manage and process sales-related data efficiently. It provides a structured set of endpoints for handling core business operations such as creating, retrieving, updating, and deleting sales records.",
    image: projectImg8,
    tech: ["Node.js", "MongoDB"],
    icons: [FaNodeJs, FaDatabase],
    demo: "https://sales-api-fastify.onrender.com/docs#/",
    code: "https://github.com/aprilbrabante/sales-api-fastify",
  },
  {
    title: "E-Commerce Platform",
    description: "MERN E-Commerce Platform. A full-stack web application built with Vue.js (frontend) and Node.js / Express.js (backend) for managing products, users, and orders. ",
    image: projectImg1,
    tech: ["Vue.js", "Node.js", "MongoDB"],
    icons: [FaVuejs, FaNodeJs, FaDatabase],
    demo: "http://zuitt-bootcamp-prod-572-9119-blanco.s3-website.us-east-1.amazonaws.com/",
    code: "https://github.com/aprilbrabante/ecommerce-sample-app",
    credentials: "Credentials:\nAdmin User/Password:\n admin@mail.com/admin123\nDummy Customer User/Password:\n customer@mail.com/customer123"
  },
  {
    title: "Blog Management App",
    description: "A real-time blog application with post messaging and comment sharing.",
    image: projectImg5,
    tech: ["Vue.js", "Node.js", "MongoDB"],
    icons: [FaVuejs, FaNodeJs, FaDatabase],
    demo: "https://blog-client-sand.vercel.app/",
    code: "https://github.com/aprilbrabante/blog_client",
    credentials: "Credentials:\nUser/Password:\n alvinreyblanco@gmail.com/test1234"
  },
  {
    title: "IP Geolocation",
    description: "A simple web app for searching specific IP address information like city, region and country.",
    image: projectImg7,
    tech: ["React.js", "Node.js", "MongoDB"],
    icons: [FaReact, FaNodeJs, FaDatabase],
    demo: "https://geo-react-api-client.vercel.app/",
    code: "https://github.com/aprilbrabante/geo-react-api-client",
    credentials: "Credentials:\nUser/Password:\n test@mail.com/test1234"
  },
  {
    title: "Fitness Tracker",
    description: "A simple web app for tracking workouts.",
    image: projectImg3,
    tech: ["Vue.js", "Node.js", "MongoDB"],
    icons: [FaVuejs, FaNodeJs, FaDatabase],
    demo: "https://fitness-api-client.vercel.app/",
    code: "https://github.com/aprilbrabante/fitnessAPI_client",
    credentials: "Credentials:\nUser/Password:\n dummy@mail.com/dummy1234"
  },

];


export const workData = [
  {
    role: "Developer",
    company: "Innovior",
    duration: "May 2022 - May 2023",
    description:
      "Developed custom applications using ServiceNow and PowerApps to streamline business processes and significantly improve operational efficiency. Configured workflows and automated routine tasks to minimize manual processing time, while integrating multiple internal systems to enhance data accuracy and interoperability across various departments. Worked closely with business teams to translate requirements into scalable technical solutions that supported all users, and continuously delivered enhancements and fixes that improved platform stability and increased overall user satisfaction.",
    color: "purple"
  },
  {
    role: "Senior Developer",
    company: "SHI Designing and Manufacturing Inc.",
    duration: "August 2011 - February 2022",
    description:
      "Developed and maintained legacy web applications for japanese clients, focusing on responsive design and performance optimization.Built Windows applications using VB6 and automated VBA solutions to increase productivity and eliminate repetitive tasks. Developed enterprise-level Java applications using Struts, Maven, and JSF for both backend and frontend workflows. Performed automation testing with HP UFT and Quality Center, improving system reliability and significantly reducing defects. Designed and optimized databases using Oracle, PostgreSQL, and MySQL to ensure scalable and efficient solutions. Developed an in-house HR in-and-out system using the Python Django framework to streamline employee tracking. Collaborated with the technology team to study and apply various programming languages and frameworks, creating sample applications for learning and implementation. Additionally, created test plans and test reports, and communicated directly with Japanese clients to ensure clear requirements and successful project delivery.",
    color: "pink"
  },
  {
    role: "IT Instructor",
    company: "System Technological Institute - Palawan",
    duration: "July 2010 – April 2011",
    description:
      "IT Instructor role responsible for teaching Microsoft Office fundamentals (Word, PowerPoint, and Excel), as well as basic programming concepts using Java and VB6.",
    color: "orange"
  }
];
