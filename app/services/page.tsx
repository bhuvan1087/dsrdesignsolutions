import content from "@/content/site.json";
import { SiteFooter } from "../components/layout/SiteFooter";
import { SiteHeader } from "../components/layout/SiteHeader";

export default function ServicesPage() {
  const page = content.servicesPage;
  const heroBody = Array.isArray(page.hero.body) ? page.hero.body : [page.hero.body];

  return (
    <main>
      <SiteHeader activeLabel="Services" />
      <section
        className="services-page-hero"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(42, 49, 110, 0.66), rgba(42, 49, 110, 0.42)), url("${content.images[page.hero.imageKey as keyof typeof content.images]}")`,
        }}
      >
        <div>
          <h1>
            Our <span>Services</span>
          </h1>
          {heroBody.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>
      <section className="services-page-section">
        <div className="services-page-grid">
          {page.items.map((item) => (
            <a className="services-page-card" href={`/services/${item.slug}`} key={item.title}>
              <img src={content.images[item.imageKey as keyof typeof content.images]} alt="" />
              <div>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
                <ul>
                  {item.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <strong>Explore {item.title}</strong>
              </div>
            </a>
          ))}
        </div>
      </section>
      <section className="services-process-section">
        <div className="section-heading compact">
          {page.process.eyebrow ? <p className="eyebrow">{page.process.eyebrow}</p> : null}
          <h2>{page.process.title}</h2>
          <p>{page.process.body}</p>
        </div>
        <div className="services-process-grid">
          {page.process.steps.map((step, index) => (
            <article
              className={index >= 3 ? "is-brand-step" : undefined}
              key={step.title}
            >
              <div className="process-heading">
                <span className="process-letter">{step.letter}</span>
                <div>
                  <strong>{step.word}</strong>
                  <h3>{step.title}</h3>
                </div>
              </div>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
