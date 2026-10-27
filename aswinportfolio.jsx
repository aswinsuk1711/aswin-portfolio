import React, { useState, useEffect, useRef, useCallback } from "react";

// ============================================================
// AswinSukumaran // portfolio-os
// Single-file React component. Dark hacker-OS / terminal aesthetic.
// ============================================================

const BOOT_LINES = [
  "SUKUMARAN-OS BIOS v2.6.1025",
  "(C) Sukumaran Systems — All rights reserved",
  "",
  "CPU: CORE-JAVA/SPRING-BOOT @ 5+ yrs .......... DETECTED",
  "MEM TEST: 100,000+ RECORDS @ 98–99% QA ....... OK",
  "PERIPHERALS: POSTGRESQL, MONGODB, MYSQL ...... OK",
  "NETWORK: REACT / NESTJS / TYPESCRIPT ......... OK",
  "AI MODULE: LANGCHAIN + LANGGRAPH + RAG ....... LOADED",
  "SECURITY: STAR PERFORMER CREDENTIAL .......... VERIFIED",
  "",
  "Booting SUKUMARAN-OS ...",
];

const TYPED_LINES = [
  "> whoami",
  "aswin_sukumaran",
  "> role --current",
  "software engineer — healthcare & AI-powered systems",
  "> background --summary",
  "5+ yrs scaling AI data ops @ Amazon -> full-stack engineering",
];

const SKILLS = [
  {
    file: "languages.sh",
    tags: ["Java", "Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    file: "backend.sh",
    tags: ["Spring Boot", "NestJS", "REST APIs", "PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    file: "ai_genai.sh",
    tags: ["LangChain", "LangGraph", "RAG Pipelines", "ChromaDB"],
  },
  {
    file: "data_reporting.sh",
    tags: ["Power BI", "Tableau", "Excel (Advanced)", "SQL Analysis"],
  },
  {
    file: "frontend.sh",
    tags: ["React", "JSX", "Responsive UI"],
  },
  {
    file: "tooling.sh",
    tags: ["Git", "Docker", "Jenkins", "Agile Scrum", "Swagger", "Postman"],
  },
];

const EXPERIENCE = [
  {
    org: "Algorithm Health Pvt Ltd",
    role: "Software Engineer",
    time: "Sep 2025 — Present",
    lines: [
      "built backend systems + REST APIs for healthcare ops data",
      "stack: core java, spring boot, postgresql",
      "developed reporting & data-integration components in agile sprints",
      "documented via swagger, verified via structured test cycles",
    ],
  },
  {
    org: "Amazon",
    role: "ML Data Associate",
    time: "Dec 2019 — Sep 2025",
    lines: [
      "validated & annotated large-scale datasets for alexa ai ops",
      "maintained 98–99% quality across 100,000+ records",
      "built sql dashboards to track quality metrics for leadership",
      "partnered with eng + ops teams to close process gaps",
      "mentored new hires on qa standards & workflows",
      "awarded: star performer, extra miles (5+ yr tenure)",
    ],
  },
];

const PROJECTS = [
  {
    name: "meditrek.jar",
    desc: "Multi-tenant healthcare backend with a reporting-oriented data architecture.",
    tags: ["Java", "Spring Boot", "PostgreSQL", "REST"],
    link: "https://github.com/aswinsuk1711",
  },
  {
    name: "parking_lot_system.jar",
    desc: "Scalable resource-allocation & capacity-tracking engine — classic low-level design.",
    tags: ["Java", "OOP", "LLD"],
    link: "https://github.com/aswinsuk1711",
  },
  {
    name: "rag_profile_match.py",
    desc: "Resume-screening system combining TF-IDF retrieval with a ChromaDB vector store.",
    tags: ["Python", "RAG", "ChromaDB", "TF-IDF"],
    link: "https://github.com/aswinsuk1711",
  },
  {
    name: "llm_fs_assistant.py",
    desc: "LLM-powered file-system assistant running an agentic loop on the Anthropic SDK.",
    tags: ["Python", "Anthropic SDK", "Agents"],
    link: "https://github.com/aswinsuk1711",
  },
  {
    name: "trustdesk.jar",
    desc: "Trust & safety ticketing platform for fraud detection and case management workflows.",
    tags: ["Java", "Spring Boot", "PostgreSQL", "REST"],
    link: "https://github.com/aswinsuk1711/trustdesk",
  },
];

const HELP_TEXT = [
  "available commands:",
  "  help          show this list",
  "  whoami        who is this",
  "  contact       show contact channels",
  "  email         open email client",
  "  linkedin      open linkedin profile",
  "  github        open github profile",
  "  sudo hire-me  ...",
  "  clear         clear the terminal",
];

function useClock() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return now;
}

function TypedLine({ text, speed = 22, onDone }) {
  const [shown, setShown] = useState("");
  useEffect(() => {
    setShown("");
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setShown(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(id);
        if (onDone) onDone();
      }
    }, speed);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);
  return <span>{shown}</span>;
}

