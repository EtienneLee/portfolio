export default function Home() {
  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto">
      {/* Header */}
      <header className="mb-16">
        <h1 className="text-6xl font-bold mb-4">Etienne Lee</h1>
        <p className="text-xl text-gray-600">CS + Data Science @ Penn</p>
      </header>

      {/* Experience */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Experience</h2>

        <div className="mb-8">
          <h3 className="text-xl font-semibold">
            Conversion Capital | Data Science Intern (Summer 2025)
          </h3>
          <p className="text-gray-400 mt-2">
            Built data pipelines to track investment signals across thousands of
            companies; automated data syncing between platforms using Python.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold">
            Neopets | Software Engineering Intern (Summer 2024)
          </h3>
          <p className="text-gray-400 mt-2">
            Built full-stack web applications for the Neopets platform,
            including a browser extension and multiplayer game using React,
            TypeScript, and Node.js.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold">
            University of Pennsylvania | Teaching Assistant (Aug 2025 - Present)
          </h3>
          <p className="text-gray-400 mt-2">
            TA for a graduate databases course (200+ students). Hold office
            hours, mentor projects, grade assignments, etc.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Projects</h2>

        <div className="mb-8">
          <h3 className="text-xl font-semibold">
            New Tab Photo Extension (TypeScript, React, Vite)
          </h3>
          <p className="text-gray-400 mt-2">
            Chrome extension that displays photos from a user-managed collection
            on every new tab.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold">
            Steam Game Success Predictor (Python, Pandas, Scikit-learn)
          </h3>
          <p className="text-gray-400 mt-2">
            Built an ML model to predict video game success using a dataset of
            97K Steam games.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold">
            Ocean Biodiversity & Climate Change Explorer (React, Node.js,
            PostgreSQL, AWS)
          </h3>
          <p className="text-gray-400 mt-2">
            Interactive website exploring marine biodiversity and climate
            relationships through oceanographic data.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold">PennOS (C, Bash)</h3>
          <p className="text-gray-400 mt-2">
            UNIX-like guest OS with priority scheduler, FAT filesystem, and
            interactive shell built from scratch.
          </p>
        </div>
      </section>

      {/* Links */}
      <footer className="flex gap-8 text-sm">
        <a href="mailto:etiennelee123@gmail.com">etiennelee123@gmail.com</a>
        <a href="https://github.com/EtienneLee" target="_blank">
          github
        </a>
        <a href="https://linkedin.com/in/etienne-lee-" target="_blank">
          linkedin
        </a>
      </footer>
    </main>
  );
}
