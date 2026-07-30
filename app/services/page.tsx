import content from "@/content/site.json";
import { SiteFooter } from "../components/layout/SiteFooter";
import { SiteHeader } from "../components/layout/SiteHeader";

export default function ServicesPage() {
  const page = content.servicesPage;

  return (
    <main>
      <SiteHeader activeLabel="Services" />
      <section className="services-page-hero">
        <div>
          <h1>
            Our <span>Services</span>
          </h1>
          <p>{page.hero.body}</p>
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
      <SiteFooter />
    </main>
  );
}
