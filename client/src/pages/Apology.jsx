import { apology } from "../data/apology";
import Prose from "../components/Prose";
export default function Apology() {
  return (
    <div className="apology">
      <h1 className="hand">{apology.title}</h1>
      <Prose items={apology.paragraphs} />
      <h2 className="hand">What I'm working on</h2>
      <ul className="working">{apology.working.map((w) => <li key={w.title}><strong>{w.title}.</strong> {w.text}</li>)}</ul>
      <Prose items={apology.after} />
    </div>
  );
}
