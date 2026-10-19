import { useState } from "react";
import { motion } from "motion/react";
import { useInView } from "./useInView";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import nchImg from "figma:asset/66524058c9ff14f01106f0bb7384440294cbc133.png";
import leeHealthImg from "figma:asset/23b32f4102d1f8eaf2e6f7e9e48a91fd158662e9.png";
import artGalleryImg from "figma:asset/f6fc1664fb1d63c336b9aad3ba0a27a237c20461.png";
import syncraMedImg from "figma:asset/9cd36daa17c9e5efbae7c86dd37270f884c3c59a.png";
import assemblyImg from "figma:asset/c908e7a8a708bb84c334adca6bcc59c56c3add9c.png";
import k9SquadImg from "../../imports/Screenshot_2026-07-02_231036.png";
import fgcuMathImg from "../../imports/Screenshot_2026-07-27_081909.png";

export function Projects() {
  const [ref, isInView] = useInView();
  const [hoveredIndex, setHoveredIndex] = useState<
    number | null
  >(null);

  const projects = [
    {
      title: "FGCU Mathematics Department",
      description:
        "An official FGCU department website I was tasked with revamping and modernizing.",
      tags: ["Modern Campus CMS", "HTML", "CSS", "JavaScript"],
      image: fgcuMathImg,
      gradient: "from-red-500/20 to-pink-500/20",
      demoUrl: "https://www.fgcu.edu/cas/departments/math/",
    },
    /*{
      title: "Professional K-9 Squad USA",
      description:
        "An official company website I made for my internship at Professional K-9 Squad USA in Summer 2026.",
      tags: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "RESTful APIs",
      ],
      image: k9SquadImg,
      gradient: "from-red-500/20 to-pink-500/20",
      demoUrl: "https://sponge-n82993820.figma.site/",
    },*/
    {
      title:
        "Lee Health Parkinson's Disease Predictive Heatmap",
      description:
        "A group project made for my Requirements Engineering & Analysis course intended for internal, educational use by the Lee Health Parkinson Program.",
      tags: [
        "HTML",
        "CSS",
        "JavaScript",
        "Python",
        "Flask",
        "Render",
        "Vercel",
        "RESTful APIs",
      ],
      image: leeHealthImg,
      gradient: "from-red-500/20 to-pink-500/20",
      githubUrl:
        "https://github.com/nessakura-eng/lee-health-pdph.git",
      demoUrl: "https://lee-health-pdph-razt.vercel.app/",
    },
    {
      title: "NCH Clinical Training Assessment",
      description:
        "A research project in the Software Engineering, AI, and Healthcare fields made for Naples Comprehensive Health (NCH).",
      tags: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "n8n",
        "Docker",
        "Supabase",
        "Google Gemini API",
      ],
      image: nchImg,
      gradient: "from-red-500/20 to-pink-500/20",
      demoUrl:
        "https://www.figma.com/make/LgIC3QZnQLI5ckXfpMkTo2/Clinical-Training-Assessment?p=f&t=SEXxMQQzlJxo62aP-0&fullscreen=1",
    },
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
    {
      title: "SyncraMed",
      description:
        "A group project made for my Entrepreneur AI-Based Startups course that was intended to be an MVP for a mock Business Pitch.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
      image: syncraMedImg,
      gradient: "from-red-500/20 to-pink-500/20",
      githubUrl: "https://github.com/SyncraMed/SyncraMed.git",
      demoUrl:
        "https://test-syncra-d0wcuzrdj-hazelv03-3573s-projects.vercel.app/",
    },
    {
      title: "Traffic Light Simulation",
      description:
        "A project made for my Computer Organization & Assembly Language course that was intended to simulate an intersection.",
      tags: [
        "AVR Assembly",
        "Arduino",
        "Embedded Systems",
        "C++",
      ],
      image: assemblyImg,
      gradient: "from-red-500/20 to-pink-500/20",
      githubUrl:
        "https://github.com/nessakura-eng/avr-assembly.git",
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
                    <div
                      className={`w-full h-48 mb-4 rounded-lg overflow-hidden ${
                        index === 0 || index === 1
                          ? "bg-white"
                          : "bg-slate-800/50"
                      }`}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className={`w-full h-full transition-transform duration-300 ${
                          index === 0 || index === 1
                            ? "object-contain group-hover:scale-110"
                            : "object-cover group-hover:scale-110"
                        }`}
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