import SectionLabel from "./SectionLabel";
import { useFadeIn } from "../hooks/useFadeIn";
import { currentlyItems } from "../data/portfolio";

export default function Currently() {
  const { ref, visible } = useFadeIn();

  return (
    <section
      ref={ref}
      className={`fade-up ${visible ? "is-visible" : ""} px-margin-mobile md:px-margin-desktop pb-section-gap`}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
        <div className="md:col-span-12 xl:col-span-3">
          <SectionLabel number="04" label="Currently" />
        </div>

        <div className="md:col-span-12 xl:col-span-9 flex flex-col xl:flex-row xl:justify-between xl:items-start w-full gap-8 xl:gap-4">
          {currentlyItems.map((item) => (
            <div
              key={item.label}
              className="flex flex-col md:flex-row xl:flex-col justify-between items-start md:items-center xl:items-start
                py-6 xl:py-0 border-b border-border xl:border-b-0 xl:w-1/3"
            >
              <span className="text-label-caps uppercase text-primary-container mb-2 md:mb-0 xl:mb-4">
                {item.label}
              </span>
              <span className="text-body-lg text-on-surface">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}