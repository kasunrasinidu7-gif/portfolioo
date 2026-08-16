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
    link: "https://github.com/kasunrasinidu7-gif/TaskFlow.git",
  },
  {
    number: "02",
    title: "WeatherApp",
    description:
      "A weather application for checking current conditions and forecasts.",
    // TODO: confirm the real tech stack — I could not verify this from
    // the repo (not publicly indexed/reachable at time of writing), and
    // didn't want to guess. Add the real technologies here, e.g.
    // ["React", "OpenWeather API"] or whatever stack was actually used.
    tags: [],
    image: null,
    link: "https://github.com/kasunrasinidu7-gif/WeatherApp.git",
  },
  {
    number: "03",
    title: "Tourist Guide",
    description:
      "A tourism application supporting accommodation and vehicle reservations.",
    tags: ["Java", "MySQL", "REST API"],
    image: null,
    // TODO: add the GitHub/demo URL once available. Left as "#" — the
    // ProjectCard component treats this as "no link yet" and disables
    // the link instead of pointing anywhere dead.
    link: "#",
  },
];