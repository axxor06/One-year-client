// A small Telegram-style chat, styled to match the site. Messages and their order come from data/firstChat.js.
export default function TelegramChat({ chat }) {
  return (
    <div className="tg" role="group" aria-label={`The first messages on ${chat.app}, in order`}>
      <div className="tg-bar"><span className="tg-avatar" aria-hidden="true">✈</span><span><strong>{chat.app}</strong><small>{chat.date}</small></span></div>
      <ol className="tg-body">
        {chat.messages.map((m, i) => {
          const mine = m.from === "me", first = chat.messages[i - 1]?.from !== m.from;
          return (<li key={i} className={`tg-msg ${mine ? "out" : "in"} ${first ? "first" : ""}`}>
            {first && <span className="tg-name">{m.from}</span>}<p>{m.text}</p></li>);
        })}
      </ol>
      <p className="tg-after hand">{chat.after}</p>
    </div>
  );
}
