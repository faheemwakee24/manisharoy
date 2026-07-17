"use client";

import { useEffect, useRef } from "react";

export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("visible");

          entry.target.querySelectorAll<HTMLElement>(".progress-fill").forEach((bar) => {
            bar.style.width = `${bar.dataset.progress}%`;
          });

          entry.target.querySelectorAll<HTMLElement>(".counter-stat").forEach((stat) => {
            const target = Number(stat.dataset.target);
            let current = 0;
            const step = Math.ceil(target / 50);
            const timer = setInterval(() => {
              current = Math.min(current + step, target);
              stat.textContent = `${current}${target >= 100 ? "+" : ""}`;
              if (current >= target) clearInterval(timer);
            }, 30);
          });

          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

export function useRevealGroup(selector: string) {
  useEffect(() => {
    const targets = document.querySelectorAll(selector);
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("visible");

          entry.target.querySelectorAll<HTMLElement>(".progress-fill").forEach((bar) => {
            bar.style.width = `${bar.dataset.progress}%`;
          });

          entry.target.querySelectorAll<HTMLElement>(".counter-stat").forEach((stat) => {
            const target = Number(stat.dataset.target);
            let current = 0;
            const step = Math.ceil(target / 50);
            const timer = setInterval(() => {
              current = Math.min(current + step, target);
              stat.textContent = `${current}${target >= 100 ? "+" : ""}`;
              if (current >= target) clearInterval(timer);
            }, 30);
          });

          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.15 },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [selector]);
}
