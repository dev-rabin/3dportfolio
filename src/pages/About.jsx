import { SKILLS } from "../constants/skills.js";
import { motion } from "framer-motion";

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

const softFade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.6 },
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

        
        {/* ================= SKILLS (UNCHANGED) ================= */}
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

        {/* SKILLS LIST */}
        <motion.div
          className="space-y-14"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {Object.entries(SKILLS).map(([category, items]) => (
            <motion.div
              key={category}
              className="relative space-y-10"
              variants={fadeUp}
            >
              <div className="flex items-center gap-6">
                <span
                  className="text-sm uppercase tracking-[0.4em] font-semibold bg-gradient-to-r from-indigo-400 via-sky-400 to-cyan-400 bg-clip-text text-transparent"
                
                >
                  {category}
                </span>
                <span className="flex-1 h-px bg-gradient-to-r from-cyan-400/40 via-indigo-400/30 to-transparent" />
              </div>

              <div className="flex flex-wrap gap-x-14 gap-y-10">
                {items.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <motion.div
                      key={skill.name}
                      variants={softFade}
                      whileHover={{ scale: 1.06 }}
                      transition={{
                        type: "spring",
                        stiffness: 180,
                        damping: 18,
                      }}
                      className="
                        group relative flex items-center gap-4
                        px-5 py-3 rounded-full
                        bg-white/5
                        backdrop-blur-lg
                        border border-white/10
                        transition-all duration-300
                        hover:border-white/20
                        hover:shadow-[0_0_40px_-5px_rgba(99,102,241,0.45)]
                      "
                    >
                      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/20 via-sky-500/20 to-cyan-500/20 opacity-0 blur-xl group-hover:opacity-100 transition-opacity duration-300" />

                      <Icon
                        size={18}
                        style={{ color: skill.color }}
                        className="relative z-10 opacity-90 group-hover:scale-110 transition-transform duration-300"
                      />

                      <span className="relative z-10 text-[15px] font-semibold tracking-wide text-gray-100">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
