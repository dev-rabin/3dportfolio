import { memo, useCallback } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

/* ---------------- ANIMATION ---------------- */

const item = {
  hidden: { y: 24, opacity: 0, filter: "blur(4px)" },
  show: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ---------------- STATIC FIELDS ---------------- */

const FIELDS = [
  { label: "Full Name", type: "text" },
  { label: "Email Address", type: "email" },
];

function ContactForm({ onSubmit }) {
  // stable fallback submit
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onSubmit?.(e);
    },
    [onSubmit]
  );

  return (
    <section className="flex items-center justify-center">
      <motion.form
        initial="hidden"
        animate="show"
        variants={item}
        onSubmit={handleSubmit}
        className="
          w-full
          px-10 py-12
          space-y-10 bg-white/3 backdrop-blur-md
          border border-white/10
          shadow-[0_8px_24px_-12px_rgba(0,0,0,0.4)]
          rounded-xl
        "
      >
        {/* HEADER */}
        <motion.div variants={item} className="space-y-2">
          <p className="uppercase tracking-[0.35em] text-xs text-gray-400">
            Send a message
          </p>
          <p className="text-gray-500 text-sm">
            I usually respond within 24 hours
          </p>
        </motion.div>

        {/* INPUT FIELDS */}
        {FIELDS.map((field) => (
          <motion.div
            key={field.label}
            variants={item}
            className="relative group"
          >
            <input
              type={field.type}
              required
              className="
                peer w-full bg-transparent
                py-3 text-base text-white
                border-b border-white/25
                outline-none
                transition
                focus:border-white
              "
            />
            <label
              className="
                absolute left-0 top-3 text-sm text-gray-400
                transition-all duration-300
                peer-focus:-top-4 peer-focus:text-xs
                peer-valid:-top-4 peer-valid:text-xs
              "
            >
              {field.label}
            </label>
            <span className="absolute left-0 bottom-0 h-px w-0 bg-white transition-all duration-500 group-focus-within:w-full" />
          </motion.div>
        ))}

        {/* MESSAGE */}
        <motion.div variants={item} className="relative group">
          <textarea
            rows={2}
            required
            className="
              peer w-full bg-transparent
              py-3 text-base text-white
              border-b border-white/25
              outline-none resize-none
              transition
            
            "
          />
          <label
            className="
              absolute left-0 top-3 text-sm text-gray-400
              transition-all duration-300
              peer-focus:-top-4 peer-focus:text-xs
              peer-valid:-top-4 peer-valid:text-xs
            "
          >
            Message
          </label>
          <span className="absolute left-0 bottom-0 h-px w-0 bg-white transition-all duration-500 group-focus-within:w-full" />
        </motion.div>

        {/* SUBMIT */}
        <motion.button
          variants={item}
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.96 }}
          className="
            mt-4 inline-flex items-center gap-3
            text-sm font-medium
            border-b border-white/40
            pb-1
            hover:border-white
            transition
          "
        >
          Send Message <FiArrowUpRight />
        </motion.button>
      </motion.form>
    </section>
  );
}

export default memo(ContactForm);
