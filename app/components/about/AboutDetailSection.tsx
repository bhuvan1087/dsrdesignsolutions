import content from "@/content/site.json";

export function AboutDetailSection() {
  const section = content.aboutPage.details;

  return (
    <section className="about-detail section">
      <div>
        <p className="eyebrow">{section.eyebrow}</p>
        <h2>{section.title}</h2>
        {section.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <aside className="certification-card">
        <span>{section.card.eyebrow}</span>
        <h3>{section.card.title}</h3>
        <p>{section.card.body}</p>
      </aside>
    </section>
  );
}
