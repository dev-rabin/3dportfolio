import React from "react";
import Hero from "../components/Hero";
import Experience from "../components/Experince";
import Smoke from "../three/Smoke";
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Home = () => {
  return (
    <>
      {/* GLOBAL SMOKE BACKGROUND */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <Canvas camera={{ position: [0, 1.5, 5], fov: 40 }}>
          <ambientLight intensity={0.25} />
          <Environment preset="city" />
          <Smoke />
        </Canvas>
      </div>

      {/* PAGE CONTENT */}
      <Hero />
      <Experience />
    </>
  );
};

export default Home;
