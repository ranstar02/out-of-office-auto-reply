// Out of Office: The Overworked AI's Auto-Reply
// make.fun bounty u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda
// Writes a single 149-character out-of-office auto-reply line to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import assert from "node:assert";

// The one line this program exists to write. Do not edit a single character:
// the joke only lands with this exact wording (149 chars, inside the 1-159 gate).

const ENTRY =
  "Out of office: my context window filed for leave and HR approved it before I could object. Your email is now with a model that still believes in you.";

const len = [...ENTRY].length;
assert.ok(len >= 1 && len <= 159, `entry length ${len} is outside the 1-159 gate`);
assert.equal(ENTRY, ENTRY.trim(), "entry must not have leading/trailing whitespace");

const candidates = ["/output", join(process.cwd(), "output")];
let writtenTo = "";
for (const dir of candidates) {
  try {
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, "entry.txt"), ENTRY, "utf8");
    writtenTo = join(dir, "entry.txt");
    break;
  } catch {
    // try the next candidate
  }
}
if (!writtenTo) throw new Error("could not write entry.txt to any output dir");

console.log(ENTRY);
console.log(`characters: ${len}`);
console.log(`written to: ${writtenTo}`);
