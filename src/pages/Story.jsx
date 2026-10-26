import { Link } from "react-router-dom";
import { chapters } from "../data/story";

export default function Story() {
  return (
    <div className="story">
      <header className="page-head">
        <h1 className="hand">Our Story</h1>
        <p className="lead">how it all went, in my words</p>
      </header>

      <ol className="timeline">
        {chapters.map((c) => (
          <li
            key={c.date}
            className={`chapter ${c.official ? "official" : ""}`}
          >
            <p className="num">
              {c.date}
              {c.official ? " · our anniversary" : ""}
            </p>

            <h2 className="hand">{c.title}</h2>

            {c.quote && (
              <p className="hand quote">“{c.quote}”</p>
            )}

            {c.text.map((t) => (
              <p key={t}>{t}</p>
            ))}

            {c.to && (
              <Link className="btn small" to={c.to}>
                {c.toLabel}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
