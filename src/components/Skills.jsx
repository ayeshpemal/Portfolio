import { motion } from "framer-motion";
import { Code2, Layers, Database, Cloud } from "lucide-react";
import SectionWrapper from "./shared/SectionWrapper";
import { skills } from "../data/portfolio";

const categoryConfig = {
  Languages: {
    icon: Code2,
    gradient: "from-brand-500 to-indigo-600",
    tagBg: "bg-brand-500/10 text-brand-600 dark:text-brand-400 border-brand-500/20",
  },
  "Frameworks & Tech": {
    icon: Layers,
    gradient: "from-violet-500 to-purple-700",
    tagBg: "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20",
  },
  Databases: {
    icon: Database,
    gradient: "from-emerald-500 to-teal-700",
    tagBg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  },
  "Cloud & DevOps": {
    icon: Cloud,
    gradient: "from-amber-500 to-orange-600",
    tagBg: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
  },
};

const pillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, delay: i * 0.06, ease: "easeOut" },
  }),
};

function SkillCategory({ name, items, config }) {
  const { icon: Icon, gradient, tagBg } = config;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="glass-card p-6"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div
          className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center flex-shrink-0 shadow-sm`}
        >
          <Icon size={18} className="text-white" />
        </div>
        <h3 className="font-display font-semibold text-base text-slate-900 dark:text-white">
          {name}
        </h3>
      </div>

      {/* Pills */}
      <div className="flex flex-wrap gap-2">
        {items.map((skill, i) => (
          <motion.span
            key={skill}
            custom={i}
            variants={pillVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.08 }}
            className={`inline-block px-3 py-1.5 rounded-lg text-xs font-medium border cursor-default transition-all duration-200 ${tagBg}`}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <SectionWrapper
      id="skills"
      className="py-24 px-4 sm:px-6 max-w-6xl mx-auto"
    >
      <div className="text-center mb-16">
        <p className="section-subheading">Technical Expertise</p>
        <h2 className="section-heading">Skills & Technologies</h2>
        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-brand-500 to-accent-500" />
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {Object.entries(skills).map(([category, items]) => (
          <SkillCategory
            key={category}
            name={category}
            items={items}
            config={categoryConfig[category]}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
