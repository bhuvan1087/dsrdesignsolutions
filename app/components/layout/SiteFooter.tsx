import content from "@/content/site.json";

type SiteFooterProps = {
  homeLinks?: boolean;
};

function SocialIcon({ icon }: { icon?: string }) {
  switch (icon) {
    case "youtube":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M21.6 7.2c-.2-.9-.9-1.6-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4c-.9.2-1.6.9-1.8 1.8C2 8.8 2 12 2 12s0 3.2.4 4.8c.2.9.9 1.6 1.8 1.8 1.6.4 7.8.4 7.8.4s6.2 0 7.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8ZM10 15.1V8.9l5.4 3.1L10 15.1Z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6.9 8.7H3.3v11.6h3.6V8.7ZM5.1 3a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 0 0 0-4.2Zm15.6 10.7c0-3.3-1.8-5.3-4.5-5.3-1.7 0-2.8.9-3.3 1.8V8.7H9.4v11.6H13v-6.2c0-1.6.8-2.6 2.1-2.6 1.2 0 1.9.9 1.9 2.5v6.3h3.7v-6.6Z" />
        </svg>
      );
    case "facebook":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M14 8.2V6.7c0-.7.5-.9 1-.9h2.4V2.2L14.1 2C10.8 2 9 4 9 6.5v1.7H6.3V12H9v10h4V12h3.3l.6-3.8H14Z" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2a9.8 9.8 0 0 0-8.4 14.9L2.4 22l5.2-1.2A9.8 9.8 0 1 0 12 2Zm0 17.7c-1.5 0-2.9-.4-4.1-1.1l-.3-.2-3 .7.7-2.9-.2-.3A7.8 7.8 0 1 1 12 19.7Zm4.4-5.8c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.4 6.4 0 0 1-3.2-2.8c-.1-.2 0-.4.1-.5l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.7-1.6c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.7.7-1 1.5-1 2.4 0 .4.1 1.5 1.2 2.9 1.2 1.7 2.8 2.9 4.8 3.7 1.8.7 2.2.6 2.7.5.8-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.1-1.4-.1-.2-.3-.2-.5-.3Z" />
        </svg>
      );
    case "x":
      return <span aria-hidden="true">X</span>;
    default:
      return <span aria-hidden="true">{icon || "•"}</span>;
  }
}

export function SiteFooter({ homeLinks = false }: SiteFooterProps) {
  const quickLinks = homeLinks
    ? content.footer.quickLinks
    : [
        { label: "Home", href: "/" },
        { label: "Industries", href: "/#industries" },
        { label: "Services", href: "/#services" },
        { label: "Quality & EHS", href: "/#quality-and-ehs" },
      ];

  return (
    <footer className="footer" id="contact-us">
      <div className="footer-brand">
        <div className="footer-brand-row">
          <img src={content.company.logo} alt={content.company.name} />
          <h2>{content.company.name}</h2>
        </div>
        <p>{content.footer.intro}</p>
        <div className="footer-addresses">
          {content.footer.addresses.map((address) => (
            <div key={address.label}>
              <strong>{address.label}</strong>
              {address.lines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="footer-middle">
        <nav aria-label="Footer quick links">
          <h3>Quick Links</h3>
          {quickLinks.map((link) => (
            <a href={link.href} key={link.label}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="footer-presence">
          <h3>Global Presence</h3>
          {content.footer.globalPresence.map((country) => (
            <span key={country}>{country}</span>
          ))}
        </div>
      </div>
      <address>
        <h3>Contact Us</h3>
        <a href={`tel:${content.company.phone.replace(/\s/g, "")}`}>{content.company.phone}</a>
        <a href={`mailto:${content.company.email}`}>{content.company.email}</a>
        <h3 className="socials-title">Connect With Us</h3>
        <div className="socials">
          {content.footer.socialLinks.map((link) => (
            <a
              className={`social-link is-${link.icon}`}
              href={link.href}
              key={link.label}
              aria-label={link.label}
              title={link.label}
            >
              <SocialIcon icon={link.icon} />
            </a>
          ))}
        </div>
      </address>
      <div className="footer-bottom">
        <p className="copyright">{content.company.copyright}</p>
        <div className="powered-by">
          <span>{content.footer.poweredBy.label}</span>
          <a href={content.footer.poweredBy.href} target="_blank" rel="noreferrer">
            <img src={content.footer.poweredBy.logo} alt="" />
            <strong>{content.footer.poweredBy.name}</strong>
          </a>
        </div>
      </div>
    </footer>
  );
}
