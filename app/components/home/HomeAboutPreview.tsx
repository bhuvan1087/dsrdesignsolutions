import content from "@/content/site.json";

export function HomeAboutPreview() {
  const section = content.home.aboutPreview;

  return (
    <section className="section about-grid" id="about-us">
      <div>
        <p className="eyebrow">{section.eyebrow}</p>
        <h2>{section.title}</h2>
        <p>{section.body}</p>
        <div className="stats-row">
          {section.stats.map((stat) => (
            <span key={stat.label}>
              <strong>{stat.value}</strong> {stat.label}
            </span>
          ))}
        </div>
        <a className="text-link" href={section.readMoreHref}>
          Read More
        </a>
      </div>
      <img
        className="about-image"
        src={content.images[section.imageKey as keyof typeof content.images]}
        alt={section.imageAlt}
      />
    </section>
  );
}
