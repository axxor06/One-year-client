import { Link } from "react-router-dom";

import { apology } from "../data/apology";
import Prose from "../components/Prose";

export default function Apology() {
  return (
    <div className="apology">
      <h1 className="hand">{apology.title}</h1>

      <Prose items={apology.paragraphs} />

      <h2 className="hand">What I'm working on</h2>

      <ul className="working">
        {apology.working.map((w) => (
          <li key={w.title}>
            <strong>{w.title}.</strong> {w.text}
          </li>
        ))}
      </ul>

      <Prose items={apology.after} />

      <div className="text-center mt-5">
        <p className="hand fs-5">
          There's one more thing I want to share with you, baby. ♡
        </p>

        <Link className="btn mt-2" to="/family">
          One more thing ♡
        </Link>
      </div>
    </div>
  );
}