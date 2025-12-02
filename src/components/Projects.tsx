import { useState } from "react";
import { motion } from "motion/react";
import { useInView } from "./useInView";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import artGalleryImg from "figma:asset/f6fc1664fb1d63c336b9aad3ba0a27a237c20461.png";

export function Projects() {
  const [ref, isInView] = useInView();
  const [hoveredIndex, setHoveredIndex] = useState<
    number | null
  >(null);

  const projects = [
    {
      title: "FGCU Library Art Gallery",
      description:
        "A group project made for my Software Engineering Fundamentals course intended for use by the FGCU Library.",
      tags: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Supabase",
        "CI/CD",
      ],
      image: artGalleryImg,
      gradient: "from-red-500/20 to-pink-500/20",
      githubUrl:
        "https://github.com/FGCU-Byte-Squad/FGCU-Art-Gallery.git",
      demoUrl: "https://jasper-mask-69789565.figma.site/",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen py-20 relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <span className="text-[#ffb7c5] text-lg">
                {"<projects>"}
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-[#ffb7c5] via-[#ffd4e0] to-[#ffcba4] bg-clip-text text-transparent mb-4">
              Featured Work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="group relative"
              >
                <motion.div
                  animate={{
                    rotateY: hoveredIndex === index ? 5 : 0,
                    rotateX: hoveredIndex === index ? 5 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ transformStyle: "preserve-3d" }}
                  className="relative h-full bg-slate-900/50 backdrop-blur-sm rounded-lg border border-slate-700 overflow-hidden hover:border-[#ffb7c5]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#ffb7c5]/10"
                >
                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  ></div>

                  {/* Sparkle Effect */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0,
                    }}
                    className="absolute top-4 right-4 z-10"
                  >
                    <Sparkles
                      className="text-[#ffb7c5]"
                      size={20}
                    />
                  </motion.div>

                  <div
                    className="relative p-6 h-full flex flex-col"
                    style={{ transform: "translateZ(20px)" }}
                  >
                    {/* Project Image */}
                    <div className="w-full h-48 mb-4 rounded-lg bg-slate-800/50 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>

                    <h3 className="text-white text-xl mb-3">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-slate-800/50 border border-slate-700 rounded text-[#ffb7c5] text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#ffb7c5]/10 to-[#ffd4e0]/10 border border-[#ffb7c5]/50 rounded-lg text-[#ffb7c5] hover:from-[#ffb7c5]/20 hover:to-[#ffd4e0]/20 transition-colors"
                        >
                          <Github size={16} />
                          <span className="text-sm">Code</span>
                        </motion.a>
                      )}
                      {project.demoUrl && (
                        <motion.a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-300 hover:border-[#ffb7c5]/50 hover:text-[#ffb7c5] transition-all"
                        >
                          <ExternalLink size={16} />
                          <span className="text-sm">Demo</span>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-center mt-16"
          >
            <span className="text-[#ffb7c5] text-lg">
              {"</projects>"}
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}