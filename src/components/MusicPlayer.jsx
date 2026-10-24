import { useEffect, useRef, useState } from "react";
import { FiPlay, FiPause, FiVolume2 } from "react-icons/fi";

// Only used on Our Story. No autoplay: it starts only when Play is pressed, and stops when you leave the page.
const TRACK = { title: "Our song", src: "/assets/audio/our-song.mp3" };
const fmt = (s) => (isFinite(s) ? `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}` : "0:00");

export default function MusicPlayer() {
  const a = useRef(null);
  const [playing, setPlaying] = useState(false), [t, setT] = useState(0), [dur, setDur] = useState(0), [state, setState] = useState("idle"), [vol, setVol] = useState(0.8);
  useEffect(() => { const el = a.current; return () => el?.pause(); }, []); // leaving Our Story stops the song
  const toggle = async () => {
    const el = a.current;
    try { if (el.paused) { setState("loading"); await el.play(); } else el.pause(); } catch { setState("error"); setPlaying(false); }
  };
  return (
    <div className="player" role="region" aria-label="Music player">
      <audio ref={a} src={TRACK.src} preload="none" onPlay={() => { setPlaying(true); setState("ready"); }} onPause={() => setPlaying(false)}
        onLoadedMetadata={(e) => setDur(e.target.duration)} onTimeUpdate={(e) => setT(e.target.currentTime)} onEnded={() => setPlaying(false)} onError={() => setState("error")} />
      <button className="play" onClick={toggle} aria-label={playing ? "Pause" : "Play"}>{playing ? <FiPause /> : <FiPlay />}</button>
      <div className="player-mid">
        <span className="hand">{TRACK.title}</span>
        {state === "error" ? <span className="err">Couldn't load the song.</span> :
          <input type="range" min="0" max={dur || 0} step="0.1" value={t} disabled={!dur} aria-label="Seek" onChange={(e) => { a.current.currentTime = e.target.value; setT(+e.target.value); }} />}
      </div>
      <span className="time">{state === "loading" ? "loading" : `${fmt(t)} / ${fmt(dur)}`}</span>
      <label className="vol"><FiVolume2 aria-hidden="true" /><input type="range" min="0" max="1" step="0.05" value={vol} aria-label="Volume" onChange={(e) => { setVol(+e.target.value); a.current.volume = e.target.value; }} /></label>
    </div>
  );
}
