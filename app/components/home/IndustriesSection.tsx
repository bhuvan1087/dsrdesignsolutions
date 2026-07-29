import content from "@/content/site.json";

export function IndustriesSection() {
  const section = content.home.industries;

  return (
    <section className="section" id="industries">
      <div className="section-heading compact">
        <p className="eyebrow">{section.eyebrow}</p>
        <h2>{section.title}</h2>
      </div>
      <div className="industry-grid">
        {section.items.map((item) => (
          <article className="industry-card" key={item.title}>
            <img src={content.images[item.imageKey as keyof typeof content.images]} alt="" />
            <h3>{item.title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
