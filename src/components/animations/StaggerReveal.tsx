"use client";

import { useEffect, useRef } from "react";

interface StaggerContainerProps {
  children: React.ReactNode;
  staggerDelay?: number;
  className?: string;
}

export function StaggerContainer({
  children,
  staggerDelay = 0.1,
  className = "",
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    // Assign stagger delays to direct children
    const items = container.querySelectorAll<HTMLElement>("[data-stagger-item]");
    items.forEach((item, i) => {
      item.style.setProperty("--stagger-delay", `${i * staggerDelay}s`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            container.classList.add("stagger-visible");
            observer.disconnect();
          }
        });
      },
      { rootMargin: "-60px" }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [staggerDelay]);

  return (
    <div ref={ref} className={`stagger-container ${className}`}>
      {children}
    </div>
  );
}

interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "left" | "right";
}

export function StaggerItem({
  children,
  className = "",
  direction = "up",
}: StaggerItemProps) {
  return (
    <div
      data-stagger-item
      data-direction={direction}
      className={`stagger-item stagger-item--${direction} ${className}`}
    >
      {children}
    </div>
  );
}
