// ---------------------------------------------------------------------------
// PROJECT DATA
// ---------------------------------------------------------------------------
// Add, remove, or edit projects here — the Selected Work section renders
// directly from this array via <ProjectCard />. Descriptions are kept
// concise and factual, limited to what's actually confirmed about each
// project; no invented claims about scale, performance, or production
// status.
//
// `image`: real project screenshots go in src/assets/projects/ (see the
// README.md there) — import the file and reference it here, e.g.:
//   import taskflowImg from "../assets/projects/taskflow.png";
// Left as `null` until real screenshots are available. Do not use
// temporary/AI-preview image URLs.
// `link`: TODO — add a live URL or repo link per project when available.
// ---------------------------------------------------------------------------

export const projects = [
  {
    number: "01",
    title: "TaskFlow",
    description:
      "A task and project management web application for organizing and tracking work.",
    tags: ["React", "Node.js", "MySQL", "Socket.IO"],
    image: null,
    link: "#",
  },
  {
    number: "02",
    title: "QuickCart",
    description:
      "An Android shopping application built around a native mobile commerce experience.",
    tags: ["Kotlin", "Android", "XML"],
    image: null,
    link: "#",
  },
  {
    number: "03",
    title: "Tourist Guide",
    description:
      "A tourism application supporting accommodation and vehicle reservations.",
    tags: ["Java", "MySQL", "REST API"],
    image: null,
    link: "#",
  },
];
