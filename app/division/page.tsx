import content from "@/content/site.json";
import { SiteFooter } from "../components/layout/SiteFooter";
import { SiteHeader } from "../components/layout/SiteHeader";

export default function DivisionPage() {
  const page = content.divisionPage;

  return (
    <main>
      <SiteHeader activeLabel="Divisions" />
      <section className="division-page-hero">
        {page.hero.eyebrow ? <p className="eyebrow">{page.hero.eyebrow}</p> : null}
        <h1>{page.hero.title}</h1>
        <p>{page.hero.body}</p>
      </section>

      <section className="division-page-intro">
        <div className="section-heading compact">
          <p className="eyebrow">{page.intro.eyebrow}</p>
          <h2>{page.intro.title}</h2>
          <p>{page.intro.body}</p>
        </div>
      </section>

      <section className="division-page-section">
        <div className="division-page-grid">
          {page.items.map((item) => (
            <article className="division-page-card" key={item.title}>
              <img src={content.images[item.imageKey as keyof typeof content.images]} alt="" />
              <div>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
                <ul>
                  {item.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="division-collaboration">
        <div>
          <p className="eyebrow">{page.collaboration.eyebrow}</p>
          <h2>{page.collaboration.title}</h2>
          <p>{page.collaboration.body}</p>
        </div>
        <img
          src={content.images[page.collaboration.imageKey as keyof typeof content.images]}
          alt=""
        />
      </section>

      <section className="industries-cta">
        <h2>{page.cta.title}</h2>
        <p>{page.cta.body}</p>
        <a className="text-link" href={page.cta.primaryHref}>
          {page.cta.primaryLabel}
        </a>
      </section>
      <SiteFooter />
    </main>
  );
}
