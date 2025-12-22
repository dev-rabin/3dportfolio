import { motion } from "framer-motion";
import { lazy, Suspense } from "react";
const Skills = lazy(() => import("../components/Skills.jsx"))

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(6px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};



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

export default function About() {
  return (
    <section className=" min-h-screen text-white">
      {/* CONTENT */}
      <div className="relative w-[80%] mx-auto py-24">
        {/* ABOUT HEADER */}
        <motion.div
          className="mb-5"
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          <motion.p
            variants={item}
            className="uppercase tracking-[0.4em] text-xs text-gray-500 mt-10"
          >
            About
          </motion.p>

          <h1 className="font-serif italic text-[56px] tracking-tight">
            About{" "}
            <span className="not-italic font-sans font-semibold bg-gradient-to-r from-indigo-400 via-sky-400 to-cyan-400 bg-clip-text text-transparent">
              Me
            </span>
          </h1>

          <p className="text-base text-gray-400 leading-relaxed">
            Full-stack developer focused on building scalable, performant, and
            user-centric digital products.
          </p>
        </motion.div>

        {/* STORY */}
        <motion.div
          className="space-y-4 text-gray-300 text-[18px] text-justify leading-[1.5] mb-16"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.p variants={fadeUp}>
            I’m <span className="text-white font-medium">Robin Mandhotia</span>,
            a Computer Science Engineering graduate (2022) and a certified MERN
            Stack Developer based in Delhi NCR. I’ve been building web and
            mobile applications since 2022, with a strong focus on clean code
            and scalable architecture.
          </motion.p>

          <motion.p variants={fadeUp}>
            I work across the full development lifecycle — from translating
            product requirements into intuitive user interfaces to designing
            reliable backend systems using React, Node.js, Express, MongoDB, and
            MySQL. I also build cross-platform mobile apps using React Native.
          </motion.p>

          <motion.p variants={fadeUp}>
            My experience includes building admin dashboards, authentication
            systems, offline-first mobile applications, and data-driven
            platforms. I care deeply about performance, security, and
            maintainability.
          </motion.p>

          <motion.p variants={fadeUp} className="text-gray-400">
            I’m open to freelance projects, collaborations, and product-driven
            teams where thoughtful engineering and clean execution matter.
          </motion.p>
        </motion.div>

        <motion.div
          className="mb-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.p
            variants={item}
            className="uppercase tracking-[0.4em] text-xs text-gray-500 mt-10"
          >
            Skills
          </motion.p>

          <h2 className="text-[48px] font-serif italic tracking-tight">
            My{" "}
            <span className="not-italic font-sans font-semibold bg-gradient-to-r from-indigo-400 via-sky-400 to-cyan-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>

          <p className="mt-3 text-gray-400 leading-relaxed">
            Technologies and tools I use to design, build, and scale modern web
            and mobile applications.
          </p>
        </motion.div>

        <Suspense
          fallback={
            <div className="h-48 flex items-center justify-center text-gray-500">
              Loading skills…
            </div>
          }
        >
          <Skills />
        </Suspense>
      </div>
    </section>
  );
}
