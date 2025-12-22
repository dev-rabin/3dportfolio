import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

function PageFallback() {
  const { pathname } = useLocation();

  const messages = {
    "/": {
      title: "Entering the workspace",
      subtitle: "Welcome to my digital home",
    },
    "/about": {
      title: "Getting to know me",
      subtitle: "Loading my journey & background",
    },
    "/projects": {
      title: "Curating selected work",
      subtitle: "Preparing real-world projects",
    },
    "/contact": {
      title: "Opening communication",
      subtitle: "Let’s start a conversation",
    },
  };

  const { title, subtitle } = messages[pathname] || {
    title: "Loading experience",
    subtitle: "Just a moment…",
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="
          relative
          px-14 py-12
          rounded-2xl
          bg-white/5
          backdrop-blur-xl
          border border-white/10
          shadow-[0_0_60px_-15px_rgba(99,102,241,0.35)]
          overflow-hidden
        "
      >
        {/* SHIMMER */}
        <motion.span
          className="
            absolute inset-0
            bg-gradient-to-r
            from-transparent via-white/10 to-transparent
          "
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* CONTENT */}
        <div className="relative z-10 text-center space-y-4">
          <h3 className="text-xl font-serif italic text-white">{title}</h3>

          <p className="text-sm text-gray-400">{subtitle}</p>
        </div>
      </motion.div>
    </div>
  );
}
export default PageFallback;
