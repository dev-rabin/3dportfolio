import { memo, useRef } from "react";
import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

import { IoLogoJavascript } from "react-icons/io";
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiAndroid,
  SiApple,
  SiMysql,
  SiRedux
} from "react-icons/si";


const ICONS = [
  { Icon: SiReact, color: "#61DAFB" },
  { Icon: SiNodedotjs, color: "#339933" },
  { Icon: SiExpress, color: "#ffffff" },
  { Icon: SiMongodb, color: "#47A248" },
  { Icon: SiAndroid, color: "#3DDC84" },
  { Icon: SiApple, color: "#A2AAAD" },
  { Icon: SiMysql, color: "#4479A1" },
  { Icon: SiRedux, color: "#764ABC" },
  { Icon: IoLogoJavascript, color: "#F7DF1E" },
];

const RADIUS = 1.6;


const POSITIONS = ICONS.map((_, i) => {
  const angle = (i / ICONS.length) * Math.PI * 2;
  return [Math.cos(angle) * RADIUS, 0, Math.sin(angle) * RADIUS];
});


function TechOrbit({ dragDelta, isDragging }) {
  const groupRef = useRef();
  const baseRotation = useRef(0);

  useFrame(() => {
    if (!groupRef.current) return;

    baseRotation.current += 0.003;

    const dragRotation = isDragging.current ? dragDelta.current * 0.0008 : 0;

    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      baseRotation.current + dragRotation,
      0.08
    );
  });

  return (
    <group ref={groupRef}>
      {ICONS.map(({ Icon, color }, i) => (
        <Html
          key={i}
          position={POSITIONS[i]}
          transform
          center
          style={{
            pointerEvents: "none",
            backfaceVisibility: "hidden",
            willChange: "transform",
          }}
        >
          <div
            style={{
              opacity: 0.9,
              filter: `drop-shadow(0 0 6px ${color}55)`,
            }}
          >
            <Icon size={18} color={color} />
          </div>
        </Html>
      ))}
    </group>
  );
}

export default memo(TechOrbit);
