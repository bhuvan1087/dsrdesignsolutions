import content from "@/content/site.json";

export function AboutCtaSection() {
  const section = content.aboutPage.cta;

  return (
    <section className="about-cta">
      <h2>{section.title}</h2>
      <p>{section.body}</p>
      <div className="about-cta-actions">
        <a className="text-link" href={section.primaryHref}>
          {section.primaryLabel}
        </a>
        <a className="outline-link" href={section.secondaryHref}>
          {section.secondaryLabel}
        </a>
      </div>
    </section>
  );
}
