// Decorative SVG pieces for the envelope screen (all inline: no image files, nothing to fail to load).
export function Heart({ size = 20, fill = "#f2a0b4", stroke, className = "", style }) {
  return (<svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M12 21 C-2 11 4 3 9.5 5 C11 5.5 12 7 12 7 C12 7 13 5.5 14.5 5 C20 3 26 11 12 21Z" fill={fill} stroke={stroke} strokeWidth={stroke ? 1.6 : 0} strokeLinejoin="round" /></svg>);
}

// A cherry-blossom branch. Positions are fixed so it renders the same every time.
const BLOOMS = [[40, 120, 1.15], [92, 96, 1], [140, 70, 1.1], [60, 56, .85], [118, 30, .9], [170, 112, .8], [24, 70, .7], [188, 52, .75]];
const BUDS = [[78, 76], [150, 98], [102, 52], [44, 98], [176, 78]];
export function Blossom({ className = "" }) {
  return (
    <svg className={`blossom ${className}`} viewBox="0 0 220 170" aria-hidden="true" focusable="false">
      <path d="M0 8 C40 30 62 70 100 88 C130 102 160 96 210 70" fill="none" stroke="#9a6470" strokeWidth="4" strokeLinecap="round" />
      <path d="M62 62 C70 80 76 96 92 108 M104 90 C118 70 130 56 150 48 M30 28 C46 40 52 52 60 66" fill="none" stroke="#a87480" strokeWidth="2.4" strokeLinecap="round" />
      {BUDS.map(([x, y], i) => <ellipse key={i} cx={x} cy={y} rx="3.2" ry="4.6" fill="#f4a6bb" transform={`rotate(${i * 40} ${x} ${y})`} />)}
      {BLOOMS.map(([x, y, s], i) => (
        <g key={i} transform={`translate(${x} ${y}) rotate(${i * 23}) scale(${s})`}>
          {[0, 72, 144, 216, 288].map((a) => <path key={a} d="M0 0 C-7 -6 -7 -15 0 -17 C7 -15 7 -6 0 0Z" transform={`rotate(${a})`} fill="#f8bccb" stroke="#f099b0" strokeWidth=".6" />)}
          <circle r="3" fill="#e4708f" />{[0, 90, 180, 270].map((a) => <circle key={a} cx="0" cy="-6" r=".9" fill="#c94a70" transform={`rotate(${a + 20})`} />)}
        </g>))}
    </svg>
  );
}

// Thin swirl line that ends in an outlined heart.
export function Swirl({ className = "" }) {
  return (<svg className={`swirl ${className}`} viewBox="0 0 260 120" aria-hidden="true" focusable="false">
    <path d="M2 40 C60 20 110 30 150 50 C200 76 230 70 258 96" fill="none" stroke="#f3b3c3" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M40 30 C10 -2 40 -6 46 14 C52 -6 82 0 52 30Z" transform="translate(-6 26)" fill="none" stroke="#f0a0b5" strokeWidth="2" strokeLinejoin="round" /></svg>);
}
