import { memo } from "react";
import { Cloud } from "@react-three/drei";


const MAIN_CLOUD = {
  color: "#142033",
  opacity: 0.16,
  speed: 0.18,
  width: 6,
  depth: 2,
  segments: 24,
  position: [0, -0.2, 0],
};

const SECONDARY_CLOUD = {
  opacity: 0.08,
  speed: 0.15,
  width: 8,
  depth: 10,
  segments: 18,
  position: [0, -0.5, -0.5],
};


function Smoke() {
  return (
    <>
      <Cloud {...MAIN_CLOUD} />
      <Cloud {...SECONDARY_CLOUD} />
    </>
  );
}

export default memo(Smoke);
