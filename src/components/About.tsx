"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { number: "5+", label: "Years Experience" },
    { number: "15+", label: "Projects Delivered" },
    { number: "2M+", label: "Users Impacted" },
    { number: "3", label: "Research Papers" },
  ];

  return (
    <section id="about" className="section-padding" ref={ref}>
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
            About
          </p>
          <h2 className="heading-lg">
            Passion meets
            <br />
            <span className="gradient-text">precision.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: About text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="body-large mb-6">
              I&apos;m an iOS Developer and Machine Learning Engineer who
              believes in the power of technology that disappears into the
              background. My work sits at the intersection of mobile development
              and artificial intelligence.
            </p>
            <p className="body-large mb-6">
              On the iOS side, I craft pixel-perfect applications using Swift and
              SwiftUI, focusing on performance and delightful user experiences
              that follow Apple&apos;s Human Interface Guidelines.
            </p>
            <p className="body-large">
              In the ML space, I build and deploy models that transform raw data
              into actionable insights. From computer vision to NLP, I leverage
              frameworks like TensorFlow and PyTorch to bring intelligence to
              mobile and cloud platforms.
            </p>
          </motion.div>

          {/* Right: Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                className="glass-card p-8 text-center"
              >
                <div className="heading-lg gradient-text mb-2">
                  {stat.number}
                </div>
                <div
                  className="text-sm font-medium"
                  style={{ color: "var(--muted)" }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
