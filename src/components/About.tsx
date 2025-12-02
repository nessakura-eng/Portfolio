import { motion } from "motion/react";
import { useInView } from "./useInView";
import { Code2, Sparkles, Zap, Target } from "lucide-react";

export function About() {
  const [ref, isInView] = useInView();

  const skills = [
    {
      name: "Frontend",
      items: [
        "HTML",
        "CSS/Tailwind CSS",
        "JavaScript",
        "TypeScript",
      ],
      icon: Code2,
    },
    {
      name: "Backend",
      items: [
        "Python",
        "Java",
        "PostgreSQL",
        "Supabase",
        "REST APIs",
        "PHP",
      ],
      icon: Zap,
    },
    {
      name: "Tools",
      items: ["Git", "Docker", "VS Code", "n8n", "Figma"],
      icon: Sparkles,
    },
    {
      name: "Frameworks & Stacks",
      items: ["React", "LAMP"],
      icon: Target,
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen py-20 relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <span className="text-[#ffb7c5] text-lg">
                {"<about>"}
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-[#ffb7c5] via-[#ffd4e0] to-[#ffcba4] bg-clip-text text-transparent mb-4">
              Who I Am
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              A passionate software engineering student
              dedicated to creating elegant solutions to complex
              problems
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.5,
                  }}
                  className="group"
                >
                  <div className="relative h-full p-6 bg-slate-900/50 backdrop-blur-sm rounded-lg border border-slate-700 hover:border-[#ffb7c5]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#ffb7c5]/10 hover:-translate-y-2">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#ffb7c5]/5 to-[#e5b7ff]/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>

                    <div className="relative">
                      <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-[#ffb7c5]/10 to-[#ffd4e0]/10 flex items-center justify-center group-hover:from-[#ffb7c5]/20 group-hover:to-[#ffd4e0]/20 transition-colors">
                        <Icon
                          className="text-[#ffb7c5]"
                          size={24}
                        />
                      </div>

                      <h3 className="text-white mb-3">
                        {category.name}
                      </h3>

                      <div className="space-y-2">
                        {category.items.map((item) => (
                          <div
                            key={item}
                            className="flex items-center gap-2"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-[#ffb7c5]"></div>
                            <span className="text-slate-400 text-sm">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-16 max-w-3xl mx-auto"
          >
            <div className="p-8 bg-slate-900/30 backdrop-blur-sm rounded-lg border border-slate-700">
              <p className="text-slate-300 leading-relaxed mb-4">
                I am a full-time student at Florida Gulf Coast
                University, currently pursuing a Bachelor of
                Science in Software Engineering. Even before
                applying to university, I knew I wanted to
                become a Software Engineer after discovering
                HTML at age 12. This newfound knowledge sparked
                my curiosity about coding and opened the door to
                a deeper interest in technology - one that
                ultimately led me to my career path early on.
                Since then, I have worked on several projects
                that have given me hands-on experience with
                various technologies, LLMs, and programming
                languages, including Python, C++, Java, C, and
                PHP.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                I am also an active member of the Society of
                Women Engineers and the Society of Hispanic
                Professional Engineers. I joined these two
                amazing societies because they represent a big
                part of my personal identity - aspects which are
                often underrepresented in STEM. Being part of
                communities that share my passions and
                challenges has only strengthened my drive to
                expand my knowledge and contribute to a dynamic,
                inclusive team.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-center mt-8"
          >
            <span className="text-[#ffb7c5] text-lg">
              {"</about>"}
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}