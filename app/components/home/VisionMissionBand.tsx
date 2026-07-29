import content from "@/content/site.json";

type VisionMissionBandProps = {
  items?: typeof content.home.visionMission;
};

export function VisionMissionBand({ items = content.home.visionMission }: VisionMissionBandProps) {
  return (
    <section className="split-band">
      {items.map((item) => (
        <article key={item.eyebrow}>
          <p className="eyebrow">{item.eyebrow}</p>
          <h2>{item.title}</h2>
        </article>
      ))}
    </section>
  );
}
