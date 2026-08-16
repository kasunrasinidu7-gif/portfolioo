import SectionLabel from "./SectionLabel";
import Capabilities from "./Capabilities";
import { useFadeIn } from "../hooks/useFadeIn";
import { profile } from "../data/portfolio";

export default function About() {
  const { ref, visible } = useFadeIn();

  return (
    <section
      id="about"
      className="px-margin-mobile md:px-margin-desktop py-section-gap border-t border-border"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
        <div className="md:col-span-12 xl:col-span-3">
          <SectionLabel number="02" label="About" />
        </div>

        <div className="md:col-span-12 xl:col-span-9 flex flex-col gap-16">
          <p
            ref={ref}
            className={`fade-up ${visible ? "is-visible" : ""} text-headline-md text-on-surface leading-tight max-w-3xl`}
          >
            {profile.bio}
          </p>

          <Capabilities />
        </div>
      </div>
    </section>
  );
}
