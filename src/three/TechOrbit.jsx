import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiAndroid,
  SiApple,
  SiMysql,
  SiRedux,
} from "react-icons/si";

const icons = [
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiAndroid,
  SiApple,
  SiMysql,
  SiRedux,
];

export default function TechOrbitIcons({ dragDelta, isDragging }) {
  const groupRef = useRef();
  const baseRotation = useRef(0);

  useFrame(() => {
    if (!groupRef.current) return;

    baseRotation.current += 0.002;

    const dragRotation = isDragging.current ? dragDelta.current * 0.0008 : 0;

    const targetRotation = baseRotation.current + dragRotation;

    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetRotation,
      0.08
    );
  });

  return (
    <group ref={groupRef}>
      {icons.map((Icon, i) => {
        const angle = (i / icons.length) * Math.PI * 2;

        return (
          <Html
            key={i}
                position={[
                    Math.cos(angle) * 1.6,
                    0,
                    Math.sin(angle) * 1.6,
                ]}
            transform
            center
            style={{
              opacity: 0.6,
              pointerEvents: "none",
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
              willChange: "transform",
              imageRendering: "crisp-edges",
            }}
          >
            <div
              style={{
                transform: "scale(1)",
                filter: "drop-shadow(0 0 3px rgba(255,255,255,0.25))",
                opacity: 0.75,
              }}
            >
              <Icon size={18} color="#e5e7eb" />
            </div>
          </Html>
        );
      })}
    </group>
  );
}
