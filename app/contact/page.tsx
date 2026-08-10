import content from "@/content/site.json";
import { ContactForm } from "../components/contact/ContactForm";
import { SiteFooter } from "../components/layout/SiteFooter";
import { SiteHeader } from "../components/layout/SiteHeader";

export default function ContactPage() {
  const page = content.contactPage;
  const heroImage = content.images[page.hero.imageKey as keyof typeof content.images];

  return (
    <main>
      <SiteHeader activeLabel="" />
      <section className="contact-hero">
        <img src={heroImage} alt="" />
      </section>

      <section className="contact-card-band" aria-label="Contact quick details">
        {page.cards.map((card) => (
          <a className="contact-card" href={card.href} key={card.title}>
            <span className={`contact-card-icon is-${card.icon}`} aria-hidden="true" />
            <div>
              <h2>{card.title}</h2>
              {card.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </a>
        ))}
      </section>

      <section className="contact-main">
        <ContactForm content={page.form} />

        <div className="contact-locations-inner">
          <h2>{page.locations.title}</h2>
          <p>{page.locations.body}</p>
          <div className="contact-location-tabs" aria-label="Location type">
            {page.locations.tabs.map((tab, index) => (
              <button className={index === 0 ? "is-active" : ""} key={tab} type="button">
                {tab}
              </button>
            ))}
          </div>
          <iframe
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={page.locations.mapEmbedUrl}
            title={page.locations.mapTitle}
          />
          <article className="contact-location-card">
            <span>{page.locations.cardTag}</span>
            <h3>{page.locations.cardTitle}</h3>
            <p>{page.locations.cardBody}</p>
          </article>
        </div>
      </section>

      <section className="contact-faq">
        <div className="section-heading compact">
          <p className="eyebrow">{page.faq.eyebrow}</p>
          <h2>{page.faq.title}</h2>
        </div>
        <div className="contact-faq-list">
          {page.faq.items.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="contact-cta">
        <h2>{page.cta.title}</h2>
        <p>{page.cta.body}</p>
        <a href={page.cta.primaryHref}>{page.cta.primaryLabel}</a>
      </section>
      <SiteFooter />
    </main>
  );
}
