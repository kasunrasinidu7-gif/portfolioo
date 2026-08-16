# Project images

Put real project screenshots here (e.g. `taskflow.png`, `quickcart.png`,
`tourist-guide.png`), then reference them in `src/data/projects.js` like:

```js
import taskflowImg from "../assets/projects/taskflow.png";

export const projects = [
  {
    title: "TaskFlow",
    image: taskflowImg,
    // ...
  },
];
```

Vite will bundle and optimize the image automatically at build time.

Do not use temporary Stitch/Google-generated preview URLs here — those are
not real screenshots of your projects and will break once the Stitch
session expires.
