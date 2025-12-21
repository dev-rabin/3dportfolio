import { Cloud } from "@react-three/drei";

export default function Smoke() {
    return (
        <>
            {/* MAIN SMOKE */}
            <Cloud
                opacity={0.18}
                speed={0.2}
                width={6}
                depth={2}
                segments={40}
                position={[0, -0.2, 0]}
            />

            {/* SECONDARY LAYER (adds depth) */}
            <Cloud
                opacity={0.1}
                speed={0.2}
                width={8}
                depth={10}
                segments={30}
                position={[0, -0.5, -0.5]}
            />
        </>
    );
}
