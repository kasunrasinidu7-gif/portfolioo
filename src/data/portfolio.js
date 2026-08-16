// ---------------------------------------------------------------------------
// PORTFOLIO CONFIGURATION
// ---------------------------------------------------------------------------
// This is the one place to edit your personal info, contact links, nav
// structure, capabilities, and "Currently" status. Every component reads
// from here instead of hardcoding content — updating your portfolio is a
// matter of editing this file (and src/data/projects.js for project
// content), not hunting through JSX.
//
// Fields marked "TODO" are placeholders. They render honestly as visible
// prompts on the live site rather than invented claims — replace them
// with your real information before launch.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Kasun Rasinidu",
  role: "Software Developer",
  tagline: "I build digital products that solve real problems.",
  availability: "Available for projects",

  // TODO: replace with a short, honest introduction in your own words.
  bio: "Add a short introduction about yourself here.",
};

export const contact = {
  // TODO: replace with your real email address.
  email: "you@example.com",
  // TODO: replace with your real GitHub profile URL.
  github: "https://github.com/your-username",
  // TODO: replace with your real LinkedIn profile URL.
  linkedin: "https://linkedin.com/in/your-username",
};

// Shown in the Navbar (desktop + mobile) and reused in the Footer. All
// real anchors that smooth-scroll to their section — never dead "#" links.
export const navLinks = [
  { href: "#work", label: "Work" },
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
