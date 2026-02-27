/* eslint-disable react/no-unescaped-entities */
import NextImage from "next/image";

export default function About() {
  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>

      <NextImage
        src="/headshot.jpg"
        alt="Etienne Lee"
        width={192}
        height={192}
        className="rounded-full mb-8 object-cover"
      />

      <div className="space-y-6 text-gray-300">
        <p>
          I'm a 20-year-old developer, currently a junior at the University of
          Pennsylvania pursuing a Bachelor's in Computer Science and an
          accelerated Master's in Data Science. I'm interested in many areas of
          CS, but particularly drawn to full-stack development, data
          engineering, and ML/AI.
        </p>

        <p>
          Outside of CS, I've been on the Hong Kong Junior National Tennis Team
          since I was 10, becoming a 2x National Junior Tennis Champion and the
          Inaugural Men's National Pickleball Champion. Off the court, I founded
          a tennis coaching program for kids with autism and regularly teach
          elementary school students coding and math. I also love gaming and
          will never turn down a game of Brawl Stars, Valorant, or League.
        </p>
      </div>
    </main>
  );
}
