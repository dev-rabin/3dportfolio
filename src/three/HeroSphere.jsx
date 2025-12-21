import { MeshTransmissionMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const ROTATION_PER_PAGE = 0.7;
const DRAG_SENSITIVITY = 0.004;

export default function HeroSphere({ activeIndex, dragDelta, isDragging }) {
    const sphereRef = useRef();

    useFrame(() => {
        if (!sphereRef.current) return;

        const snapRotation = activeIndex * ROTATION_PER_PAGE;
        const dragRotation = isDragging.current
            ? dragDelta.current * DRAG_SENSITIVITY
            : 0;

        const targetRotationY = snapRotation + dragRotation;

        sphereRef.current.rotation.y = THREE.MathUtils.lerp(
            sphereRef.current.rotation.y,
            targetRotationY,
            0.08
        );

        sphereRef.current.rotation.x = THREE.MathUtils.lerp(
            sphereRef.current.rotation.x,
            -0.15,
            0.04
        );
    });

    return (
      <mesh ref={sphereRef} position={[0, -0.25, 0]}>
        <sphereGeometry args={[1, 160, 160]} />
        <MeshTransmissionMaterial
          transmission={1} 
          thickness={1.2}
          roughness={0.08}
          ior={1.45}
          chromaticAberration={0.04}
          anisotropy={0.1}
          distortion={0.15}
          distortionScale={0.25}
          temporalDistortion={0.05}
          attenuationDistance={0.8}
          attenuationColor="#ffffff"
          color="#ffffff"
          toneMapped={false}
        />
      </mesh>
    );
}
