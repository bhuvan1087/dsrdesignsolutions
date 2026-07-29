import content from "@/content/site.json";

export function AboutHero() {
  const section = content.aboutPage.hero;

  return (
    <section
      className="page-hero"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(15, 39, 66, 0.96), rgba(15, 39, 66, 0.84)), url("${content.images[section.imageKey as keyof typeof content.images]}")`,
      }}
    >
      <div>
        <p className="eyebrow">{section.eyebrow}</p>
        <h1>{section.title}</h1>
        <p>{section.body}</p>
      </div>
    </section>
  );
}
