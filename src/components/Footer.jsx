import { FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative mt-20">
      <div
        className="
          mx-auto
          w-[92%] sm:w-[85%] lg:w-[80%]
          rounded-xl
          bg-white/2 backdrop-blur-md
          border border-white/10
          shadow-[0_8px_24px_-12px_rgba(0,0,0,0.4)]
        "
      >
        <div
          className="
            flex flex-col md:flex-row
            items-center justify-between
            gap-6
            px-5 sm:px-6
            py-6
            text-[10px] sm:text-xs
            text-gray-400
          "
        >
          {/* LEFT */}
          <div className="flex items-center gap-3 select-none">
            <span className="w-2 h-2 rounded-full bg-white/80" />
            <span className="uppercase tracking-[0.35em] text-white">
              Robin Mandhotia
            </span>
          </div>

          {/* CENTER */}
          <p
            className="
              text-center
              max-w-md
              bg-gradient-to-r
              from-indigo-400 via-sky-400 to-cyan-400
              bg-clip-text text-transparent
            "
          >
            Open to oppurtunities & collaborations. Let's connect!
          </p>

          {/* RIGHT */}
          <div
            className="
                      flex flex-wrap
                      justify-center
                      items-center
                      gap-4 sm:gap-6
                      uppercase tracking-widest
                      text-[10px] sm:text-[11px]
                    "
          >
            <a
              href="mailto:robinmandhotia@gmail.com"
              aria-label="Email"
              className="text-gray-400 hover:text-white transition"
            >
              <FiMail size={16} />
            </a>

            <a
              href="https://github.com/dev-rabin"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-gray-400 hover:text-white transition"
            >
              <FaGithub size={16} />
            </a>

            <a
              href="https://www.linkedin.com/in/robin-mandhotia-560579289/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-white transition"
            >
              <FaLinkedinIn size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom spacing */}
      <div className="h-12" />
    </footer>
  );
}
