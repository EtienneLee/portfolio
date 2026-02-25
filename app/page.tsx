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
        {/* Add experience items here */}
      </section>

      {/* Projects */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Projects</h2>
        {/* Add project items here */}
      </section>

      {/* Links */}
      <footer className="flex gap-8 text-sm">
        <a href="mailto:etiennelee123@gmail.com">etiennelee123@gmail.com</a>
        <a href="https://github.com/EtienneLee">github</a>
        <a href="https://www.linkedin.com/in/etienne-lee-">linkedin</a>
      </footer>
    </main>
  );
}
