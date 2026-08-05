import content from "@/content/site.json";

type SiteHeaderProps = {
  activeLabel: string;
  contactHref?: string;
};

export function SiteHeader({ activeLabel, contactHref = "/contact" }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label={`${content.company.name} home`}>
     
      <img className="brand-logo" src={content.company.logo} alt="" />
 </a>
      <nav className="nav-links" aria-label="Primary navigation">
        {content.navigation.map((item) => (
          <a className={item.label === activeLabel ? "active" : undefined} key={item.label} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="header-cta" href={contactHref}>
        Get in Touch
      </a>
    </header>
  );
}
