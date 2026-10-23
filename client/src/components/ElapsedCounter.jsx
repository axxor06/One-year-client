import { useEffect, useState } from "react";
import { getDuration } from "../utils/relationshipCounter";

// Shows only years, months and days. Re-checks every minute (and when the tab becomes visible again) so it stays current across midnight.
export default function ElapsedCounter() {
  const [d, setD] = useState(() => getDuration());
  useEffect(() => {
    const tick = () => setD(getDuration());
    const id = setInterval(tick, 60 * 1000);
    document.addEventListener("visibilitychange", tick);
    return () => { clearInterval(id); document.removeEventListener("visibilitychange", tick); };
  }, []);
  const cells = [["year", d.years], ["month", d.months], ["day", d.days]];
  return (
    <div className="elapsed">
      <p className="anniv-sub">together since 28 October 2025</p>
      <div className="counter" role="group" aria-label={cells.map(([l, n]) => `${n} ${l}${n === 1 ? "" : "s"}`).join(", ")}>
        {cells.map(([l, n]) => <div key={l} className="counter-cell"><span className="counter-num">{n}</span><span>{l}{n === 1 ? "" : "s"}</span></div>)}
      </div>
    </div>
  );
}
