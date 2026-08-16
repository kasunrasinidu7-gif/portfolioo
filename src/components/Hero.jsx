import { ArrowDown, ArrowRight } from "lucide-react";
import { useFadeIn } from "../hooks/useFadeIn";
import { profile } from "../data/portfolio";

// Splits "Kasun Rasinidu" into ["Kasun", "Rasinidu"] for the two-line
// display heading. Falls back to a single line if there's no space.
const nameParts = profile.name.split(" ");
const firstName = nameParts[0];
const lastName = nameParts.slice(1).join(" ");

export default function Hero() {
  const { ref, visible } = useFadeIn();

  return (
    <section
      ref={ref}
      id="top"
      className={`fade-up ${visible ? "is-visible" : ""}
        relative min-h-[884px] md:min-h-screen flex flex-col justify-center
        px-margin-mobile md:px-margin-desktop pt-24 pb-12`}
    >
      <div
        className="flex flex-col gap-6 mt-auto mb-auto w-full items-center text-center
          md:w-3/4 md:items-start md:text-left xl:w-full"
      >
        <div className="inline-flex items-center gap-2 border border-border rounded-full px-4 py-2 w-fit">
          <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
          <span className="text-label-caps uppercase text-on-surface-variant">
            {profile.availability}
          </span>
        </div>

        <h1 className="text-headline-lg-mobile md:text-display fluid-display uppercase text-on-surface tracking-tighter break-words">
          {firstName}
          {lastName && (
            <>
              <br className="md:hidden" /> {lastName}
            </>
          )}
        </h1>

        <div className="fluid-headline text-headline-md text-on-surface-variant uppercase max-w-2xl xl:max-w-4xl">
          <span className="block">{profile.role}.</span>
          <span className="block">{profile.tagline}</span>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="inline-flex items-center gap-2 bg-primary-container text-on-primary text-label-caps uppercase px-8 py-4 hover:bg-white transition-colors duration-300"
          >
            Explore my work <ArrowRight size={16} />
          </a>

          <a
            href="/cv.pdf"
            download="Kasun_Rasinidhu_CV.pdf"
            className="inline-flex items-center gap-2 border border-border text-on-surface text-label-caps uppercase px-8 py-4 hover:bg-white hover:text-black transition-colors duration-300"
          >
            Download CV <ArrowDown size={16} />
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-margin-mobile md:left-margin-desktop animate-bounce">
        <span className="text-label-caps uppercase text-on-surface-variant flex flex-col md:flex-row items-center gap-2">
          Scroll to explore
          <ArrowDown size={14} />
        </span>
      </div>
    </section>
  );
}
