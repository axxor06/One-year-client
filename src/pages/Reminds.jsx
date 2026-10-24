import { Link } from "react-router-dom";
import { reminders } from "../data/reminds";
export default function Reminds() {
  return (
    <div>
      <header className="page-head"><h1 className="hand">Things that remind me of you</h1><p className="lead">small things, and why they matter</p></header>
      <ul className="collage">
        {reminders.map((r, i) => (
          <li key={r.title} className={`scrap ${r.image ? "has-img" : "note"}`} style={{ "--r": `${[-1.6, 1.2, -0.8, 1.6, -1.2, 0.8][i % 6]}deg` }}>
            {r.image && <img src={r.image} alt={r.alt} loading="lazy" />}
            <h2 className="hand">{r.title}</h2><p>{r.text}</p>
            {r.to && <Link className="text-link" to={r.to}>{r.toLabel}</Link>}
          </li>))}
      </ul>
    </div>
  );
}
