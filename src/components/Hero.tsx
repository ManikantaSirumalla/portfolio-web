"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: "var(--accent)" }}
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: "var(--accent-tertiary)" }}
        />
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -60, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 left-1/2 w-72 h-72 rounded-full opacity-10 blur-3xl"
          style={{ background: "var(--accent-secondary)" }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Pill badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-8"
        >
          <span className="tag">
            <span
              className="w-2 h-2 rounded-full mr-2 animate-pulse"
              style={{ background: "#34c759" }}
            />
            Available for new opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="heading-xl mb-4"
        >
          {personalInfo.name.split(" ")[0]}
          <br />
          <span className="gradient-text">
            {personalInfo.name.split(" ").slice(1).join(" ")}
          </span>
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="heading-md mb-6"
          style={{ color: "var(--muted)" }}
        >
          {personalInfo.title}
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="body-large max-w-2xl mx-auto mb-10"
        >
          {personalInfo.description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#projects" className="apple-button apple-button-primary">
            View My Work
            <svg
              className="ml-2"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17l9.2-9.2M17 17V7.8H7.8" />
            </svg>
          </a>
          <a href="#contact" className="apple-button apple-button-secondary">
            Get in Touch
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 flex items-start justify-center pt-2"
            style={{ borderColor: "var(--muted)" }}
          >
            <motion.div
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 rounded-full"
              style={{ background: "var(--muted)" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
