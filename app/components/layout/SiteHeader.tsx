"use client";
import { motion } from "framer-motion";
import content from "@/content/site.json";

type SiteHeaderProps = {
  activeLabel: string;
  contactHref?: string;
};

export function SiteHeader({ activeLabel, contactHref = "/contact" }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label={`${content.company.name} home`}>
      <motion.img
  className="brand-logo"
  src={content.company.logo}
  alt=""
  initial={{ opacity: 0, y: 10 }}
  animate={{
    opacity: 1,
    y: [0, -6, 0],
    scale: [1, 1.01, 1],
  }}
  transition={{
    opacity: { duration: 0.6 },
    y: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
    scale: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }}
  whileHover={{
    scale: 1.05,
    rotate: -2,
    filter: "drop-shadow(0px 12px 20px rgba(37,99,235,0.25))",
  }}
/>
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
