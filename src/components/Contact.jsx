import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ExternalLink, Send, CheckCircle2 } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./shared/SocialIcons";
import SectionWrapper from "./shared/SectionWrapper";
import { personalInfo } from "../data/portfolio";

const socials = [
  {
    label: "GitHub",
    href: personalInfo.github,
    icon: GitHubIcon,
    color: "hover:text-white hover:bg-slate-800 dark:hover:bg-slate-700",
  },
  {
    label: "LinkedIn",
    href: personalInfo.linkedin,
    icon: LinkedInIcon,
    color: "hover:text-white hover:bg-blue-600",
  },
  {
    label: "Portfolio",
    href: `https://${personalInfo.portfolio}`,
    icon: ExternalLink,
    color: "hover:text-white hover:bg-brand-600",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Invalid email address.";
    if (!form.message.trim()) e.message = "Message is required.";
    return e;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setErrors({});
    // In a real implementation this would call an API / EmailJS
    setSubmitted(true);
  };

  return (
    <SectionWrapper
      id="contact"
      className="py-24 px-4 sm:px-6 max-w-6xl mx-auto"
    >
      <div className="text-center mb-16">
        <p className="section-subheading">Get In Touch</p>
        <h2 className="section-heading">Contact Me</h2>
        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-brand-500 to-accent-500" />
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        {/* Left: info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-display font-bold text-2xl text-slate-900 dark:text-white mb-4">
            Let's work together
          </h3>
          <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-8">
            I'm currently open to internship and full-time roles. Whether you
            have a project in mind or just want to say hi — feel free to reach
            out. I'll do my best to get back to you promptly.
          </p>

          <div className="space-y-4 mb-8">
            <a
              href={`mailto:${personalInfo.email}`}
              id="contact-email-link"
              className="flex items-center gap-4 p-4 glass-card hover:border-brand-500/30 transition-all duration-200 group"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-500 transition-colors duration-200">
                <Mail size={18} className="text-brand-500 group-hover:text-white transition-colors duration-200" />
              </div>
              <div>
                <p className="text-xs text-slate-400 mb-0.5">Email</p>
                <p className="text-sm font-medium text-slate-800 dark:text-slate-200">{personalInfo.email}</p>
              </div>
            </a>

            <a
              href={`tel:${personalInfo.phone}`}
              id="contact-phone-link"
              className="flex items-center gap-4 p-4 glass-card hover:border-brand-500/30 transition-all duration-200 group"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-500 transition-colors duration-200">
                <Phone size={18} className="text-brand-500 group-hover:text-white transition-colors duration-200" />
              </div>
              <div>
                <p className="text-xs text-slate-400 mb-0.5">Phone</p>
                <p className="text-sm font-medium text-slate-800 dark:text-slate-200">{personalInfo.phone}</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 glass-card">
              <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center flex-shrink-0">
                <MapPin size={18} className="text-brand-500" />
              </div>
              <div>
                <p className="text-xs text-slate-400 mb-0.5">Location</p>
                <p className="text-sm font-medium text-slate-800 dark:text-slate-200">{personalInfo.location}</p>
              </div>
            </div>
          </div>

          {/* Socials */}
          <div className="flex gap-3">
            {socials.map(({ label, href, icon: Icon, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                id={`contact-social-${label.toLowerCase()}`}
                aria-label={label}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl glass-card text-slate-600 dark:text-slate-300 text-sm font-medium transition-all duration-200 ${color}`}
              >
                <Icon size={16} />
                {label}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right: form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card p-10 flex flex-col items-center justify-center text-center h-full min-h-[340px]"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.1 }}
              >
                <CheckCircle2 size={56} className="text-emerald-500 mb-4" />
              </motion.div>
              <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white mb-2">
                Message Sent!
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                Thanks for reaching out. I'll get back to you as soon as possible.
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              id="contact-form"
              className="glass-card p-6 sm:p-8 space-y-5"
            >
              {/* Name */}
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                  Full Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-dark-600/50 border text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 transition-all duration-200 text-sm ${
                    errors.name ? "border-red-500" : "border-slate-200 dark:border-white/10"
                  }`}
                />
                {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-dark-600/50 border text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 transition-all duration-200 text-sm ${
                    errors.email ? "border-red-500" : "border-slate-200 dark:border-white/10"
                  }`}
                />
                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  placeholder="Hi Ayesha, I'd love to discuss..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-dark-600/50 border text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 transition-all duration-200 text-sm resize-none ${
                    errors.message ? "border-red-500" : "border-slate-200 dark:border-white/10"
                  }`}
                />
                {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
              </div>

              <button
                type="submit"
                id="contact-submit"
                className="btn-primary w-full justify-center"
              >
                <Send size={16} />
                Send Message
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
