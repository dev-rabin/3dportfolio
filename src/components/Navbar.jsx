import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const container = document.getElementById("page-scroll");
        if (!container) return;

        const onScroll = () => {
            setScrolled(container.scrollTop > 20);
        };

        container.addEventListener("scroll", onScroll);
        return () => container.removeEventListener("scroll", onScroll);
    }, []);

    const linkClass = ({ isActive }) =>
        `
    relative uppercase tracking-widest transition
    ${isActive ? "text-white after:w-full" : "text-gray-400 after:w-0"}
    hover:text-white
    after:absolute after:left-0 after:-bottom-1
    after:h-px after:bg-white after:transition-all
  `;

    return (
        <nav
            className={`
        fixed top-0 left-1/2 -translate-x-1/2 z-50 w-[80%]
        transition-all duration-500 ease-out
        ${scrolled
                    ? "backdrop-blur-xl bg-white border-b border-white shadow-lg"
                    : "bg-transparent"
                }
      `}
        >
            <div
                className={`
          flex justify-between items-start text-xs font-sans text-gray-400
          transition-all duration-500
          ${scrolled ? "py-6" : "py-10"}
        `}
            >
                {/* LEFT */}
                <div className="leading-tight pointer-events-none">
                    <p className="uppercase tracking-widest text-gray-500">Robin</p>
                    <p className="uppercase tracking-widest text-white">Mandhotia</p>
                </div>

                {/* CENTER */}
                <div className="hidden md:block text-center pointer-events-auto">
                    <p className="text-gray-500">Open to collaborations</p>
                    <a
                        href="mailto:robinmandhotia@gmail.com"
                        className="hover:text-white transition"
                    >
                        robinmandhotia@gmail.com
                    </a>
                </div>

                {/* RIGHT */}
                <div className="flex flex-col items-end gap-2 pointer-events-auto">
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
