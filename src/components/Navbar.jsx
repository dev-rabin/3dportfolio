import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = ({ isActive }) =>
    `
    relative uppercase tracking-[0.3em] text-[11px]
    transition-colors duration-300
    ${isActive ? "text-white" : "text-gray-400"}
    hover:text-white
    after:absolute after:left-0 after:-bottom-1
    after:h-px after:bg-white/70
    after:transition-all after:duration-300
    ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}
  `;

  return (
    <nav
      className={`
        fixed top-4 left-1/2 -translate-x-1/2 z-50
        w-[80%] rounded-xl
        transition-all duration-500 ease-out
        ${
          scrolled
            ? `
               bg-white/4
              backdrop-blur-lg
              shadow-[0_8px_24px_-10px_rgba(0,0,0,0.45)]
            `
            : "bg-transparent"
        }
      `}
    >
      <div className="flex items-center justify-between px-2 py-3">
        {/* LOGO */}
        <div className="flex items-center gap-3 select-none">
          <span className="w-2 h-2 rounded-full bg-white/90" />
          <span className="uppercase tracking-[0.35em] text-[11px] text-white">
            Robin Mandhotia
          </span>
        </div>

        {/* NAV LINKS */}
        <div className="flex items-center gap-8">
          <NavLink to="/" end className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <NavLink to="/projects" className={linkClass}>
            Projects
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
