/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface Window {
  // set once the homepage card-shuffle animation has run (see ProjectCard.astro)
  doneCardAnimation?: boolean;
}
