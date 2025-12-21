import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Smoke from "../three/Smoke.jsx";
import { useNavDirection } from "../context/NavigationContext.jsx";

import { FiArrowUpRight, FiMapPin } from "react-icons/fi";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import ContactForm from "../components/ContactForm.jsx";

const item = {
  hidden: {
    y: 40,
    opacity: 0,
    filter: "blur(8px)",
  },
  show: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export default function Contact() {

  return (
    <motion.section
      className="relative min-h-screen bg-[#0b0b0c] text-white overflow-y-auto"
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Canvas camera={{ position: [0, 1.2, 5], fov: 38 }}>
          <ambientLight intensity={0.25} />
          <Environment preset="studio" />
          <Smoke />
        </Canvas>
      </div>

      {/* overlay */}
      <div className="absolute inset-0 pointer-events-none z-0 bg-gradient-to-t from-black/90 via-black/70 to-black/40 backdrop-blur-[2px]" />

      {/* ================= CONTENT ================= */}
      <motion.div
        initial="hidden"
        animate="show"
        className="
          relative z-10
          w-full
          px-[10vw]
          py-[14vh]
          flex flex-col
          gap-24
        "
      >
        {/* ================= TOP CONTENT ================= */}
        <div className="max-w-4xl">
          <motion.p
            variants={item}
            className="uppercase tracking-[0.4em] text-xs text-gray-500 mt-8"
          >
            Contact
          </motion.p>

          <h1 className="font-serif italic text-[56px] tracking-tight">
            Get in {" "}
            <span className="not-italic font-sans font-semibold bg-gradient-to-r from-indigo-400 via-sky-400 to-cyan-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>

          <motion.div variants={item} className="space-y-6 mt-14">
            <a
              href="mailto:robinmandhotia@gmail.com"
              className="group inline-flex items-center gap-4 text-lg border-b border-white/20 pb-2 hover:border-cyan-400 transition-all"
            >
              robinmandhotia@gmail.com
              <FiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>

            <div className="flex items-center gap-2 text-gray-400">
              <FiMapPin />
              <span>India · Remote</span>
            </div>

            <div className="flex gap-6">
              {[FaGithub, FaLinkedinIn, FaTwitter].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -3 }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ================= FORM (BOTTOM) ================= */}
        <ContactForm />
      </motion.div>
    </motion.section>
  );
}
