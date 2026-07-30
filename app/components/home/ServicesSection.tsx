import content from "@/content/site.json";

export function ServicesSection() {
  const section = content.home.services;

  return (
    <section className="section services-section" id="services">
      <div className="section-heading compact">
        <p className="eyebrow">{section.eyebrow}</p>
        <h2>{section.title}</h2>
      </div>
      <div className="home-services-grid">
        {section.items.map((item) => (
          <article className="home-service-card" key={item.title}>
            <img src={content.images[item.imageKey as keyof typeof content.images]} alt="" />
            <div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          </article>
        ))}
        <a className="home-service-card service-view-all-card" href={section.viewAllHref}>
          <strong>{section.viewAllLabel}</strong>
          <span>Explore our complete range of specialized services</span>
        </a>
      </div>
    </section>
  );
}
