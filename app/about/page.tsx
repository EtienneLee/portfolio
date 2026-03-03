/* eslint-disable react/no-unescaped-entities */
import NextImage from "next/image";

export default function About() {
  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto">
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: 700,
          letterSpacing: "-0.03em",
          marginBottom: "2.5rem",
        }}
      >
        About Me
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "220px 1fr",
          gap: "3rem",
          alignItems: "start",
        }}
      >
        <NextImage
          src="/headshot.jpg"
          alt="Etienne Lee"
          width={220}
          height={220}
          style={{
            borderRadius: "50%",
            objectFit: "cover",
            width: "220px",
            height: "220px",
          }}
        />

        <div
          style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
        >
          <p style={{ fontSize: "0.975rem", color: "#444", lineHeight: 1.8 }}>
            I'm a 20-year-old developer, currently a junior at the University of
            Pennsylvania pursuing a Bachelor's in Computer Science and an
            accelerated Master's in Data Science. I'm interested in many areas
            of CS, but particularly drawn to full-stack development, data
            engineering, and ML/AI.
          </p>
          <p style={{ fontSize: "0.975rem", color: "#444", lineHeight: 1.8 }}>
            Outside of CS, I've been on the Hong Kong Junior National Tennis
            Team since I was 10, becoming a 2x National Junior Tennis Champion
            and the Inaugural Men's National Pickleball Champion. Off the court,
            I founded a tennis coaching program for kids with autism and
            regularly teach elementary school students coding and math. I also
            love gaming and will never turn down a game of Brawl Stars,
            Valorant, or League.
          </p>
        </div>
      </div>
    </main>
  );
}
