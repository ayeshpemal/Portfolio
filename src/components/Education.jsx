import { motion } from "framer-motion";
import { GraduationCap, Star, Calendar } from "lucide-react";
import SectionWrapper from "./shared/SectionWrapper";
import { education } from "../data/portfolio";

export default function Education() {
  return (
    <SectionWrapper
      id="education"
      className="py-24 px-4 sm:px-6 max-w-6xl mx-auto"
    >
      <div className="text-center mb-16">
        <p className="section-subheading">Academic Background</p>
        <h2 className="section-heading">Education</h2>
        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-brand-500 to-accent-500" />
      </div>

      <div className="max-w-2xl mx-auto">
        {education.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4 }}
            className="glass-card overflow-hidden"
          >
            {/* Top accent bar */}
            <div className="h-1.5 bg-gradient-to-r from-brand-500 via-accent-500 to-brand-600" />

            <div className="p-8 sm:p-10">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
                <div className="flex gap-5 items-start">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-500 to-accent-600 flex items-center justify-center shadow-glow-sm">
                    <GraduationCap size={26} className="text-white" />
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-brand-500 dark:text-brand-400 font-semibold text-base mb-3">
                      {edu.institution}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                      <Calendar size={14} />
                      <span>{edu.duration}</span>
                    </div>
                  </div>
                </div>

                {/* GPA badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
                  className="self-start sm:self-center flex-shrink-0"
                >
                  {/* <div className="flex flex-col items-center px-6 py-4 rounded-2xl bg-gradient-to-br from-brand-500/10 to-accent-500/10 border border-brand-500/20">
                    <div className="flex items-center gap-1 mb-1">
                      <Star size={14} className="text-amber-400 fill-amber-400" />
                      <Star size={14} className="text-amber-400 fill-amber-400" />
                      <Star size={14} className="text-amber-400 fill-amber-400" />
                    </div>
                    <span className="font-display font-bold text-3xl text-brand-500 dark:text-brand-400">
                      {edu.gpa}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                      GPA
                    </span>
                  </div> */}
                </motion.div>
              </div>

              {/* Achievement note */}
              <div className="mt-6 pt-6 border-t border-slate-200/50 dark:border-white/5">
                <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
                  Graduated with First Class
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
