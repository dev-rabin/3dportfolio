import { memo, useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "../constants/projects";
import { containerVariants, itemVariants } from "../constants/animation";
import { Link } from "react-router-dom";

const FILTERS = ["All", "Full Stack", "Frontend", "Mobile"];

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return PROJECTS;
    return PROJECTS.filter((p) => p.type === activeFilter);
  }, [activeFilter]);

  const handleFilterChange = useCallback((filter) => {
    setActiveFilter(filter);
  }, []);

  return (
    <section className="min-h-screen text-white">
      <div className="relative w-[80%] mx-auto py-24">
        {/* HEADER */}
        <div className="my-8 flex justify-between items-end">
          <div>
            <motion.p
              variants={itemVariants}
              initial="hidden"
              animate="show"
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

          {/* FILTERS */}
          <div className="flex gap-10 text-sm tracking-wide uppercase">
            {FILTERS.map((filter) => {
              const isActive = activeFilter === filter;

              return (
                <button
                  key={filter}
                  onClick={() => handleFilterChange(filter)}
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

        {/* PROJECT LIST */}
        <motion.div
          className="space-y-10"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => {
              const hasPreview = Boolean(project.projectLink);

              return (
                <motion.article
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
                  {/* BACKGROUND: PREVIEW OR IMAGE */}
                  {hasPreview ? (
                    <iframe
                      src={project.projectLink}
                      title={project.title}
                      loading="lazy"
                      className="
                        absolute inset-0 w-full h-full
                        opacity-0 group-hover:opacity-100
                        scale-105 group-hover:scale-100
                        transition-all duration-700 ease-out
                        pointer-events-none
                      "
                    />
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="
                        absolute inset-0 w-full h-full object-cover
                        scale-105
                        transition-transform duration-700
                        group-hover:scale-100
                      "
                    />
                  )}

                  {/* GRADIENT OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/20" />

                  {/* CONTENT */}
                  <div className="relative z-10 grid grid-cols-12 gap-10 p-8 items-center">
                    {/* LEFT */}
                    <div className="col-span-7">
                      <p className="uppercase tracking-[0.35em] text-xs text-gray-400 mb-3">
                        {project.type}
                      </p>

                      <h3 className="text-4xl font-semibold tracking-tight">
                        {project.title}
                      </h3>

                      <p className="mt-3 max-w-xl text-gray-300 leading-relaxed">
                        {project.desc}
                      </p>

                      {/* ACTIONS */}
                      <div className="mt-6 flex items-center gap-6 flex-wrap">
                        {hasPreview && (
                          <Link
                            to={project.projectLink}
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm font-medium text-white flex items-center gap-2 whitespace-nowrap"
                          >
                            View Project →
                          </Link>
                        )}

                        {/* TECH STACK (RIGHT SIDE) */}
                        <div className="flex flex-wrap gap-2">
                          {project.teckStack?.map((tech) => (
                            <span
                              key={tech}
                              className="
                                          text-xs
                                          px-3 py-1
                                          rounded-full
                                          bg-white/10
                                          text-gray-300
                                          border border-white/10
                                        "
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* RIGHT IMAGE (ALWAYS VISIBLE) */}
                    <div className="col-span-5 hidden lg:block">
                      <div className="overflow-hidden rounded-2xl border border-white/10">
                        <img
                          src={project.image}
                          alt={project.title}
                          loading="lazy"
                          className="
                            w-full h-64 object-cover
                            transition-transform duration-700
                            group-hover:scale-105
                          "
                        />
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

export default memo(Projects);
