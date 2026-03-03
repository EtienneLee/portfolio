"use client";
import { useState } from "react";

const experiences = [
  {
    num: "00",
    company: "Conversion Capital",
    role: "Data Science Intern",
    date: "Summer 2025",
    year: "2025",
    description:
      "Built pipelines to track investment signals across thousands of companies and automated data syncing between platforms using Python.",
  },
  {
    num: "01",
    company: "Neopets",
    role: "Software Engineering Intern",
    date: "Summer 2024",
    year: "2024",
    description:
      "Built a browser extension and multiplayer game demo for the Neopets platform using React, TypeScript, and Node.js.",
  },
  {
    num: "02",
    company: "University of Pennsylvania",
    role: "Teaching Assistant, CIS 5500: Databases",
    date: "Aug 2025 – Present",
    year: "Present",
    description:
      "TA for a graduate databases course with 200+ students. Hold office hours, mentor project groups, and write homework and exam questions.",
  },
];

export default function ExperienceSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="work" className="mb-16">
      <h2 className="text-2xl font-bold mb-8">Experience</h2>

      {experiences.map((exp, i) => (
        <div
          key={i}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
          style={{
            borderTop: "1px solid #e0e0e0",
            ...(i === experiences.length - 1
              ? { borderBottom: "1px solid #e0e0e0" }
              : {}),
            background: hovered === i ? "#f7f7f7" : "transparent",
            transition: "background 0.2s ease",
            padding: "0 0.5rem",
            margin: "0 -0.5rem",
          }}
        >
          {/* Collapsed row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "50px 1fr auto",
              alignItems: "center",
              padding: "1.1rem 0",
              gap: "1rem",
            }}
          >
            <span style={{ color: "#bbb", fontSize: "0.85rem" }}>
              {exp.num}
            </span>
            <span
              style={{
                fontSize: "1.4rem",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                color: hovered === i ? "#000" : "#333",
                transition: "color 0.2s ease",
              }}
            >
              {exp.company}
            </span>
            <span
              style={{
                fontSize: "1.4rem",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                color: hovered === i ? "#555" : "#bbb",
                transition: "color 0.2s ease",
              }}
            >
              {exp.year}
            </span>
          </div>

          {/* Expanded content */}
          <div
            style={{
              overflow: "hidden",
              maxHeight: hovered === i ? "120px" : "0px",
              transition: "max-height 0.35s ease, padding 0.35s ease",
              paddingLeft: "50px",
              paddingBottom: hovered === i ? "1.25rem" : "0",
            }}
          >
            <p
              style={{
                fontSize: "0.8rem",
                color: "#888",
                marginBottom: "0.25rem",
              }}
            >
              {exp.role} · {exp.date}
            </p>
            <p
              style={{
                fontSize: "0.9rem",
                color: "#555",
                lineHeight: 1.7,
                maxWidth: "560px",
              }}
            >
              {exp.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
