import { memo } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Smoke from "../three/Smoke.jsx";

function GlobalScene() {
  return (
    <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false }}
        frameloop="always"
      >
        <ambientLight intensity={0.35} />

        <Environment preset="city" background={false} />

        <Smoke />
      </Canvas>
    </div>
  );
}

export default memo(GlobalScene);
