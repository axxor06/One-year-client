import { useRef, useState } from "react";
import { messages } from "../data/messages";
import { createDeck } from "../utils/messageDeck";

// The deck is only advanced inside the click handler (never inside a state updater, which React may run twice).
export default function Messages() {
  const deck = useRef(null);
  const [state, setState] = useState({ text: messages[0], n: 0 }); // the first message is always the "hii baby" one
  const another = () => {
    if (!deck.current) { deck.current = createDeck(messages, { first: messages[0] }); deck.current.next(); } // consume the message already on screen
    const text = deck.current.next();
    setState((s) => ({ text, n: s.n + 1 }));
  };
  return (
    <div className="msgs-page">
      <header className="page-head"><h1 className="hand">Little messages</h1><p className="lead">written for this site, not copied from our chats</p></header>
      <div className="msg-card" aria-live="polite"><p key={state.n} className="msg-text">{state.text}</p></div>
      <div className="more-msg">
        <button className="btn" onClick={another}>Show another message</button>
      </div>
    </div>
  );
}
