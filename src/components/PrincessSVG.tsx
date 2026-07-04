export function ElsaPrincess({ size = 180 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 200 240"
      width={size}
      height={size * 1.2}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-lg"
      style={{ filter: "drop-shadow(0 4px 12px rgba(126,200,227,0.3))" }}
    >
      {/* Sparkle glow behind */}
      <circle cx="100" cy="110" r="85" fill="url(#elsaGlow)" opacity="0.4" />

      {/* Body / Dress */}
      <path
        d="M65 220 L58 150 Q55 130 70 125 L85 115 L90 90 L110 90 L115 115 L130 125 Q145 130 142 150 L135 220 Z"
        fill="url(#dressGrad)"
      />
      {/* Dress bodice detail */}
      <path
        d="M70 125 Q100 140 130 125 L127 145 Q100 155 73 145 Z"
        fill="#5bb8d8"
        opacity="0.6"
      />
      {/* Cape trail */}
      <path
        d="M65 125 Q40 160 30 200 Q25 220 35 225 Q45 220 55 210 Q60 180 70 125"
        fill="url(#capeGrad)"
        opacity="0.7"
      />

      {/* Arms */}
      <path d="M65 125 Q40 135 35 150" stroke="#fce4ec" strokeWidth="7" strokeLinecap="round" fill="none" />
      <path d="M135 125 Q160 130 162 115" stroke="#fce4ec" strokeWidth="7" strokeLinecap="round" fill="none" />
      {/* Hand with magic */}
      <circle cx="35" cy="152" r="5" fill="#fce4ec" />
      <circle cx="162" cy="113" r="5" fill="#fce4ec" />
      {/* Ice magic from hand */}
      <circle cx="155" cy="100" r="4" fill="#b8e4f0" opacity="0.8" />
      <circle cx="162" cy="88" r="3" fill="#7ec8e3" opacity="0.7" />
      <circle cx="170" cy="95" r="2.5" fill="#b8e4f0" opacity="0.6" />
      <circle cx="158" cy="78" r="2" fill="#d4f0f8" opacity="0.9" />
      <circle cx="175" cy="82" r="2" fill="#7ec8e3" opacity="0.5" />

      {/* Neck */}
      <rect x="93" y="85" width="14" height="15" rx="4" fill="#fce4ec" />

      {/* Head */}
      <ellipse cx="100" cy="65" rx="28" ry="30" fill="#fce4ec" />

      {/* Hair - platinum blonde */}
      <path
        d="M70 55 Q70 35 100 33 Q130 35 130 55 Q133 70 130 85 Q128 95 120 100 L118 80 Q115 65 100 63 Q85 65 82 80 L80 100 Q72 95 70 85 Q67 70 70 55 Z"
        fill="url(#hairGrad)"
      />
      {/* Braid */}
      <path
        d="M128 65 Q145 75 148 95 Q150 115 145 130 Q140 140 135 130 Q130 115 128 95 Q127 80 128 65"
        fill="url(#hairGrad)"
      />

      {/* Eyes */}
      <ellipse cx="90" cy="60" rx="6" ry="7" fill="white" />
      <ellipse cx="110" cy="60" rx="6" ry="7" fill="white" />
      <circle cx="91" cy="60" r="4" fill="#4a90d9" />
      <circle cx="111" cy="60" r="4" fill="#4a90d9" />
      <circle cx="92" cy="59" r="1.5" fill="white" />
      <circle cx="112" cy="59" r="1.5" fill="white" />
      {/* Lashes */}
      <path d="M84 54 Q90 51 96 54" stroke="#4a3040" strokeWidth="1" fill="none" />
      <path d="M104 54 Q110 51 116 54" stroke="#4a3040" strokeWidth="1" fill="none" />

      {/* Eyebrows */}
      <path d="M84 52 Q90 49 96 52" stroke="#c8a080" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M104 52 Q110 49 116 52" stroke="#c8a080" strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* Nose */}
      <path d="M100 62 Q102 68 100 70" stroke="#e8c4b8" strokeWidth="1.2" fill="none" strokeLinecap="round" />

      {/* Mouth - smile */}
      <path d="M94 75 Q100 80 106 75" stroke="#e88090" strokeWidth="1.8" fill="none" strokeLinecap="round" />

      {/* Blush */}
      <ellipse cx="82" cy="70" rx="6" ry="3.5" fill="#ffb0b0" opacity="0.4" />
      <ellipse cx="118" cy="70" rx="6" ry="3.5" fill="#ffb0b0" opacity="0.4" />

      {/* Crown / Tiara */}
      <path
        d="M82 42 L88 32 L92 38 L100 28 L108 38 L112 32 L118 42 Z"
        fill="#fbbf24"
        stroke="#e8a87c"
        strokeWidth="0.8"
      />
      <circle cx="88" cy="33" r="1.5" fill="#7ec8e3" />
      <circle cx="100" cy="29" r="2" fill="#7ec8e3" />
      <circle cx="112" cy="33" r="1.5" fill="#7ec8e3" />

      {/* Snowflakes floating */}
      <text x="155" y="55" fontSize="12" fill="#7ec8e3" opacity="0.7">❄</text>
      <text x="30" y="65" fontSize="10" fill="#b8e4f0" opacity="0.6">❄</text>

      {/* Gradients */}
      <defs>
        <radialGradient id="elsaGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7ec8e3" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#7ec8e3" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="dressGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#b8e4f0" />
          <stop offset="50%" stopColor="#7ec8e3" />
          <stop offset="100%" stopColor="#5bb8d8" />
        </linearGradient>
        <linearGradient id="hairGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f5f0e8" />
          <stop offset="50%" stopColor="#e8dcc8" />
          <stop offset="100%" stopColor="#d4c4a8" />
        </linearGradient>
        <linearGradient id="capeGrad" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#b8e4f0" opacity="0.8" />
          <stop offset="100%" stopColor="#7ec8e3" opacity="0.3" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function CartoonPrincess({ size = 140, color = "pink" }: { size?: number; color?: "pink" | "purple" | "yellow" }) {
  const colors = {
    pink: { dress: ["#f9a8c9", "#e879a0", "#f47296"], hair: "#8b4513", skin: "#fce4ec" },
    purple: { dress: ["#c4b5fd", "#a78bfa", "#8b5cf6"], hair: "#2d1b00", skin: "#fce4ec" },
    yellow: { dress: ["#fde68a", "#fbbf24", "#f59e0b"], hair: "#8b4513", skin: "#fce4ec" },
  };
  const c = colors[color];

  return (
    <svg
      viewBox="0 0 180 220"
      width={size}
      height={size * 1.22}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-lg"
    >
      {/* Glow */}
      <circle cx="90" cy="105" r="70" fill={c.dress[0]} opacity="0.12" />

      {/* Dress */}
      <path
        d="M55 210 L50 145 Q47 120 62 115 L78 108 L82 85 L98 85 L102 108 L118 115 Q133 120 130 145 L125 210 Z"
        fill={c.dress[0]}
      />
      <path d="M62 115 Q90 128 118 115 L115 135 Q90 145 65 135 Z" fill={c.dress[1]} opacity="0.5" />
      {/* Skirt frills */}
      <path d="M57 170 Q75 180 90 170 Q105 180 123 170" stroke={c.dress[2]} strokeWidth="1.5" fill="none" opacity="0.4" />
      <path d="M56 190 Q75 200 90 190 Q105 200 124 190" stroke={c.dress[2]} strokeWidth="1.5" fill="none" opacity="0.4" />

      {/* Arms */}
      <path d="M55 120 Q35 130 32 145" stroke={c.skin} strokeWidth="6" strokeLinecap="round" fill="none" />
      <path d="M125 120 Q145 125 148 110" stroke={c.skin} strokeWidth="6" strokeLinecap="round" fill="none" />
      <circle cx="32" cy="147" r="4" fill={c.skin} />
      <circle cx="148" cy="108" r="4" fill={c.skin} />

      {/* Wand in right hand */}
      <line x1="148" y1="108" x2="160" y2="80" stroke="#e8a87c" strokeWidth="2" />
      <circle cx="160" cy="78" r="5" fill="#fbbf24" />
      <circle cx="160" cy="78" r="3" fill="#fde68a" />

      {/* Neck */}
      <rect x="84" y="82" width="12" height="12" rx="4" fill={c.skin} />

      {/* Head */}
      <ellipse cx="90" cy="60" rx="24" ry="26" fill={c.skin} />

      {/* Hair */}
      <ellipse cx="90" cy="50" rx="26" ry="20" fill={c.hair} />
      <path d="M64 55 Q64 40 90 38 Q116 40 116 55 L118 85 Q116 75 90 73 Q64 75 62 85 Z" fill={c.hair} />

      {/* Eyes */}
      <ellipse cx="80" cy="58" rx="5" ry="6" fill="white" />
      <ellipse cx="100" cy="58" rx="5" ry="6" fill="white" />
      <circle cx="81" cy="58" r="3.5" fill="#4a3040" />
      <circle cx="101" cy="58" r="3.5" fill="#4a3040" />
      <circle cx="82" cy="57" r="1.2" fill="white" />
      <circle cx="102" cy="57" r="1.2" fill="white" />

      {/* Mouth - happy smile */}
      <path d="M85 70 Q90 74 95 70" stroke="#e88090" strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* Blush */}
      <ellipse cx="72" cy="65" rx="5" ry="3" fill="#ffb0b0" opacity="0.35" />
      <ellipse cx="108" cy="65" rx="5" ry="3" fill="#ffb0b0" opacity="0.35" />

      {/* Crown */}
      <path
        d="M74 42 L80 33 L84 38 L90 30 L96 38 L100 33 L106 42 Z"
        fill="#fbbf24"
        stroke="#e8a87c"
        strokeWidth="0.8"
      />
      <circle cx="90" cy="31" r="2" fill="#e879a0" />
      <circle cx="80" cy="34" r="1.2" fill="#7ec8e3" />
      <circle cx="100" cy="34" r="1.2" fill="#7ec8e3" />

      {/* Hearts floating */}
      <text x="155" y="55" fontSize="14" fill="#e879a0" opacity="0.6">♥</text>
      <text x="18" y="65" fontSize="10" fill="#fbbf24" opacity="0.5">♥</text>
    </svg>
  );
}
