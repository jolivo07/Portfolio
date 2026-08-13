"use client";

import { useEffect, useState } from "react";

/**
 * Drives two fixed background layers from the pointer position: a soft accent
 * spotlight and a grid that brightens around the cursor. Writes the smoothed
 * position to CSS variables so all painting stays in the compositor.
 *
 * No-ops on coarse pointers and when the user prefers reduced motion.
 */
export function CursorBackdrop() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const root = document.documentElement;

    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (!finePointer || reducedMotion) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 3;
    let currentX = targetX;
    let currentY = targetY;
    let frame = 0;
    let idle = false;

    setActive(true);

    const onMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      if (idle) {
        idle = false;
        frame = requestAnimationFrame(tick);
      }
    };

    function tick() {
      // Ease toward the pointer so the light trails slightly behind it.
      currentX += (targetX - currentX) * 0.09;
      currentY += (targetY - currentY) * 0.09;

      root.style.setProperty("--mx", `${currentX.toFixed(1)}px`);
      root.style.setProperty("--my", `${currentY.toFixed(1)}px`);

      // Park the loop once the light has caught up; a pointer move restarts it.
      if (Math.abs(targetX - currentX) < 0.5 && Math.abs(targetY - currentY) < 0.5) {
        idle = true;
        return;
      }
      frame = requestAnimationFrame(tick);
    }

    root.style.setProperty("--mx", `${currentX}px`);
    root.style.setProperty("--my", `${currentY}px`);
    window.addEventListener("pointermove", onMove, { passive: true });
    frame = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
      setActive(false);
    };
  }, []);

  // Rendered only once the pointer driver is running, so touch devices and
  // reduced-motion users never get a stray light parked mid-screen.
  if (!active) return null;

  return (
    <>
      <div className="cursor-spotlight" aria-hidden="true" />
      <div className="cursor-grid" aria-hidden="true" />
    </>
  );
}
