import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage, reset } from "../features/guestbookSlice";

export default function Guestbook() {
  const dispatch = useDispatch();
  const { status, error, result, done } = useSelector((s) => s.guestbook);
  const [message, setMessage] = useState(""), [website, setWebsite] = useState(""), [local, setLocal] = useState("");
  const trimmed = message.trim();
  const messageDone = done.message && done.text === trimmed; // her message already reached me; Send won't send it again
  const submit = async (e) => {
    e.preventDefault();
    if (status === "loading") return; // no double sends
    if (trimmed.length < 2) return setLocal("Write at least a few words first, bubu.");
    if (trimmed.length > 2000) return setLocal("That's a bit too long. Please keep it under 2000 characters.");
    setLocal("");
    const r = await dispatch(sendMessage({ message: trimmed, website }));
    if (sendMessage.fulfilled.match(r) && r.payload.message !== "failed" && r.payload.letter !== "failed" && r.payload.message !== "not_configured" && r.payload.letter !== "not_configured") setMessage("");
  };
  if (status === "sent") return (
    <div className="page-head" role="status"><h1 className="hand">Sent ♡</h1><p className="lead">Your message is on its way to me. Thank you, bubu.</p>
      <p className="sent-note">I'm sending you a little letter too ♡</p>
      <button className="btn" onClick={() => dispatch(reset())}>Write another</button></div>);

  // honest, specific feedback about each of the two emails
  let banner = "";
  if (status === "failed") banner = error;
  if (status === "partial" && result) {
    const msgOk = result.message === "accepted" || result.message === "skipped", letterOk = result.letter === "accepted" || result.letter === "skipped";
    if (msgOk && !letterOk) banner = "Your message was sent to me ♡ but the little letter I wanted to send you couldn't be delivered this time. Pressing Send again only retries the letter, so your message won't be sent twice.";
    if (!msgOk && letterOk) banner = "I sent you my little letter ♡ but your message couldn't be sent to me. It's still in the box, press Send to try it again. The letter won't be sent twice.";
  }
  const label = status === "loading" ? "Sending…" : status === "partial" && messageDone && !done.letter ? "Try the letter again ♡" : "Send ♡";
  return (
    <div className="guest">
      <header className="page-head"><h1 className="hand">Tell me something, bubu</h1><p className="lead">Write whatever you want. It comes straight to my inbox, privately. Nobody else can see it.</p></header>
      <form onSubmit={submit} noValidate className="note-form">
        <label htmlFor="gb-msg">Your message</label>
        <textarea id="gb-msg" rows={8} value={message} maxLength={2000} placeholder="Hii baby…" onChange={(e) => setMessage(e.target.value)} aria-describedby="gb-count" required />
        <p id="gb-count" className="count">{message.length} / 2000</p>
        <div className="hp" aria-hidden="true"><label>Leave empty<input tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} /></label></div>
        {(local || banner) && <p className={local || status === "failed" ? "err" : "sent-note"} role="alert">{local || banner}</p>}
        <button className="btn" disabled={status === "loading"}>{label}</button>
      </form>
    </div>
  );
}
