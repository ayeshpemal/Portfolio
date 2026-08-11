import { motion } from "framer-motion";
import { ArrowDown, Mail, ExternalLink, FileText } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./shared/SocialIcons";
import { personalInfo } from "../data/portfolio";

const floatVariants = {
  animate: {
    y: [0, -12, 0],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-brand-500/10 dark:bg-brand-500/15 rounded-full blur-3xl" />
        <div className="absolute top-1/4 -left-32 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl animate-pulse-slow" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(74,103,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(74,103,246,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold text-brand-500 dark:text-brand-400 bg-brand-500/10 rounded-full border border-brand-500/20 uppercase tracking-widest">
                Available for opportunities
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-display font-bold text-4xl sm:text-5xl md:text-6xl xl:text-7xl text-slate-900 dark:text-white leading-tight mb-4"
            >
              Hi, I'm{" "}
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-accent-500">
                  Ayesha
                </span>
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-500 to-accent-500 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                />
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-xl sm:text-2xl font-medium text-slate-600 dark:text-slate-300 mb-6"
            >
              {personalInfo.title}
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="max-w-xl mx-auto lg:mx-0 text-base sm:text-lg text-slate-500 dark:text-slate-400 leading-relaxed mb-10"
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
            >
              <button
                id="hero-cta-work"
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-primary text-base"
              >
                View My Work
                <ArrowDown size={16} />
              </button>
              <a
                id="hero-cta-cv"
                href={personalInfo.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-base"
              >
                View CV
                <FileText size={16} />
              </a>
              <button
                id="hero-cta-contact"
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-outline text-base"
              >
                Contact Me
                <Mail size={16} />
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-4 justify-center lg:justify-start"
            >
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-github"
                aria-label="GitHub"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-dark-600 text-slate-600 dark:text-slate-300 hover:text-brand-500 hover:bg-brand-500/10 transition-all duration-200"
              >
                <GitHubIcon size={20} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-linkedin"
                aria-label="LinkedIn"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-dark-600 text-slate-600 dark:text-slate-300 hover:text-brand-500 hover:bg-brand-500/10 transition-all duration-200"
              >
                <LinkedInIcon size={20} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                id="hero-email"
                aria-label="Email"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-dark-600 text-slate-600 dark:text-slate-300 hover:text-brand-500 hover:bg-brand-500/10 transition-all duration-200"
              >
                <Mail size={20} />
              </a>
            </motion.div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            className="hidden lg:flex flex-shrink-0 items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <motion.div
              variants={floatVariants}
              animate="animate"
              className="relative w-72 h-72 xl:w-80 xl:h-80"
            >
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border border-brand-500/20 animate-spin-slow" />
              <div className="absolute inset-4 rounded-full border border-accent-500/15 animate-spin-slow" style={{ animationDirection: "reverse" }} />
              {/* Main avatar circle */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-brand-600 to-accent-600 shadow-glow flex items-center justify-center">
                <span className="font-display font-bold text-7xl text-white/90 select-none"><img className="rounded-full" src="pp.jpg"></img></span>
              </div>
              {/* Floating badge: React */}
              <motion.div
                className="absolute top-10 -right-5 bg-white dark:bg-dark-600 rounded-xl px-3 py-1.5 shadow-card text-xs font-semibold text-brand-600 dark:text-brand-400 border border-brand-500/20"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0 }}
              >
                React ⚛️
              </motion.div>
              {/* Floating badge: NestJS */}
              <motion.div
                className="absolute -bottom-2 left-4 bg-white dark:bg-dark-600 rounded-xl px-3 py-1.5 shadow-card text-xs font-semibold text-red-500 border border-red-500/20"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.2 }}
              >
                NestJS 🔴
              </motion.div>
              {/* Floating badge: AWS */}
              <motion.div
                className="absolute top-3/4 -right-10 bg-white dark:bg-dark-600 rounded-xl px-3 py-1.5 shadow-card text-xs font-semibold text-orange-500 border border-orange-500/20"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.6 }}
              >
                AWS ☁️
              </motion.div>
              {/* Floating badge: Supabase */}
              <motion.div
              className="absolute -top-0 left-2 bg-white dark:bg-dark-600 rounded-xl px-3 py-1.5 shadow-card text-xs font-semibold text-green-500 border border-green-500/20"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.6 }}>
                Supabase⚡
              </motion.div>
              {/* Floating badge: PostgreSQL */}
              <motion.div
              className="absolute top-1/2 -left-20 bg-white dark:bg-dark-600 rounded-xl px-3 py-1.5 shadow-card text-xs font-semibold text-blue-500 border border-blue-500/20"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.6 }}>
                PostgreSQL 🐘
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 dark:text-slate-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
