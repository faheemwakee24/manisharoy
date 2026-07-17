"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { fadeUp, viewport } from "@/lib/motion";

export default function VisitCounter() {
  const [count, setCount] = useState(28223634);
  const spring = useSpring(count, { stiffness: 80, damping: 20 });
  const display = useTransform(spring, (value) => Math.round(value).toLocaleString());

  useEffect(() => {
    spring.set(count);
  }, [count, spring]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((value) => value + Math.floor(Math.random() * 3) + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="counter-strip"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      <motion.div className="counter-num">
        <motion.span>{display}</motion.span>
      </motion.div>
      <div className="counter-label">Times this portfolio has been visited</div>
    </motion.div>
  );
}
