import content from "@/content/site.json";

export function DivisionsSection() {
  const section = content.home.divisions;

  return (
    <section className="section" id="divisions">
      <div className="section-heading compact">
        <p className="eyebrow">{section.eyebrow}</p>
        <h2>{section.title}</h2>
      </div>
      <div className="division-grid">
        {section.items.map((item) => (
          <article key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
            <a href="/contact">Learn More</a>
          </article>
        ))}
      </div>
    </section>
  );
}
