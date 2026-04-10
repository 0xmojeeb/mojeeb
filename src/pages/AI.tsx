import { useEffect } from 'react'

const aiStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Mono:wght@400;500&display=swap');

  .ai-page *, .ai-page *::before, .ai-page *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .ai-page {
    --black: #050507;
    --surface: #090910;
    --white: #f0eeff;
    --dim: #7a778f;
    --purple: #4e24cf;
    --purple-bright: #7c4dff;
    --purple-glow: rgba(78,36,207,0.15);
    --border: rgba(78,36,207,0.12);
    --border-soft: rgba(255,255,255,0.06);
    background: var(--black);
    color: var(--white);
    font-family: 'DM Mono', monospace;
    font-size: 14px;
    line-height: 1.7;
    overflow-x: hidden;
    min-height: 100vh;
  }

  .ai-page .grid-bg {
    position: fixed; inset: 0;
    background-image: linear-gradient(rgba(78,36,207,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(78,36,207,0.04) 1px, transparent 1px);
    background-size: 56px 56px;
    pointer-events: none; z-index: 0;
  }

  .ai-page .glow-1 {
    position: fixed; top: -15%; right: -5%;
    width: 500px; height: 500px;
    background: radial-gradient(circle, rgba(78,36,207,0.1) 0%, transparent 70%);
    pointer-events: none; z-index: 0;
  }

  .ai-page .glow-2 {
    position: fixed; bottom: 5%; left: -8%;
    width: 400px; height: 400px;
    background: radial-gradient(circle, rgba(78,36,207,0.06) 0%, transparent 70%);
    pointer-events: none; z-index: 0;
  }

  .ai-page .ai-nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    padding: 18px 40px;
    display: flex; justify-content: space-between; align-items: center;
    border-bottom: 0.5px solid var(--border);
    background: rgba(5,5,7,0.9);
    backdrop-filter: blur(20px);
  }

  .ai-page .nav-logo {
    font-family: 'Syne', sans-serif; font-weight: 800; font-size: 15px;
    letter-spacing: -0.02em; color: var(--white); text-decoration: none;
  }
  .ai-page .nav-logo span { color: var(--purple-bright); }

  .ai-page .nav-links { display: flex; gap: 28px; list-style: none; }
  .ai-page .nav-links a {
    color: var(--dim); text-decoration: none; font-size: 10px;
    letter-spacing: 0.1em; text-transform: uppercase; transition: color 0.2s;
  }
  .ai-page .nav-links a:hover { color: var(--white); }

  /* HERO */
  .ai-page .ai-hero {
    position: relative; z-index: 1;
    min-height: 100vh; display: flex; flex-direction: column; justify-content: flex-end;
    padding: 120px 40px 80px;
    border-bottom: 0.5px solid var(--border-soft);
  }

  .ai-page .hero-eyebrow {
    display: inline-flex; align-items: center; gap: 10px;
    font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--purple-bright); margin-bottom: 28px;
    opacity: 0; animation: fadeUp 0.6s ease forwards 0.2s;
  }
  .ai-page .hero-eyebrow::before { content: ''; width: 20px; height: 0.5px; background: var(--purple-bright); }

  .ai-page .ai-headline {
    font-family: 'Syne', sans-serif; font-weight: 800;
    font-size: clamp(48px, 8vw, 108px);
    line-height: 0.92; letter-spacing: -0.03em;
    max-width: 860px;
    opacity: 0; animation: fadeUp 0.8s ease forwards 0.35s;
  }
  .ai-page .ai-headline .grad {
    background: linear-gradient(135deg, #4e24cf 0%, #7c4dff 50%, #a78bfa 100%);
    -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;
  }

  .ai-page .hero-sub {
    margin-top: 36px; max-width: 500px;
    color: var(--dim); font-size: 14px; line-height: 1.85;
    opacity: 0; animation: fadeUp 0.8s ease forwards 0.5s;
  }
  .ai-page .hero-sub strong { color: var(--white); font-weight: 400; }

  .ai-page .hero-cta {
    margin-top: 44px; display: flex; gap: 14px; align-items: center;
    opacity: 0; animation: fadeUp 0.8s ease forwards 0.65s;
  }

  .ai-page .btn-p {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 12px 26px; background: #4e24cf; color: #fff;
    font-family: 'DM Mono', monospace; font-size: 10px; font-weight: 500;
    letter-spacing: 0.12em; text-transform: uppercase; text-decoration: none;
    border: none; border-radius: 99px; cursor: pointer;
    box-shadow: 0 0 32px rgba(78,36,207,0.35);
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .ai-page .btn-p:hover { transform: translateY(-2px); box-shadow: 0 0 52px rgba(78,36,207,0.55); }

  .ai-page .btn-g {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 12px 26px; background: transparent; color: var(--dim);
    font-family: 'DM Mono', monospace; font-size: 10px;
    letter-spacing: 0.12em; text-transform: uppercase; text-decoration: none;
    border: 0.5px solid rgba(255,255,255,0.1); border-radius: 99px;
    transition: color 0.2s, border-color 0.2s;
  }
  .ai-page .btn-g:hover { color: var(--white); border-color: rgba(78,36,207,0.5); }

  /* TICKER */
  .ai-page .ticker {
    position: relative; z-index: 1;
    padding: 20px 0; overflow: hidden;
    border-top: 0.5px solid var(--border); border-bottom: 0.5px solid var(--border);
    background: rgba(78,36,207,0.03);
  }
  .ai-page .ticker-track {
    display: flex; gap: 0; animation: scroll 20s linear infinite;
    width: max-content;
  }
  .ai-page .ticker-item {
    display: flex; align-items: center; gap: 14px;
    padding: 0 32px; font-family: 'Syne', sans-serif;
    font-size: 12px; font-weight: 700; letter-spacing: 0.08em;
    text-transform: uppercase; color: var(--dim); white-space: nowrap;
    border-right: 0.5px solid var(--border);
  }
  .ai-page .ticker-dot { width: 4px; height: 4px; border-radius: 50%; background: var(--purple-bright); box-shadow: 0 0 6px var(--purple-bright); }

  /* SECTIONS */
  .ai-page .ai-section {
    position: relative; z-index: 1;
    padding: 96px 40px; border-bottom: 0.5px solid var(--border-soft);
    max-width: 1200px; margin: 0 auto; width: 100%;
  }

  .ai-page .s-label {
    font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--purple-bright); margin-bottom: 44px;
    display: flex; align-items: center; gap: 12px;
  }
  .ai-page .s-label::after { content: ''; width: 40px; height: 0.5px; background: var(--purple-bright); opacity: 0.5; }

  .ai-page .s-title {
    font-family: 'Syne', sans-serif; font-weight: 800;
    font-size: clamp(28px, 4vw, 48px); line-height: 1.0;
    letter-spacing: -0.02em; margin-bottom: 20px;
  }

  /* ABOUT */
  .ai-page .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 72px; max-width: 1100px; }
  .ai-page .about-body { color: var(--dim); line-height: 1.9; }
  .ai-page .about-body p + p { margin-top: 18px; }
  .ai-page .about-body strong { color: var(--white); font-weight: 400; }

  .ai-page .stat-grid { display: flex; flex-direction: column; gap: 1px; border: 0.5px solid var(--border); }
  .ai-page .stat-row {
    padding: 24px 28px; border-bottom: 0.5px solid var(--border);
    transition: background 0.25s;
  }
  .ai-page .stat-row:hover { background: rgba(78,36,207,0.05); }
  .ai-page .stat-row:last-child { border-bottom: none; }
  .ai-page .stat-n {
    font-family: 'Syne', sans-serif; font-size: 32px; font-weight: 800;
    color: var(--purple-bright); line-height: 1; display: block; margin-bottom: 4px;
  }
  .ai-page .stat-l { font-size: 11px; color: var(--dim); letter-spacing: 0.04em; }

  /* PROJECTS */
  .ai-page .proj-grid {
    display: grid; grid-template-columns: repeat(2, 1fr);
    gap: 1px; background: var(--border); border: 0.5px solid var(--border);
  }
  .ai-page .proj-card {
    background: var(--black); padding: 36px; transition: background 0.25s;
    position: relative; overflow: hidden;
  }
  .ai-page .proj-card::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1.5px;
    background: linear-gradient(90deg, #4e24cf, #a78bfa);
    transform: scaleX(0); transform-origin: left; transition: transform 0.4s ease;
  }
  .ai-page .proj-card:hover::before { transform: scaleX(1); }
  .ai-page .proj-card:hover { background: rgba(78,36,207,0.04); }

  .ai-page .proj-num { font-size: 10px; color: var(--purple-bright); letter-spacing: 0.1em; margin-bottom: 18px; opacity: 0.5; }
  .ai-page .proj-name { font-family: 'Syne', sans-serif; font-size: 20px; font-weight: 800; margin-bottom: 6px; letter-spacing: -0.01em; }
  .ai-page .proj-url {
    font-size: 10px; color: var(--purple-bright); letter-spacing: 0.06em; margin-bottom: 14px;
    text-decoration: none; opacity: 0.65; transition: opacity 0.2s; display: block;
  }
  .ai-page .proj-url:hover { opacity: 1; }
  .ai-page .proj-desc { color: var(--dim); font-size: 12px; line-height: 1.75; margin-bottom: 20px; }
  .ai-page .proj-tags { display: flex; flex-wrap: wrap; gap: 7px; }
  .ai-page .ptag {
    font-size: 9px; letter-spacing: 0.08em; text-transform: uppercase;
    padding: 3px 10px; border: 0.5px solid var(--border-soft); color: var(--dim);
  }
  .ai-page .ptag.hot { border-color: rgba(78,36,207,0.4); color: #a78bfa; }
  .ai-page .proj-stat {
    display: inline-flex; align-items: center; gap: 8px;
    background: rgba(78,36,207,0.08); border: 0.5px solid rgba(78,36,207,0.25);
    padding: 4px 12px; font-size: 10px; color: var(--purple-bright);
    margin-bottom: 14px; letter-spacing: 0.06em;
  }

  /* SERVICES */
  .ai-page .svc-grid {
    display: grid; grid-template-columns: repeat(3, 1fr);
    gap: 1px; background: var(--border); border: 0.5px solid var(--border);
  }
  .ai-page .svc-card {
    background: var(--black); padding: 36px 32px; transition: background 0.25s; position: relative;
  }
  .ai-page .svc-card:hover { background: rgba(78,36,207,0.04); }
  .ai-page .svc-icon { font-size: 22px; margin-bottom: 18px; }
  .ai-page .svc-name { font-family: 'Syne', sans-serif; font-size: 17px; font-weight: 700; margin-bottom: 10px; letter-spacing: -0.01em; }
  .ai-page .svc-desc { color: var(--dim); font-size: 12px; line-height: 1.7; }

  /* STACK */
  .ai-page .stack-wrap { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 28px; }
  .ai-page .stack-pill {
    display: flex; align-items: center; gap: 8px; padding: 10px 18px;
    border: 0.5px solid var(--border); font-size: 11px; color: var(--dim);
    letter-spacing: 0.04em; transition: all 0.2s;
  }
  .ai-page .stack-pill:hover { border-color: rgba(78,36,207,0.5); color: var(--white); background: rgba(78,36,207,0.06); }
  .ai-page .stack-pill .pd { width: 5px; height: 5px; border-radius: 50%; background: var(--purple-bright); opacity: 0.7; flex-shrink: 0; }

  /* CTA */
  .ai-page .ai-cta {
    position: relative; z-index: 1;
    padding: 110px 40px; text-align: center;
    background: radial-gradient(ellipse 60% 50% at 50% 100%, rgba(78,36,207,0.08) 0%, transparent 70%);
  }
  .ai-page .cta-eye { font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--purple-bright); margin-bottom: 20px; display: block; }
  .ai-page .cta-h { font-family: 'Syne', sans-serif; font-weight: 800; font-size: clamp(36px,6vw,76px); line-height: 0.95; letter-spacing: -0.03em; margin-bottom: 18px; }
  .ai-page .cta-sub { color: var(--dim); max-width: 400px; margin: 0 auto 44px; line-height: 1.8; font-size: 13px; }
  .ai-page .cta-btns { display: flex; gap: 14px; justify-content: center; }

  /* FOOTER */
  .ai-page .ai-footer {
    position: relative; z-index: 1;
    padding: 28px 40px; display: flex; justify-content: space-between; align-items: center;
    border-top: 0.5px solid var(--border);
  }
  .ai-page .footer-l { font-size: 11px; color: var(--dim); }
  .ai-page .footer-links { display: flex; gap: 22px; }
  .ai-page .footer-links a { font-size: 11px; color: var(--dim); text-decoration: none; letter-spacing: 0.06em; transition: color 0.2s; }
  .ai-page .footer-links a:hover { color: var(--purple-bright); }

  /* REVEAL */
  .ai-page .reveal { opacity: 0; transform: translateY(22px); transition: opacity 0.7s ease, transform 0.7s ease; }
  .ai-page .reveal.visible { opacity: 1; transform: translateY(0); }

  @keyframes fadeUp { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }

  @media (max-width: 768px) {
    .ai-page .ai-nav { padding: 16px 20px; }
    .ai-page .nav-links { display: none; }
    .ai-page .ai-hero { padding: 100px 20px 56px; }
    .ai-page .ai-section { padding: 64px 20px; }
    .ai-page .about-grid, .ai-page .proj-grid, .ai-page .svc-grid { grid-template-columns: 1fr; }
    .ai-page .ai-cta { padding: 72px 20px; }
    .ai-page .cta-btns { flex-direction: column; align-items: center; }
    .ai-page .ai-footer { flex-direction: column; gap: 14px; text-align: center; }
  }
