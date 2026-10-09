/* eslint-disable react/no-unescaped-entities */
import NextImage from "next/image";

export default function About() {
  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto">
      <h1
        style={{
          fontSize: "clamp(2.25rem, 9vw, 3rem)",
          fontWeight: 700,
          letterSpacing: "-0.03em",
          marginBottom: "2.5rem",
        }}
      >
        About Me
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8 md:gap-12 items-start">
        <NextImage
          src="/headshot.jpg"
          alt="Etienne Lee"
          width={220}
          height={220}
          className="rounded-full object-cover w-40 h-40 md:w-[220px] md:h-[220px] mx-auto md:mx-0"
        />

        <div
          style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
        >
          <p style={{ fontSize: "0.975rem", color: "#444", lineHeight: 1.8 }}>
            I'm a 21-year-old developer, currently a senior at the University of
            Pennsylvania pursuing a Bachelor's in Computer Science and an
            accelerated Master's in Data Science. I'm interested in many areas
            of CS, but particularly drawn to full-stack development, data
            engineering, and ML/AI.
          </p>
          <p style={{ fontSize: "0.975rem", color: "#444", lineHeight: 1.8 }}>
            Outside of CS, I was a member of the Hong Kong Junior National
            Tennis Squad from age 10, becoming a 2x National Junior Tennis
            Champion and the Inaugural Men's National Pickleball Champion. Off
            the court, I founded a tennis coaching program for kids with autism
            and regularly teach elementary school students coding and math. I
            also love gaming and will never turn down a game of Brawl Stars,
            Valorant, or League.
          </p>
        </div>
      </div>
    </main>
  );
}
