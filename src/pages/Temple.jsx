import { useState } from "react";
import { Link } from "react-router-dom";
import { temple as t } from "../data/temple";
import Lightbox from "../components/Lightbox";

export default function Temple() {
  const [failed, setFailed] = useState(false), [open, setOpen] = useState(false);
  const item = { src: t.photo.src, alt: t.photo.alt, caption: t.caption };
  return (
    <div className="temple">
      <header className="page-head"><h1 className="hand">{t.title}</h1><p className="lead">{t.place}</p></header>
      <figure className="family-frame">
        {failed
          ? <div className="ph-box family-missing" role="img" aria-label={`Photo not added yet: ${t.photo.file}`}><span>photo coming soon<br /><small>(add {t.photo.file} to client/public/assets/photos)</small></span></div>
          : <button className="family-btn" onClick={() => setOpen(true)} aria-label="View this photo full size"><img src={t.photo.src} alt={t.photo.alt} onError={() => setFailed(true)} /></button>}
        <figcaption className="hand">{t.caption}</figcaption>
      </figure>
      <div className="prose temple-text">{t.paragraphs.map((x) => <p key={x}>{x}</p>)}</div>
      <p className="next-links">More of us in <Link to="/memories">our memories</Link>.</p>
      {open && <Lightbox items={[item]} index={0} onClose={() => setOpen(false)} onChange={() => {}} />}
    </div>
  );
}
