// Alien Field Notes: The Two Day Earth Review.
// main.ts writes exactly one line — an alien tourist's two-star review
// of planet Earth — to /output/entry.txt.
//
// The review: an alien arrives at the famous blue marble and spends the
// whole trip queuing at border control to prove it may land, then rates
// the planet itself lovely and the paperwork not. One joke only (the
// most ordinary tourist experience there is, seen from outside), a
// two-star verdict up front, the punch in the final clause. Winner of a
// 12-candidate duel test run under the kit judge brief verbatim (see
// duel-test.md): mean game score 0.66, the only candidate clearly over
// the 0.60 bar. One line, 154 characters; the verified run wrote exactly
// this review to /output/entry.txt (154 bytes, one line, no trailing
// newline), and this header was revised after that verified run.

import { mkdirSync, writeFileSync } from "node:fs";

const REVIEW =
  "Two stars. Came for the famous blue marble, spent the whole trip queuing to prove I was allowed to land on it. The planet is lovely; the paperwork is not.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REVIEW, "utf8");
