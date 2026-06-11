"use client";
import { useEffect, useRef } from "react";

/**
 * Wraps children (designed for a fixed pixel width) and scales them down
 * proportionally when the viewport is narrower than `designWidth`.
 * The outer div adjusts its height so no whitespace gap appears.
 */
export default function ResponsiveScale({
  children,
  designWidth = 1440,
}: {
  children: React.ReactNode;
  designWidth?: number;
}) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function apply() {
      const outer = outerRef.current;
      const inner = innerRef.current;
      if (!outer || !inner) return;

      const vw = outer.offsetWidth;
      if (vw >= designWidth) {
        inner.style.transform = "";
        inner.style.width = "";
        outer.style.height = "";
        return;
      }

      const scale = vw / designWidth;
      inner.style.transform = `scale(${scale})`;
      inner.style.transformOrigin = "top left";
      inner.style.width = `${designWidth}px`;
      outer.style.height = `${inner.offsetHeight * scale}px`;
    }

    apply();
    const ro = new ResizeObserver(apply);
    if (outerRef.current) ro.observe(outerRef.current);
    window.addEventListener("resize", apply);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", apply);
    };
  }, [designWidth]);

  return (
    <div ref={outerRef} style={{ width: "100%", overflow: "hidden" }}>
      <div ref={innerRef}>{children}</div>
    </div>
  );
}
