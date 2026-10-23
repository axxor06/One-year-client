import { useRef, useState } from "react";
import { reasons, openingReasons } from "../data/reasons";
import { createDeck } from "../utils/messageDeck";

// "3 reasons I love you" -> three reasons, one per tap -> "Wait… you think just 3?" -> an endless stream of more.
// There is no last reason and no end screen. After the opening three, every reason is shown once in random order,
// then the whole collection (including those three) is reshuffled and it carries on, forever.
// The deck is only advanced inside the click handler, never inside a state updater.
export default function Reasons() {
  const stage = useRef(0), count = useRef(1), deck = useRef(null);
  const [view, setView] = useState({ kind: "reason", text: openingReasons[0], n: 1, key: 0 });
  const next = () => {
    const s = stage.current; stage.current = s + 1;
    if (s <= 1) { count.current += 1; return setView((v) => ({ kind: "reason", text: openingReasons[s + 1], n: count.current, key: v.key + 1 })); }
    if (s === 2) return setView((v) => ({ kind: "wait", key: v.key + 1 }));
    if (!deck.current) deck.current = createDeck(reasons, { exclude: openingReasons });
    count.current += 1;
    const text = deck.current.next();
    setView((v) => ({ kind: "reason", text, n: count.current, key: v.key + 1 }));
  };
  return (
    <div className="reasons-page">
      <header className="page-head"><h1 className="hand">3 reasons I love you ♡</h1></header>
      <div className="reason-stage" aria-live="polite">
        {view.kind === "wait"
          ? <div key={view.key} className="reason-card wait"><p className="hand">Wait… you think just 3? ♡</p></div>
          : <div key={view.key} className="reason-card"><p className="num">reason {view.n}</p><p className="hand reason-text">{view.text}</p></div>}
      </div>
      <div className="more-msg"><button className="btn" onClick={next}>Next</button></div>
    </div>
  );
}
