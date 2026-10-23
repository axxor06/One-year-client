import { useState } from "react";
import { bouquets, flowersIntro, whatMakesSpecial, flowersClosing, closingNote } from "../data/flowers";
import Lightbox from "../components/Lightbox";

export default function Flowers() {
  const [open, setOpen] = useState(null); // index inside `viewable`
  const viewable = bouquets.filter((b) => b.image).map((b) => ({ src: b.image, alt: b.alt, caption: b.caption }));
  const openFor = (b) => setOpen(viewable.findIndex((v) => v.src === b.image));
  return (
    <div className="flowers">
      <header className="page-head"><h1 className="hand">Flower Memories</h1><p className="lead">{flowersIntro}</p></header>
      {bouquets.map((b, i) => (
        <section key={b.id} className={`bouquet ${i % 2 ? "flip" : ""}`} aria-labelledby={`h-${b.id}`}>
          {b.image ? (
            <button className="polaroid" onClick={() => openFor(b)} aria-label={`View bouquet ${b.number} full size`}>
              <img src={b.image} alt={b.alt} loading="lazy" /><span className="hand cap">{b.caption}</span>
            </button>
          ) : (
            <div className="polaroid placeholder" role="img" aria-label={`Photo of bouquet ${b.number} coming soon`}>
              <div className="ph-box"><span>photo of bouquet {b.number}<br />goes here</span></div><span className="hand cap">{b.caption}</span>
            </div>
          )}
          <div className="bouquet-text"><p className="num">bouquet {b.number}</p><h2 id={`h-${b.id}`} className="hand">{b.heading}</h2><p>{b.message}</p></div>
        </section>
      ))}
      <section className="special" aria-labelledby="special-h">
        <h2 id="special-h" className="hand">What makes these flowers special</h2>
        <ul>{whatMakesSpecial.map((s) => <li key={s.title}><strong className="hand">{s.title}</strong><span>{s.text}</span></li>)}</ul>
      </section>
      <section className="closing">{flowersClosing.map((l) => <p key={l}>{l}</p>)}<p className="hand big">{closingNote}</p></section>
      {open !== null && open >= 0 && <Lightbox items={viewable} index={open} onClose={() => setOpen(null)} onChange={setOpen} />}
    </div>
  );
}
