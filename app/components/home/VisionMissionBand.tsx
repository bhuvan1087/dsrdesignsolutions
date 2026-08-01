import content from "@/content/site.json";

type VisionMissionBandProps = {
  items?: typeof content.home.visionMission;
};

export function VisionMissionBand({ items = content.home.visionMission }: VisionMissionBandProps) {
  return (
    <section className="split-band">
      {items.map((item, index) => (
        <article className={index % 2 === 1 ? "is-reversed" : undefined} key={item.eyebrow}>
          <img
            src={content.images[item.imageKey as keyof typeof content.images]}
            alt={item.imageAlt}
          />
          <div>
            <span className={index === 0 ? "vision-icon" : "mission-icon"} aria-hidden="true" />
            <p className="eyebrow">{item.eyebrow}</p>
            <h2>{item.title}</h2>
          </div>
        </article>
      ))}
    </section>
  );
}
