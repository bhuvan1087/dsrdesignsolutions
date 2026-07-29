import content from "@/content/site.json";

export function ClientsBand() {
  const section = content.home.clients;

  return (
    <section className="clients-band">
      <p className="eyebrow">{section.eyebrow}</p>
      <h2>{section.title}</h2>
      <div className="client-marquee">
        {[...section.items, ...section.items].map((client, index) => (
          <span key={`${client}-${index}`}>{client}</span>
        ))}
      </div>
    </section>
  );
}
