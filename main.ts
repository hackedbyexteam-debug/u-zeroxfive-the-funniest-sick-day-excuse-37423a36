import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Funniest Sick-Day Excuse — one line, under 200 characters.
// Half believable (a sneeze really can throw a back out), fresh idea,
// twist lands at the end, sounds like a real text to a boss.
const MAX_CHARS = 200;
const ENTRY =
  "Can't come in — sneezed in my sleep so hard I threw my back out, currently flat on the floor renegotiating my relationship with gravity.";

// The gate accepts UTF-8 text of 1 to 200 characters, not only whitespace.
// Fail loudly here so a bad entry never reaches the judge silently.
const trimmed = ENTRY.trim();
if (trimmed.length < 1 || ENTRY.length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${ENTRY.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
