import { ArrowUpRight } from "lucide-react";
import SectionLabel from "./SectionLabel";
import { useFadeIn } from "../hooks/useFadeIn";
import { creativeWorks } from "../data/creativeWorks";

function CreativeWorkItem({ number, title, category, description, image, url }) {
  const { ref, visible } = useFadeIn();
  const hasLink = Boolean(url);

  const Wrapper = hasLink ? "a" : "div";
  const wrapperProps = hasLink
    ? { href: url, target: "_blank", rel: "noreferrer" }
    : {};

  return (
    <article
      ref={ref}
      className={`fade-up ${visible ? "is-visible" : ""} group flex flex-col gap-4`}
    >
      <Wrapper
        {...wrapperProps}
        className="relative block w-full aspect-[3/4] bg-surface border border-border overflow-hidden"
      >
        {image ? (
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-label-caps uppercase text-on-surface-variant text-center px-4">
            Image coming soon
          </div>
        )}
      </Wrapper>

      <div className="flex flex-col gap-1">
        <span className="text-label-caps text-primary-container">{number}</span>
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-body-lg text-on-surface">{title}</h3>
          {hasLink && (
            <ArrowUpRight
              size={16}
              className="text-on-surface-variant shrink-0"
            />
          )}
        </div>
        <span className="text-label-caps uppercase text-on-surface-variant">
          {category}
        </span>
        {description && (
          <p className="text-body-md text-on-surface-variant mt-1">
            {description}
          </p>
        )}
      </div>
    </article>
  );
}

/**
 * Small Photoshop/design showcase — not a full gallery. Sits between
 * Selected Work and About, matching the Stitch editorial hierarchy.
 * Images are configured in src/data/creativeWorks.js and served from
 * /public/assets/creative/ once available.
 */
export default function CreativeWork() {
  return (
    <section
      id="creative-work"
      className="px-margin-mobile md:px-margin-desktop py-section-gap border-t border-border"
    >
      <SectionLabel number="02" label="Creative Work" withRule />

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16">
        {creativeWorks.map((item) => (
          <CreativeWorkItem key={item.number} {...item} />
        ))}
      </div>
    </section>
  );
}