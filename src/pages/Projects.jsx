import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import Smoke from "../three/Smoke";
import { PROJECTS } from "../constants/projects";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.25,
    },
  },
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  exit: {
    y: 30,
    opacity: 0,
    transition: { duration: 0.4 },
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

const FILTERS = ["All", "Full Stack", "Web", "Mobile"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.type === activeFilter);

  return (
    <section className="min-h-screen text-white">
      <div className="absolute inset-0" />

      <div className="relative w-[80%] mx-auto py-24">
        <div className="my-8 flex justify-between items-end">
          <div>
               <motion.p
                          variants={item}
                          className="uppercase tracking-[0.4em] text-xs text-gray-500 mb-2"
                        >
                          Projects
                        </motion.p>
            <h1 className="font-serif italic text-[56px] tracking-tight">
              Selected{" "}
              <span className="not-italic font-sans font-semibold bg-gradient-to-r from-indigo-400 via-sky-400 to-cyan-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            <p className="mt-2 text-lg text-gray-400 max-w-xl leading-relaxed">
              Carefully crafted digital products blending engineering,
              aesthetics, and performance.
            </p>
          </div>

          <div className="flex gap-10 text-sm tracking-wide uppercase">
            {FILTERS.map((filter) => {
              const isActive = activeFilter === filter;

              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`relative pb-1 transition-colors duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-gray-500 hover:text-gray-300"
                  }`}
                >
                  {filter}

                  {isActive && (
                    <motion.span
                      layoutId="activeFilter"
                      className="absolute left-0 -bottom-1 h-[1px] w-full bg-white"
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 28,
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <motion.div
          className="space-y-10"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                whileHover={{ y: -6 }}
                className="
                            group relative w-full
                            rounded-3xl overflow-hidden
                            border border-white/10
                            bg-white/5 backdrop-blur-md
                            hover:border-white/25
                            transition-all duration-500
                          "
              >
                {/* BACKGROUND IMAGE */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                              absolute inset-0 w-full h-full object-cover
                              scale-105 group-hover:scale-100
                              transition-transform duration-700
                            "
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/20" />

                {/* CONTENT */}
                <div className="relative z-10 grid grid-cols-12 gap-10 p-8 items-center">
                  {/* LEFT — TEXT */}
                  <div className="col-span-7">
                    <p className="uppercase tracking-[0.35em] text-xs text-gray-400 mb-3">
                      {project.type}
                    </p>

                    <h3 className="text-4xl font-semibold tracking-tight">
                      {project.title}
                    </h3>

                    <p className="mt-5 max-w-xl text-gray-300 leading-relaxed">
                      {project.desc}
                    </p>

                    {/* TECH STACK */}
                    <div className="mt-6 flex flex-wrap gap-3">
                      {project.tech?.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-4 py-1.5 rounded-full bg-white/15 text-gray-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-8 flex items-center gap-6">
                      <button className="text-sm font-medium text-white flex items-center gap-2">
                        View Project
                        <span className="group-hover:translate-x-1 transition-transform">
                          →
                        </span>
                      </button>

                      <span className="text-sm text-gray-400">
                        Case study available
                      </span>
                    </div>
                  </div>

                  {/* RIGHT — IMAGE PREVIEW (OPTIONAL) */}
                  <div className="col-span-5 hidden lg:block">
                    <div className="overflow-hidden rounded-2xl border border-white/10">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
