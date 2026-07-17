"use client";

import { motion, type Variants } from "framer-motion";
import { fadeUp, viewport } from "@/lib/motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  variant?: Variants;
  delay?: number;
  as?: "div" | "section" | "article" | "li";
};

export default function Reveal({
  children,
  className,
  variant = fadeUp,
  delay = 0,
  as = "div",
}: RevealProps) {
  const Component = motion[as];

  return (
    <Component
      className={className}
      variants={variant}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      transition={{ delay }}
    >
      {children}
    </Component>
  );
}
