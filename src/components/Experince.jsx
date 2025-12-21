import { motion } from "framer-motion";
import { EXPERIENCE } from "../constants/experience.js";

export default function Experience() {
  return (
    <section className="text-white py-32">
      <div className="w-[80%] mx-auto">
        <p className="uppercase tracking-[0.4em] text-xs text-gray-500 mb-4">
          Experience
        </p>

        <h2 className="text-[48px] font-serif italic tracking-tight mb-16">
          Professional{" "}
          <span className="not-italic font-sans font-semibold bg-gradient-to-r from-indigo-400 via-sky-400 to-cyan-400 bg-clip-text text-transparent">
            Journey
          </span>
        </h2>

        <div className="space-y-12">
          {EXPERIENCE.map((exp) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="
                rounded-3xl p-8
                bg-white/[0.03]
                border border-white/10
                backdrop-blur-xl
              "
            >
              <p className="text-xs tracking-widest uppercase text-gray-500 mb-2">
                {exp.period}
              </p>

              <h3 className="text-2xl font-semibold mb-1">{exp.role}</h3>

              <p className="text-sm text-gray-400 mb-4">
                {exp.company} · {exp.type}
              </p>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {exp.tech.map((tech) => (
                  <span
                    key={tech}
                    className="
                      px-3 py-1 text-xs rounded-full
                      bg-white/[0.05]
                      border border-white/10
                      text-gray-300
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
