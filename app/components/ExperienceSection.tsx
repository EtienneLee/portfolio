"use client";
import { useState } from "react";

const experiences = [
  {
    num: "00",
    company: "IceKredit",
    role: "Data Science Intern",
    date: "Summer 2026",
    year: "2026",
    description:
      "Led a cross-domain, cross-lingual Alzheimer's detection project using HuBERT and RoBERTa, reaching 0.70 balanced accuracy on a sparse, code-mixed target dataset mainly through domain adaptation and data augmentation.",
  },
  {
    num: "01",
    company: "Conversion Capital",
    role: "Data Science Intern",
    date: "Summer 2025",
    year: "2025",
    description:
      "Built pipelines to track investment signals across 3,000+ companies and automated data syncing between platforms using Python.",
  },
  {
    num: "02",
    company: "Neopets",
    role: "Software Engineering Intern",
    date: "Summer 2024",
    year: "2024",
    description:
      "Built a browser extension and multiplayer game demo for the Neopets platform using React, TypeScript, and Node.js.",
  },
  {
    num: "03",
    company: "UPenn TA",
    role: "Teaching Assistant, CIS 5500: Databases",
    date: "Aug 2025 – Present",
    year: "2025 – Now",
    description:
      "TA for a graduate databases course with 200+ students. Hold office hours, mentor project groups, and write homework and exam questions.",
  },
];

const NUM_COL = "clamp(28px, 8vw, 50px)";

export default function ExperienceSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="work" className="mb-16">
      <h2 className="text-2xl font-bold mb-8">Work Experience</h2>

      {experiences.map((exp, i) => (
        <div
          key={i}
          onPointerEnter={(e) => e.pointerType === "mouse" && setHovered(i)}
          onPointerLeave={(e) => e.pointerType === "mouse" && setHovered(null)}
          onPointerUp={(e) =>
            e.pointerType !== "mouse" && setHovered(hovered === i ? null : i)
          }
          style={{
            borderTop: "1px solid #e0e0e0",
            ...(i === experiences.length - 1
              ? { borderBottom: "1px solid #e0e0e0" }
              : {}),
            background: hovered === i ? "#f7f7f7" : "transparent",
            transition: "background 0.2s ease",
            padding: "0 0.5rem",
            margin: "0 -0.5rem",
            cursor: "pointer",
          }}
        >
          {/* Collapsed row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `${NUM_COL} 1fr auto`,
              alignItems: "center",
              padding: "1.1rem 0",
              gap: "0.75rem",
            }}
          >
            <span style={{ color: "#bbb", fontSize: "0.85rem" }}>
              {exp.num}
            </span>
            <span
              style={{
                fontSize: "clamp(1.05rem, 4.5vw, 1.4rem)",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                color: hovered === i ? "#000" : "#333",
                transition: "color 0.2s ease",
                minWidth: 0,
              }}
            >
              {exp.company}
            </span>
            <span
              style={{
                fontSize: "clamp(1.05rem, 4.5vw, 1.4rem)",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                color: hovered === i ? "#555" : "#bbb",
                transition: "color 0.2s ease",
                whiteSpace: "nowrap",
              }}
            >
              {exp.year}
            </span>
          </div>

          {/* Expanded content: grows to fit, no fixed height */}
          <div
            style={{
              display: "grid",
              gridTemplateRows: hovered === i ? "1fr" : "0fr",
              transition: "grid-template-rows 0.35s ease",
            }}
          >
            <div
              style={{
                overflow: "hidden",
                minHeight: 0,
                paddingLeft: NUM_COL,
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
                  paddingBottom: "1.25rem",
                }}
              >
                {exp.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
