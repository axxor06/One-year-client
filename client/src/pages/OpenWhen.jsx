import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { openWhen } from "../data/openWhen";

const Env = () => (<svg className="mini-env-ico" viewBox="0 0 24 18" width="22" height="16" aria-hidden="true" focusable="false"><rect x="1" y="1" width="22" height="16" rx="2.5" fill="#fde4ea" stroke="#d98aa2" strokeWidth="1.4" /><path d="M2 3 L12 10.5 L22 3" fill="none" stroke="#d98aa2" strokeWidth="1.4" strokeLinejoin="round" /></svg>);

// A list of letters. Choosing one swaps the list for that letter (the envelope opens, then the paper unfolds); "Back" returns to the list.
export default function OpenWhen() {
  const [id, setId] = useState(null), head = useRef(null), listTop = useRef(null);
  const idx = openWhen.findIndex((l) => l.id === id), l = openWhen[idx];
  useEffect(() => { if (l) head.current?.focus(); else if (listTop.current && id === null) listTop.current.scrollIntoView?.({ block: "start" }); }, [id]); // eslint-disable-line react-hooks/exhaustive-deps

  if (l) return (
    <div className="ow-view">
      <button className="link-btn back" onClick={() => setId(null)}>← all letters</button>
      <div className="ow-env" aria-hidden="true"><span className="ow-flap" /><span className="ow-body" /></div>
      <article className="ow-paper" aria-labelledby="ow-title" key={l.id}>
        <p className="num">letter {idx + 1} of {openWhen.length}</p>
        <h1 id="ow-title" className="hand" tabIndex={-1} ref={head}>open {l.title}</h1>
        {l.text.map((t) => <p key={t}>{t}</p>)}
        {l.feature && <p className="hand ow-feature">{l.feature}</p>}
        {l.to && <Link className="text-link" to={l.to}>{l.toLabel}</Link>}
      </article>
      <div className="leaf-actions">
        <button className="btn ghost" onClick={() => setId(null)}>Back to all letters</button>
        <button className="btn" onClick={() => setId(openWhen[(idx + 1) % openWhen.length].id)}>Next letter</button>
      </div>
    </div>
  );
  return (
    <div>
      <header className="page-head" ref={listTop}><h1 className="hand">Open when…</h1><p className="lead">little letters for different days. open the one you need.</p></header>
      <ul className="ow-list">
        {openWhen.map((x) => (<li key={x.id}><button className="ow-item" onClick={() => setId(x.id)}><Env /><span>open {x.title}</span></button></li>))}
      </ul>
    </div>
  );
}
