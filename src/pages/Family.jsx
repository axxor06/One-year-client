import { Link } from "react-router-dom";

export default function Family() {
  const photoFrame = {
    width: "100%",
    maxWidth: "440px",
    padding: "12px",
    background: "#fffdfc",
    border: "1px solid #f0e2e7",
    boxShadow: "0 10px 28px rgba(100, 60, 80, 0.13)",
    boxSizing: "border-box",
  };

  const photoStyle = {
    display: "block",
    width: "100%",
    height: "auto",
    objectFit: "contain",
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "850px",
        margin: "0 auto",
        padding: "45px 20px 60px",
        boxSizing: "border-box",
        color: "#704b59",
      }}
    >
      {/* Heading */}
      <header
        style={{
          textAlign: "center",
          marginBottom: "45px",
        }}
      >
        <p
          style={{
            color: "#b47c94",
            fontSize: "11px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            marginBottom: "14px",
          }}
        >
          A little something
        </p>

        <h1
          className="hand"
          style={{
            fontSize: "clamp(34px, 6vw, 48px)",
            lineHeight: 1.2,
            margin: "0 0 16px",
          }}
        >
          Your family, too ♡
        </h1>

        <p
          style={{
            maxWidth: "440px",
            margin: "0 auto",
            fontSize: "15px",
            lineHeight: 1.8,
            color: "#896875",
          }}
        >
          Something I've been wanting to tell you.
        </p>
      </header>

      {/* First scrapbook photo */}
      <section
        style={{
          display: "flex",
          justifyContent: "flex-start",
          paddingLeft: "clamp(0px, 5vw, 55px)",
          marginBottom: "35px",
        }}
      >
        <div
          style={{
            ...photoFrame,
            transform: "rotate(-2deg)",
            borderRadius: "3px",
          }}
        >
          <img
            src="/assets/photos/family.jpg"
            alt="A memory with family"
            style={photoStyle}
          />
        </div>
      </section>

      {/* Message */}
      <section
        style={{
          maxWidth: "680px",
          margin: "0 auto 40px",
          padding: "clamp(22px, 4vw, 34px)",
          background: "rgba(255, 250, 252, 0.8)",
          border: "1px solid #f0dce4",
          borderRadius: "16px",
          boxSizing: "border-box",
          fontSize: "16px",
          lineHeight: 1.9,
        }}
      >
        <p style={{ margin: "0 0 20px" }}>
          I'm really thankful to your mom for welcoming me into your
          home and making me feel included in your family. She's my
          mom too, and Akku is my sister too. I'm happy to have them
          in my life.
        </p>

        <p style={{ margin: "0 0 20px" }}>
          I want your mom to feel that she was right to trust me, and
          I want you to feel that choosing me was the right decision
          too. I'll keep doing my best and show it through my actions.
        </p>

        <p style={{ margin: 0 }}>
          I'm really glad I got to know your family and become a part
          of your life.
        </p>
      </section>

      {/* Second scrapbook photo */}
      <section
        style={{
          display: "flex",
          justifyContent: "flex-end",
          paddingRight: "clamp(0px, 5vw, 55px)",
          marginBottom: "45px",
        }}
      >
        <div
          style={{
            ...photoFrame,
            transform: "rotate(2deg)",
            borderRadius: "3px",
          }}
        >
          <img
            src="/assets/photos/family2.jpeg"
            alt="Another memory with family"
            style={photoStyle}
          />
        </div>
      </section>

      {/* Closing */}
      <div
        style={{
          textAlign: "center",
          margin: "0 auto 32px",
          padding: "10px 0",
        }}
      >
        <p
          className="hand"
          style={{
            fontSize: "clamp(25px, 4vw, 32px)",
            lineHeight: 1.5,
            margin: 0,
          }}
        >
          I love you soo much ♡
        </p>
      </div>

      {/* Next page */}
      <div style={{ textAlign: "center" }}>
        <Link
          to="/message"
          className="btn"
          style={{
            display: "inline-block",
            padding: "12px 27px",
            borderRadius: "28px",
            background: "#b87891",
            border: "1px solid #b87891",
            color: "#fff",
            textDecoration: "none",
            fontSize: "14px",
          }}
        >
          One last thing →
        </Link>
      </div>
    </div>
  );
}