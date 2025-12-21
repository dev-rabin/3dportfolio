import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { NavigationProvider } from "./context/NavigationContext";

import Navbar from "./components/Navbar";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import SmoothScroll from "./components/SmoothScroll";
import Home from "./pages/Home";
import GlobalScene from "./components/GlobalScene.jsx";
import Footer from "./components/Footer.jsx";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="popLayout">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <NavigationProvider>
        {/* PAGE WRAPPER (IMPORTANT) */}
        <div className="relative min-h-screen bg-[#0b0b0c]">
          <GlobalScene />

          <SmoothScroll>
            <Navbar />
            <AnimatedRoutes />
            <Footer/>
          </SmoothScroll>
        </div>
      </NavigationProvider>
    </BrowserRouter>
  );
}

