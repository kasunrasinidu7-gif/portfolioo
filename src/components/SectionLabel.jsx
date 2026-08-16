import { useFadeIn } from "../hooks/useFadeIn";

/**
 * Small uppercase eyebrow used to introduce each major section, e.g.
 * "01 / SELECTED WORK". `withRule` adds the bottom divider used above
 * the Selected Work list in the Stitch reference.
 */
export default function SectionLabel({ number, label, withRule = false }) {
  const { ref, visible } = useFadeIn();

  return (
    <div
      ref={ref}
      className={`fade-up ${visible ? "is-visible" : ""} ${
        withRule ? "border-b border-border pb-4 mb-16 xl:mb-24" : ""
      }`}
    >
      <h2 className="text-label-caps uppercase text-on-surface-variant">
        {number} / {label}
      </h2>
    </div>
  );
}
