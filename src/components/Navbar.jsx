import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useScrolled } from "../hooks/useScrolled";
import { navLinks } from "../data/portfolio";

export default function Navbar() {
  const scrolled = useScrolled(50);
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock body scroll while the mobile menu is open, and allow Escape to close it.
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const onKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between
        px-margin-mobile md:px-margin-desktop xl:px-8 py-4
        max-w-[1400px] mx-auto transition-colors duration-500
        ${scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent border-b border-transparent"}`}
      id="nav-header"
    >
      <a
        href="#top"
        className="text-headline-md font-bold tracking-tighter text-on-surface"
      >
        K.
      </a>

      <nav className="hidden md:flex gap-8" aria-label="Primary">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-label-caps uppercase text-on-surface-variant hover:text-primary transition-colors duration-300"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <button
        type="button"
        className="md:hidden text-on-surface relative z-50"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu overlay */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed inset-0 top-0 bg-background/98 backdrop-blur-md
          flex flex-col items-center justify-center gap-10
          transition-opacity duration-300
          ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="text-headline-lg-mobile uppercase text-on-surface hover:text-primary transition-colors duration-300"
          >
            {link.label}
          </a>
        ))}
      </div>
    </header>
  );
}
