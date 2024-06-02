
import order from '../assets/order.jpg';
import hospiatl from '../assets/hospitalN.jpg';
import Englsih from '../assets/English.jpg';
import Estate from '../assets/estate.jpg';
import blog from '../assets/blog.jpg';
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
    id: "contact",
    title: "Contact",
  },
];

 export const projects = [
  {
    title: "Order-Management-system API",
    description: "Spring boot application - Microservice",
    githubLink: "https://github.com/Faslanrizni/Order-Management-system",
    iconClass: "fa fa-user-circle",
    backgroundImage: order
  },
  {
    title: "Hospital Management API",
    description: "Spring boot application",
    githubLink: "https://github.com/Faslanrizni/SpringBootProject",
    iconClass: "fa fa-university",
    backgroundImage: hospiatl
  },
  {
    title: "English Learning platform",
    description: "Web application",
    githubLink: "https://github.com/huzaifaAmeer02",
    iconClass: "fa fa-video-camera",
    backgroundImage: Englsih
  },
  {
    title: "Real Estate Management System",
    description: "Web application",
    githubLink: "https://github.com/Faslanrizni/react_realEstateWeb",
    iconClass: "fa fa-video-camera",
    backgroundImage: Estate
  },
  {
    title: "Blog page",
    description: "Web application",
    githubLink: "https://github.com/Faslanrizni/blog-page-client",
    iconClass: "fa fa-graduation-cap",
    backgroundImage: blog
  }
];

  

const projectsConstants = [
  {
    title: "Web Developer",

  },
  {
    title: "Backend Developer",

  },
  {
    title: "Machine learning enthusiast",

  },
  {
    title: "Content Creator",

  },
];
  

  
  export {  projectsConstants };