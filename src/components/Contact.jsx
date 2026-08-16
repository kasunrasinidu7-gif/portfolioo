import { ArrowUpRight } from "lucide-react";
import { useFadeIn } from "../hooks/useFadeIn";
import { contact } from "../data/portfolio";

const CONTACT_LINKS = [
  { label: "Email", href: `mailto:${contact.email}` },
  { label: "GitHub", href: contact.github },
  { label: "LinkedIn", href: contact.linkedin },
];

export default function Contact() {
  const { ref, visible } = useFadeIn();

  return (
    <section
      ref={ref}
      id="contact"
      className={`fade-up ${visible ? "is-visible" : ""}
        px-margin-mobile md:px-margin-desktop py-section-gap border-t border-border
        flex flex-col items-center text-center`}
    >
      <h2 className="text-headline-lg-mobile md:fluid-massive md:text-display uppercase tracking-tighter max-w-6xl mb-16">
        Let's build
        <br className="hidden md:block" /> something
        <br className="hidden md:block" /> great.
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
        {CONTACT_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            className="group text-label-caps uppercase flex items-center gap-2
              hover:text-primary-container transition-colors duration-300
              border-b border-transparent hover:border-primary-container pb-1"
          >
            {link.label}
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        ))}
      </div>
    </section>
  );
}
