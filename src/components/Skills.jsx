import { memo } from "react";
import { motion } from "framer-motion";
import { SKILLS } from "../constants/skills";

const sectionContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const categoryFadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
    filter: "blur(6px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const skillsContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
};

const skillFade = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};


const Skills = () => {
  return (
    <motion.div
      className="space-y-14"
      variants={sectionContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
    >
      {Object.entries(SKILLS).map(([category, items]) => (
        <motion.div
          key={category}
          className="relative space-y-10"
          variants={categoryFadeUp}
        >
          {/* CATEGORY HEADER */}
          <div className="flex items-center gap-6">
            <span className="text-sm uppercase tracking-[0.4em] font-semibold bg-gradient-to-r from-indigo-400 via-sky-400 to-cyan-400 bg-clip-text text-transparent">
              {category}
            </span>
            <span className="flex-1 h-px bg-gradient-to-r from-cyan-400/40 via-indigo-400/30 to-transparent" />
          </div>

          {/* SKILLS */}
          <motion.div
            className="flex flex-wrap gap-x-14 gap-y-10"
            variants={skillsContainer}
          >
            {items.map(({ name, icon: Icon, color }) => (
              <motion.div
                key={name}
                variants={skillFade}
                whileHover={{ scale: 1.05 }}
                transition={{
                  type: "spring",
                  stiffness: 140,
                  damping: 22,
                }}
                className="
                  group relative flex items-center gap-4
                  px-5 py-3 rounded-full
                  bg-white/5 backdrop-blur-lg
                  border border-white/10
                  transition-all duration-300
                  hover:border-white/20
                  hover:shadow-[0_0_40px_-6px_rgba(99,102,241,0.45)]
                "
              >
                {/* Glow */}
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/20 via-sky-500/20 to-cyan-500/20 opacity-0 blur-xl group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon */}
                <Icon
                  size={18}
                  style={{ color }}
                  className="relative z-10 opacity-90 group-hover:scale-110 transition-transform duration-300"
                />

                {/* Name */}
                <span className="relative z-10 text-[15px] font-semibold tracking-wide text-gray-100">
                  {name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default memo(Skills);
