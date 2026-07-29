import content from "@/content/site.json";

export function HomeHero() {
  return (
    <section className="hero" id="home" aria-label="Engineering services showcase">
      <div className="hero-track">
        {content.home.hero.slides.map((slide) => (
          <article className="hero-slide" key={slide.title}>
            <img src={content.images[slide.imageKey as keyof typeof content.images]} alt="" />
            <div className="hero-overlay" />
            <div className="hero-copy">
              <p>{content.home.hero.eyebrow}</p>
              <h1>{slide.title}</h1>
              <span>{content.home.hero.description}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
