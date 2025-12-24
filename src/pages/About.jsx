import { motion } from "framer-motion";
import { lazy, Suspense } from "react";
import { container, fadeUp, item } from "../constants/animation.js";

const Skills = lazy(() => import("../components/Skills.jsx"));

export default function About() {
  return (
    <section className="min-h-screen text-white">
      {/* CONTENT */}
      <div
        className="
          relative
          w-[92%] sm:w-[85%] lg:w-[80%]
          mx-auto
          py-20 sm:py-24
        "
      >
        {/* ABOUT HEADER */}
        <motion.div
          className="mb-6 sm:mb-8"
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          <motion.p
            variants={item}
            className="
              uppercase tracking-[0.4em]
              text-[10px] sm:text-xs
              text-gray-500
              mt-10
            "
          >
            About
          </motion.p>

          <h1
            className="
              font-serif italic tracking-tight
              text-[36px] sm:text-[48px] lg:text-[56px]
            "
          >
            About{" "}
            <span className="not-italic font-sans font-semibold bg-gradient-to-r from-indigo-400 via-sky-400 to-cyan-400 bg-clip-text text-transparent">
              Me
            </span>
          </h1>

          <p
            className="
              text-sm sm:text-base
              text-gray-400
              leading-relaxed
              max-w-2xl
            "
          >
            Full-stack developer focused on building scalable, performant, and
            user-centric digital products.
          </p>
        </motion.div>

        {/* STORY */}
        <motion.div
          className="
            space-y-4
            text-gray-300
            text-sm sm:text-[18px]
            text-justify
            leading-[1.5]
            mb-14 sm:mb-16
          "
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.p variants={fadeUp}>
            I’m <span className="text-white font-medium">Robin Mandhotia</span>,
            a Computer Science Engineering graduate (2022) with hands-on
            experience building{" "}
            <span className="text-white">
              production-ready web and mobile applications
            </span>
            . I focus on writing clean, maintainable code and designing systems
            that scale reliably in real-world environments.
          </motion.p>

          <motion.p variants={fadeUp}>
            I work across the full development lifecycle — from translating
            product requirements into intuitive user interfaces to designing and
            integrating backend services using React, Node.js, Express, MongoDB,
            and MySQL. I also build cross-platform mobile applications with
            React Native.
          </motion.p>

          <motion.p variants={fadeUp}>
            My experience includes developing admin dashboards, implementing
            secure authentication flows, and delivering data-driven platforms. I
            place strong emphasis on performance, security, and long-term
            maintainability.
          </motion.p>

          <motion.p variants={fadeUp} className="text-gray-400">
            I’m open to freelance work, collaborations, and product-focused
            teams where thoughtful engineering, ownership, and clean execution
            are valued.
          </motion.p>
        </motion.div>

        {/* SKILLS HEADER */}
        <motion.div
          className="mb-8 sm:mb-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.p
            variants={item}
            className="
              uppercase tracking-[0.4em]
              text-[10px] sm:text-xs
              text-gray-500
              mt-10
            "
          >
            Skills
          </motion.p>

          <h2
            className="
              font-serif italic tracking-tight
              text-[32px] sm:text-[42px] lg:text-[48px]
            "
          >
            My{" "}
            <span className="not-italic font-sans font-semibold bg-gradient-to-r from-indigo-400 via-sky-400 to-cyan-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>

          <p
            className="
              mt-3
              text-sm sm:text-base
              text-gray-400
              leading-relaxed
              max-w-2xl
            "
          >
            Technologies and tools I use to design, build, and scale modern web
            and mobile applications.
          </p>
        </motion.div>

        {/* SKILLS */}
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
