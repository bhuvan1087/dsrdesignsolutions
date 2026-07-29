const heroSlides = [
  {
    title: "Petrochemical Engineering",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1800&q=80",
  },
  {
    title: "BIM and CAD Delivery",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1800&q=80",
  },
  {
    title: "Oil and Gas Projects",
    image:
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1800&q=80",
  },
];

const services = [
  ["Plant Engineering Services", "Complete support for industrial projects from concept planning to detailed design."],
  ["CAD Services", "Precise drafting, modelling, and documentation for multi-discipline teams."],
  ["BIM Services", "Coordinated 3D workflows that reduce rework and improve construction readiness."],
  ["Structural Steel Detailing", "Reliable design and detailing packages for steel structures and process facilities."],
  ["Project Management", "Practical planning, coordination, and reporting to keep delivery moving."],
];

const values = [
  ["Integrity", "Transparent decisions, disciplined delivery, and accountable communication."],
  ["Innovation", "Modern tools and smarter workflows for complex engineering challenges."],
  ["Collaboration", "Integrated teams aligned with clients, contractors, and site realities."],
  ["Excellence", "Quality-focused outputs built for approval, procurement, and construction."],
  ["Sustainability", "Engineering choices that support resilient and responsible assets."],
  ["Information Security", "Controlled processes to protect client data and project knowledge."],
];

const industries = [
  ["Oil & Gas Refineries", "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=900&q=80"],
  ["Petrochemicals", "https://images.unsplash.com/photo-1581093458791-9d15482442f6?auto=format&fit=crop&w=900&q=80"],
  ["Storage Terminals", "https://images.unsplash.com/photo-1565608087341-404b25492fee?auto=format&fit=crop&w=900&q=80"],
];

const divisions = [
  ["Secondment Services", "Specialist engineering talent deployed to client teams for fast, focused project support."],
  ["Manpower Services", "Role-fit staffing support for design offices, construction teams, and operations groups."],
  ["Professional Training", "Practical technical training for graduates and working engineers entering industrial design."],
];

const clients = [
  "L&T",
  "Tata Projects",
  "Adani",
  "Reliance",
  "BHEL",
  "Technip",
  "Worley",
  "Jacobs",
  "HPCL",
  "IOCL",
  "BPCL",
  "ONGC",
];

