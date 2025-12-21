import { motion } from "framer-motion";
import { EXPERIENCE } from "../constants/experience.js";

export default function Experience() {
  return (
    <section className="text-white">
      {/* DARK BASE LAYER */}

      <div className="relative z-10 w-[80%] mx-auto">
        {/* SECTION HEADER */}
        <p className="uppercase tracking-[0.4em] text-xs text-gray-500 mb-4">
          Experience
        </p>

        <h2 className="text-[48px] font-serif italic tracking-tight mb-10">
          Professional{" "}
          <span className="not-italic font-sans font-semibold bg-gradient-to-r from-indigo-400 via-sky-400 to-cyan-400 bg-clip-text text-transparent">
            Journey
          </span>
        </h2>

        {/* EXPERIENCE LIST */}
        <div className="space-y-16">
          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="
                          relative
                          rounded-3xl
                          p-10
                          bg-white/2
                          backdrop-blur-lg
                          border border-white/15

                          shadow-[0_8px_24px_-10px_rgba(0,0,0,0.45)]
                          hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.25)]

                          transition-shadow duration-500
                        "
            >
              {/* SUBTLE EDGE GLOW */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl " />

              <div className="relative">
                <p className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-3">
                  {exp.period}
                </p>

                <h3 className="text-2xl font-semibold text-white mb-1">
                  {exp.role}
                </h3>

                <p className="text-sm text-gray-400 mb-5">
                  {exp.company} · {exp.type}
                </p>

                <p className="text-gray-300 leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-3">
                  {exp.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                        px-3 py-1 text-xs
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
