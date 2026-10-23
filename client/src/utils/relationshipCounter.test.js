import { test, expect } from "vitest";
import { getDuration } from "./relationshipCounter";
const d = (y, m, day, h = 12, mi = 0, s = 0) => new Date(y, m - 1, day, h, mi, s); // local time, so the tests don't depend on the machine's timezone
test("start day is zero", () => expect(getDuration(d(2025, 10, 28, 0, 0, 0))).toEqual({ years: 0, months: 0, days: 0 }));
test("never negative before the start", () => { expect(getDuration(d(2025, 10, 27, 23, 59, 59))).toEqual({ years: 0, months: 0, days: 0 }); expect(getDuration(d(2024, 1, 1))).toEqual({ years: 0, months: 0, days: 0 }); });
test("21 Oct 2026", () => expect(getDuration(d(2026, 10, 21))).toEqual({ years: 0, months: 11, days: 23 }));
test("last second before the first anniversary", () => expect(getDuration(d(2026, 10, 27, 23, 59, 59))).toEqual({ years: 0, months: 11, days: 29 }));
test("exactly one year", () => expect(getDuration(d(2026, 10, 28, 0, 0, 0))).toEqual({ years: 1, months: 0, days: 0 }));
test("keeps counting after the anniversary", () => expect(getDuration(d(2027, 1, 5))).toEqual({ years: 1, months: 2, days: 8 }));
test("short February", () => expect(getDuration(d(2026, 3, 1))).toEqual({ years: 0, months: 4, days: 1 }));
test("year boundary", () => expect(getDuration(d(2026, 1, 1))).toEqual({ years: 0, months: 2, days: 4 }));
test("31-day October", () => expect(getDuration(d(2026, 11, 1))).toEqual({ years: 1, months: 0, days: 4 }));
test("leap day 2028", () => expect(getDuration(d(2028, 2, 29))).toEqual({ years: 2, months: 4, days: 1 }));
test("one month exactly", () => expect(getDuration(d(2025, 11, 28))).toEqual({ years: 0, months: 1, days: 0 }));
