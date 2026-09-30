
import order from '../assets/order.jpg';
import hospiatl from '../assets/hospitalN.jpg';
import Englsih from '../assets/English.jpg';
import Estate from '../assets/estate.jpg';
import blog from '../assets/blog.jpg';
import securityguardrails from '../assets/securityguardrails.png';

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "projects",
    title: "Service",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "blog",
    title: "Blog",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

 export const projects = [
  {
    title: "Security Guardrails",
    description: "DevSecOps security automation framework",
    githubLink: "https://github.com/Faslanrizni/blog-page-client",
    iconClass: "fa fa-shield-alt",
    backgroundImage: securityguardrails,
    category: "Security",
  },
  {
    title: "Order-Management-system API",
    description: "Spring boot application - Microservice",
    githubLink: "https://github.com/Faslanrizni/Order-Management-system",
    iconClass: "fa fa-user-circle",
    backgroundImage: order,
    category: "Backend",
  },
  {
    title: "Hospital Management API",
    description: "Spring boot application",
    githubLink: "https://github.com/Faslanrizni/SpringBootProject",
    iconClass: "fa fa-university",
    backgroundImage: hospiatl,
    category: "Backend",
  },
  {
    title: "English Learning platform",
    description: "Web application",
    githubLink: "https://github.com/huzaifaAmeer02",
    iconClass: "fa fa-video-camera",
    backgroundImage: Englsih,
    category: "Product",
  },
  {
    title: "Real Estate Management System",
    description: "Web application",
    githubLink: "https://github.com/Faslanrizni/react_realEstateWeb",
    iconClass: "fa fa-video-camera",
    backgroundImage: Estate,
    category: "Product",
  }
];

  

const projectsConstants = [
  {
    title: "Application Security",

  },
  {
    title: "Security Automation",

  },
  {
    title: "Security Research",

  },
  {
    title: "Backend Engineering",

  },
];
  

  
  export {  projectsConstants };