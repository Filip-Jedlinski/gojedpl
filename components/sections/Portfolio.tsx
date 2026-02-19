"use client";

export default function Portfolio() {
  const projects = [
    {
      title: "Strona portfolio",
      description:
        "Nowoczesna strona portfolio. Prezentująca usługi i doświadczenie.",
      url: "https://filipjedlinski.vercel.app",
    },
    {
      title: "Sklep z doładowaniami do gry",
      description: "Przejrzysta struktura oferty i łatwość nawigacji.",
      url: "https://www.kolasafitness.pl",
    },
  ];

  return (
    <section className="section" id="realizacje">
      <div className="container">
        <p className="eyebrow">Realizacje</p>
        <h2 className="mb-12">Przykładowe projekty</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <a
              key={idx}
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="group bg-surface border border-line rounded-2xl p-8 hover:border-primary/50 transition"
            >
              <h3 className="group-hover:text-primary transition">
                {project.title}
              </h3>
              <p className="text-dark mb-4">{project.description}</p>
              <span className="text-primary font-semibold">{project.url}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
