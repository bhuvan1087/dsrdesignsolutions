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
      <div>
        <p className="eyebrow">Reach Us</p>
        <h2>{content.company.name}</h2>
        <p>{content.footer.intro}</p>
      </div>
      <div>
        <h3>Quick Links</h3>
        {quickLinks.map((link) => (
          <a href={link.href} key={link.label}>
            {link.label}
          </a>
        ))}
      </div>
      <div>
        <h3>Contact Us</h3>
        <p>{content.company.phone}</p>
        <p>{content.company.email}</p>
        <div className="socials">
          {content.footer.socialLinks.map((link) => (
            <a href={link.href} key={link.label}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <p className="copyright">{content.company.copyright}</p>
    </footer>
  );
}
