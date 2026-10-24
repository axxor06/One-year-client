// Time together, in whole calendar years, months and days, since 28 October 2025 (12:00 AM, the viewer's LOCAL time).
// We compare calendar dates and "borrow" like written subtraction, using the real length of the previous month,
// so month lengths and leap years are right (never "months = days / 30"). Before the start date it returns zeros.
export const START = { year: 2025, month: 10, day: 28 };
const daysIn = (y, m) => new Date(y, m, 0).getDate(); // m is 1-12 (day 0 of next month = last day of this month)
const before = (a, b) => (a.year !== b.year ? a.year < b.year : a.month !== b.month ? a.month < b.month : a.day < b.day);

export function getDuration(now = new Date()) {
  const t = { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() };
  if (before(t, START)) return { years: 0, months: 0, days: 0 };
  let years = t.year - START.year, months = t.month - START.month, days = t.day - START.day;
  if (days < 0) { months -= 1; const pm = t.month === 1 ? 12 : t.month - 1; days += daysIn(t.month === 1 ? t.year - 1 : t.year, pm); }
  if (months < 0) { months += 12; years -= 1; }
  return { years, months, days };
}
