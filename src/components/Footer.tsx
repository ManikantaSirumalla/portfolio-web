"use client";

import { personalInfo } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-8 text-center"
      style={{
        borderTop: "1px solid var(--card-border)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-sm" style={{ color: "var(--muted)" }}>
          Designed & Built by{" "}
          <span style={{ color: "var(--foreground)" }}>
            {personalInfo.name}
          </span>
        </p>
        <p
          className="text-xs mt-2"
          style={{ color: "var(--muted)", opacity: 0.6 }}
        >
          &copy; {year} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
