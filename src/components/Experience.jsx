import { motion } from "framer-motion";
import { MapPin, Calendar, CheckCircle2 } from "lucide-react";
import SectionWrapper from "./shared/SectionWrapper";
import { experience } from "../data/portfolio";

const tagColors = [
  "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20",
  "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
  "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
  "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20",
];

function StackTag({ label, index }) {
  const colorClass = tagColors[index % tagColors.length];
  return (
    <span
      className={`inline-block px-2.5 py-1 rounded-lg text-xs font-medium border ${colorClass}`}
    >
      {label}
    </span>
  );
}

const listItem = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const listContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

export default function Experience() {
  return (
    <SectionWrapper
      id="experience"
      className="py-24 px-4 sm:px-6 max-w-6xl mx-auto"
    >
      {/* Section header */}
      <div className="text-center mb-16">
        <p className="section-subheading">Career</p>
        <h2 className="section-heading">Work Experience</h2>
        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-brand-500 to-accent-500" />
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-500/50 via-accent-500/30 to-transparent transform md:-translate-x-1/2" />

        {experience.map((job, i) => (
          <div
            key={i}
            className="relative flex flex-col md:flex-row md:items-start gap-8 pl-8 md:pl-0 mb-12 last:mb-0"
          >
            {/* Timeline dot */}
            <div className="absolute left-0 md:left-1/2 top-1 w-4 h-4 rounded-full bg-brand-500 border-2 border-white dark:border-dark-900 shadow-glow-sm transform md:-translate-x-1/2 z-10" />

            {/* Left: Date & Location (desktop) */}
            <div className="hidden md:flex flex-col items-end flex-1 pr-12 pt-1">
              <div className="flex items-center gap-2 text-sm font-medium text-brand-500 dark:text-brand-400 mb-1">
                <Calendar size={14} />
                <span>{job.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <MapPin size={14} />
                <span>{job.location}</span>
              </div>
            </div>

            {/* Card */}
            <div className="flex-1 md:pl-12">
              <div className="glass-card p-6 sm:p-8">
                {/* Mobile: date */}
                <div className="flex md:hidden flex-wrap items-center gap-3 mb-4 text-sm text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={13} />
                    {job.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={13} />
                    {job.location}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white mb-1">
                  {job.role}
                </h3>
                <p className="text-brand-500 dark:text-brand-400 font-semibold text-sm mb-5">
                  @ {job.company}
                </p>

                {/* Achievements */}
                <motion.ul
                  variants={listContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-3 mb-6"
                >
                  {job.achievements.map((item, idx) => (
                    <motion.li
                      key={idx}
                      variants={listItem}
                      className="flex gap-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed"
                    >
                      <CheckCircle2
                        size={16}
                        className="flex-shrink-0 mt-0.5 text-brand-500"
                      />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {job.stack.map((tech, idx) => (
                    <StackTag key={tech} label={tech} index={idx} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
