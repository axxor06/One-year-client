import { Link } from "react-router-dom";
import ElapsedCounter from "../components/ElapsedCounter";

// EDITABLE: homepage words are my voice; photo is a real one from the project.
export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <p className="hand eyebrow">for Dhwani</p>
          <h1>Every day with you.</h1>
          <p className="hero-lead">I made this for you, baby, with everything I remember about us. Take your time with it. I'm in all of it.</p>
          <ElapsedCounter />
          <a className="btn" href="#begin">Start here</a>
        </div>
        <figure className="hero-photo">
          <div className="polaroid tilt"><img src="/assets/photos/Selfie.jpg" alt="A selfie of the two of us smiling" width="1280" height="960" /><span className="hand cap">us</span></div>
        </figure>
      </section>

      <section id="begin" className="flow" aria-label="Where to begin">
        <p className="flow-line">It started with a <Link to="/first-chat">hii on Telegram</Link>, and a reply that still makes me smile.</p>
        <p className="flow-line">Then came a confession, a hard goodbye, and the day we made it <Link to="/story">official</Link>.</p>
        <figure className="feature">
          <img src="/assets/photos/hands.jpg" alt="Our hands held together" loading="lazy" width="1440" height="1920" />
          <figcaption>
            <p className="num">25 December 2025</p>
            <h2 className="hand">The day I met you</h2>
            <p>Lulu Mall, your birthday, and a lot of nervousness. I stepped back, and you called me closer.</p>
            <Link className="text-link" to="/day-i-met-you">Read the whole day</Link>
          </figcaption>
        </figure>
        <p className="flow-line">You gave me <Link to="/flowers">flowers</Link>, a few of them made by your own hands.</p>
        <Link to="/letter" className="mini-env"><span className="mini-flap" /><span className="hand">I wrote you a letter. Open it when you're ready.</span></Link>
      </section>
    </>
  );
}
