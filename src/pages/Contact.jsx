import { memo, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { FiMapPin } from "react-icons/fi";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { item } from "../constants/animation.js";

const ContactForm = lazy(() => import("../components/ContactForm.jsx"));

const SOCIALS = [
  { icon: FaGithub, href: "#" },
  { icon: FaLinkedinIn, href: "#" },
  { icon: FaTwitter, href: "#" },
];

function Contact() {
  return (
    <motion.section
      className="min-h-screen text-white overflow-y-auto"
      initial={{ y: 40 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
    >
      <motion.div
        initial="hidden"
        animate="show"
        className="
          relative z-10
          w-full
          px-5 sm:px-10 lg:px-[10.5vw]
          py-16 sm:py-20 lg:py-[14vh]
          flex flex-col lg:flex-row
          gap-16 lg:gap-24
        "
      >
        {/* LEFT */}
        <div className="w-full lg:w-1/2">
          <motion.p
            variants={item}
            className="
              uppercase tracking-[0.4em]
              text-[10px] sm:text-xs
              text-gray-500
            "
          >
            Contact
          </motion.p>

          <h1
            className="
              font-serif italic tracking-tight
              text-[36px] sm:text-[48px] lg:text-[56px]
            "
          >
            Get in{" "}
            <span className="not-italic font-sans font-semibold bg-gradient-to-r from-indigo-400 via-sky-400 to-cyan-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>

          <motion.div variants={item} className="space-y-6 my-6">
            <motion.ul
              className="
                space-y-3
                text-sm sm:text-md
                text-gray-400
              "
            >
              <li>
                • Full-stack web applications using MERN with secure
                authentication, scalable architecture, and clean APIs.
              </li>
              <li>
                • Modern React and TypeScript frontends focused on reusable
                components, maintainable code, and smooth user experiences.
              </li>
              <li>
                • REST API design, backend integration, and database management
                with performance and security in mind.
              </li>
              <li>
                • Performance-focused UI development with optimized rendering,
                accessibility best practices, and responsive layouts.
              </li>
              <li>
                • End-to-end feature implementation — from idea and wireframes
                to production-ready deployment.
              </li>
            </motion.ul>

            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <FiMapPin />
              <span>India · Remote</span>
            </div>

            <div className="flex flex-wrap gap-6">
              {SOCIALS.map(({ icon: Icon, href }) => (
                <motion.a
                  key={href}
                  href={href}
                  whileHover={{ y: -3 }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* RIGHT */}
        <div className="w-full lg:w-1/2">
          <Suspense
            fallback={
              <div className="h-64 flex items-center justify-center text-gray-500">
                ...
              </div>
            }
          >
            <ContactForm />
          </Suspense>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default memo(Contact);
