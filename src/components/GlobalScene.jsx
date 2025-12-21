import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Smoke from "../three/Smoke.jsx";

export default function GlobalScene() {
  return (
    <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false }}
      >
        <ambientLight intensity={0.4} />
        <Environment preset="city" />
        <Smoke />
      </Canvas>
    </div>
  );
}

