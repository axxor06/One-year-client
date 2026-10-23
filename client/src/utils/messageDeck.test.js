import { test, expect } from "vitest";
import { createDeck } from "./messageDeck";
const items = Array.from({ length: 9 }, (_, i) => `m${i}`);
test("every message appears once per round, then it reshuffles", () => {
  const deck = createDeck(items);
  for (let round = 0; round < 4; round++) { const seen = Array.from({ length: items.length }, () => deck.next()); expect(new Set(seen).size).toBe(items.length); expect([...seen].sort()).toEqual([...items].sort()); }
});
test("no immediate repeat when a new round starts", () => {
  for (let t = 0; t < 200; t++) { const deck = createDeck(items), out = Array.from({ length: items.length * 3 }, () => deck.next()); for (let i = 1; i < out.length; i++) expect(out[i]).not.toBe(out[i - 1]); }
});
test("the chosen first message comes first and isn't repeated in round one", () => {
  const deck = createDeck(items, { first: "m4" }), round = Array.from({ length: items.length }, () => deck.next());
  expect(round[0]).toBe("m4"); expect(new Set(round).size).toBe(items.length);
});
test("progress counter", () => { const deck = createDeck(items); deck.next(); deck.next(); expect(deck.shown).toBe(2); expect(deck.total).toBe(9); });

test("exclude: left out of round one, back in from round two, never an immediate repeat", () => {
  const ex = ["m0", "m1", "m2"], deck = createDeck(items, { exclude: ex });
  const r1 = Array.from({ length: items.length - ex.length }, () => deck.next());
  expect(r1.some((m) => ex.includes(m))).toBe(false); expect(new Set(r1).size).toBe(items.length - ex.length);
  const r2 = Array.from({ length: items.length }, () => deck.next()); expect(new Set(r2).size).toBe(items.length); expect(r2[0]).not.toBe(r1[r1.length - 1]);
});
