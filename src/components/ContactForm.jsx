import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";


const item = {
  hidden: {
    y: 40,
    opacity: 0,
    filter: "blur(8px)",
  },
  show: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

/* ---------------- FIELD COMPONENT ---------------- */
function FormField({ label, type = "text", textarea = false }) {
  const Field = textarea ? "textarea" : "input";

  return (
    <motion.div variants={item} className="relative mb-8 group">
      <Field
        type={!textarea ? type : undefined}
        rows={textarea ? 3 : undefined}
        required
        className="
          peer w-full
          bg-transparent
          py-4
          text-lg text-white
          border-b border-white/20
          outline-none
          resize-none
        "
      />

      <label
        className="
          absolute left-0 top-4
          text-gray-400 text-sm
          transition-all duration-300
          peer-focus:-top-4 peer-focus:text-xs peer-focus:text-cyan-400
          peer-valid:-top-4 peer-valid:text-xs
        "
      >
        {label}
      </label>

      <span
        className="
          absolute left-0 bottom-0
          h-[2px] w-0
          bg-gradient-to-r from-cyan-400 to-indigo-400
          transition-all duration-500
          group-focus-within:w-full
        "
      />
    </motion.div>
  );
}

/* ---------------- MAIN FORM ---------------- */
export default function ContactForm({ onSubmit }) {
  return (
    <motion.form
      variants={item}
      initial="hidden"
      animate="show"
      onSubmit={onSubmit || ((e) => e.preventDefault())}
      className="
        relative w-full max-w-2xl
        rounded-3xl
        p-10
        border border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
      "
    >
      {/* glow */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/10 via-transparent to-indigo-500/10 opacity-40" />

      <motion.p
        variants={item}
        className="relative uppercase text-xs text-gray-500 mb-8"
      >
        Send a message
      </motion.p>

      {/* FIELDS */}
      <FormField label="Your Name" />
      <FormField label="Email Address" type="email" />
      <FormField label="Message" textarea />

      {/* SUBMIT */}
      <motion.button
        variants={item}
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.96 }}
        className="
          relative mt-2
          inline-flex items-center gap-4
          py-3 px-8
          rounded-full
          border border-white/20
          overflow-hidden
          group
        "
      >
        <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <span className="relative z-10 flex items-center gap-3 text-lg font-medium">
          Send message
          <FiArrowUpRight />
        </span>
      </motion.button>
    </motion.form>
  );
}
