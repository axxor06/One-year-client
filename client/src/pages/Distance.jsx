import { Link } from "react-router-dom";
import { distance as d } from "../data/distance";
export default function Distance() {
  return (
    <div className="plain-page">
      <header className="page-head"><h1 className="hand">The distance between us</h1><p className="lead">{d.lead}</p></header>
      <div className="prose">{d.paragraphs.map((t) => <p key={t}>{t}</p>)}</div>
      <p className="next-links">Read <Link to="/open-when">a letter for when you miss me</Link>, or <Link to="/message">write to me</Link>.</p>
      <p className="hand big hope">{d.hope}</p>
    </div>
  );
}
