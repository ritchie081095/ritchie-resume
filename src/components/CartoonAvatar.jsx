// Self-contained cartoon avatar (flat SVG, no external assets). Styled after a
// clean-cut developer: short dark hair, suit, and an accent-colored tie that
// picks up the site's brand color via `currentColor`. The raised hand waves
// (see `.avatar-wave` keyframes in index.css). Fills its round frame.
export default function CartoonAvatar() {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Waving cartoon avatar of Ritchie"
      style={{ color: 'var(--accent-1)' }}
    >
      {/* Shoulders / suit */}
      <path
        d="M22 200 V180 C22 160 42 148 68 143 L132 143 C158 148 178 160 178 180 V200 Z"
        fill="#232a40"
      />
      {/* Shirt V */}
      <path d="M86 140 L100 180 L114 140 Z" fill="#eef2fa" />
      {/* Suit lapels */}
      <path d="M86 140 L100 180 L84 152 Z" fill="#1a2032" />
      <path d="M114 140 L100 180 L116 152 Z" fill="#1a2032" />
      {/* Tie (brand color via currentColor) */}
      <path d="M100 143 L94 151 L100 178 L106 151 Z" fill="currentColor" />
      <path d="M95 139 H105 L107 146 H93 Z" fill="currentColor" />

      {/* Neck */}
      <path d="M88 116 L88 142 Q100 150 112 142 L112 116 Z" fill="#e3ac82" />
      {/* Ears */}
      <ellipse cx="56" cy="86" rx="8" ry="11" fill="#f1c6a0" />
      <ellipse cx="144" cy="86" rx="8" ry="11" fill="#f1c6a0" />
      {/* Head */}
      <ellipse cx="100" cy="80" rx="44" ry="48" fill="#f1c6a0" />
      {/* Soft cheek shading */}
      <ellipse cx="72" cy="98" rx="9" ry="6" fill="#eab98f" opacity="0.6" />
      <ellipse cx="128" cy="98" rx="9" ry="6" fill="#eab98f" opacity="0.6" />

      {/* Hair */}
      <path
        d="M56 82 C54 46 76 30 100 30 C124 30 146 46 144 82 C139 66 130 56 117 54 C111 63 100 63 91 60 C80 60 66 66 56 82 Z"
        fill="#211d2b"
      />

      {/* Eyebrows */}
      <path d="M74 72 Q83 66 92 71" stroke="#211d2b" strokeWidth="3.2" fill="none" strokeLinecap="round" />
      <path d="M108 71 Q117 66 126 72" stroke="#211d2b" strokeWidth="3.2" fill="none" strokeLinecap="round" />
      {/* Eyes */}
      <ellipse cx="83" cy="84" rx="4.6" ry="5.6" fill="#2b2536" />
      <ellipse cx="117" cy="84" rx="4.6" ry="5.6" fill="#2b2536" />
      <circle cx="84.6" cy="82.2" r="1.5" fill="#ffffff" />
      <circle cx="118.6" cy="82.2" r="1.5" fill="#ffffff" />
      {/* Nose */}
      <path d="M100 86 L96 99 Q100 102 104 99" stroke="#d79f73" strokeWidth="2.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {/* Smile */}
      <path d="M86 108 Q100 119 114 108" stroke="#9c4a3f" strokeWidth="3.2" fill="none" strokeLinecap="round" />

      {/* Upper arm (static) — connects shoulder to elbow */}
      <line x1="136" y1="150" x2="154" y2="122" stroke="#232a40" strokeWidth="17" strokeLinecap="round" />

      {/* Forearm + hand (waves around the elbow pivot) */}
      <g className="avatar-wave">
        <line x1="154" y1="122" x2="162" y2="64" stroke="#232a40" strokeWidth="16" strokeLinecap="round" />
        {/* cuff */}
        <line x1="159" y1="74" x2="165" y2="74" stroke="#eef2fa" strokeWidth="16" strokeLinecap="round" />
        {/* palm */}
        <circle cx="163" cy="58" r="11" fill="#f1c6a0" />
        {/* fingers */}
        <rect x="156" y="44" width="4.4" height="13" rx="2.2" fill="#f1c6a0" />
        <rect x="161" y="42" width="4.4" height="15" rx="2.2" fill="#f1c6a0" />
        <rect x="166" y="44" width="4.4" height="13" rx="2.2" fill="#f1c6a0" />
        {/* thumb */}
        <circle cx="153" cy="59" r="4.2" fill="#f1c6a0" />
      </g>
    </svg>
  );
}
