import content from "@/content/site.json";

export function InsightsSection() {
  const section = content.home.insights;

  return (
    <section className="section insights" id="blogs">
      <div className="section-heading compact">
        <p className="eyebrow">{section.eyebrow}</p>
        <h2>{section.title}</h2>
      </div>
      <div className="insight-grid">
        {section.items.map((item) => (
          <article key={item.title}>
            <span>Insight</span>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
