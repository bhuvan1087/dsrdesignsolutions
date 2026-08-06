import content from "@/content/site.json";

export function AboutHero() {
  const section = content.aboutPage.hero;
  const bodyParagraphs = Array.isArray(section.body) ? section.body : [section.body];

  return (
    <section
      className="page-hero"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(42, 49, 110, 0.66), rgba(42, 49, 110, 0.42)), url("${content.images[section.imageKey as keyof typeof content.images]}")`,
      }}
    >
      <div>
        <p className="eyebrow">{section.eyebrow}</p>
        <h1>{section.title}</h1>
        {bodyParagraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
