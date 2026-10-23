import { useState } from "react";
import { letter } from "../data/letter";

export default function Letter() {
  const [open, setOpen] = useState(false);
  return (
    <div className="letter-page">
      <header className="page-head"><h1 className="hand">A Love Letter</h1></header>
      <button className={`seal ${open ? "opened" : ""}`} onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="letter-paper">
        <span className="seal-flap" /><span className="seal-body" /><span className="hand seal-label">{open ? "close the letter" : "open the letter"}</span>
      </button>
      {open && (
        <article id="letter-paper" className="paper" aria-label="Love letter">
          <p className="hand greet">{letter.greeting}</p>
          {letter.paragraphs.map((t) => <p key={t}>{t}</p>)}
          <p className="hand sign">{letter.signoff}</p>
        </article>
      )}
    </div>
  );
}
