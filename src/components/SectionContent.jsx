import { AnimatePresence, motion } from "framer-motion";

export default function SectionContent({ section }) {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={section}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-center max-w-xl"
            >
                {section === "home" && (
                    <>
                        <h1 className="text-6xl font-bold">Creative Developer</h1>
                        <p className="mt-4 text-gray-400">
                            Building immersive web experiences
                        </p>
                    </>
                )}

                {section === "about" && <h2 className="text-5xl">About Me</h2>}
                {section === "projects" && <h2 className="text-5xl">Projects</h2>}
                {section === "contact" && <h2 className="text-5xl">Contact</h2>}
            </motion.div>
        </AnimatePresence>
    );
}
