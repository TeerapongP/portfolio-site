"use client";

import { useEffect, useRef, useState } from "react";

export default function PortraitHero() {
  const stage = useRef<HTMLElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const node = stage.current;
    if (!node) return;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let x = 0, y = 0, targetX = 0, targetY = 0;
    let visible = true;
    const reset = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      x = y = targetX = targetY = 0;
      node.style.setProperty("--mx", "0");
      node.style.setProperty("--my", "0");
    };
    const animate = () => {
      x += (targetX - x) * 0.075;
      y += (targetY - y) * 0.075;
      node.style.setProperty("--mx", x.toFixed(4));
      node.style.setProperty("--my", y.toFixed(4));
      if (Math.abs(targetX - x) + Math.abs(targetY - y) > 0.001) {
        frame = requestAnimationFrame(animate);
      } else frame = 0;
    };
    const start = () => { if (!frame) frame = requestAnimationFrame(animate); };
    const move = (event: PointerEvent) => {
      if (paused || reduced.matches || !fine.matches || !visible || event.pointerType !== "mouse") return;
      const box = node.getBoundingClientRect();
      targetX = Math.max(-1, Math.min(1, ((event.clientX - box.left) / box.width - 0.5) * 2));
      targetY = Math.max(-1, Math.min(1, ((event.clientY - box.top) / box.height - 0.5) * 2));
      start();
    };
    const leave = () => { targetX = targetY = 0; start(); };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      node.dataset.visible = String(visible);
      if (!visible) reset();
    });
    const visibility = () => { if (document.hidden) reset(); };
    observer.observe(node);
    node.addEventListener("pointermove", move, { passive: true });
    node.addEventListener("pointerleave", leave);
    reduced.addEventListener("change", reset);
    fine.addEventListener("change", reset);
    document.addEventListener("visibilitychange", visibility);
    return () => {
      reset();
      observer.disconnect();
      node.removeEventListener("pointermove", move);
      node.removeEventListener("pointerleave", leave);
      reduced.removeEventListener("change", reset);
      fine.removeEventListener("change", reset);
      document.removeEventListener("visibilitychange", visibility);
    };
  }, [paused]);

  return (
    <section ref={stage} className="portrait-hero text-hero" data-paused={paused} aria-labelledby="hero-title">
      <div className="stage-grid" aria-hidden="true" />
      <div className="stage-atmosphere" aria-hidden="true" />
      <div className="hero-aurora" aria-hidden="true">
        <span className="aurora-one" />
        <span className="aurora-two" />
        <span className="aurora-three" />
      </div>
      <div className="hero-tech-cloud" aria-hidden="true">
        <span className="tech-float tech-angular">Angular</span>
        <span className="tech-float tech-spring">Spring</span>
        <span className="tech-float tech-kotlin">Kotlin</span>
        <span className="tech-float tech-next">Next.js</span>
      </div>
      <div className="hero-edition"><span>INDEPENDENT THINKING. ENGINEERED SYSTEMS.</span><span>BANGKOK, THAILAND · 13.75° N</span></div>
      <div className="hero-composition">
        <div className="hero-copy">
          <p className="hero-eyebrow"><span /> THIRAPONG PINKAEW</p>
          <h1 id="hero-title">Full-stack<br /><em>Developer.</em></h1>
          <p className="hero-description">3+ years building enterprise web and financial systems. From reusable interfaces to backend services and production releases.</p>
          <p className="hero-tech">Angular / React · Kotlin / Java · .NET</p>
          <p className="hero-current">Currently Software Engineer at <a href="#experience">Ascend Money ↗</a></p>
          <div className="hero-links">
            <a className="hero-primary shimmer-action" href="#projects"><span className="shimmer-sweep" aria-hidden="true" />View selected work <span aria-hidden="true">↗</span></a>
            <a className="hero-resume" href="/cv-thirapong-pinkaew.pdf" download>Download CV <span aria-hidden="true">↓</span></a>
          </div>
          <p className="hero-disciplines">FULL STACK <span>/</span> ENTERPRISE <span>/</span> SECURITY</p>
        </div>
      </div>
      <div className="hero-bottom"><a href="#projects"><span aria-hidden="true">↓</span> SCROLL TO DISCOVER</a><span className="hero-bottom-role">SOFTWARE DEVELOPER & FULL-STACK ENGINEER</span><button type="button" onClick={() => setPaused(!paused)} aria-pressed={paused}>{paused ? "Enable motion ↗" : "Pause motion Ⅱ"}</button></div>
    </section>
  );
}
