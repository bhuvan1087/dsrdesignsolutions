import content from "@/content/site.json";

type SiteFooterProps = {
  homeLinks?: boolean;
};

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
      <nav aria-label="Footer quick links">
        <h3>Quick Links</h3>
        {quickLinks.map((link) => (
          <a href={link.href} key={link.label}>
            {link.label}
          </a>
        ))}
      </nav>
      <address>
        <h3>Contact Us</h3>
        <a href={`tel:${content.company.phone.replace(/\s/g, "")}`}>{content.company.phone}</a>
        <a href={`mailto:${content.company.email}`}>{content.company.email}</a>
        <div className="socials">
          {content.footer.socialLinks.map((link) => (
            <a href={link.href} key={link.label}>
              {link.label}
            </a>
          ))}
        </div>
      </address>
      <p className="copyright">{content.company.copyright}</p>
    </footer>
  );
}
