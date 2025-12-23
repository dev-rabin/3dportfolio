import { memo, useCallback, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import { item } from "../constants/animation";

const FIELDS = [
  { label: "Full Name", type: "text", name: "from_name" },
  { label: "Email Address", type: "email", name: "from_email" },
];

function ContactForm() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setSuccess(true);
        setLoading(false);
        formRef.current.reset();
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="flex items-center justify-center">
      <motion.form
        ref={formRef}
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
            key={field.name}
            variants={item}
            className="relative group"
          >
            <input
              type={field.type}
              name={field.name}
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
            name="message"
            rows={2}
            required
            className="
              peer w-full bg-transparent
              py-3 text-base text-white
              border-b border-white/25
              outline-none resize-none
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
          disabled={loading}
          className="
            mt-4 inline-flex items-center gap-3
            text-sm font-medium
            border-b border-white/40
            pb-1
            hover:border-white
            transition
            disabled:opacity-50
          "
        >
          {loading ? "Sending..." : "Send Message"} <FiArrowUpRight />
        </motion.button>

        {success && (
          <p className="text-sm text-green-400">
            Message sent successfully. I’ll get back to you soon.
          </p>
        )}
      </motion.form>
    </section>
  );
}

export default memo(ContactForm);