`

const PROJECTS = [
  {
    num: "01", name: "Arcapush", url: "arcapush.com", href: "https://arcapush.com",
    desc: "Startup registry where vibe-coded products get discovered. Mandatory problem statements, Signals grid, hero pinning, and on-chain tier payments via ArcapushBoost.sol on Base Mainnet.",
    tags: ["Startup Registry", "On-Chain Payments", "SEO", "Next.js"],
    powered: "Claude + Base",
    stat: "27 Google indexed pages",
  },
  {
    num: "02", name: "ArcaPrompt", url: "arcaprompt.arcapush.com", href: "https://arcaprompt.arcapush.com",
    desc: "Prompt engineering tool built inside the Arcapush ecosystem. Helps builders craft, test, and optimize AI prompts — the tooling I use in my own workflow.",
    tags: ["Prompt Engineering", "AI Tooling", "Arcapush"],
    powered: "LLM Integration",
    stat: null,
  },
  {
    num: "03", name: "RoastURL", url: "roasturl.xyz", href: "https://roasturl.xyz",
    desc: "Brutal AI feedback tool for startup URLs and landing pages. Submit your URL, get a no-mercy audit — design, copy, clarity, and conversion scored with AI.",
    tags: ["AI Audit", "Landing Page", "Brutal Feedback"],
    powered: "AI-Powered",
    stat: null,
  },
  {
    num: "04", name: "PromptRank", url: "promptrank.arcapush.com", href: "https://promptrank.arcapush.com",
    desc: "Evaluate and rank prompts — Senior, Mid, or Junior. Built to help developers and builders understand their prompt quality before the market tells them.",
    tags: ["Prompt Ranking", "Capability Eval", "AI"],
    powered: "Gemini 2.5",
    stat: null,
  },
  {
    num: "05", name: "VibeCheck", url: "vibe.blindspotlab.xyz", href: "https://vibe.blindspotlab.xyz",
    desc: "Builder intelligence tool — audit your builder prompt and get ranked. Know your level, identify your blindspots, level up your build velocity.",
    tags: ["Builder Audit", "Intelligence", "Blindspot Lab"],
    powered: "Gemini 2.5 Flash",
    stat: null,
  },
  {
    num: "06", name: "FirstTx", url: "firsttx.xyz", href: "https://firsttx.xyz",
    desc: "Celebrate your first on-chain transaction across 11 EVM chains. Binary search via Alchemy, personal story, shareable card, leaderboard. Your origin story on-chain.",
    tags: ["Web3", "11 EVM Chains", "Social", "RainbowKit"],
    powered: "Alchemy API",
    stat: "11 EVM chains",
  },
  {
    num: "07", name: "AngelVow", url: "angelvow.xyz", href: "https://angelvow.xyz",
    desc: "Decentralized wishlist and charity on Base Mainnet. USDC donations, anonymous giving vaults with pseudo-random winner selection. Two smart contracts deployed and verified.",
    tags: ["Base Mainnet", "USDC", "Smart Contracts", "Charity"],
    powered: "Base · Coinbase Wallet",
    stat: "2 contracts deployed",
  },
  {
    num: "08", name: "Dearly", url: "dearly.icu", href: "https://dearly.icu",
    desc: "Gemini-powered personalization engine. Transforms generic greetings into emotional assets through attribute mapping and contextual message crafting.",
    tags: ["Personalization", "Message Gen", "Emotional Intelligence"],
    powered: "Gemini AI",
    stat: null,
  },
  {
    num: "09", name: "Whate", url: "whate.online", href: "https://whate.online",
    desc: "Zero-decision meal intelligence PWA. 10,000+ meals, 9+ global personas — tech entrepreneur, student, gym goer, heritage soul, and more. 2-click logic, no scroll, no thinking.",
    tags: ["PWA", "10k+ Meals", "Persona Logic", "JSON-LD"],
    powered: "Next.js 15",
    stat: "10,000+ meals",
  },
  {
    num: "10", name: "SyncSurge", url: "syncsurge.xyz", href: "https://syncsurge.xyz",
    desc: "Creator management platform for the Surge.xyz ecosystem. Built as a surprise for the team — username-based routing, full dashboard, custom auth.",
    tags: ["Creator Mgmt", "Surge.xyz", "Dashboard"],
    powered: "Next.js · Supabase",
    stat: "Surge partner",
  },
  {
    num: "11", name: "PeerFix", url: "peerfix.dev", href: "https://peerfix.dev",
    desc: "Builders helping builders. Post a technical blocker, get free community help or pay a verified expert to solve it instantly. Peer-to-peer technical support built for the vibe coder era.",
    tags: ["Community", "Expert Network", "Technical Help", "Marketplace"],
    powered: "Next.js · Prisma",
    stat: "builders × experts",
  },
]

const TICKER_ITEMS = [
  'AI Native Developer', 'Vibe Coder', 'Prompt Systems', 'Web3 × AI',
  'Product Intelligence', 'LLM Integration', 'On-Chain Deployments', 'AI-Powered MVPs',
  'Blazing Fast Shipping', 'Solo Founder', 'Blindspot Lab', 'Base Mainnet Builder',
]

const STACK_ITEMS = [
  { label: 'Claude (Anthropic)', hot: true },
  { label: 'Gemini (Google)', hot: true },
  { label: 'OpenAI / ChatGPT', hot: false },
  { label: 'Prompt Engineering', hot: true },
  { label: 'LLM API Integration', hot: true },
  { label: 'Next.js', hot: false },
  { label: 'Supabase', hot: false },
  { label: 'Vercel', hot: false },
  { label: 'Prisma', hot: false },
  { label: 'NextAuth v5', hot: false },
  { label: 'Wagmi / Viem', hot: false },
  { label: 'Base · Solana', hot: false },
  { label: 'TypeScript', hot: false },
  { label: 'Tailwind', hot: false },
  { label: 'Claude Code', hot: true },
  { label: 'AI Workflow Design', hot: true },
]

export default function AI() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.ai-page .reveal')
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.08 }
    )
    reveals.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style>{aiStyles}</style>
      <div className="ai-page">
        <div className="grid-bg" />
        <div className="glow-1" />
        <div className="glow-2" />

        {/* NAV */}
        <nav className="ai-nav">
          <a href="https://mojeeb.xyz" className="nav-logo">mojeeb<span>.xyz/ai</span></a>
          <ul className="nav-links">
            <li><a href="#work">Work</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#stack">Stack</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        {/* HERO */}
        <section className="ai-hero">
          <div className="hero-eyebrow">AI Work & Systems</div>
          <h1 className="ai-headline">
            Not using AI.<br /><span className="grad">Building with it.</span>
          </h1>
          <p className="hero-sub">
            <strong>AI-native solo founder</strong> — 15+ shipped products, each solving a real problem.
            I use Claude, Gemini, and OpenAI to build full systems, design prompt frameworks,
            and deploy at a speed most teams can't match. <strong>No co-founder. No dev team.</strong>
          </p>
          <div className="hero-cta">
            <a href="#work" className="btn-p">See All 14 Products →</a>
            <a href="#contact" className="btn-g">Work Together</a>
          </div>
        </section>

        {/* TICKER */}
        <div className="ticker">
          <div className="ticker-track">
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((label, i) => (
              <span key={i} className="ticker-item">
                <span className="ticker-dot" />
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* ABOUT */}
        <section className="ai-section" id="about" style={{ borderBottom: '0.5px solid rgba(255,255,255,0.06)' }}>
          <div className="s-label">Who I Am</div>
          <div className="about-grid">
            <div>
              <h2 className="s-title reveal">Not just using AI.<br />Building systems with it.</h2>
              <div className="about-body reveal" style={{ marginTop: 24 }}>
                <p>
                  I'm Mojeeb — AI-native developer, Web3 strategist, and solo founder.
                  I've shipped <strong>14+ products</strong>, each built to solve a real usecase — not noise.
                  Every product in my portfolio has a clear problem statement and a live URL.
                </p>
                <p>
                  I use <strong>Claude, Gemini, and OpenAI</strong> not as chat tools but as
                  architectural layers — integrated directly into products, prompt workflows,
                  and decision systems. I also built ArcaPrompt as the prompt engineering tooling
                  I actually use in my own stack.
                </p>
                <p>
                  My edge is the intersection of <strong>AI × Web3 × product velocity</strong> —
                  a combination most developers and strategists operate in separately.
                </p>
              </div>
            </div>
            <div className="stat-grid reveal">
              <div className="stat-row">
                <span className="stat-n">15+</span>
                <span className="stat-l">Shipped products — each with a real usecase</span>
              </div>
              <div className="stat-row">
                <span className="stat-n">3</span>
                <span className="stat-l">LLMs in active production (Claude · Gemini · OpenAI)</span>
              </div>
              <div className="stat-row">
                <span className="stat-n">4+</span>
                <span className="stat-l">Chains deployed on (Base, Solana, Ethereum, Polygon)</span>
              </div>
              <div className="stat-row">
                <span className="stat-n">Solo</span>
                <span className="stat-l">No co-founder. No dev team. Ships anyway.</span>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="ai-section" id="work" style={{ borderBottom: '0.5px solid rgba(255,255,255,0.06)' }}>
          <div className="s-label">AI Projects</div>
          <h2 className="s-title reveal">14+ Products. All Real Usecases.</h2>
          <p className="reveal" style={{ color: 'var(--dim)', fontSize: 13, maxWidth: 520, marginTop: 12, marginBottom: 36 }}>
            Every product here solves a specific problem. No fluff, no experiments that go nowhere.
          </p>
          <div className="proj-grid reveal">
            {PROJECTS.map(p => (
              <div key={p.num} className="proj-card">
                <div className="proj-num">{p.num}</div>
                <div className="proj-name">{p.name}</div>
                <a href={p.href} className="proj-url" target="_blank" rel="noreferrer">{p.url} ↗</a>
                {p.stat && <div className="proj-stat">→ {p.stat}</div>}
                <p className="proj-desc">{p.desc}</p>
                <div className="proj-tags">
                  {p.tags.map(t => <span key={t} className="ptag">{t}</span>)}
                  <span className="ptag hot">{p.powered}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section className="ai-section" id="services" style={{ borderBottom: '0.5px solid rgba(255,255,255,0.06)' }}>
          <div className="s-label">What I Offer</div>
          <h2 className="s-title reveal">Where I Can Help</h2>
          <br />
          <div className="svc-grid reveal">
            {[
              { icon: "⚡", name: "AI-Native Product Builds", desc: "Ship AI-powered products fast. Idea → live URL without a traditional dev team. I build with Claude, Gemini, and OpenAI as core infrastructure, not add-ons." },
              { icon: "🧠", name: "Prompt System Design", desc: "Design, evaluate, and optimize prompt frameworks for AI products. Build systems that are consistent, reliable, and calibrated to your output goals." },
              { icon: "🌐", name: "Web3 × AI Strategy", desc: "Help Web3 projects and DAOs integrate AI into their products and ops. I operate at the intersection most strategists can't bridge." },
              { icon: "🔍", name: "AI Research & Auditing", desc: "Build AI-assisted research workflows, product audits, and intelligence tools. I've shipped VibeCheck, RoastURL, and PromptRank — I know what good looks like." },
              { icon: "🚀", name: "Growth Architecture", desc: "Design community growth systems, GTM strategies, and activation loops. Proven case studies: 3 → 9,000+ followers in 3.5 days, 5% → 95% engagement in 14 days." },
              { icon: "🛠", name: "LLM Integration", desc: "Integrate LLMs into existing products or workflows. API setup, prompt tuning, rate limiting, caching strategy — I've done this across multiple production apps." },
            ].map(s => (
              <div key={s.name} className="svc-card">
                <div className="svc-icon">{s.icon}</div>
                <div className="svc-name">{s.name}</div>
                <p className="svc-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* STACK */}
        <section className="ai-section" id="stack" style={{ borderBottom: '0.5px solid rgba(255,255,255,0.06)' }}>
          <div className="s-label">Tools & Stack</div>
          <h2 className="s-title reveal">What I Build With</h2>
          <div className="stack-wrap reveal">
            {STACK_ITEMS.map(t => (
              <div key={t.label} className="stack-pill">
                <span className="pd" style={{ background: t.hot ? '#4e24cf' : 'rgba(78,36,207,0.5)' }} />
                {t.label}
                {t.hot && <span style={{ fontSize: 8, color: '#4e24cf', letterSpacing: '0.1em', textTransform: 'uppercase', marginLeft: 4 }}>core</span>}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="ai-cta" id="contact">
          <span className="cta-eye">Let's Build</span>
          <h2 className="cta-h reveal">Got something<br />real to build?</h2>
          <p className="cta-sub reveal">Open to consulting, advisory, and select builds where AI is at the core. Real usecases only.</p>
          <div className="cta-btns reveal">
            <a href="mailto:mojeeb.eth@gmail.com" className="btn-p">Get in Touch →</a>
            <a href="https://x.com/mojeebeth" target="_blank" rel="noreferrer" className="btn-g">@mojeebeth on X</a>
            <a href="https://mojeeb.xyz" className="btn-g">Main Portfolio</a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="ai-footer">
          <span className="footer-l">© 2026 Mojeeb — mojeeb.xyz/ai</span>
          <div className="footer-links">
            <a href="https://x.com/mojeebeth" target="_blank" rel="noreferrer">X</a>
            <a href="https://linkedin.com/in/mojeebeth" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://blindspotlab.xyz" target="_blank" rel="noreferrer">BlindspotLab</a>
            <a href="https://arcapush.com" target="_blank" rel="noreferrer">Arcapush</a>
          </div>
        </footer>
      </div>
    </>
  )
}
