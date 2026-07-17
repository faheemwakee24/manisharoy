"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { fadeDown } from "@/lib/motion";

type NavLink = {
  href: string;
  label: string;
  cta?: boolean;
};

const homeLinks: NavLink[] = [
  { href: "#about", label: "About" },
  { href: "#business", label: "My Business" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Enquire", cta: true },
];

const pageLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/#business", label: "My Business" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Enquire", cta: true },
];

export default function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const links = isHome ? homeLinks : pageLinks;
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <motion.nav
      id="nav"
      className={scrolled ? "scrolled" : ""}
      variants={fadeDown}
      initial="hidden"
      animate="visible"
    >
      <Link href={isHome ? "#home" : "/"} className="logo">
        <Image src="/logo.png" alt="Manisha Roy — Fashion Designer" width={180} height={64} priority />
      </Link>
      <ul className={`nav-links${menuOpen ? " show" : ""}`}>
        {links.map((link, index) => (
          <motion.li
            key={link.href}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + index * 0.05, duration: 0.5 }}
          >
            <Link
              href={link.href}
              className={link.cta ? "nav-cta" : pathname === link.href ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          </motion.li>
        ))}
      </ul>
      <button
        className={`hamburger${menuOpen ? " open" : ""}`}
        type="button"
        aria-label="Open menu"
        onClick={(e) => {
          e.stopPropagation();
          setMenuOpen((open) => !open);
        }}
      >
        <span />
        <span />
        <span />
      </button>
    </motion.nav>
  );
}
