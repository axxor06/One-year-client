import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { notes } from "../data/notes";

// step -1 = sealed envelope, 0..4 = notes in order, 5 = finished.
export default function Surprises() {
  const [step, setStep] = useState(-1), [leaving, setLeaving] = useState(false), head = useRef(null), timer = useRef(null);
  useEffect(() => () => clearTimeout(timer.current), []);
  useEffect(() => { head.current?.focus(); }, [step]);
  const go = (n) => { if (leaving) return; setLeaving(true); timer.current = setTimeout(() => { setStep(n); setLeaving(false); }, 320); };

  if (step === -1) return (
    <div className="surprises">
      <header className="page-head"><h1 className="hand">A Surprise for You</h1><p className="lead">five little notes, one at a time</p></header>
      <button className="seal" onClick={() => go(0)} aria-label="Open the first note"><span className="seal-flap" /><span className="seal-body" /><span className="hand seal-label">open the first note</span></button>
    </div>);

  if (step >= notes.length) return (
    <div className="surprises"><div className="leaf turn-in" aria-live="polite">
      <h2 className="hand" tabIndex={-1} ref={head}>That's all five, bubu.</h2>
      <p>Thank you for reading every one of them.</p>
      <div className="leaf-actions"><button className="btn ghost" onClick={() => go(0)}>Read them again</button></div>
      <p className="next-links">There's more in <Link to="/day-i-met-you">the day I met you</Link> and in <Link to="/open-when">open when…</Link></p>
    </div></div>);

  const n = notes[step];
  return (
    <div className="surprises">
      <div className={`leaf ${leaving ? "turn-out" : "turn-in"}`} key={step} aria-live="polite">
        <p className="num">Note {step + 1} of {notes.length}</p>
        <h2 className="hand" tabIndex={-1} ref={head}>{n.heading}</h2>
        <p className="note-text">{n.text}</p>
        <div className="dots" aria-hidden="true">{notes.map((_, i) => <span key={i} className={i <= step ? "on" : ""} />)}</div>
        <div className="leaf-actions">
          {step > 0 && <button className="btn ghost" onClick={() => go(step - 1)}>Previous</button>}
          <button className="btn" onClick={() => go(step + 1)}>{step === notes.length - 1 ? "Finish" : "Next note"}</button>
        </div>
      </div>
    </div>
  );
}
