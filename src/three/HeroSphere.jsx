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
          thickness={0.6}
          roughness={0}
          ior={1.45}
          chromaticAberration={0.08}
          anisotropy={0.2}
          distortion={0.25}
          distortionScale={0.4}
          temporalDistortion={0.1}
          attenuationDistance={1}
          attenuationColor="#ffffff"
          color="#ffffff"
          toneMapped={false}
        />
      </mesh>
    );
}
