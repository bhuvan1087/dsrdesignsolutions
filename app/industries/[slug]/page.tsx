import content from "@/content/site.json";
import { notFound } from "next/navigation";
import { SiteFooter } from "../../components/layout/SiteFooter";
import { SiteHeader } from "../../components/layout/SiteHeader";

type IndustryPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return content.industriesPage.expertise.items.map((industry) => ({
    slug: industry.slug,
  }));
}

export default function IndustryDetailPage({ params }: IndustryPageProps) {
  const industry = content.industriesPage.expertise.items.find((item) => item.slug === params.slug);

  if (!industry) {
    notFound();
  }

  const image = content.images[industry.imageKey as keyof typeof content.images];

  return (
    <main>
      <SiteHeader activeLabel="Industries" />
      <section className="industry-detail-hero">
        <img src={image} alt="" />
        <div className="industry-detail-hero-overlay" />
        <div className="industry-detail-hero-content">
          <a href="/industries">Back to Industries</a>
          <h1>{industry.title}</h1>
          <p>{industry.body}</p>
        </div>
      </section>

      <section className="industry-detail-section">
        <div className="section-heading compact">
          <p className="eyebrow">Industry Expertise</p>
          <h2>Focused support for {industry.title}</h2>
          <p>{industry.body}</p>
        </div>
        <div className="industry-detail-list">
          {industry.details.map((detail) => (
            <article key={detail}>
              <span aria-hidden="true">✓</span>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="industries-cta">
        <h2>Have a {industry.title} Requirement?</h2>
        <p>Our team can support your project with focused engineering, documentation, BIM, CAD, and project delivery services.</p>
        <a className="text-link" href="/contact">
          Contact Us
        </a>
      </section>
      <SiteFooter />
    </main>
  );
}
