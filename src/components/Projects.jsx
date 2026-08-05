import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";
import SectionWrapper from "./shared/SectionWrapper";
import { projects } from "../data/portfolio";

const tagColors = [
  "bg-brand-500/10 text-brand-600 dark:text-brand-400 border-brand-500/20",
  "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20",
  "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
  "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
  "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20",
  "bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-400 border-fuchsia-500/20",
  "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20",
];

function TechTag({ label, index }) {
  return (
    <span
      className={`inline-block px-2.5 py-1 rounded-lg text-xs font-medium border ${
        tagColors[index % tagColors.length]
      }`}
    >
      {label}
    </span>
  );
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

export default function Projects() {
  return (
    <SectionWrapper
      id="projects"
      className="py-24 px-4 sm:px-6 max-w-6xl mx-auto"
    >
      {/* Header */}
      <div className="text-center mb-16">
        <p className="section-subheading">Portfolio</p>
        <h2 className="section-heading">Featured Projects</h2>
        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-brand-500 to-accent-500" />
      </div>

      {/* Featured grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {projects.featured.map((project, i) => (
          <motion.div
            key={project.name}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="group glass-card overflow-hidden flex flex-col"
          >
            {/* Gradient header */}
            <div
              className={`h-2 w-full bg-gradient-to-r ${project.color}`}
            />

            <div className="p-6 sm:p-8 flex flex-col flex-1">
              {/* Meta */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <span className="inline-block px-2.5 py-1 mb-2 rounded-full bg-slate-100 dark:bg-dark-600 text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {project.type}
                  </span>
                  <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white group-hover:text-brand-500 dark:group-hover:text-brand-400 transition-colors duration-200">
                    {project.name}
                  </h3>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 flex-shrink-0">
                  <Calendar size={12} />
                  <span>{project.duration}</span>
                </div>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed flex-1 mb-5">
                {project.description}
              </p>

              {/* Stack */}
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech, idx) => (
                  <TechTag key={tech} label={tech} index={idx} />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Projects */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card p-6 sm:p-8"
      >
        <h3 className="font-display font-semibold text-lg text-slate-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="w-1.5 h-5 bg-gradient-to-b from-brand-500 to-accent-500 rounded-full inline-block" />
          Other Notable Projects
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {projects.additional.map((proj, i) => (
            <motion.div
              key={proj.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ scale: 1.02 }}
              className="flex items-center justify-between gap-3 p-4 rounded-xl bg-slate-50 dark:bg-dark-600/50 border border-slate-200/50 dark:border-white/5 cursor-default"
            >
              <div>
                <p className="font-medium text-sm text-slate-800 dark:text-slate-100">
                  {proj.name}
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500 flex-shrink-0">
                <Clock size={11} />
                <span>{proj.duration}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
