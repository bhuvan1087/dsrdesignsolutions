import content from "@/content/site.json";

export function JourneySection() {
  const section = content.aboutPage.journey;

  return (
    <section className="journey-section">
      <div className="section-heading compact">
        <p className="eyebrow">{section.eyebrow}</p>
        <h2>{section.title}</h2>
        <p>{section.body}</p>
      </div>
      <div className="timeline">
        {section.items.map((item) => (
          <article key={item.year}>
            <strong>{item.year}</strong>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
