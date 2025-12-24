import { memo } from "react";
import { motion } from "framer-motion";
import { EXPERIENCE } from "../constants/experience.js";
import { cardVariants } from "../constants/animation.js";

const viewportOnce = { once: true };

function Experience() {
  return (
    <section className="text-white">
      <div
        className="
          relative z-10
          w-[92%] sm:w-[85%] lg:w-[80%]
          mx-auto
        "
      >
        {/* SECTION HEADER */}
        <p
          className="
            uppercase tracking-[0.4em]
            text-[10px] sm:text-xs
            text-gray-500
            mb-4
          "
        >
          Experience
        </p>

        <h2
          className="
            font-serif italic tracking-tight
            text-[34px] sm:text-[42px] lg:text-[48px]
            mb-8 sm:mb-10
          "
        >
          Professional{" "}
          <span className="not-italic font-sans font-semibold bg-gradient-to-r from-indigo-400 via-sky-400 to-cyan-400 bg-clip-text text-transparent">
            Journey
          </span>
        </h2>

        {/* EXPERIENCE LIST */}
        <div className="space-y-10 sm:space-y-14 lg:space-y-16">
          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              transition={{ delay: index * 0.05 }}
              className="
                relative
                rounded-3xl
                p-6 sm:p-8 lg:p-10
                bg-white/2
                backdrop-blur-lg
                border border-white/15

                shadow-[0_8px_24px_-10px_rgba(0,0,0,0.45)]
                hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.25)]

                transition-shadow duration-500
              "
            >
              {/* SUBTLE EDGE GLOW */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl" />

              <div className="relative">
                <p
                  className="
                    uppercase tracking-[0.3em]
                    text-[10px] sm:text-xs
                    text-gray-500
                    mb-3
                  "
                >
                  {exp.period}
                </p>

                <h3
                  className="
                    font-semibold text-white
                    text-lg sm:text-xl lg:text-2xl
                    mb-1
                  "
                >
                  {exp.role}
                </h3>

                <p
                  className="
                    text-xs sm:text-sm
                    text-gray-400
                    mb-4 sm:mb-5
                  "
                >
                  {exp.company} · {exp.type}
                </p>

                <p
                  className="
                    text-sm sm:text-base
                    text-gray-300
                    leading-relaxed
                    mb-6
                  "
                >
                  {exp.description}
                </p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {exp.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                        px-3 py-1
                        text-[10px] sm:text-xs
                        rounded-full
                        bg-black/40
                        border border-white/10
                        text-gray-300
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(Experience);