const MATRIX_CHARS = "01アイウエオカキクケコ<>/{}[]#$".split("");

function randomColumn(len) {
  return Array.from({ length: len }, () => MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)]);
}

function HackerArt() {
  const columns = [40, 76, 112, 148, 184, 220, 256, 292, 328].map((x, i) => ({
    x,
    chars: randomColumn(16),
    dur: 3.5 + (i % 4) * 0.9,
    delay: -(i * 0.7),
  }));

  return (
    <svg viewBox="0 0 360 460" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id="screenClip">
          <rect x="26" y="30" width="308" height="210" rx="4" />
        </clipPath>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* monitor frame */}
      <rect x="14" y="16" width="332" height="238" rx="10" fill="#05100b" stroke="var(--cyan)" strokeWidth="2" />
      <rect x="26" y="30" width="308" height="210" rx="4" fill="#020705" />

      {/* screen contents */}
      <g clipPath="url(#screenClip)">
        <rect x="26" y="30" width="308" height="210" fill="#03110a" />
        {columns.map((col, i) => (
          <text
            key={i}
            className="matrix-col"
            x={col.x}
            y="0"
            fontFamily="'JetBrains Mono', monospace"
            fontSize="14"
            fill={i % 3 === 0 ? "var(--cyan)" : "var(--green)"}
            opacity="0.85"
            style={{ animationDuration: `${col.dur}s`, animationDelay: `${col.delay}s` }}
          >
            {col.chars.map((ch, j) => (
              <tspan key={j} x={col.x} dy={j === 0 ? 40 : 16}>
                {ch}
              </tspan>
            ))}
          </text>
        ))}
        <rect className="screen-scan" x="26" y="-190" width="308" height="40" fill="url(#scanGrad)" opacity="0.5" />
      </g>

      <defs>
        <linearGradient id="scanGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--green)" stopOpacity="0" />
          <stop offset="50%" stopColor="var(--green)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--green)" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* stand */}
      <rect x="164" y="254" width="32" height="18" fill="#0a1a14" stroke="var(--line)" />
      <rect x="120" y="272" width="120" height="10" rx="3" fill="#0a1a14" stroke="var(--line)" />

      {/* desk */}
      <rect x="10" y="330" width="340" height="8" fill="var(--line)" />

      {/* hooded figure silhouette, seated, facing the screen */}
      <g filter="url(#glow)">
        <path
          d="M180 300
             C 150 300 128 322 122 352
             C 118 372 118 392 122 330
             L 122 330
             C 122 330 122 330 122 330
             Z"
          fill="none"
        />
        <path
          d="M180 296
             C 140 296 110 322 104 358
             L 104 400
             L 256 400
             L 256 358
             C 250 322 220 296 180 296 Z"
          fill="#040a08"
          stroke="var(--green-dim)"
          strokeWidth="1.4"
        />
        <path
          d="M180 296
             C 158 296 140 312 134 334
             C 130 350 132 366 140 378
             C 150 392 168 398 180 398
             C 192 398 210 392 220 378
             C 228 366 230 350 226 334
             C 220 312 202 296 180 296 Z"
          fill="#030705"
          stroke="var(--green-dim)"
          strokeWidth="1.2"
        />
        <ellipse cx="180" cy="356" rx="24" ry="20" fill="#020504" />
        <rect x="160" y="352" width="40" height="6" rx="3" fill="var(--cyan)" opacity="0.55" />
      </g>

      {/* rim light off the hood, echoing screen glow */}
      <path
        d="M134 334 C 140 312 158 296 180 296"
        fill="none"
        stroke="var(--green)"
        strokeWidth="1.5"
        opacity="0.6"
      />

      <rect x="300" y="216" width="14" height="16" fill="var(--amber)" className="cursor-blink" opacity="0.85" />
    </svg>
  );
}

