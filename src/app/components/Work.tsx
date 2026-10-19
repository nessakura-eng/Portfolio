import { motion } from "motion/react";
import { useInView } from "./useInView";
import { Briefcase, Calendar, Award, Code2 } from "lucide-react";

export function Work() {
  const [ref, isInView] = useInView();

  const jobs = [
    {
      title: "Software Engineer",
      company: "Professional K-9 Squad USA",
      period: "July 2026 - Present",
      description:
        "Building and maintaining the official company website during an internship, delivering a production-ready React application for a professional K-9 training and care service.",
      highlights: [
        "Designed and developed the full company website from scratch",
        "Implemented responsive layouts and modern UI with Tailwind CSS",
        "Integrated RESTful APIs for dynamic content and service listings",
      ],
      skills: ["React", "TypeScript", "Tailwind CSS", "RESTful APIs"],
    },
  ];

  return (
    <section
      id="work"
      className="min-h-screen py-20 relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <span className="text-[#ffb7c5] text-lg">{"<work>"}</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-[#ffb7c5] via-[#ffd4e0] to-[#ffcba4] bg-clip-text text-transparent mb-4">
              Work Experience
            </h2>
            <p className="text-slate-400 text-lg">
              Turning skills into real-world impact
            </p>
          </div>

          {jobs.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative"
            >
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-rose-400 via-pink-500 to-transparent hidden md:block"></div>

              <div className="relative pl-0 md:pl-24">
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.4 }}
                  className="absolute left-6 top-8 w-5 h-5 rounded-full bg-gradient-to-r from-[#ffb7c5] to-[#ffd4e0] border-4 border-[#3d2730] hidden md:block"
                >
                  <motion.div
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 rounded-full bg-rose-400/30"
                  ></motion.div>
                </motion.div>

                {/* Work Card */}
                <div className="bg-slate-900/50 backdrop-blur-sm rounded-lg border border-slate-700 overflow-hidden hover:border-rose-400/50 transition-all duration-300">
                  <div className="p-8">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#ffb7c5]/10 to-[#ffd4e0]/10 flex items-center justify-center">
                            <Briefcase className="text-[#ffb7c5]" size={24} />
                          </div>
                          <div>
                            <h3 className="text-white text-xl">{job.title}</h3>
                            <p className="text-[#ffb7c5]">{job.company}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-slate-400 mt-4 md:mt-0">
                        <Calendar size={16} />
                        <span>{job.period}</span>
                      </div>
                    </div>

                    <p className="text-slate-400 mb-6">{job.description}</p>

                    {/* Highlights */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Award className="text-[#ffb7c5]" size={18} />
                        <h4 className="text-white">Key Highlights</h4>
                      </div>
                      <div className="space-y-2">
                        {job.highlights.map((highlight, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.3 + i * 0.1 }}
                            className="flex items-center gap-2"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-[#ffb7c5]"></div>
                            <span className="text-slate-400">{highlight}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Skills */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Code2 className="text-[#ffb7c5]" size={18} />
                        <h4 className="text-white">Technologies Used</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 0.4 + i * 0.05 }}
                            className="px-3 py-1.5 bg-slate-800/50 border border-slate-700 rounded-full text-slate-400 text-sm hover:border-[#ffb7c5]/50 hover:text-[#ffb7c5] transition-all"
                          >
                            {skill}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-center mt-12"
          >
            <span className="text-[#ffb7c5] text-lg">{"</work>"}</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
