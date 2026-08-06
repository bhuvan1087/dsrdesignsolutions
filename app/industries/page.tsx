import content from "@/content/site.json";
import { SiteFooter } from "../components/layout/SiteFooter";
import { SiteHeader } from "../components/layout/SiteHeader";

export default function IndustriesPage() {
  const page = content.industriesPage;

  return (
    <main>
      <SiteHeader activeLabel="Industries" />
      <section
        className="industries-page-hero"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(42, 49, 110, 0.66), rgba(42, 49, 110, 0.42)), url("${content.images[page.hero.imageKey as keyof typeof content.images]}")`,
        }}
      >
        {page.hero.eyebrow ? <p className="eyebrow">{page.hero.eyebrow}</p> : null}
        <h1>{page.hero.title}</h1>
        <p>{page.hero.body}</p>
      </section>
      <section className="industries-expertise">
        <div className="section-heading compact">
          <p className="eyebrow">{page.expertise.eyebrow}</p>
          <h2>{page.expertise.title}</h2>
          <p>{page.expertise.body}</p>
        </div>
        <div className="industries-page-grid">
          {page.expertise.items.map((item) => (
            <a className="industries-page-card" href={`/industries/${item.slug}`} key={item.title}>
              <img src={content.images[item.imageKey as keyof typeof content.images]} alt="" />
              <div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </a>
          ))}
        </div>
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
