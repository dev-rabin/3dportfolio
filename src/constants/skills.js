import { FaDatabase, FaGitAlt, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiAxios,
  SiCss3,
  SiDart,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiFlutter,
  SiGithub,
  SiGoogle,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPaypal,
  SiPostman,
  SiRedux,
  SiSocketdotio,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";

export const SKILLS = {
  Frontend: [
    { name: "JavaScript (ES6+)", icon: SiJavascript, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "Redux / Redux Toolkit", icon: SiRedux, color: "#764ABC" },
    { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS3", icon: SiCss3, color: "#1572B6" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
    { name: "Vite", icon: SiVite, color: "#646CFF" },
    { name: "Responsive Design", icon: FaReact, color: "#A3A3A3" },
  ],

  Backend: [
    { name: "Node.js", icon: FaNodeJs, color: "#68A063" },
    { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
    { name: "RESTful APIs", icon: SiNodedotjs, color: "#A3A3A3" },
    { name: "JWT Authentication", icon: SiJsonwebtokens, color: "#FACC15" },
    { name: "Role-Based Access Control", icon: FaDatabase, color: "#EF4444" },
    { name: "API Security", icon: FaDatabase, color: "#EF4444" },
    { name: "Socket.IO (Real-time)", icon: SiSocketdotio, color: "#FFFFFF" },
  ],

  Payments: [
    { name: "Stripe Payments", icon: SiStripe, color: "#635BFF" },
    { name: "PayPal Integration", icon: SiPaypal, color: "#00457C" },
    { name: "Payment Webhooks", icon: SiStripe, color: "#A5B4FC" },
    { name: "Subscription Billing", icon: SiStripe, color: "#818CF8" },
  ],

  Authentication: [
    { name: "Firebase Authentication", icon: SiFirebase, color: "#FFCA28" },
    { name: "Email / Password Auth", icon: SiFirebase, color: "#FACC15" },
    { name: "Google OAuth", icon: SiGoogle, color: "#4285F4" },
    { name: "Social Login Integration", icon: SiGoogle, color: "#A3A3A3" },
  ],

  Databases: [
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "Database Design", icon: FaDatabase, color: "#A855F7" },
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  ],

  Mobile: [
    { name: "Flutter", icon: SiFlutter, color: "#02569B" },
    { name: "Dart", icon: SiDart, color: "#0175C2" },
    { name: "Secure Data Storage", icon: FaDatabase, color: "#22C55E" },
  ],

  Tools: [
    { name: "Git", icon: FaGitAlt, color: "#F05032" },
    { name: "GitHub", icon: SiGithub, color: "#E5E5E5" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    { name: "Axios / Fetch", icon: SiAxios, color: "#5A29E4" },
    { name: "Figma (Dev Handoff)", icon: SiFigma, color: "#F24E1E" },
  ],

  Engineering: [
    { name: "Clean Code Practices", icon: FaDatabase, color: "#A3A3A3" },
    { name: "Performance Optimization", icon: FaDatabase, color: "#22C55E" },
  ],
};
