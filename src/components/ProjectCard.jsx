import { ArrowRight } from "lucide-react";
import { useFadeIn } from "../hooks/useFadeIn";

/**
 * One row of the Selected Work section. Image sits on one side, copy on
 * the other, alternating per the `reverse` flag (desktop/xl only — below
 * that breakpoint everything stacks image-above-copy, matching the Stitch
 * reference).
 *
 * NOTE: this is the structural shell only. Real project screenshots will
 * replace the placeholder panel in a later pass — see data/projects.js.
 */
export default function ProjectCard({
  number,
  title,
  description,
  tags = [],
  image,
  link = "#",
  reverse = false,
}) {
  const { ref, visible } = useFadeIn();
  const hasRealLink = Boolean(link) && link !== "#";

  return (
    <article
      ref={ref}
      className={`fade-up ${visible ? "is-visible" : ""} group flex flex-col xl:flex-row gap-6 xl:gap-16 items-center`}
    >
      <div
        className={`relative w-full xl:w-2/3 aspect-4/3 md:aspect-video xl:aspect-16/10
          bg-surface border border-border overflow-hidden order-1 ${reverse ? "xl:order-2" : ""}`}
      >
        {image ? (
          <img
            src={image}
            alt={`${title} project screenshot`}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-label-caps uppercase text-on-surface-variant">
            Image coming soon
          </div>
        )}
      </div>

      <div
        className={`flex flex-col justify-between items-start gap-4 xl:w-1/3 order-2 ${reverse ? "xl:order-1" : ""}`}
      >
        <div className="flex flex-col gap-2 w-full">
          <span className="text-label-caps text-primary-container">
            {number}
          </span>
          <h3 className="text-headline-lg-mobile md:text-headline-lg uppercase">
            {title}
          </h3>
          <p className="text-body-md text-on-surface-variant max-w-md mt-2">
            {description}
          </p>
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4 xl:mt-8">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-label-caps uppercase border border-border px-3 py-1 text-on-surface-variant"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        <a
          href={hasRealLink ? link : undefined}
          target={hasRealLink ? "_blank" : undefined}
          rel={hasRealLink ? "noreferrer" : undefined}
          aria-disabled={!hasRealLink}
          title={hasRealLink ? undefined : "Link coming soon"}
          onClick={(e) => {
            if (!hasRealLink) e.preventDefault();
          }}
          className={`inline-flex items-center gap-2 text-label-caps uppercase transition-colors group-hover:translate-x-2 duration-300 mt-6 xl:mt-12
            ${hasRealLink ? "hover:text-primary-container cursor-pointer" : "text-on-surface-variant/70 cursor-default"}`}
        >
          View project <ArrowRight size={14} />
        </a>
      </div>
    </article>
  );
}