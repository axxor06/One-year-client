import { test, expect } from "vitest";
import { openWhen } from "./openWhen";
import { messages } from "./messages";
import { notes } from "./notes";
import { firstChat } from "./firstChat";
import { reasons, reasonGroups, openingReasons } from "./reasons";

test("25 open-when letters, each with a real message and a unique id", () => {
  expect(openWhen.length).toBeGreaterThanOrEqual(25);
  expect(new Set(openWhen.map((l) => l.id)).size).toBe(openWhen.length);
  for (const l of openWhen) { expect(l.title.length).toBeGreaterThan(3); expect(l.text.length).toBeGreaterThan(0); for (const t of l.text) expect(t.trim().length).toBeGreaterThan(10); }
});
test("sleepy letter: no 'Kinda sleepy juju', has the right line", () => {
  const l = openWhen.find((x) => x.id === "sleepy"), txt = l.text.join(" ") + " " + l.feature;
  expect(txt).not.toMatch(/kinda sleepy juju/i); expect(l.feature).toBe("Go sleep, kanna. We can talk tomorrow.");
});
test("every requested open-when topic exists", () => {
  const titles = openWhen.map((l) => l.title).join("|");
  for (const k of ["sleepy", "sad", "missing me", "angry with me", "overthinking", "crying", "happy", "insecure", "lonely", "stressed", "bad day", "can't sleep", "missing our memories", "upset with yourself", "need a hug", "need to smile", "worried about us", "unappreciated", "your birthday", "our anniversary", "how much I love you", "motivation", "giving up", "first meeting", "reassurance"]) expect(titles).toContain(k);
});
test("messages: the five originals are kept, all unique, none empty", () => {
  for (const m of ["hii baby. yes, starting with hii again.", "Kinda sleepy juju. I still remember you saying that, kanna.", "I read \"you stupid\" as YOU STUPID. best misunderstanding ever, bubu.", "I stepped back at Lulu Mall because I was nervous. thank you for calling me closer, baby.", "your handmade bouquets are some of my favourite things, bubu. because you made them."]) expect(messages).toContain(m);
  expect(messages.length).toBeGreaterThanOrEqual(23); expect(new Set(messages).size).toBe(messages.length);
});
test("five surprise notes, the first keeps the exact sentiment", () => {
  expect(notes).toHaveLength(5); expect(notes[0].text).toBe("I stepped back when I saw you because I was nervous. Not anymore. Come closer anytime, baby.");
  for (const n of notes) { expect(n.heading.length).toBeGreaterThan(2); expect(n.text.length).toBeGreaterThan(20); }
});
test("telegram messages: exact text, sender and order", () => {
  expect(firstChat.messages).toEqual([{ from: "me", text: "hii" }, { from: "you", text: "Hi" }, { from: "you", text: "Kinda sleepy juju" }]);
  expect(firstChat.after).toBe("I still remember this one.");
});
test("no third-person 'she/her' and no 'dating bot' in the letters and notes", () => {
  expect(JSON.stringify([openWhen, notes, firstChat])).not.toMatch(/\b(she|her|hers)\b|dating bot/i);
});

test("at least 200 distinct reasons, all addressed to 'you', none duplicated", () => {
  expect(reasons.length).toBeGreaterThanOrEqual(200); expect(new Set(reasons).size).toBe(reasons.length);
  for (const r of reasons) { expect(r).toMatch(/\byou/i); expect(r.length).toBeGreaterThanOrEqual(12); }
  const words = (s) => new Set(s.toLowerCase().match(/[a-z']+/g)); let worst = 0;
  for (let i = 0; i < reasons.length; i++) for (let j = i + 1; j < reasons.length; j++) { const a = words(reasons[i]), b = words(reasons[j]); const k = [...a].filter((w) => b.has(w)).length / new Set([...a, ...b]).size; worst = Math.max(worst, k); }
  expect(worst).toBeLessThan(0.72); // no near-duplicates
});
test("the eight required reasons are in the collection and three of them open the page", () => {
  const eight = ["You care about me.", "You give me butterflies.", "You forgive me.", "You love me so much.", "You make ordinary moments feel special.", "You put effort into making things for me, like your handmade bouquets.", "You make me feel loved through the little things you do.", "You give me memories that I will always treasure."];
  for (const r of eight) expect(reasons).toContain(r);
  expect(openingReasons).toHaveLength(3); for (const r of openingReasons) expect(eight).toContain(r);
});
test("reasons avoid third person and don't call it a dating bot", () => expect(JSON.stringify(reasonGroups)).not.toMatch(/\b(she|her|hers)\b|dating bot/i));
