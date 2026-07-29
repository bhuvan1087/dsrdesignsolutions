import content from "@/content/site.json";

export function ServicesSection() {
  const section = content.home.services;

  return (
    <section className="section services-section" id="services">
      <div className="section-heading">
        <p className="eyebrow">{section.eyebrow}</p>
        <h2>{section.title}</h2>
      </div>
      <div className="service-list">
        {section.items.map((item, index) => (
          <article key={item.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
