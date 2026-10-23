import { Link } from "react-router-dom";
import { firstChat as c } from "../data/firstChat";
import TelegramChat from "../components/TelegramChat";
export default function FirstChat() {
  return (
    <div className="chat-page">
      <header className="page-head"><h1 className="hand">Our first chat</h1><p className="lead">{c.date}, on {c.app}</p></header>
      <div className="chat-layout">
        <TelegramChat chat={c} />
        <div className="chat-text">{c.lines.map((t) => <p key={t}>{t}</p>)}</div>
      </div>
      <p className="next-links">What happened next is in <Link to="/story">our story</Link>.</p>
    </div>
  );
}
