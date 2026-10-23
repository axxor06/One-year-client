// A small decorative flower sprig (inline SVG, no external image).
export default function Sprig({ className = "", flip = false }) {
  const leaf = (x, y, r) => <ellipse key={`${x}${y}`} cx={x} cy={y} rx="9" ry="4.2" transform={`rotate(${r} ${x} ${y})`} fill="#c9a0a8" opacity=".55" />;
  const bloom = (x, y, s) => <g key={`b${x}${y}`} transform={`translate(${x} ${y}) scale(${s})`}>{[0, 72, 144, 216, 288].map((a) => <ellipse key={a} cx="0" cy="-6" rx="3.6" ry="6" transform={`rotate(${a})`} fill="#efb8c4" />)}<circle r="2.6" fill="#b45a72" /></g>;
  return (
    <svg className={`sprig ${className}`} style={flip ? { transform: "scaleX(-1)" } : undefined} viewBox="0 0 120 150" width="120" height="150" aria-hidden="true" focusable="false">
      <path d="M60 148 C 58 110 66 70 54 22" fill="none" stroke="#a98a90" strokeWidth="1.6" strokeLinecap="round" />
      {leaf(48, 112, -35)}{leaf(70, 96, 30)}{leaf(46, 78, -40)}{leaf(68, 62, 35)}
      {bloom(54, 20, 1.2)}{bloom(80, 50, 0.9)}{bloom(34, 56, 0.85)}
    </svg>
  );
}