export default function Home() {
  const navItems = [
    ["Home", "/"],
    ["About Us", "/about"],
    ["Industries", "#industries"],
    ["Services", "#services"],
    ["Quality & EHS", "#quality-and-ehs"],
    ["Divisions", "#divisions"],
    ["Blogs", "#blogs"],
    ["Contact Us", "#contact-us"],
  ];

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="/" aria-label="DSR Design Solutions home">
          <span className="brand-mark">DSR</span>
          <span>
            <strong>DSR Design Solutions</strong>
            <small>Detailed Design Engineering</small>
          </span>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          {navItems.map(([item, href]) => (
              <a className={item === "Home" ? "active" : undefined} key={item} href={href}>
                {item}
              </a>
            ))}
        </nav>
        <a className="header-cta" href="#contact-us">
          Get in Touch
        </a>
      </header>

      <section className="hero" id="home" aria-label="Engineering services showcase">
        <div className="hero-track">
          {heroSlides.map((slide) => (
            <article className="hero-slide" key={slide.title}>
              <img src={slide.image} alt="" />
              <div className="hero-overlay" />
              <div className="hero-copy">
                <p>Detailed design engineering company in India</p>
                <h1>{slide.title}</h1>
                <span>Multidiscipline engineering, BIM, CAD, and project support for industrial assets.</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section about-grid" id="about-us">
        <div>
          <p className="eyebrow">About Us</p>
          <h2>Engineering support from concept to completion.</h2>
          <p>
            DSR Design Solutions delivers practical, high-quality engineering services for oil and gas,
            petrochemical, infrastructure, and industrial projects. Our teams combine design discipline,
            digital delivery, and field-aware coordination to help clients move from early planning to
            construction-ready documentation.
          </p>
          <div className="stats-row">
            <span><strong>600+</strong> project packages</span>
            <span><strong>2200+</strong> talent network</span>
            <span><strong>2011</strong> engineering roots</span>
          </div>
          <a className="text-link" href="/about">
            Read More
          </a>
        </div>
        <img
          className="about-image"
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80"
          alt="Engineering team reviewing industrial design documents"
        />
      </section>

      <section className="split-band">
        <article>
          <p className="eyebrow">Our Vision</p>
          <h2>To be a trusted engineering partner for resilient industrial growth.</h2>
        </article>
        <article>
          <p className="eyebrow">Our Mission</p>
          <h2>To deliver value beyond drawings through detail, coordination, and dependable execution.</h2>
        </article>
      </section>

      <section className="section" id="quality-and-ehs">
        <div className="section-heading">
          <p className="eyebrow">Our Core Values</p>
          <h2>Principles that guide every package we deliver.</h2>
        </div>
        <div className="value-grid">
          {values.map(([title, copy]) => (
            <article className="value-card" key={title}>
              <span>{title.slice(0, 2)}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="section-heading">
          <p className="eyebrow">Our Services</p>
          <h2>Comprehensive services for industrial project delivery.</h2>
        </div>
        <div className="service-list">
          {services.map(([title, copy], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="industries">
        <div className="section-heading compact">
          <p className="eyebrow">Industries We Serve</p>
          <h2>Powering progress across core engineering sectors.</h2>
        </div>
        <div className="industry-grid">
          {industries.map(([title, image]) => (
            <article className="industry-card" key={title}>
              <img src={image} alt="" />
              <h3>{title}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="clients-band">
        <p className="eyebrow">Our Clients</p>
        <h2>Trusted by organizations across energy, infrastructure, and manufacturing.</h2>
        <div className="client-marquee">
          {[...clients, ...clients].map((client, index) => (
            <span key={`${client}-${index}`}>{client}</span>
          ))}
        </div>
      </section>

      <section className="section" id="divisions">
        <div className="section-heading compact">
          <p className="eyebrow">Our Divisions</p>
          <h2>Specialized teams working together for comprehensive solutions.</h2>
        </div>
        <div className="division-grid">
          {divisions.map(([title, copy]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{copy}</p>
              <a href="#contact-us">Learn More</a>
            </article>
          ))}
        </div>
      </section>

      <section className="network-section">
        <div>
          <p className="eyebrow">Our Global Network</p>
          <h2>Engineering support close to clients and project sites.</h2>
        </div>
        <div className="locations">
          {["Mangalore", "New Delhi", "Mumbai", "Hyderabad", "Abu Dhabi", "Texas"].map((city) => (
            <article key={city}>
              <strong>{city}</strong>
              <span>Design and project support office</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section insights" id="blogs">
        <div className="section-heading compact">
          <p className="eyebrow">News & Insights</p>
          <h2>Engineering updates, project thinking, and delivery notes.</h2>
        </div>
        <div className="insight-grid">
          {["Digital engineering for plant design", "How BIM improves field coordination", "Quality checks before IFC release"].map(
            (title) => (
              <article key={title}>
                <span>Insight</span>
                <h3>{title}</h3>
                <p>Practical observations from detailed engineering and industrial project execution.</p>
              </article>
            ),
          )}
        </div>
      </section>

      <footer className="footer" id="contact-us">
        <div>
          <p className="eyebrow">Reach Us</p>
          <h2>DSR Design Solutions</h2>
          <p>Detailed design engineering, CAD, BIM, staffing, and project support for industrial clients.</p>
        </div>
        <div>
          <h3>Quick Links</h3>
          <a href="/about">About Us</a>
          <a href="#industries">Industries</a>
          <a href="#services">Services</a>
          <a href="#quality-and-ehs">Quality & EHS</a>
        </div>
        <div>
          <h3>Contact Us</h3>
          <p>+91 00000 00000</p>
          <p>info@dsrdesignsolutions.com</p>
          <div className="socials">
            <a href="#">LinkedIn</a>
            <a href="#">Facebook</a>
            <a href="#">X</a>
          </div>
        </div>
        <p className="copyright">DSR Design Solutions Pvt. Ltd. &copy; 2026 All Rights Reserved.</p>
      </footer>
    </main>
  );
}
