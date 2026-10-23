import { useState } from "react";
import { intro } from "../data/content";
import { Heart, Blossom, Swirl } from "./Decor";

// Floating hearts: [left %, top %, size px, delay s]
const FLOATS = [[6, 46, 18, 0], [12, 74, 14, 1.4], [90, 34, 16, .6], [86, 70, 14, 2]]; // a few, not many
const sparkle = <svg className="sparkle" viewBox="0 0 30 40" aria-hidden="true" focusable="false"><path d="M4 6 L22 12 M2 20 L24 20 M4 34 L22 28" stroke="#f08ba5" strokeWidth="2.4" strokeLinecap="round" fill="none" /></svg>;

export default function Envelope({ onEnter }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`intro ${open ? "is-open" : ""}`}>
      <Blossom className="bl-tl" /><Blossom className="bl-br" /><Swirl className="sw-tr" /><Swirl className="sw-bl" />
      {FLOATS.map(([l, t, s, d], i) => <Heart key={i} size={s} className="float-heart" style={{ left: `${l}%`, top: `${t}%`, animationDelay: `${d}s` }} fill={i % 3 === 0 ? "#f48fa9" : "#f6b0c0"} />)}

      <header className="intro-head">
        <h1 className="intro-title">for Dhwani</h1>
        <div className="divider" aria-hidden="true"><span /><Heart size={30} fill="#ee7f9b" /><span /></div>
        <p className="intro-sub">A little message, straight to your heart ♡</p>
      </header>

      <div className="env" role="img" aria-label={open ? "An opened envelope with a letter inside" : "A pink envelope sealed with a heart"}>
        <div className="env-back" />
        <div className="env-letter" aria-hidden={!open}>
          <p className="letter-greet">{intro.title}</p><p>{intro.text}</p>
        </div>
        <svg className="env-front" viewBox="0 0 480 300" preserveAspectRatio="none" aria-hidden="true" focusable="false">
          <defs><linearGradient id="gSide" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#fff2f4" /><stop offset="1" stopColor="#fde4ea" /></linearGradient>
            <linearGradient id="gBot" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#fff0f3" /><stop offset="1" stopColor="#ffe9ee" /></linearGradient></defs>
          <path d="M0 0 L250 175 L0 300Z" fill="url(#gSide)" /><path d="M480 0 L230 175 L480 300Z" fill="url(#gSide)" /><path d="M0 300 L240 148 L480 300Z" fill="url(#gBot)" />
          <path d="M0 300 L240 148 L480 300 M0 0 L250 175 M480 0 L230 175" fill="none" stroke="#f3b2c2" strokeWidth="1.6" strokeLinejoin="round" />
        </svg>
        <svg className="env-flap" viewBox="0 0 480 170" preserveAspectRatio="none" aria-hidden="true" focusable="false">
          <defs><linearGradient id="gFlap" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#fddbe3" /><stop offset="1" stopColor="#fbc9d6" /></linearGradient></defs>
          <path d="M2 2 L478 2 L240 168Z" fill="url(#gFlap)" stroke="#f0a3b8" strokeWidth="2" strokeLinejoin="round" /></svg>
        <Heart className="env-seal" size={64} fill="#dc6585" stroke="#f9c6d3" />
      </div>

      <div className="intro-action">
        {open
          ? <button className="open-btn" onClick={onEnter}>{sparkle}<span>Come in ♡</span>{sparkle}</button>
          : <button className="open-btn" onClick={() => setOpen(true)}>{sparkle}<span>Open it ♡</span>{sparkle}</button>}
      </div>
      <p className="intro-foot"><span aria-hidden="true" /> Just for you, always ♡ <span aria-hidden="true" /></p>
      <button className="link-btn skip" onClick={onEnter}>skip</button>
    </div>
  );
}
