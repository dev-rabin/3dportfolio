import { memo } from "react";
import Hero from "../components/Hero";
import Experience from "../components/Experince";

function Home() {
  return (
    <>
      <Hero />
      <Experience />
    </>
  );
}

export default memo(Home);
