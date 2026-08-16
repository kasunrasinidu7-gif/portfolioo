import { useEffect, useState } from "react";

/**
 * True once the page has scrolled past `offset` pixels. Used to toggle the
 * translucent/blurred navbar background, matching the Stitch reference.
 */
export function useScrolled(offset = 50) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > offset);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);

  return scrolled;
}
