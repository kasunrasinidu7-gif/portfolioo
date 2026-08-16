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
          <div ref={ref} className={`fade-up ${visible ? "is-visible" : ""}`}>
            <p className="text-headline-md text-on-surface leading-tight max-w-4xl">
              {profile.bio}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-y border-border py-8">
            <div>
              <p className="text-label-caps uppercase text-primary-container mb-3">
                Education
              </p>
              <h3 className="text-body-lg text-on-surface">
                {profile.education.degree}
              </h3>
              <p className="text-body-md text-on-surface-variant mt-2">
                {profile.education.institution}
              </p>
              <p className="text-body-md text-on-surface-variant mt-1">
                {profile.education.period} · {profile.education.status}
              </p>
              <p className="text-body-md text-on-surface-variant mt-1">
                {profile.education.expectedGraduation}
              </p>
            </div>

            <div>
              <p className="text-label-caps uppercase text-primary-container mb-3">
                School Education
              </p>
              <h3 className="text-body-lg text-on-surface">
                {profile.education.school}
              </h3>
              <p className="text-body-md text-on-surface-variant mt-2">
                School education background
              </p>
            </div>
          </div>

          <Capabilities />
        </div>
      </div>
    </section>
  );
}
