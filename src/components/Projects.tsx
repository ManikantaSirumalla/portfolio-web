"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { projects } from "@/lib/data";

const filters = [
  { key: "all", label: "All" },
  { key: "ios", label: "iOS" },
  { key: "ml", label: "Machine Learning" },
] as const;

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section-padding" ref={ref}>
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
            Projects
          </p>
          <h2 className="heading-lg">
            Things I&apos;ve
            <br />
            <span className="gradient-text">built.</span>
          </h2>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-12"
        >
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300`}
              style={{
                background:
                  activeFilter === f.key ? "var(--accent)" : "var(--card)",
                color: activeFilter === f.key ? "white" : "var(--foreground)",
                border: `1px solid ${
                  activeFilter === f.key
                    ? "var(--accent)"
                    : "var(--card-border)"
                }`,
              }}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* Featured projects */}
        <div className="space-y-8 mb-12">
          {filtered
            .filter((p) => p.featured)
            .map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                className="glass-card overflow-hidden"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Project image/visual area */}
                  <div
                    className="relative h-64 md:h-auto min-h-[300px] flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${
                        project.category === "ios"
                          ? "rgba(0, 113, 227, 0.08), rgba(94, 92, 230, 0.08)"
                          : "rgba(168, 85, 247, 0.08), rgba(94, 92, 230, 0.08)"
                      })`,
                    }}
                  >
                    <div className="text-center p-8">
                      <div
                        className="w-20 h-20 rounded-3xl mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold"
                        style={{
                          background:
                            project.category === "ios"
                              ? "linear-gradient(135deg, var(--accent), var(--accent-secondary))"
                              : "linear-gradient(135deg, var(--accent-secondary), var(--accent-tertiary))",
                        }}
                      >
                        {project.title.charAt(0)}
                      </div>
                      <div
                        className="flex flex-wrap gap-2 justify-center"
                      >
                        {project.tags.map((tag) => (
                          <span key={tag} className="tag text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Project info */}
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className="text-xs font-medium uppercase tracking-wider px-2.5 py-1 rounded-full"
                        style={{
                          background:
                            project.category === "ios"
                              ? "rgba(0, 113, 227, 0.1)"
                              : "rgba(168, 85, 247, 0.1)",
                          color:
                            project.category === "ios"
                              ? "var(--accent)"
                              : "var(--accent-tertiary)",
                        }}
                      >
                        {project.category === "ios"
                          ? "iOS"
                          : "Machine Learning"}
                      </span>
                      {project.featured && (
                        <span
                          className="text-xs font-medium uppercase tracking-wider px-2.5 py-1 rounded-full"
                          style={{
                            background: "rgba(52, 199, 89, 0.1)",
                            color: "#34c759",
                          }}
                        >
                          Featured
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl font-semibold mb-3">
                      {project.title}
                    </h3>
                    <p
                      className="text-base leading-relaxed mb-6"
                      style={{ color: "var(--muted)" }}
                    >
                      {project.longDescription}
                    </p>

                    <div className="flex items-center gap-4">
                      {project.github && (
                        <a
                          href={project.github}
                          className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
                          style={{ color: "var(--accent)" }}
                        >
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                          </svg>
                          Source Code
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
                          style={{ color: "var(--accent)" }}
                        >
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                          </svg>
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Other projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered
            .filter((p) => !p.featured)
            .map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                className="glass-card p-7"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className="text-xs font-medium uppercase tracking-wider px-2.5 py-1 rounded-full"
                    style={{
                      background:
                        project.category === "ios"
                          ? "rgba(0, 113, 227, 0.1)"
                          : "rgba(168, 85, 247, 0.1)",
                      color:
                        project.category === "ios"
                          ? "var(--accent)"
                          : "var(--accent-tertiary)",
                    }}
                  >
                    {project.category === "ios" ? "iOS" : "ML"}
                  </span>
                </div>

                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p
                  className="text-sm mb-5 leading-relaxed"
                  style={{ color: "var(--muted)" }}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      className="text-sm font-medium"
                      style={{ color: "var(--accent)" }}
                    >
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      className="text-sm font-medium"
                      style={{ color: "var(--accent)" }}
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
