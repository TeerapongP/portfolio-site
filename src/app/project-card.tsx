"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function ProjectCard({ children, variant = "project" }: { children: ReactNode; variant?: "project" | "experience" | "toolkit" | "skill" | "education" | "contact" }) {
  const card = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = card.current;
    if (!node) return;
    const motion = matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
    let frame = 0;
    let x = 0, y = 0, targetX = 0, targetY = 0;
    let bounds: DOMRect | null = null;
    const draw = () => {
      x += (targetX - x) * 0.1;
      y += (targetY - y) * 0.1;
      node.style.setProperty("--card-x", x.toFixed(4));
      node.style.setProperty("--card-y", y.toFixed(4));
      node.style.setProperty("--spot-x", `${((x + 1) * 50).toFixed(1)}%`);
      node.style.setProperty("--spot-y", `${((y + 1) * 50).toFixed(1)}%`);
      if (Math.abs(targetX - x) + Math.abs(targetY - y) > 0.002) {
        frame = requestAnimationFrame(draw);
      } else frame = 0;
    };
    const start = () => { if (!frame) frame = requestAnimationFrame(draw); };
    const enter = () => { bounds = node.getBoundingClientRect(); };
    const move = (event: PointerEvent) => {
      if (!motion.matches || event.pointerType !== "mouse") return;
      bounds ??= node.getBoundingClientRect();
      targetX = Math.max(-1, Math.min(1, (event.clientX - bounds.left) / bounds.width * 2 - 1));
      targetY = Math.max(-1, Math.min(1, (event.clientY - bounds.top) / bounds.height * 2 - 1));
      start();
    };
    const leave = () => { targetX = targetY = 0; bounds = null; start(); };
    const reset = () => {
      cancelAnimationFrame(frame);
      frame = x = y = targetX = targetY = 0;
      bounds = null;
      node.style.setProperty("--card-x", "0");
      node.style.setProperty("--card-y", "0");
      node.style.setProperty("--spot-x", "50%");
      node.style.setProperty("--spot-y", "50%");
    };
    node.addEventListener("pointerenter", enter);
    node.addEventListener("pointermove", move, { passive: true });
    node.addEventListener("pointerleave", leave);
    motion.addEventListener("change", reset);
    window.addEventListener("scroll", reset, { passive: true });
    window.addEventListener("resize", reset);
    document.addEventListener("visibilitychange", reset);
    return () => {
      reset();
      node.removeEventListener("pointerenter", enter);
      node.removeEventListener("pointermove", move);
      node.removeEventListener("pointerleave", leave);
      motion.removeEventListener("change", reset);
      window.removeEventListener("scroll", reset);
      window.removeEventListener("resize", reset);
      document.removeEventListener("visibilitychange", reset);
    };
  }, []);

  return <article ref={card} className={`${variant === "contact" ? "contact-panel text-white" : variant === "education" ? "education-card p-6 sm:p-9" : variant === "experience" ? "experience-card" : variant === "toolkit" ? "skills-card toolkit-card" : variant === "skill" ? "skills-card skill-group-card" : "featured-project"} project-card-3d`}>{children}</article>;
}
