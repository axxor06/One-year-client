import { useState } from "react";
import { photoGroups, videos } from "../data/photos";
import Lightbox from "../components/Lightbox";

export default function Memories() {
  const [open, setOpen] = useState(null), [missing, setMissing] = useState(() => new Set());
  const groups = photoGroups.map((g) => ({ ...g, photos: g.photos.filter((p) => !missing.has(p.src)) })).filter((g) => g.photos.length);
  const all = groups.flatMap((g) => g.photos); // only photos that actually loaded go into the lightbox
  return (
    <div>
      <header className="page-head"><h1 className="hand">Our Memories</h1><p className="lead">tap a photo to see it bigger</p></header>
      {groups.map((g) => (
        <section key={g.title} className="group" aria-labelledby={`g-${g.title}`}>
          <h2 id={`g-${g.title}`} className="hand">{g.title}</h2>{g.note && <p className="lead">{g.note}</p>}
          <ul className="grid">
            {g.photos.map((ph, i) => (
              <li key={ph.src}><button className="polaroid" style={{ "--r": `${(i % 3) - 1}deg` }} onClick={() => setOpen(all.indexOf(ph))} aria-label={`View photo: ${ph.caption}`}>
                <img src={ph.src} alt={ph.alt} decoding="async" onError={() => setMissing((s) => new Set(s).add(ph.src))} /><span className="hand cap">{ph.caption}</span></button></li>
            ))}
          </ul>
        </section>
      ))}
      <section className="group" aria-labelledby="g-video">
        <h2 id="g-video" className="hand">A short clip</h2>
        {videos.map((v) => (
          <figure key={v.src} className="clip">
            <video controls preload="metadata" playsInline poster={v.poster} aria-label={v.label}>
              <source src={v.src} type="video/mp4" />Your browser can't play this video.
            </video>
            <figcaption className="hand cap">{v.caption}</figcaption>
          </figure>
        ))}
      </section>
      {open !== null && <Lightbox items={all} index={open} onClose={() => setOpen(null)} onChange={setOpen} />}
    </div>
  );
}
