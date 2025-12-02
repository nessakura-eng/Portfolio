import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Software Engineering Student";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-radial from-[#ffb7c5]/10 via-[#e5b7ff]/5 to-transparent"></div>

      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Terminal Window */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-slate-900/50 backdrop-blur-sm rounded-lg border border-slate-700 shadow-2xl overflow-hidden"
          >
            {/* Terminal Header */}
            <div className="bg-slate-800/50 px-4 py-2 flex items-center gap-2 border-b border-slate-700">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-2 text-slate-400 text-sm">
                ~/portfolio
              </span>
            </div>

            {/* Terminal Content */}
            <div className="p-8 md:p-12 text-left space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-[#ffb7c5]">$</span>
                <span className="text-slate-300">
                  cat introduction.txt
                </span>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="space-y-6"
              >
                <div>
                  <p className="text-slate-400 mb-2">
                    Hello, I'm
                  </p>
                  <h1 className="text-4xl md:text-6xl bg-gradient-to-r from-[#ffb7c5] via-[#ffd4e0] to-[#ffcba4] bg-clip-text text-transparent mb-4">
                    Vanessa Gutierrez
                  </h1>
                </div>

                <div className="flex items-center gap-2 min-h-[2rem]">
                  <span className="text-[#ffb7c5]">{">"}</span>
                  <p className="text-slate-300 text-lg md:text-xl">
                    {displayText}
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                      }}
                      className="inline-block w-2 h-5 bg-gradient-to-b from-[#ffb7c5] to-[#ffd4e0] ml-1"
                    ></motion.span>
                  </p>
                </div>

                <div className="pt-4 space-y-2">
                  <p className="text-slate-400">
                    Building innovative solutions and crafting
                    exceptional digital experiences.
                  </p>
                  <p className="text-slate-500 text-sm">
                    // Scroll down to explore my journey...
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Floating Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 flex gap-6 justify-center flex-wrap"
          >
            {["React", "Node.js", "Python", "TypeScript"].map(
              (tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ y: 0 }}
                  animate={{ y: [-10, 10, -10] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                  className="px-4 py-2 bg-gradient-to-r from-[#ffb7c5]/10 to-[#ffd4e0]/10 backdrop-blur-sm border border-[#ffb7c5]/30 rounded-full text-[#ffb7c5] text-sm"
                >
                  {tech}
                </motion.div>
              ),
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="text-[#ffb7c5]" size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
}