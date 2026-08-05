import content from "@/content/site.json";

export function ClientsBand() {
  const section = content.home.clients;

  return (
    <section className="clients-band">
      <p className="eyebrow">{section.eyebrow}</p>
      <h2>{section.title}</h2>
      <div className="client-logo-grid">
        {section.items.map((client) => (
          <article className="client-logo-card" key={client.name}>
            <img
              src={content.images[client.imageKey as keyof typeof content.images]}
              alt={client.name}
            />
          </article>
        ))}
      </div>
    </section>
  );
}
