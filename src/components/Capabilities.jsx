import { useFadeIn } from "../hooks/useFadeIn";
import { capabilities } from "../data/portfolio";

/**
 * Three capability categories (Development / Backend & Systems /
 * Creative & Design). Deliberately text-only — no skill bars,
 * percentages, ratings, or icons, per the Stitch design system.
 *
 * Desktop (xl+): balanced three-column layout.
 * Tablet (sm–xl): two columns, wrapping naturally.
 * Mobile (<sm): stacked, single column.
 */
export default function Capabilities() {
  const { ref, visible } = useFadeIn();

  return (
    <div
      ref={ref}
      className={`fade-up ${visible ? "is-visible" : ""} flex flex-col gap-8`}
    >
      <h3 className="text-label-caps uppercase text-primary-container">
        Capabilities
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
        {capabilities.map((group) => (
          <div key={group.category} className="flex flex-col gap-4">
            <h4 className="text-body-lg text-on-surface">{group.category}</h4>
            <ul className="text-body-md text-on-surface-variant flex flex-col gap-2">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
