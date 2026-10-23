import { futureIntro, hopes } from "../data/future";
export default function Future() {
  return (
    <div className="plain-page">
      <header className="page-head"><h1 className="hand">Our future</h1><p className="lead">{futureIntro}</p></header>
      <div className="hopes-list">{hopes.map((h) => <section key={h.title}><h2 className="hand">{h.title}</h2><p>{h.text}</p></section>)}</div>
    </div>
  );
}
