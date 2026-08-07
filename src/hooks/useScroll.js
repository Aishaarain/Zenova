import { useEffect, useState } from "react";

/** Raw window scrollY, rAF-throttled. */
export function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return y;
}

/** 0..1 progress through the whole page — drives the top progress bar. */
export function useScrollProgressTotal() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let ticking = false;
    const calc = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? Math.min(1, Math.max(0, window.scrollY / total)) : 0);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(calc);
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    calc();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return progress;
}

/**
 * Classic pinned scrollytelling: pair this with a tall outer wrapper
 * (e.g. height: `${steps * 70}vh`) whose inner content is `position: sticky`.
 * Returns 0..1 progress through the wrapper's extra scroll height, plus
 * the current step index.
 */
export function usePinnedProgress(ref, steps) {
  const [state, setState] = useState({ progress: 0, active: 0 });
  useEffect(() => {
    let ticking = false;
    const calc = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      let progress = total > 0 ? -rect.top / total : 0;
      progress = Math.min(1, Math.max(0, progress));
      const active = Math.min(steps - 1, Math.floor(progress * steps));
      setState({ progress, active });
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(calc);
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    calc();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ref, steps]);
  return state;
}
