import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import HeroSphere from "./HeroSphere.jsx";
import Ground from "./Ground.jsx";

export default function HeroCanvas() {
    return (
        <Canvas camera={{ position: [0, 1.5, 5], fov: 40 }}>
            <ambientLight intensity={0.2} />

            <Environment preset="city" />

            <HeroSphere />
            <Ground />
        </Canvas>
    );
}
