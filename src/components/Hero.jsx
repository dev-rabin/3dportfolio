import { memo, useEffect, useRef } from "react";
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import HeroSphere from "../three/HeroSphere.jsx";
import TechOrbit from "../three/TechOrbit.jsx";
import { BiDownvote } from "react-icons/bi";
import { motion } from "framer-motion";
import { fadeUp } from "../constants/animation.js";

const PAGES = ["home", "about", "projects", "contact"];
const DRAG_THRESHOLD = 120;

function Hero() {
  const activeIndex = useRef(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const dragDelta = useRef(0);

  useEffect(() => {
    let rafId = null;

    const updateDelta = (clientX) => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        dragDelta.current = clientX - startX.current;
        rafId = null;
      });
    };

    const endDrag = () => {
      if (!isDragging.current) return;

      if (
        dragDelta.current < -DRAG_THRESHOLD &&
        activeIndex.current < PAGES.length - 1
      ) {
        activeIndex.current += 1;
      }

      if (dragDelta.current > DRAG_THRESHOLD && activeIndex.current > 0) {
        activeIndex.current -= 1;
      }

      isDragging.current = false;
      dragDelta.current = 0;
    };

    const onMouseMove = (e) => isDragging.current && updateDelta(e.clientX);

    const onMouseUp = endDrag;

    const onTouchMove = (e) =>
      isDragging.current && updateDelta(e.touches[0].clientX);

    const onTouchEnd = endDrag;

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      className="
        relative h-screen text-white
        cursor-grab active:cursor-grabbing
        touch-pan-y
      "
      onMouseDown={(e) => {
        isDragging.current = true;
        startX.current = e.clientX;
      }}
      onTouchStart={(e) => {
        isDragging.current = true;
        startX.current = e.touches[0].clientX;
      }}
    >
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute left-1/2 -translate-x-1/2 w-[90%] sm:w-[80%] h-full">
          <div className="absolute top-1/4 sm:top-1/4">
            <motion.div
              className="mb-5"
              variants={fadeUp}
              initial="hidden"
              animate="show"
            >
              <h1
                className="
                  font-serif italic tracking-tight
                  text-[36px] sm:text-[48px] lg:text-[56px]
                "
              >
                Full Stack{" "}
                <span className="not-italic font-sans font-semibold bg-gradient-to-r from-indigo-400 via-sky-400 to-cyan-400 bg-clip-text text-transparent">
                  Developer
                </span>
              </h1>

              <a
                href="/resume.pdf"
                download
                className="
                            group relative overflow-hidden
                            pointer-events-auto inline-flex items-center gap-2
                            px-6 py-3 rounded-full

                            bg-white/10 backdrop-blur
                            border border-white/20
                            text-xs sm:text-sm text-white

                            transition-all duration-500 ease-out
                            hover:border-white/50
                            hover:shadow-[0_0_25px_-5px_rgba(99,102,241,0.6)]
                          "
              >
                <span
                  className="
                              absolute inset-0 opacity-0
                              bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-500
                              group-hover:opacity-100
                              transition-opacity duration-500
                            "
                />

                <span
                  className="
                              absolute inset-0 -translate-x-full
                              bg-gradient-to-r from-transparent via-white/40 to-transparent
                              group-hover:translate-x-full
                              transition-transform duration-700 ease-[0.22,1,0.36,1]
                            "
                />

                {/* CONTENT */}
                <span className="relative z-10 flex items-center gap-2">
                  Resume
                  <BiDownvote
                    size={14}
                    className="
                                transition-transform duration-300
                                group-hover:translate-y-[2px]
                              "
                  />
                </span>
              </a>
            </motion.div>
          </div>

          <div
            className="
              absolute right-0 bottom-1/5
              max-w-xs sm:max-w-sm
              text-xs sm:text-sm text-gray-400
            "
          >
            <motion.div
              className="mb-5"
              variants={fadeUp}
              initial="hidden"
              animate="show"
            >
              <p className="text-gray-300 mb-1">
                Crafting thoughtful web and mobile applications
              </p>
              <p>
                using MERN Stack and React Native with a focus on performance.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <Canvas
        camera={{
          position: [0, 1.4, 5],
          fov: 40,
        }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.2} />
        <Environment preset="city" />
        <MemoTechOrbit dragDelta={dragDelta} isDragging={isDragging} />
        <MemoHeroSphere
          activeIndex={activeIndex}
          dragDelta={dragDelta}
          isDragging={isDragging}
        />
      </Canvas>
    </section>
  );
}

const MemoHeroSphere = memo(HeroSphere);
const MemoTechOrbit = memo(TechOrbit);

export default memo(Hero);
