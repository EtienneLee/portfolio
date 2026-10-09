"use client";
import { useState, useRef } from "react";

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const [spread, setSpread] = useState(false);
  const [flipped, setFlipped] = useState(false);
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

  // Mouse: on while hovering. Touch: play once on tap, then reset.
  const isMouse = (e: React.PointerEvent) => e.pointerType === "mouse";
  const pulse = (
    e: React.PointerEvent,
    on: () => void,
    off: () => void,
    ms = 1200,
  ) => {
    if (isMouse(e)) return;
    on();
    setTimeout(off, ms);
  };

  return (
    <header className="mb-16">
      <h1
        style={{
          fontSize: "clamp(2.75rem, 13vw, 6rem)",
          fontWeight: 700,
          letterSpacing: spread ? "0.05em" : "-0.03em",
          lineHeight: 1,
          marginBottom: "2rem",
          transition: "letter-spacing 0.4s ease",
          cursor: "default",
        }}
        onPointerEnter={(e) => isMouse(e) && setSpread(true)}
        onPointerLeave={(e) => isMouse(e) && setSpread(false)}
        onPointerUp={(e) =>
          pulse(
            e,
            () => setSpread(true),
            () => setSpread(false),
            800,
          )
        }
      >
        Etienne Lee
      </h1>
      <p
        style={{
          fontSize: "clamp(1.25rem, 5.5vw, 2rem)",
          color: "#333",
          fontWeight: 400,
        }}
      >
        National{" "}
        <span style={{ fontWeight: 700, cursor: "default" }}>
          <span
            onPointerEnter={(e) => isMouse(e) && setIsHovered(true)}
            onPointerLeave={(e) => isMouse(e) && setIsHovered(false)}
            onPointerUp={(e) =>
              pulse(
                e,
                () => setIsHovered(true),
                () => setIsHovered(false),
              )
            }
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
            transform: flipped ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.6s ease, color 0.3s ease",
          }}
          onPointerEnter={(e) => isMouse(e) && setFlipped(true)}
          onPointerLeave={(e) => isMouse(e) && setFlipped(false)}
          onPointerUp={(e) =>
            pulse(
              e,
              () => setFlipped(true),
              () => setFlipped(false),
              1000,
            )
          }
        >
          turned
        </span>{" "}
        software{" "}
        <span
          ref={devRef}
          onPointerEnter={(e) => isMouse(e) && scrambleIn()}
          onPointerLeave={(e) => isMouse(e) && scrambleOut()}
          onPointerUp={(e) => !isMouse(e) && scrambleIn()}
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
