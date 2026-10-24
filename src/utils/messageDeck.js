export function shuffle(items, rng = Math.random) {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rng() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}
// Hands out every item once per round, in random order, then reshuffles for the next round.
// The first item of a new round is never the last item of the previous one. `first` is shown first in round one.
export function createDeck(items, { rng = Math.random, first, exclude = [] } = {}) {
  // `first` is shown first in round one. `exclude` items are left out of round one only (e.g. ones already shown), then included from round two on.
  let queue = first !== undefined ? [first, ...shuffle(items.filter((m) => m !== first), rng)] : exclude.length ? shuffle(items.filter((m) => !exclude.includes(m)), rng) : [], last = null, shown = 0;
  return {
    next() {
      if (!queue.length) {
        queue = shuffle(items, rng);
        if (items.length > 1 && queue[0] === last) { const k = 1 + Math.floor(rng() * (queue.length - 1)); [queue[0], queue[k]] = [queue[k], queue[0]]; }
        shown = 0;
      }
      last = queue.shift(); shown += 1;
      return last;
    },
    get shown() { return shown; }, get total() { return items.length; },
  };
}
