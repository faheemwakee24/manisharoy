"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { fadeUp, staggerContainer, viewport } from "@/lib/motion";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/#business", label: "My Business" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <motion.footer
      variants={staggerContainer(0.08)}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      <motion.div variants={fadeUp}>
        <Link href="/" className="logo">
          <Image src="/logo.png" alt="Manisha Roy — Fashion Designer" width={240} height={120} />
        </Link>
      </motion.div>
      <motion.ul className="footer-links" variants={fadeUp}>
        {footerLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </motion.ul>
      <motion.p className="footer-copy" variants={fadeUp}>
        © 2025 Manisha Roy · Fashion Designer & Trader · Mumbai, India · All Rights Reserved
      </motion.p>
    </motion.footer>
  );
}
