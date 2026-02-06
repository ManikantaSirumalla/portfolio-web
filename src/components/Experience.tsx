"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experiences } from "@/lib/data";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding section-alt" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
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
            Experience
          </p>
          <h2 className="heading-lg">
            Where I&apos;ve
            <br />
            <span className="gradient-text">worked.</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-0 md:left-8 top-0 bottom-0 w-px"
            style={{ background: "var(--card-border)" }}
          />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company + exp.role}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.2 }}
                className="relative pl-8 md:pl-20"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-0 md:left-8 top-2 w-3 h-3 rounded-full -translate-x-[6px] ring-4 ring-[var(--section-alt)]"
                  style={{
                    background: "var(--accent)",
                  }}
                />

                <div className="glass-card p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.role}</h3>
                      <p
                        className="text-base font-medium"
                        style={{ color: "var(--accent)" }}
                      >
                        {exp.company}
                      </p>
                    </div>
                    <span
                      className="text-sm font-medium px-3 py-1 rounded-full whitespace-nowrap self-start"
                      style={{
                        background: "var(--card)",
                        color: "var(--muted)",
                        border: "1px solid var(--card-border)",
                      }}
                    >
                      {exp.period}
                    </span>
                  </div>

                  <p
                    className="text-base mb-5 leading-relaxed"
                    style={{ color: "var(--muted)" }}
                  >
                    {exp.description}
                  </p>

                  <ul className="space-y-2 mb-5">
                    {exp.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-3 text-sm"
                        style={{ color: "var(--muted)" }}
                      >
                        <svg
                          className="w-4 h-4 mt-0.5 flex-shrink-0"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="var(--accent)"
                          strokeWidth="2"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="tag text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
