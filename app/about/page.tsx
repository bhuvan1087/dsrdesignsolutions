const navItems = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Industries", "/#industries"],
  ["Services", "/#services"],
  ["Quality & EHS", "/#quality-and-ehs"],
  ["Divisions", "/#divisions"],
  ["Blogs", "/#blogs"],
  ["Contact Us", "/#contact-us"],
];

const milestones = [
  ["2011", "DSR begins with a focused vision for dependable detailed design engineering support."],
  ["2016", "Expanded CAD, BIM, and multidisciplinary documentation workflows for industrial clients."],
  ["2021", "Built a broader talent and project delivery network for secondment and manpower support."],
  ["2026", "Delivering integrated design, staffing, training, and project support for complex assets."],
];

const strengths = [
  ["Detailed Engineering", "Practical design documentation for procurement, fabrication, approval, and construction."],
  ["Digital Delivery", "CAD, BIM, and coordinated model-based workflows that improve clarity and reduce rework."],
  ["Project Support", "Flexible engineering teams aligned with client schedules, standards, and site realities."],
  ["Quality Culture", "Review-led delivery with attention to compliance, traceability, and disciplined handover."],
];

export default function AboutPage() {
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
            <a className={item === "About Us" ? "active" : undefined} key={item} href={href}>
              {item}
            </a>
          ))}
        </nav>
        <a className="header-cta" href="/#contact-us">
          Get in Touch
        </a>
      </header>

      <section className="page-hero">
        <div>
          <p className="eyebrow">About Us</p>
          <h1>About Our Company</h1>
          <p>
            We are a team of dedicated engineering professionals committed to delivering innovative,
            practical, and high-quality solutions that transform industries and improve project outcomes.
          </p>
        </div>
      </section>

      <section className="about-detail section">
        <div>
          <p className="eyebrow">Who We Are</p>
          <h2>A detailed design engineering partner for industrial growth.</h2>
          <p>
            DSR Design Solutions is a detailed design engineering company supporting oil and gas,
            petrochemical, industrial, infrastructure, and manufacturing projects. We help clients with
            engineering documentation, CAD, BIM, project support, manpower services, and technical training
            that are practical, compliant, sustainable, and future-ready.
          </p>
          <p>
            Our approach combines technical depth, project execution capability, and industry knowledge.
            From early design coordination to construction-ready deliverables, we focus on clear
            communication, reliable documentation, and disciplined quality review at every stage.
          </p>
        </div>
        <aside className="certification-card">
          <span>Certified Delivery Focus</span>
          <h3>Quality, EHS, and information discipline guide our work.</h3>
          <p>
            Built around robust internal checks, secure information handling, and client-specific standards.
          </p>
        </aside>
      </section>

      <section className="journey-section">
        <div className="section-heading compact">
          <p className="eyebrow">Our Journey</p>
          <h2>Key milestones that shaped our company.</h2>
          <p>
            From focused beginnings to a growing engineering network, our journey is built on dependable
            delivery and long-term client relationships.
          </p>
        </div>
        <div className="timeline">
          {milestones.map(([year, copy]) => (
            <article key={year}>
              <strong>{year}</strong>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section strengths-section">
        <div className="section-heading">
          <p className="eyebrow">What We Do</p>
          <h2>Full information, not just a homepage preview.</h2>
        </div>
        <div className="value-grid">
          {strengths.map(([title, copy]) => (
            <article className="value-card" key={title}>
              <span>{title.slice(0, 2)}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="split-band about-split">
        <article>
          <p className="eyebrow">Our Vision</p>
          <h2>To be a trusted engineering partner known for precision, reliability, and value.</h2>
        </article>
        <article>
          <p className="eyebrow">Our Mission</p>
          <h2>To support clients with coordinated, buildable, and dependable engineering solutions.</h2>
        </article>
      </section>

      <footer className="footer" id="contact-us">
        <div>
          <p className="eyebrow">Reach Us</p>
          <h2>DSR Design Solutions</h2>
          <p>Detailed design engineering, CAD, BIM, staffing, and project support for industrial clients.</p>
        </div>
        <div>
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/#industries">Industries</a>
          <a href="/#services">Services</a>
          <a href="/#quality-and-ehs">Quality & EHS</a>
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
