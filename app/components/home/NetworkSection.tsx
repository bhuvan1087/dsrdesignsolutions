import content from "@/content/site.json";

export function NetworkSection() {
  const section = content.home.network;

  return (
    <section className="network-section">
      <div>
        <p className="eyebrow">{section.eyebrow}</p>
        <h2>{section.title}</h2>
      </div>
      <div className="locations">
        {section.locations.map((city) => (
          <article key={city}>
            <strong>{city}</strong>
            <span>Design and project support office</span>
          </article>
        ))}
      </div>
    </section>
  );
}
