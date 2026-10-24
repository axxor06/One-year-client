import { Link } from "react-router-dom";
import { meeting as m } from "../data/dayIMetYou";
export default function DayIMetYou() {
  return (
    <div className="day">
      <header className="page-head"><h1 className="hand">The day I met you</h1><p className="lead">{m.date} · {m.place}</p></header>
      <div className="day-grid">
        <figure className="polaroid tilt sticky"><img src={m.photo.src} alt={m.photo.alt} /><span className="hand cap">{m.photo.caption}</span></figure>
        <ol className="moments">{m.moments.map((x, i) => (
          <li key={x.title}><span className="hand step-no" aria-hidden="true">{i + 1}</span><div><h2 className="hand">{x.title}</h2><p>{x.text}</p></div></li>))}</ol>
      </div>
      <p className="next-links">More from that day in <Link to="/memories">our memories</Link>, and the note I wrote about it in <Link to="/surprises">the surprises</Link>.</p>
    </div>
  );
}
