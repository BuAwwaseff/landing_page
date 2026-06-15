function EgyptScene() {
  return (
    <div className="interactive-bg-scene">
      <svg
        viewBox="0 0 1600 760"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMax meet"
        className="interactive-bg-scene-svg"
      >
        <defs>
          <linearGradient id="sceneGlow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(255,236,194,0.42)" />
            <stop offset="32%" stopColor="rgba(255,193,0,0.22)" />
            <stop offset="100%" stopColor="rgba(10,11,18,0.9)" />
          </linearGradient>
          <linearGradient id="sceneShade" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(255,224,170,0.18)" />
            <stop offset="48%" stopColor="rgba(255,193,0,0.08)" />
            <stop offset="100%" stopColor="rgba(8,12,24,0.98)" />
          </linearGradient>
        </defs>

        <ellipse cx="800" cy="706" rx="620" ry="42" fill="rgba(255,193,0,0.07)" />
        <ellipse cx="800" cy="728" rx="760" ry="54" fill="rgba(0,0,0,0.34)" />

        <polygon points="402,672 576,672 488,420" fill="url(#sceneGlow)" />
        <polygon points="488,420 576,672 538,672 488,512" fill="rgba(255,245,220,0.12)" />

        <polygon points="620,672 970,672 790,230" fill="url(#sceneShade)" />
        <polygon points="790,230 970,672 896,672 790,356" fill="rgba(255,242,212,0.13)" />

        <polygon points="1018,672 1178,672 1096,468" fill="url(#sceneGlow)" />
        <polygon points="1096,468 1178,672 1142,672 1096,542" fill="rgba(255,244,217,0.1)" />

        <rect x="314" y="454" width="28" height="218" rx="3" fill="rgba(255,205,114,0.16)" />
        <polygon points="328,390 348,454 308,454" fill="rgba(255,220,152,0.18)" />
        <rect x="1258" y="448" width="28" height="224" rx="3" fill="rgba(255,205,114,0.14)" />
        <polygon points="1272,384 1292,448 1252,448" fill="rgba(255,220,152,0.16)" />

        <path
          d="M190 676 C260 636 350 640 404 676 L190 676 Z"
          fill="rgba(255,193,0,0.08)"
        />
        <path
          d="M1186 676 C1248 634 1342 638 1412 676 L1186 676 Z"
          fill="rgba(255,193,0,0.08)"
        />

        <path
          d="M748 672 L748 520 Q748 448 800 448 Q852 448 852 520 L852 672 Z"
          fill="rgba(255,193,0,0.06)"
        />
        <path
          d="M770 672 L770 530 Q770 482 800 482 Q830 482 830 530 L830 672 Z"
          fill="rgba(5,7,14,0.86)"
        />

        <path
          d="M735 446 C760 420 784 408 800 408 C816 408 840 420 865 446"
          fill="none"
          stroke="rgba(255,217,138,0.18)"
          strokeWidth="10"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export default function InteractiveBackground() {
  return (
    <div className="interactive-bg" aria-hidden="true">
      <div className="interactive-bg-base" />
      <div className="interactive-bg-glow interactive-bg-glow--left" />
      <div className="interactive-bg-glow interactive-bg-glow--right" />
      <div className="interactive-bg-glow interactive-bg-glow--horizon" />
      <div className="interactive-bg-atmosphere" />
      <div className="interactive-bg-river" />
      <div className="interactive-bg-dunes interactive-bg-dunes--far" />
      <EgyptScene />
      <div className="interactive-bg-dunes interactive-bg-dunes--near" />
      <div className="interactive-bg-vignette" />
    </div>
  );
}
