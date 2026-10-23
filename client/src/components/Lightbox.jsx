import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

// items: [{ src, alt, caption }]. Rendered in a portal on <body> so no page transform/stacking context can shrink or hide it.
export default function Lightbox({ items, index, onClose, onChange }) {
  const closeRef = useRef(null);
  const [status, setStatus] = useState("loading"); // loading | ok | error
  const item = items[index];
  const prev = () => onChange((index - 1 + items.length) % items.length);
  const next = () => onChange((index + 1) % items.length);
  useEffect(() => setStatus("loading"), [index]);

  useEffect(() => { // lock background scroll, restore it (and focus) when closed
    const opener = document.activeElement, before = document.body.style.overflow;
    closeRef.current?.focus(); document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = before; opener?.focus?.(); };
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Tab") { // keep keyboard focus inside the dialog
        const els = [...document.querySelectorAll(".lightbox button")], first = els[0], last = els[els.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  if (!item) return null;
  return createPortal(
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="Photo viewer" onClick={onClose}>
      <figure className="lb-stage" onClick={(e) => e.stopPropagation()}>
        {status === "error"
          ? <div className="lb-error" role="alert">This photo couldn't be loaded.</div>
          : <img key={item.src} src={item.src} alt={item.alt} onLoad={() => setStatus("ok")} onError={() => setStatus("error")} />}
        {status === "loading" && <span className="lb-loading">loading…</span>}
        <figcaption><span className="hand">{item.caption}</span><span className="lb-count">{index + 1} / {items.length}</span></figcaption>
      </figure>
      <button ref={closeRef} className="lb-btn lb-close" onClick={onClose} aria-label="Close photo viewer"><FiX /></button>
      {items.length > 1 && <>
        <button className="lb-btn lb-prev" onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous photo"><FiChevronLeft /></button>
        <button className="lb-btn lb-next" onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next photo"><FiChevronRight /></button>
      </>}
    </div>, document.body);
}
