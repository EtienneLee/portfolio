"use client";
import { useState } from "react";

const projects = [
  {
    num: "00",
    name: "New Tab Photo Extension",
    year: "2025",
    stack: "TypeScript · React",
    description:
      "A Chrome extension that displays a random photo from a personal collection as your new tab background, built originally for friends and family. Published on the Chrome Web Store.",
  },
  {
    num: "01",
    name: "Ocean Biodiversity Explorer",
    year: "2025",
    stack: "React · Node.js · PostgreSQL · AWS",
    description:
      "Interactive full-stack website for exploring marine species and ocean conditions over time, built on real oceanographic data. Designed the database for 136M rows of raw data and sped up key queries up to 4x.",
  },
  {
    num: "02",
    name: "PennOS",
    year: "2025",
    stack: "C · Bash",
    description:
      "Co-built a UNIX-like OS from scratch in C, featuring a priority scheduler, FAT filesystem, and interactive shell supporting standard UNIX commands.",
  },
  {
    num: "03",
    name: "News Source Classification",
    year: "2026",
    stack: "Python · PyTorch · HuggingFace",
    description:
      "Predicts whether a headline came from Fox News or NBC News. Scraped and expanded the dataset to 17.9K headlines, then fine-tuned RoBERTa and DeBERTa to reach 91.75% accuracy.",
  },
];

export default function ProjectsSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold mb-8">Projects</h2>

      {projects.map((project, i) => (
        <div
          key={i}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
          style={{
            borderTop: "1px solid #e0e0e0",
            ...(i === projects.length - 1
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
              {project.num}
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
              {project.name}
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
              {project.year}
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
              {project.stack}
            </p>
            <p
              style={{
                fontSize: "0.9rem",
                color: "#555",
                lineHeight: 1.7,
                maxWidth: "560px",
              }}
            >
              {project.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
