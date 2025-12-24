import { memo, useEffect, useState, useCallback } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

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

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;

      ticking = true;
      requestAnimationFrame(() => {
        const shouldScroll = window.scrollY > 24;
        setScrolled((prev) => (prev !== shouldScroll ? shouldScroll : prev));
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = useCallback(() => setOpen(false), []);

  return (
    <nav
      className={`
        fixed top-4 left-1/2 -translate-x-1/2 z-50
        w-[90%] sm:w-[80%] rounded-xl
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
          <Link to="/" onClick={closeMenu}>
            <span className="uppercase tracking-[0.35em] text-[11px] text-white">
              Robin Mandhotia
            </span>
          </Link>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8">
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

        <button
          onClick={() => setOpen((p) => !p)}
          className="md:hidden text-white text-xl"
          aria-label="Toggle Menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <div
        className={`
                    md:hidden overflow-hidden
                    transition-[max-height] duration-500 ease-[0.22,1,0.36,1]
                    ${open ? "max-h-64" : "max-h-0"}
                  `}
      >
        <div
          className={`
                      mx-2 mb-3
                      rounded-xl
                      bg-black/50
                      backdrop-blur-lg
                      shadow-[0_8px_24px_-10px_rgba(0,0,0,0.5)]
                      transform transition-all duration-500 ease-[0.22,1,0.36,1]
                      ${
                        open
                          ? "translate-y-0 opacity-100"
                          : "-translate-y-3 opacity-0"
                      }
                    `}
          style={{ willChange: "transform, opacity" }}
        >
          <div
            className={`
                        flex flex-col items-center gap-6 py-6
                        transition-opacity duration-300 delay-150
                        ${open ? "opacity-100" : "opacity-0"}
                      `}
          >
            <NavLink to="/" end className={linkClass} onClick={closeMenu}>
              Home
            </NavLink>
            <NavLink to="/about" className={linkClass} onClick={closeMenu}>
              About
            </NavLink>
            <NavLink to="/projects" className={linkClass} onClick={closeMenu}>
              Projects
            </NavLink>
            <NavLink to="/contact" className={linkClass} onClick={closeMenu}>
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default memo(Navbar);
