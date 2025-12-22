import { memo, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { FiMapPin } from "react-icons/fi";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

/* ---------------- VARIANTS ---------------- */

const item = {
  hidden: { y: 40, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

/* ---------------- LAZY FORM ---------------- */

const ContactForm = lazy(() => import("../components/ContactForm.jsx"));

const SOCIALS = [
  { icon: FaGithub, href: "#" },
  { icon: FaLinkedinIn, href: "#" },
  { icon: FaTwitter, href: "#" },
];

/* ---------------- COMPONENT ---------------- */

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
          px-[10.5vw]
          py-[14vh]
          flex gap-24
        "
      >
        {/* ================= LEFT ================= */}
        <div className="w-1/2">
          <motion.p
            variants={item}
            className="uppercase tracking-[0.4em] text-xs text-gray-500"
          >
            Contact
          </motion.p>

          <h1 className="font-serif italic text-[56px] tracking-tight">
            Get in{" "}
            <span className="not-italic font-sans font-semibold bg-gradient-to-r from-indigo-400 via-sky-400 to-cyan-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>

          <motion.div variants={item} className="space-y-6 my-6">
            <motion.ul className="space-y-3 text-md text-gray-400">
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

            <div className="flex items-center gap-2 text-gray-400">
              <FiMapPin />
              <span>India · Remote</span>
            </div>

            <div className="flex gap-6">
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

        {/* ================= RIGHT ================= */}
        <div className="w-1/2">
          <Suspense
            fallback={
              <div className="h-64 flex items-center justify-center text-gray-500">
                Loading form…
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
