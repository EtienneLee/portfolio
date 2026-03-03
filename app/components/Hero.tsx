"use client";
import { useState, useRef } from "react";

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const devRef = useRef<HTMLSpanElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const chars = "abcdefghijklmnopqrstuvwxyz";
  const full = "developer";

  const scrambleIn = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    let iter = 0;
    timerRef.current = setInterval(() => {
      if (!devRef.current) return;
      devRef.current.textContent = full
        .split("")
        .map((c, i) => {
          if (i < iter) return c;
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");
      iter += 0.5;
      if (iter >= full.length) {
        if (devRef.current) devRef.current.textContent = full;
        clearInterval(timerRef.current!);
      }
    }, 50);
  };

  const scrambleOut = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (devRef.current) devRef.current.textContent = full;
  };

  return (
    <header className="mb-16">
      <h1
        style={{
          fontSize: "6rem",
          fontWeight: 700,
          letterSpacing: "-0.03em",
          lineHeight: 1,
          marginBottom: "2rem",
          transition: "letter-spacing 0.4s ease",
          cursor: "default",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.letterSpacing = "0.05em")}
        onMouseLeave={(e) => (e.currentTarget.style.letterSpacing = "-0.03em")}
      >
        Etienne Lee
      </h1>
      <p style={{ fontSize: "2rem", color: "#333", fontWeight: 400 }}>
        National{" "}
        <span style={{ fontWeight: 700, cursor: "default" }}>
          <span
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              color: isHovered ? "#00ff41" : "#000",
              background: isHovered ? "#111" : "transparent",
              padding: isHovered ? "0 2px" : "0",
              borderRadius: "2px",
              textShadow: isHovered ? "0 0 6px #00ff41" : "none",
              transition: "color 0.05s",
            }}
          >
            {isHovered ? "1010" : "Ten"}
          </span>
          nis
        </span>{" "}
        player{" "}
        <span
          style={{
            fontWeight: 700,
            color: "#000",
            display: "inline-block",
            cursor: "default",
            transition: "transform 0.6s ease, color 0.3s ease",
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLElement).style.transform = "rotate(180deg)";
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLElement).style.transform = "rotate(0deg)";
          }}
        >
          turned
        </span>{" "}
        software{" "}
        <span
          ref={devRef}
          onMouseEnter={scrambleIn}
          onMouseLeave={scrambleOut}
          style={{
            fontWeight: 700,
            color: "#000",
            cursor: "default",
          }}
        >
          developer
        </span>
      </p>
    </header>
  );
}
