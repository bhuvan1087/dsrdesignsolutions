import content from "@/content/site.json";

export function StrengthsSection() {
  const section = content.aboutPage.strengths;

  return (
    <section className="section strengths-section">
      <div className="section-heading">
        <p className="eyebrow">{section.eyebrow}</p>
        <h2>{section.title}</h2>
      </div>
      <div className="value-grid">
        {section.items.map((item) => (
          <article className="value-card" key={item.title}>
            <span>{item.title.slice(0, 2)}</span>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
