import content from "@/content/site.json";

export function CoreValuesSection() {
  const section = content.home.values;

  return (
    <section className="section" id="quality-and-ehs">
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
