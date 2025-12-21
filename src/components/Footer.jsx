export default function Footer() {
  return (
    <footer className="relative mt-20">
      <div
        className="
          mx-auto w-[80%]
          rounded-xl
          bg-white/2 backdrop-blur-md
          border border-white/10
          shadow-[0_8px_24px_-12px_rgba(0,0,0,0.4)]
        "
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-6 py-6 text-xs text-gray-400">
          {/* LEFT */}
          <div className="flex items-center gap-3 select-none">
            <span className="w-2 h-2 rounded-full bg-white/80" />
            <span className="uppercase tracking-[0.35em] text-white">
              Robin Mandhotia
            </span>
          </div>

          {/* CENTER */}
          <p className="text-center bg-gradient-to-r from-indigo-400 via-sky-400 to-cyan-400 bg-clip-text text-transparent">
            Open to oppurtunities & collaborations. Let's connect!
          </p>

          {/* RIGHT */}
          <div className="flex items-center gap-6 uppercase tracking-widest text-[11px]">
            <a
              href="mailto:robinmandhotia@gmail.com"
              className="hover:text-white transition"
            >
              Email
            </a>
            <a
              href="https://github.com/dev-rabin"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/robin-mandhotia-560579289/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Bottom spacing */}
      <div className="h-12" />
    </footer>
  );
}