export default function Portfolio() {
  const [booting, setBooting] = useState(true);
  const [bootStep, setBootStep] = useState(0);
  const [typedIdx, setTypedIdx] = useState(0);
  const clock = useClock();

  // boot sequence
  useEffect(() => {
    if (!booting) return;
    if (bootStep >= BOOT_LINES.length) {
      const t = setTimeout(() => setBooting(false), 550);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setBootStep((s) => s + 1), 190);
    return () => clearTimeout(t);
  }, [booting, bootStep]);

  const skipBoot = () => setBooting(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="os-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700;800&family=Bebas+Neue&family=Oxanium:wght@400;500;600;700;800&display=swap');

        * { box-sizing: border-box; }

        .os-root {
          --bg: #06090a;
          --bg-raised: #0c1210;
          --line: #163024;
          --green: #39ff88;
          --green-dim: #1f7a4c;
          --cyan: #4df3ff;
          --amber: #ffb200;
          --text: #cdeede;
          --text-dim: #7ea895;
          --mono: 'JetBrains Mono', monospace;
          --display: 'Bebas Neue', sans-serif;
          --ui: 'Oxanium', sans-serif;

          background: var(--bg);
          color: var(--text);
          font-family: var(--mono);
          min-height: 100vh;
          width: 100%;
          position: relative;
          overflow-x: hidden;
        }

        .os-root::before {
          content: "";
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 60;
          background: repeating-linear-gradient(
            to bottom,
            rgba(57,255,136,0.035) 0px,
            rgba(57,255,136,0.035) 1px,
            transparent 2px,
            transparent 4px
          );
          mix-blend-mode: overlay;
        }

        .os-root::after {
          content: "";
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 61;
          background: radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.55) 100%);
        }

        /* ---------- BOOT SCREEN ---------- */
        .boot {
          position: fixed;
          inset: 0;
          z-index: 100;
          background: #000;
          color: var(--green);
          font-family: var(--mono);
          padding: 32px 28px;
          font-size: 13px;
          line-height: 1.8;
          cursor: pointer;
        }
        .boot-line { opacity: 0; animation: fadeIn 0.15s forwards; text-shadow: 0 0 6px rgba(57,255,136,0.5); }
        @keyframes fadeIn { to { opacity: 1; } }
        .boot-hint {
          position: absolute;
          bottom: 24px;
          left: 28px;
          color: var(--text-dim);
          font-size: 11px;
          letter-spacing: 0.08em;
        }
        .boot-cursor { display:inline-block; width:8px; height:14px; background: var(--green); margin-left:4px; animation: blink 1s steps(1) infinite; vertical-align: -2px; }

        @keyframes blink { 50% { opacity: 0; } }

        /* ---------- NAVBAR ---------- */
        .navbar {
          position: sticky;
          top: 0;
          z-index: 50;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 22px;
          background: rgba(6,9,10,0.86);
          backdrop-filter: blur(6px);
          border-bottom: 1px solid var(--line);
        }
        .navbar-brand {
          font-family: var(--ui);
          font-weight: 800;
          letter-spacing: 0.06em;
          color: var(--green);
          font-size: 15px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .navbar-brand .dot { width: 8px; height: 8px; border-radius: 50%; background: var(--green); box-shadow: 0 0 8px var(--green); animation: pulse 2s ease-in-out infinite; }
        @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.35; } }

        .navbar-links {
          display: flex;
          gap: 4px;
          font-family: var(--ui);
          font-size: 12px;
          letter-spacing: 0.05em;
        }
        .navbar-links button {
          background: transparent;
          border: 1px solid transparent;
          color: var(--text-dim);
          padding: 6px 12px;
          cursor: pointer;
          font-family: var(--ui);
          font-size: 12px;
          letter-spacing: 0.05em;
          transition: all 0.15s ease;
        }
        .navbar-links button:hover {
          color: var(--green);
          border-color: var(--line);
          background: rgba(57,255,136,0.06);
        }

        .navbar-clock {
          font-family: var(--mono);
          font-size: 12px;
          color: var(--cyan);
          border: 1px solid var(--line);
          padding: 4px 10px;
          background: var(--bg-raised);
        }

        @media (max-width: 720px) {
          .navbar-links { display: none; }
        }

        /* ---------- SECTIONS ---------- */
        section { padding: 72px 22px; max-width: 1080px; margin: 0 auto; position: relative; }
        .eyebrow {
          font-family: var(--ui);
          font-size: 11px;
          letter-spacing: 0.22em;
          color: var(--amber);
          text-transform: uppercase;
          margin-bottom: 10px;
        }
        .eyebrow::before { content: "// "; color: var(--green-dim); }
        h2.section-title {
          font-family: var(--display);
          font-size: clamp(30px, 5vw, 48px);
          letter-spacing: 0.02em;
          color: var(--text);
          margin: 0 0 32px 0;
        }

        /* ---------- HERO ---------- */
        .hero { padding-top: 96px; min-height: 88vh; display: flex; flex-direction: column; justify-content: center; }
        .hero-inner {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 36px;
          align-items: center;
        }
        .hero-art { display: flex; justify-content: center; }
        .hero-art svg { width: 100%; max-width: 420px; height: auto; filter: drop-shadow(0 0 26px rgba(57,255,136,0.12)); }
        @media (max-width: 860px) {
          .hero-inner { grid-template-columns: 1fr; }
          .hero-art { order: -1; max-width: 300px; margin: 0 auto 8px; }
        }

        .matrix-col { animation: matrixFall linear infinite; }
        @keyframes matrixFall {
          from { transform: translateY(-120px); opacity: 0.9; }
          to { transform: translateY(230px); opacity: 0.9; }
        }
        .screen-scan {
          animation: scanMove 3.2s linear infinite;
        }
        @keyframes scanMove {
          from { transform: translateY(0); }
          to { transform: translateY(190px); }
        }
        .cursor-blink { animation: blink 1.1s steps(1) infinite; }

        @media (prefers-reduced-motion: reduce) {
          .matrix-col, .screen-scan, .cursor-blink { animation: none; }
        }
        .glitch-wrap { position: relative; }
        .glitch {
          font-family: var(--display);
          font-size: clamp(52px, 11vw, 132px);
          line-height: 0.92;
          letter-spacing: 0.01em;
          color: var(--text);
          position: relative;
          margin: 0;
        }
        .glitch span { position: relative; display: inline-block; }
        .glitch span::before,
        .glitch span::after {
          content: attr(data-text);
          position: absolute;
          left: 0; top: 0;
          width: 100%;
          overflow: hidden;
          background: var(--bg);
        }
        .glitch span::before {
          color: var(--cyan);
          animation: glitchTop 4.2s infinite linear;
          clip-path: inset(0 0 60% 0);
        }
        .glitch span::after {
          color: var(--amber);
          animation: glitchBottom 3.6s infinite linear;
          clip-path: inset(60% 0 0 0);
        }
        @keyframes glitchTop {
          0%, 88%, 100% { transform: translate(0,0); opacity: 0; }
          89% { transform: translate(-3px,-1px); opacity: 0.85; }
          91% { transform: translate(3px,1px); opacity: 0.85; }
          93% { transform: translate(-2px,0); opacity: 0; }
        }
        @keyframes glitchBottom {
          0%, 85%, 100% { transform: translate(0,0); opacity: 0; }
          86% { transform: translate(3px,1px); opacity: 0.85; }
          88% { transform: translate(-3px,-1px); opacity: 0.85; }
          90% { transform: translate(2px,0); opacity: 0; }
        }

        .hero-sub {
          margin-top: 22px;
          font-size: 15px;
          color: var(--text-dim);
          max-width: 640px;
        }

        .terminal-block {
          margin-top: 30px;
          border: 1px solid var(--line);
          background: rgba(12,18,16,0.7);
          padding: 18px 20px;
          max-width: 640px;
          font-size: 13px;
          line-height: 1.9;
          box-shadow: 0 0 30px rgba(57,255,136,0.04) inset;
        }
        .terminal-block .prompt { color: var(--green); }
        .terminal-block .out { color: var(--text-dim); padding-left: 14px; display:block; }

        .hero-cta { margin-top: 30px; display: flex; gap: 14px; flex-wrap: wrap; }
        .btn {
          font-family: var(--ui);
          font-size: 12px;
          letter-spacing: 0.06em;
          padding: 11px 20px;
          border: 1px solid var(--green-dim);
          background: transparent;
          color: var(--green);
          cursor: pointer;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.15s ease;
        }
        .btn:hover { background: var(--green); color: #04140a; box-shadow: 0 0 18px rgba(57,255,136,0.4); }
        .btn.alt { border-color: var(--line); color: var(--cyan); }
        .btn.alt:hover { background: var(--cyan); color: #041418; box-shadow: 0 0 18px rgba(77,243,255,0.35); }

        /* ---------- SKILLS ---------- */
        .skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(230px,1fr)); gap: 16px; }
        .win {
          border: 1px solid var(--line);
          background: var(--bg-raised);
        }
        .win-bar {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 10px;
          border-bottom: 1px solid var(--line);
          background: #0a1210;
        }
        .win-dot { width: 9px; height: 9px; border-radius: 50%; }
        .win-dot.r { background: #ff5f56; }
        .win-dot.y { background: #ffbd2e; }
        .win-dot.g { background: #27c93f; }
        .win-name { margin-left: 8px; font-size: 11px; color: var(--text-dim); }
        .win-body { padding: 16px; }
        .tag-row { display: flex; flex-wrap: wrap; gap: 8px; }
        .tag {
          font-size: 11.5px;
          padding: 5px 10px;
          border: 1px solid var(--line);
          color: var(--text);
          background: rgba(57,255,136,0.04);
        }

        /* ---------- EXPERIENCE ---------- */
        .timeline { position: relative; padding-left: 26px; }
        .timeline::before {
          content: "";
          position: absolute;
          left: 6px; top: 4px; bottom: 4px;
          width: 1px;
          background: linear-gradient(to bottom, var(--green-dim), transparent);
        }
        .tl-item { position: relative; margin-bottom: 40px; }
        .tl-item::before {
          content: "";
          position: absolute;
          left: -26px; top: 4px;
          width: 11px; height: 11px;
          border-radius: 50%;
          background: var(--bg);
          border: 2px solid var(--green);
          box-shadow: 0 0 10px rgba(57,255,136,0.5);
        }
        .tl-head { display: flex; flex-wrap: wrap; align-items: baseline; gap: 10px; margin-bottom: 4px; }
        .tl-role { font-family: var(--ui); font-weight: 700; color: var(--text); font-size: 16px; }
        .tl-org { color: var(--cyan); font-size: 13px; }
        .tl-time { font-size: 11px; color: var(--amber); font-family: var(--mono); }
        .tl-lines { margin-top: 10px; font-size: 13px; color: var(--text-dim); line-height: 2; }
        .tl-lines .l::before { content: "$ "; color: var(--green-dim); }

        /* ---------- PROJECTS ---------- */
        .proj-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px,1fr)); gap: 18px; }
        .proj-card .win-body { display: flex; flex-direction: column; gap: 12px; min-height: 150px; }
        .proj-desc { font-size: 12.5px; color: var(--text-dim); line-height: 1.7; flex: 1; }
        .proj-link { font-size: 11.5px; color: var(--cyan); text-decoration: none; align-self: flex-start; border-bottom: 1px dashed var(--cyan); }
        .proj-link:hover { color: var(--green); border-color: var(--green); }

        /* ---------- CONTACT TERMINAL ---------- */
        .shell {
          border: 1px solid var(--line);
          background: #050807;
          max-width: 720px;
        }
        .shell-bar { display:flex; align-items:center; gap:6px; padding: 9px 12px; border-bottom: 1px solid var(--line); background: #0a1210; }
        .shell-body { padding: 16px 18px; font-size: 12.5px; min-height: 220px; max-height: 320px; overflow-y: auto; }
        .shell-line { white-space: pre-wrap; line-height: 1.8; color: var(--text-dim); }
        .shell-line.cmd { color: var(--green); }
        .shell-input-row { display: flex; align-items: center; gap: 8px; padding: 10px 18px; border-top: 1px solid var(--line); }
        .shell-input-row .prompt { color: var(--green); font-size: 12.5px; }
        .shell-input-row input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: var(--text);
          font-family: var(--mono);
          font-size: 12.5px;
        }

        footer { text-align: center; padding: 30px 22px 50px; color: var(--text-dim); font-size: 11.5px; }
        footer a { color: var(--cyan); text-decoration: none; }

        @media (prefers-reduced-motion: reduce) {
          .glitch span::before, .glitch span::after { animation: none; display: none; }
          .navbar-brand .dot { animation: none; }
        }

        a:focus-visible, button:focus-visible, input:focus-visible {
          outline: 2px solid var(--cyan);
          outline-offset: 2px;
        }
      `}</style>

      {booting && (
        <div className="boot" onClick={skipBoot}>
          {BOOT_LINES.slice(0, bootStep).map((line, i) => (
            <div className="boot-line" key={i} style={{ animationDelay: `${i * 0.02}s` }}>
              {line || "\u00A0"}
            </div>
          ))}
          {bootStep < BOOT_LINES.length && <span className="boot-cursor" />}
          <div className="boot-hint">click / press any key to skip</div>
        </div>
      )}

      {!booting && (
        <>
          <nav className="navbar">
            <div className="navbar-brand">
              <span className="dot" />
              SUKUMARAN-OS
            </div>
            <div className="navbar-links">
              <button onClick={() => scrollTo("hero")}>HOME</button>
              <button onClick={() => scrollTo("skills")}>SKILLS</button>
              <button onClick={() => scrollTo("experience")}>EXPERIENCE</button>
              <button onClick={() => scrollTo("projects")}>PROJECTS</button>
              <button onClick={() => scrollTo("contact")}>CONTACT</button>
            </div>
            <div className="navbar-clock">{clock.toLocaleTimeString()}</div>
          </nav>

          <section id="hero" className="hero">
            <div className="hero-inner">
              <div className="hero-text">
                <div className="eyebrow">chennai, india — full-stack engineer</div>
                <div className="glitch-wrap">
                  <h1 className="glitch">
                    <span data-text="Aswin Sukumaran">Aswin Sukumaran</span>
                  </h1>
                </div>
                <p className="hero-sub">
                  Building healthcare products and AI-powered tools — after 5+ years
                  keeping large-scale AI data operations honest at Amazon.
                </p>

                <div className="terminal-block">
                  {TYPED_LINES.slice(0, typedIdx + 1).map((line, i) =>
                    i === typedIdx ? (
                      <span
                        key={i}
                        className={line.startsWith(">") ? "prompt" : "out"}
                        style={{ display: "block" }}
                      >
                        <TypedLine
                          text={line}
                          onDone={() =>
                            setTypedIdx((v) => (v < TYPED_LINES.length - 1 ? v + 1 : v))
                          }
                        />
                      </span>
                    ) : (
                      <span
                        key={i}
                        className={line.startsWith(">") ? "prompt" : "out"}
                        style={{ display: "block" }}
                      >
                        {line}
                      </span>
                    )
                  )}
                </div>

                <div className="hero-cta">
                  <button className="btn" onClick={() => scrollTo("projects")}>
                    ./view_projects
                  </button>
                  <button className="btn alt" onClick={() => scrollTo("contact")}>
                    ./open_contact
                  </button>
                </div>
              </div>

              <div className="hero-art" aria-hidden="true">
                <HackerArt />
              </div>
            </div>
          </section>

          <section id="skills">
            <div className="eyebrow">system.skills</div>
            <h2 className="section-title">Stack Inventory</h2>
            <div className="skills-grid">
              {SKILLS.map((s) => (
                <div className="win" key={s.file}>
                  <div className="win-bar">
                    <span className="win-dot r" />
                    <span className="win-dot y" />
                    <span className="win-dot g" />
                    <span className="win-name">{s.file}</span>
                  </div>
                  <div className="win-body">
                    <div className="tag-row">
                      {s.tags.map((t) => (
                        <span className="tag" key={t}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="experience">
            <div className="eyebrow">system.log --experience</div>
            <h2 className="section-title">Execution History</h2>
            <div className="timeline">
              {EXPERIENCE.map((job) => (
                <div className="tl-item" key={job.org}>
                  <div className="tl-head">
                    <span className="tl-role">{job.role}</span>
                    <span className="tl-org">@ {job.org}</span>
                    <span className="tl-time">{job.time}</span>
                  </div>
                  <div className="tl-lines">
                    {job.lines.map((l, i) => (
                      <div className="l" key={i}>
                        {l}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="projects">
            <div className="eyebrow">ls ./projects</div>
            <h2 className="section-title">Compiled Projects</h2>
            <div className="proj-grid">
              {PROJECTS.map((p) => (
                <div className="win proj-card" key={p.name}>
                  <div className="win-bar">
                    <span className="win-dot r" />
                    <span className="win-dot y" />
                    <span className="win-dot g" />
                    <span className="win-name">{p.name}</span>
                  </div>
                  <div className="win-body">
                    <div className="proj-desc">{p.desc}</div>
                    <div className="tag-row">
                      {p.tags.map((t) => (
                        <span className="tag" key={t}>
                          {t}
                        </span>
                      ))}
                    </div>
                    <a className="proj-link" href={p.link} target="_blank" rel="noreferrer">
                      view_repo →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="contact">
            <div className="eyebrow">/bin/contact --interactive</div>
            <h2 className="section-title">Open a Shell</h2>
            <ContactShell />
          </section>

          <footer>
            SUKUMARAN-OS v2.6 — built with React —{" "}
            <a href="https://github.com/aswinsuk1711" target="_blank" rel="noreferrer">
              github.com/aswinsuk1711
            </a>
          </footer>
        </>
      )}
    </div>
  );
}

function ContactShell() {
  const [history, setHistory] = useState([
    { type: "out", text: "welcome to aswin@sukumaran-os:~$" },
    { type: "out", text: "type 'help' to see available commands." },
  ]);
  const [input, setInput] = useState("");
  const bodyRef = useRef(null);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [history]);

  const run = useCallback((raw) => {
    const cmd = raw.trim().toLowerCase();
    const push = (lines) =>
      setHistory((h) => [
        ...h,
        { type: "cmd", text: `aswin@sukumaran-os:~$ ${raw}` },
        ...lines.map((text) => ({ type: "out", text })),
      ]);

    if (cmd === "") return;

    if (cmd === "clear") {
      setHistory([]);
      return;
    }
    if (cmd === "help") {
      push(HELP_TEXT);
      return;
    }
    if (cmd === "whoami") {
      push(["aswin_sukumaran — software engineer, chennai, india"]);
      return;
    }
    if (cmd === "contact") {
      push([
        "email     sukaswin1711@outlook.com",
        "linkedin  linkedin.com/in/aswin-sukumaran-453662170",
        "github    github.com/aswinsuk1711",
      ]);
      return;
    }
    if (cmd === "email") {
      push(["opening mail client -> sukaswin1711@outlook.com"]);
      window.open("mailto:sukaswin1711@outlook.com", "_blank");
      return;
    }
    if (cmd === "linkedin") {
      push(["opening -> linkedin.com/in/aswin-sukumaran-453662170"]);
      window.open("https://linkedin.com/in/aswin-sukumaran-453662170", "_blank");
      return;
    }
    if (cmd === "github") {
      push(["opening -> github.com/aswinsuk1711"]);
      window.open("https://github.com/aswinsuk1711", "_blank");
      return;
    }
    if (cmd === "sudo hire-me") {
      push(["permission granted.", "initiating handshake... send an email to continue."]);
      return;
    }
    push([`command not found: ${raw}`, "type 'help' for a list of commands"]);
  }, []);

  return (
    <div className="shell">
      <div className="shell-bar">
        <span className="win-dot r" />
        <span className="win-dot y" />
        <span className="win-dot g" />
        <span className="win-name">contact.sh</span>
      </div>
      <div className="shell-body" ref={bodyRef}>
        {history.map((h, i) => (
          <div className={`shell-line ${h.type === "cmd" ? "cmd" : ""}`} key={i}>
            {h.text}
          </div>
        ))}
      </div>
      <div className="shell-input-row">
        <span className="prompt">$</span>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              run(input);
              setInput("");
            }
          }}
          placeholder="type a command — try 'help'"
          aria-label="terminal command input"
        />
      </div>
    </div>
  );
}
