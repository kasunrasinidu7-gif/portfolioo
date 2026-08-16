// ---------------------------------------------------------------------------
// PORTFOLIO CONFIGURATION
// ---------------------------------------------------------------------------
// This is the one place to edit your personal info, contact links, nav
// structure, capabilities, and "Currently" status. Every component reads
// from here instead of hardcoding content — updating your portfolio is a
// matter of editing this file (and src/data/projects.js for project
// content), not hunting through JSX.
//
// Personal info, contact links, and capabilities below are real. The one
// remaining placeholder is `profile.profileImage`, which points to a file
// that doesn't exist yet — see the comment above that field.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Kasun Rasinidhu",
  role: "Software Developer / IT Undergraduate",
  tagline: "I build digital products that solve real problems.",
  availability: "Available for projects",

  bio: "An enthusiastic and dependable IT undergraduate interested in software engineering, with a focus on building practical software solutions and continuously developing technical skills.",

  // Shown as a small line under the bio — kept to one line by design so
  // the About section stays concise rather than turning into a CV.
  education: {
    degree: "B.Sc. (Hons) in IT",
    institution: "University of Kelaniya",
    period: "2025 – Present",
    status: "Currently Level 2",
  },

  // Profile photo — served from /public/assets/profile/profile.jpg (a
  // root-relative string path, not a JS import). This is deliberate: an
  // import of a file that doesn't exist yet would fail the production
  // build. Once you drop your real photo at that path, it will appear
  // automatically — no code changes needed. See
  // public/assets/profile/README.md.
  profileImage: "/assets/profile/profile.jpg",
};

export const contact = {
  email: "kasunrasinidu22@gmail.com",
  github: "https://github.com/kasunrasinidu7-gif",
  linkedin: "https://www.linkedin.com/in/kasun-rasinidu-57565b2b6/",
};

// Shown in the Navbar (desktop + mobile) and reused in the Footer. All
// real anchors that smooth-scroll to their section — never dead "#" links.
export const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#creative-work", label: "Creative" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

// "Currently" section — three short, honest statuses.
export const currentlyItems = [
  { label: "Building", value: "Software projects & digital products" },
  { label: "Learning", value: "Cloud computing · DevOps" },
  { label: "Exploring", value: "AI × Software Development" },
];

// Capabilities — three text-based categories (no skill bars, percentages,
// or ratings per the Stitch design system). Edit freely; add or remove
// categories/items as your actual skill set changes.
export const capabilities = [
  {
    category: "Development",
    items: ["Web Development", "Mobile Development", "UI Implementation"],
  },
  {
    category: "Backend & Systems",
    items: ["REST APIs", "Database Design", "Backend Development"],
  },
  {
    category: "Creative & Design",
    items: [
      "Adobe Photoshop",
      "Adobe InDesign",
      "Figma",
      "UI/UX Design",
      "Visual Composition",
    ],
  },
];