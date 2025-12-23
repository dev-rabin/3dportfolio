import MentiguruImg from "../assets/projectImg.webp";
import GameWarriorImg from "../assets/gameWarrior.webp";
import ShubhShivImg from "../assets/shubhShiv.webp";
import JeewanmalaImg from "../assets/jeewanmala.webp";
import PortfolioImg from "../assets/portfolio.webp";
import ChattyImg from "../assets/chatty.webp";
import CharacterAiImg from "../assets/characterAi.webp";
import MeliciaImg from "../assets/melicia.webp";
import Yes2YouImg from "../assets/yes2you.webp";
import PoliceAppImg from "../assets/police_logo.webp";
import TravelTangoImg from "../assets/travelTango.webp"

export const PROJECTS = [
  // Full Stack
  {
    type: "Full Stack",
    title: "Shubh Shiv Living",
    desc: "Built a freelance full-stack web application with React, Node.js, Express, and MySQL, including role-based admin dashboards, REST APIs, and scalable architecture for an interior and exterior design business. Delivered with excellent client feedback.",
    image: ShubhShivImg,
    projectLink: "https://shubhshivliving.netlify.app/",
    teckStack: ["Javascript", "React.js", "Node.js", "Express", "MySQL"],
  },
  {
    type: "Full Stack",
    title: "Jeewan Mala Hospital",
    desc: "A freelancefull-stack hospital management website built using HTML, CSS, JavaScript, Bootstrap, PHP, and MySQL, featuring responsive UI, dynamic content handling, and database-driven workflows.",
    image: JeewanmalaImg,
    projectLink: "https://www.jeewanmalahospital.com",
    teckStack: ["Javascript", "PHP", "MySQL", "HTML", "CSS"],
  },
  {
    type: "Full Stack",
    title: "Chatty - Chat Web App",
    desc: "A full-stack real-time chat application built with the MERN stack, WebSockets, and Zustand, featuring secure authentication, authorization, and low-latency messaging with text and image support.",
    image: ChattyImg,
    projectLink: "https://chatty-35xk.onrender.com",
    teckStack: ["Javascript", "MERN Stack", "Web Sockets", "Zustand"],
  },
  {
    type: "Full Stack",
    title: "Travel Tango",
    desc: "A full-stack travel booking platform featuring a modern UI, admin dashboard, secure authentication, and scalable backend architecture.",
    image: TravelTangoImg,
    projectLink: "https://tangotravel.in",
    teckStack: [
      "Javascript",
      "React.js",
      "Node.js",
      "Express",
      "MySQL",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },

  // Frontend
  {
    type: "Frontend",
    title: "Mentiguru Website and Dashboards",
    desc: "A frontend website and dashboard application built with React.js and Tailwind CSS, focusing on responsive design, reusable components, and modern UI practices.",
    image: MentiguruImg,
    projectLink: "https://mentiguru.com",
    teckStack: ["Javascript", "React.js", "Tailwind CSS"],
  },
  {
    type: "Frontend",
    title: "Sahil Yadav's Portfolio",
    desc: "An interactive 3D portfolio built with Three.js, showcasing frontend skills through immersive visuals, smooth animations, and performance-focused UI design.",
    image: PortfolioImg,
    projectLink: "https://sahilydv.netlify.app",
    teckStack: ["JavaScript", "Three.js", "React.js", "HTML", "CSS"],
  },
  {
    type: "Frontend",
    title: "Game Warrior Website",
    desc: "A frontend-only gaming web application featuring tournaments, events, new games, news, and interactive post-based content. Built with a focus on responsive design, clean UI, and smooth user experience.",
    image: GameWarriorImg,
    projectLink: "https://game-warrior-web.netlify.app/",
    teckStack: ["Javascript", "React.js", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    type: "Frontend",
    title:
      "CRM-Integrated Coaching & Personal Branding Website (Authority Entrepreneurs)",
    desc: "A CRM-integrated coaching website built with HTML and CSS for Yes To You, focused on personal branding, long-form content, and automated lead management as part of Authority Entrepreneurs.",
    image: Yes2YouImg,
    projectLink:
      "https://app.motivationalmoguls.io/v2/preview/NUYf0toGMwbkEQpNue2Q?notrack=true",
    teckStack: ["HTML", "CSS", "CRM"],
  },
  {
    type: "Frontend",
    title: "CRM-Integrated Marketing Website (Authority Entrepreneurs)",
    desc: "A responsive website built with HTML and CSS for Melicia Dupree, integrated with CRM systems for lead capture and audience engagement, delivered as part of the Authority Entrepreneurs project.",
    image: MeliciaImg,
    projectLink:
      "https://app.motivationalmoguls.io/v2/preview/n9QCGaz76enSNwy7gygE?notrack=true",
    teckStack: ["HTML", "CSS", "CRM"],
  },

  // Mobile
  {
    type: "Mobile",
    title: "Character AI",
    desc: "A cross-platform AI character chat application built with React Native and Firebase, using ChatGPT-derived AI for intelligent conversational experiences.",
    image: CharacterAiImg,
    projectLink: "https://github.com/dev-rabin/characterAI",
    teckStack: ["React Native", "Redux", "Firebase", "ChatGPT API"],
  },
  {
    type: "Mobile",
    title: "Police App",
    desc: "A secure, offline-first mobile reporting app built for a UK-based police client, featuring encrypted data storage and seamless online–offline synchronization.",
    image: PoliceAppImg,
    projectLink: "",
    teckStack: [
      "Javascript",
      "React Native",
      "Node.js",
      "Express",
      "Microsoft SQL",
      "Encryption",
    ],
  },
];
