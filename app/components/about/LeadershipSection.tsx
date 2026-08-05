import content from "@/content/site.json";

export function LeadershipSection() {
  const section = content.aboutPage.leadership;

  return (
    <section className="leadership-section">
      <div className="section-heading compact">
        {section.eyebrow ? <p className="eyebrow">{section.eyebrow}</p> : null}
        <h2>
          {section.titlePrefix} <span>{section.titleHighlight}</span>
        </h2>
        <p>{section.body}</p>
      </div>
      <div className="leadership-grid">
        {section.members.map((member) => (
          <article className="leadership-card" key={member.name}>
            <div className="leadership-photo">
              {member.image ? (
                <img src={member.image} alt={member.name} />
              ) : (
                <span>{member.placeholder}</span>
              )}
            </div>
            <div className="leadership-copy">
              <h3>
                <span>{member.nameHighlight}</span>
                {member.nameRest ? ` ${member.nameRest}` : ""}
              </h3>
              <p>{member.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
