import { memo, useEffect, useRef } from "react";
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import HeroSphere from "../three/HeroSphere.jsx";
import TechOrbit from "../three/TechOrbit.jsx";
import { BiDownvote } from "react-icons/bi";

const PAGES = ["home", "about", "projects", "contact"];
const DRAG_THRESHOLD = 120;

function Hero() {
  const activeIndex = useRef(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const dragDelta = useRef(0);

  useEffect(() => {
    let rafId = null;

    const onMouseMove = (e) => {
      if (!isDragging.current) return;

      // Throttle using requestAnimationFrame
      if (rafId) return;

      rafId = requestAnimationFrame(() => {
        dragDelta.current = e.clientX - startX.current;
        rafId = null;
      });
    };

    const onMouseUp = () => {
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

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
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
      {/* TEXT LAYER */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute left-1/2 -translate-x-1/2 w-[80%] h-full">
          <div className="absolute top-1/3">
            <h1 className="font-serif italic text-[50px] tracking-tight mb-2">
              Full Stack{" "}
              <span className="not-italic font-sans font-semibold bg-gradient-to-r from-indigo-400 via-sky-400 to-cyan-400 bg-clip-text text-transparent">
                Developer
              </span>
            </h1>

            <a
              href="/resume.pdf"
              download
              className="pointer-events-auto inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 backdrop-blur border border-white/20 hover:scale-105 transition"
            >
              Resume <BiDownvote size={14} />
            </a>
          </div>

          <div className="absolute right-0 bottom-1/4 max-w-sm text-sm text-gray-400">
            <p className="text-gray-300 mb-1">
              Crafting thoughtful web and mobile applications
            </p>
            <p>
              using MERN Stack and React Native with a focus on performance.
            </p>
          </div>
        </div>
      </div>

      {/* THREE CANVAS */}
      <Canvas
        camera={{ position: [0, 1.5, 5], fov: 40 }}
        dpr={[1, 1.5]} // 🔥 performance
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
