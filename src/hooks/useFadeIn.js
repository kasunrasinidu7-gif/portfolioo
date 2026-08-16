import { useEffect, useRef, useState } from "react";

/**
 * Mirrors the Stitch reference's IntersectionObserver fade-up behavior.
 * Attach the returned ref to any element and spread `className` (or merge
 * it with your own) to get a one-time fade/translate reveal on scroll.
 *
 * const { ref, visible } = useFadeIn();
 * <div ref={ref} className={`fade-up ${visible ? "is-visible" : ""}`}>
 */
export function useFadeIn({ threshold = 0.1 } = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Respect reduced-motion users by just showing content immediately.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: "0px", threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}
