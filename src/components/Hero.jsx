import { useEffect, useRef, useState } from "react";
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import HeroSphere from "../three/HeroSphere.jsx";
import Smoke from "../three/Smoke.jsx";
import Navbar from "./Navbar.jsx";
import TechOrbit from "../three/TechOrbit.jsx";
import { BiDownvote } from "react-icons/bi";
import { EXPERIENCE } from "../constants/experience.js";

const PAGES = ["home", "about", "projects", "contact"];
const DRAG_THRESHOLD = 120;

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const dragDelta = useRef(0);

  useEffect(() => {
    const onMouseMove = (e) => {
      if (!isDragging.current) return;
      dragDelta.current = e.clientX - startX.current;
    };

    const onMouseUp = () => {
      if (!isDragging.current) return;

      if (
        dragDelta.current < -DRAG_THRESHOLD &&
        activeIndex < PAGES.length - 1
      ) {
        setActiveIndex((i) => i + 1);
      }

      if (dragDelta.current > DRAG_THRESHOLD && activeIndex > 0) {
        setActiveIndex((i) => i - 1);
      }

      isDragging.current = false;
      dragDelta.current = 0;
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [activeIndex]);

  return (
    <>
      <Navbar />

      <section
        className="
                  relative h-screen text-white
                  cursor-grab active:cursor-grabbing
                "
        onMouseDown={(e) => {
          isDragging.current = true;
          startX.current = e.clientX;
        }}
      >
        {/* 80% WIDTH CONTENT CONTAINER */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute left-1/2 -translate-x-1/2 w-[80%] h-full">
            {/* LEFT TEXT */}
            <div className="absolute top-1/6 translate-y-1/2">
              <h1 className="font-serif italic text-[50px] tracking-tight mb-2">
                Full Stack{" "}
                <span className="not-italic font-sans font-semibold bg-gradient-to-r from-indigo-400 via-sky-400 to-cyan-400 bg-clip-text text-transparent">
                  Developer
                </span>
              </h1>
              <a
                href="/resume.pdf"
                download
                className="
                            pointer-events-auto
                            group relative inline-flex items-center gap-2
                            px-5 py-3 rounded-full

                            text-[13px] font-medium tracking-wide
                            text-white/90

                            bg-white/[0.06]
                            backdrop-blur-xl
                            border border-white/20

                            shadow-[0_0_18px_rgba(255,255,255,0.08)]
                            transition-all duration-300 ease-out

                            hover:text-white
                            hover:border-white/40
                            hover:bg-white/[0.10]
                            hover:shadow-[0_0_30px_rgba(255,255,255,0.18)]
                            hover:scale-[1.06]

                            active:scale-95
                        "
              >
                <span className="relative z-10">Resume</span>

                <span
                  className="
                                                relative z-10
                                                text-white/70
                                                transition-transform duration-300
                                                group-hover:translate-y-0.5
                                                "
                >
                  <BiDownvote size={14} />
                </span>

                {/* subtle glass shine */}
                <span
                  className="
                                                pointer-events-none
                                                absolute inset-0 rounded-full
                                                bg-gradient-to-r from-white/0 via-white/15 to-white/0
                                                opacity-0
                                                group-hover:opacity-100
                                                transition-opacity duration-500
                                            "
                />
              </a>
            </div>

            {/* RIGHT TEXT */}
            <div className="absolute right-0 bottom-1/4 translate-y-1/2 max-w-sm text-sm text-gray-400 leading-relaxed">
              <p className="mb-1 text-gray-300">
                Crafting thoughtful web and mobile applications
              </p>
              <p>
                using modern technologies like MERN Stack and React Native, with
                a strong emphasis on scalability, performance, and delightful
                user experiences.
              </p>
            </div>
          </div>
        </div>

        {/* CANVAS – FULL SCREEN */}
        <div className="absolute inset-0">
          
          <Canvas
            camera={{ position: [0, 1.5, 5], fov: 40 }}
            gl={{ physicallyCorrectLights: true }}
          >
            <ambientLight intensity={0.4} />

            <TechOrbit dragDelta={dragDelta} isDragging={isDragging} />

            <HeroSphere
              activeIndex={activeIndex}
              dragDelta={dragDelta}
              isDragging={isDragging}
            />

            {/* MUST BE LAST */}
            <Environment preset="city" />
          </Canvas>
        </div>
      </section>
    </>
  );
}
