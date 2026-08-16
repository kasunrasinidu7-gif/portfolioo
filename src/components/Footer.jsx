import { profile, navLinks } from "../data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="w-full py-16 border-t border-border bg-background
        flex flex-col md:flex-row justify-between items-center
        gap-8 px-margin-mobile md:px-margin-desktop xl:px-8
        max-w-[1400px] mx-auto text-center md:text-right"
    >
      <div className="text-headline-md font-bold text-on-surface">
        {profile.name}
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-center">
        <nav className="flex flex-col md:flex-row gap-6" aria-label="Footer">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-label-caps uppercase text-on-surface-variant hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="text-label-caps uppercase text-on-surface-variant opacity-50 flex gap-4">
          <span>© {year}</span>
          <span>|</span>
          <span>Designed &amp; built with code</span>
        </div>
      </div>
    </footer>
  );
}
