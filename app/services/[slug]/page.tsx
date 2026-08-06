import content from "@/content/site.json";
import { notFound } from "next/navigation";
import { SiteFooter } from "../../components/layout/SiteFooter";
import { SiteHeader } from "../../components/layout/SiteHeader";
import { LimitedVideo } from "../../components/media/LimitedVideo";

type ServicePageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return content.servicesPage.items.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = content.servicesPage.items.find((item) => item.slug === params.slug);

  if (!service) {
    notFound();
  }

  const poster = content.images[service.imageKey as keyof typeof content.images];

  return (
    <main>
      <SiteHeader activeLabel="Services" />
      <section className="service-detail-hero">
        <LimitedVideo src={service.video} poster={poster} maxSeconds={25} />
        <div className="service-detail-hero-overlay" />
        <div className="service-detail-hero-content">
          <a href="/services">Back to Services</a>
          <h1>{service.title}</h1>
          <p>{service.body}</p>
        </div>
      </section>

      <section className="service-work-history">
        <div className="section-heading compact">
          <p className="eyebrow">Work History</p>
          <h2>Find solution for your all {service.title.replace(" Services", "")} requirements</h2>
        </div>
        <div className="service-stat-grid">
          {service.stats.map((stat) => (
            <article key={stat.label}>
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="service-detail-section">
        <div className="service-detail-grid">
          {service.details.map((detail) => (
            <article className="service-detail-card" key={detail.title}>
              <img src={content.images[detail.imageKey as keyof typeof content.images]} alt="" />
              <div>
                <h3>{detail.title}</h3>
                <p>{detail.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="service-detail-cta">
        <h2>Ready to Transform Your Projects with {service.title.replace(" Services", "")}?</h2>
        <p>Partner with us for dependable engineering support that improves coordination, delivery, and project outcomes.</p>
        <div>
          <a href="/contact">Get Consultation</a>
          <a href="/services">Explore All Services</a>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
