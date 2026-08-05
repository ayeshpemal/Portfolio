import { Mail, Heart } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./shared/SocialIcons";
import { personalInfo } from "../data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200/50 dark:border-white/5 bg-slate-50 dark:bg-dark-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center sm:text-left">
            <p className="font-display font-bold text-lg text-slate-900 dark:text-white">
              <span className="text-brand-500">A</span>yesha<span className="text-brand-500">.</span>
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Software Engineer · Sri Lanka
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              id="footer-github"
              aria-label="GitHub"
              className="p-2.5 rounded-xl text-slate-500 dark:text-slate-400 hover:text-brand-500 hover:bg-brand-500/10 transition-all duration-200"
            >
              <GitHubIcon size={18} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              id="footer-linkedin"
              aria-label="LinkedIn"
              className="p-2.5 rounded-xl text-slate-500 dark:text-slate-400 hover:text-brand-500 hover:bg-brand-500/10 transition-all duration-200"
            >
              <LinkedInIcon size={18} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              id="footer-email"
              aria-label="Email"
              className="p-2.5 rounded-xl text-slate-500 dark:text-slate-400 hover:text-brand-500 hover:bg-brand-500/10 transition-all duration-200"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-200/50 dark:border-white/5 text-center">
          <p className="text-xs text-slate-400 dark:text-slate-500 flex items-center justify-center gap-1.5">
            © {year} Ayesha Senarath · Built with
            <Heart size={11} className="text-rose-500 fill-rose-500 inline" />
            using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
