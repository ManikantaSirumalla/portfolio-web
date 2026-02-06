"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { skills, type Skill } from "@/lib/data";

const categories = [
  { key: "all", label: "All" },
  { key: "ios", label: "iOS Development" },
  { key: "ml", label: "Data Science & ML" },
  { key: "tools", label: "Tools & Platforms" },
] as const;

function SkillIcon({ skill }: { skill: Skill }) {
  // Simple initial-based icon with gradient
  const initial = skill.name.charAt(0).toUpperCase();
  return (
    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-sm font-semibold bg-gradient-to-br from-[var(--accent)] to-[var(--accent-tertiary)]">
      {initial}
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="section-padding section-alt" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p
            className="text-sm font-medium uppercase tracking-widest mb-4"
            style={{ color: "var(--accent)" }}
          >
            Skills
          </p>
          <h2 className="heading-lg">
            Technologies I
            <br />
            <span className="gradient-text">work with.</span>
          </h2>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.key
                  ? "text-white shadow-lg"
                  : "hover:opacity-80"
              }`}
              style={{
                background:
                  activeCategory === cat.key ? "var(--accent)" : "var(--card)",
                color:
                  activeCategory === cat.key ? "white" : "var(--foreground)",
                border: `1px solid ${
                  activeCategory === cat.key
                    ? "var(--accent)"
                    : "var(--card-border)"
                }`,
              }}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          {filteredSkills.map((skill, i) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass-card p-5 flex flex-col items-center gap-3 text-center"
            >
              <SkillIcon skill={skill} />
              <span className="text-sm font-medium">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Specialty cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-2 gap-6 mt-16"
        >
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center"
                style={{ background: "rgba(0, 113, 227, 0.1)" }}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="1.5"
                >
                  <rect x="5" y="2" width="14" height="20" rx="3" />
                  <line x1="12" y1="18" x2="12" y2="18.01" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">iOS Development</h3>
            </div>
            <p style={{ color: "var(--muted)" }}>
              Expert in building native iOS applications with Swift and SwiftUI.
              Deep knowledge of Apple frameworks including Core ML, ARKit,
              HealthKit, and the full Apple ecosystem. Focused on performance,
              accessibility, and pixel-perfect UI.
            </p>
          </div>

          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center"
                style={{ background: "rgba(168, 85, 247, 0.1)" }}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                  fill="none"
                  stroke="var(--accent-tertiary)"
                  strokeWidth="1.5"
                >
                  <path d="M12 2a4 4 0 014 4v1a1 1 0 001 1h1a4 4 0 010 8h-1a1 1 0 00-1 1v1a4 4 0 01-8 0v-1a1 1 0 00-1-1H6a4 4 0 010-8h1a1 1 0 001-1V6a4 4 0 014-4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">
                Data Science & Machine Learning
              </h3>
            </div>
            <p style={{ color: "var(--muted)" }}>
              Skilled in building and deploying ML models with TensorFlow,
              PyTorch, and scikit-learn. Experience with NLP, computer vision,
              and deep learning. Proficient in data analysis, feature
              engineering, and model optimization for edge deployment.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
