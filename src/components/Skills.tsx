import { Brain, Code2, Cpu, Globe, Network, Zap, Shield, GitBranch, Layers, Terminal, Wallet, Bot } from "lucide-react";

// ── Anthropic-certified skills — earned, not claimed ─────────────────
const CERTIFIED = [
  { name: "Claude API Integration",       cert: "Building with the Claude API",        level: "Advanced" },
  { name: "Model Context Protocol (MCP)", cert: "Intro to MCP + MCP Advanced Topics",  level: "Advanced" },
  { name: "Claude Code",                  cert: "Claude 101 + Claude Code 101 + Claude Code in Action", level: "Advanced" },
  { name: "AI Agent Design",              cert: "Introduction to Agent Skills",         level: "Intermediate" },
  { name: "Subagent Architecture",        cert: "Introduction to Subagents",            level: "Intermediate" },
  { name: "AI Fluency & Frameworks",      cert: "AI Fluency: Framework & Foundations", level: "Advanced" },
  { name: "AI Capabilities & Limits",     cert: "AI Capabilities and Limitations",     level: "Advanced" },
  { name: "Claude Cowork",                cert: "Introduction to Claude Cowork",        level: "Intermediate" },
];

// ── Skill categories ──────────────────────────────────────────────────
const CATEGORIES = [
  {
    label: "AI & LLM",
    icon: <Bot size={16} />,
    color: "#4e24cf",
    skills: [
      { name: "Prompt Engineering",      proof: "ArcaPrompt, PromptRank, VibeCheck" },
      { name: "Claude API",              proof: "Certified · Anthropic Academy" },
      { name: "Gemini API",              proof: "VibeCheck, Dearly, BlindspotLab" },
      { name: "OpenAI API",              proof: "Production integrations" },
      { name: "LLM Workflow Design",     proof: "15+ AI-native products" },
      { name: "MCP (Advanced)",          proof: "Certified · Anthropic Academy" },
      { name: "AI Agent Systems",        proof: "Certified · Anthropic Academy" },
      { name: "Subagent Architecture",   proof: "Certified · Anthropic Academy" },
      { name: "Claude Code",             proof: "Certified · daily workflow" },
    ],
  },
  {
    label: "Full-Stack Dev",
    icon: <Code2 size={16} />,
    color: "#0ea5e9",
    skills: [
      { name: "Next.js 15 App Router",   proof: "All 15+ products" },
      { name: "TypeScript",              proof: "Every codebase, strict mode" },
      { name: "Tailwind CSS",            proof: "All products" },
      { name: "Prisma 7",                proof: "PeerFix, AngelVow, Arcapush" },
      { name: "Supabase",                proof: "PeerFix, SyncSurge, FirstTx" },
      { name: "NextAuth v5",             proof: "PeerFix, AngelVow, Arcapush" },
      { name: "React / Hooks",           proof: "All products" },
      { name: "REST & API Design",       proof: "Whate, Arcapush, PeerFix" },
      { name: "PWA Development",         proof: "Whate (10k+ meals)" },
    ],
  },
  {
    label: "Web3 & On-Chain",
    icon: <Wallet size={16} />,
    color: "#f59e0b",
    skills: [
      { name: "Solidity Smart Contracts", proof: "AngelVow, PeerFixEscrow, ArcapushBoost" },
      { name: "Wagmi / Viem",             proof: "AngelVow, FirstTx, Arcapush" },
      { name: "Base Mainnet",             proof: "3 contracts deployed & verified" },
      { name: "Coinbase Smart Wallet",    proof: "AngelVow production" },
      { name: "RainbowKit",               proof: "FirstTx — 11 EVM chains" },
      { name: "Alchemy API",              proof: "FirstTx binary search" },
      { name: "USDC Payments (on-chain)", proof: "AngelVow, PeerFixEscrow" },
      { name: "Web3 Strategy",            proof: "DAOs, ecosystems, GTM" },
    ],
  },
  {
    label: "DevOps & Tooling",
    icon: <Terminal size={16} />,
    color: "#22c55e",
    skills: [
      { name: "Vercel Deployment",        proof: "All 15+ products live" },
      { name: "Git / GitHub",             proof: "mojeebdev — building in public" },
      { name: "Claude Code CLI",          proof: "Daily workflow — certified" },
      { name: "Vercel Edge Functions",    proof: "Arcapush, PeerFix" },
      { name: "Upstash Redis",            proof: "PromptRank rate limiting" },
      { name: "Supabase Edge Functions",  proof: "Contact + auth flows" },
      { name: "@vercel/og",              proof: "FirstTx card generation" },
      { name: "SEO / JSON-LD",            proof: "Arcapush: 27 indexed pages" },
    ],
  },
  {
    label: "Product & Growth",
    icon: <Zap size={16} />,
    color: "#ec4899",
    skills: [
      { name: "Solo Product Development", proof: "15+ shipped, 0 co-founders" },
      { name: "Build-in-Public",          proof: "X · YouTube Surge KOL" },
      { name: "Growth Architecture",      proof: "3→9k followers in 3.5 days" },
      { name: "Community Design",         proof: "5%→95% engagement in 14 days" },
      { name: "GTM Strategy",             proof: "Xunfollow: 1,948 launch views" },
      { name: "Content Systems",          proof: "Surge creator · @mojeebeth" },
      { name: "Persona-Based UX",         proof: "Whate: 9+ global personas" },
    ],
  },
  {
    label: "Strategy & Web3",
    icon: <Globe size={16} />,
    color: "#a78bfa",
    skills: [
      { name: "Web3 Ecosystem Strategy",  proof: "ETH, Base, Solana, Polygon" },
      { name: "DAO Operations",           proof: "GX DAO, multiple ecosystems" },
      { name: "Incentive Design",         proof: "Blindspot Lab framework" },
      { name: "Tokenomics Review",        proof: "Web3 audit work" },
      { name: "AI × Web3 Integration",   proof: "Only lane most can't bridge" },
      { name: "Startup Positioning",      proof: "Arcapush registry" },
    ],
  },
];

const LEVEL_COLOR: Record<string, string> = {
  Advanced:     "text-[#4e24cf] bg-[#4e24cf]/10 border-[#4e24cf]/30",
  Intermediate: "text-[#a78bfa] bg-[#a78bfa]/10 border-[#a78bfa]/25",
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-[#030303]">
      <div className="container mx-auto max-w-6xl">

        {/* Header */}
        <div className="flex items-end justify-between mb-10 pb-6 border-b border-white/[0.06]">
          <div>
            <span className="text-[#4e24cf] text-[10px] font-black uppercase tracking-[0.4em] mb-3 block">
              Intelligence Layer
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-[-0.04em] uppercase leading-none">
              Skills & <span className="text-white/20 italic">Capabilities.</span>
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2 text-[9px] text-white/20 font-mono uppercase tracking-widest">
            <Shield size={10} className="text-[#4e24cf]" />
            Earned. Not claimed.
          </div>
        </div>

        {/* Certified block — Anthropic Academy */}
        <div className="bg-[#080808] border border-[#4e24cf]/25 rounded-[1.75rem] p-8 mb-4 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-[#4e24cf] via-[#7c4dff] to-transparent rounded-t-[1.75rem]" />

          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-[9px] font-black text-[#4e24cf] uppercase tracking-[0.4em] mb-1">Anthropic Certified</p>
              <h3 className="text-xl font-black text-white uppercase tracking-tight">Claude & AI Systems Skills</h3>
            </div>
            <div className="hidden md:flex items-center gap-2 text-[9px] text-white/20 font-mono uppercase">
              <Layers size={10} /> 11 certs · Apr 2026
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {CERTIFIED.map((c, i) => (
              <div key={i} className="bg-white/[0.03] border border-white/[0.06] hover:border-[#4e24cf]/30 rounded-xl p-4 transition-all group">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <p className="text-[11px] font-black text-white uppercase tracking-tight leading-tight">{c.name}</p>
                  <span className={`shrink-0 text-[7px] font-black border px-2 py-0.5 rounded-full uppercase tracking-widest ${LEVEL_COLOR[c.level]}`}>
                    {c.level}
                  </span>
                </div>
                <p className="text-[9px] text-white/25 leading-relaxed font-mono">{c.cert}</p>
              </div>
            ))}
          </div>
        </div>

        {/* All skill categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {CATEGORIES.map((cat, ci) => (
            <div key={ci} className="bg-[#080808] border border-white/[0.06] hover:border-white/[0.12] rounded-[1.75rem] p-7 transition-all group">

              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: `${cat.color}18`, border: `0.5px solid ${cat.color}40`, color: cat.color }}
                >
                  {cat.icon}
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.25em]" style={{ color: cat.color }}>
                  {cat.label}
                </span>
              </div>

              {/* Skills list */}
              <div className="flex flex-col gap-2.5">
                {cat.skills.map((s, si) => (
                  <div key={si} className="flex items-start justify-between gap-3 pb-2.5 border-b border-white/[0.04] last:border-none last:pb-0">
                    <span className="text-[11px] font-black text-white uppercase tracking-tight leading-tight">{s.name}</span>
                    <span className="text-[9px] text-white/20 font-mono text-right leading-snug shrink-0 max-w-[120px]">{s.proof}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom proof bar */}
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { num: "15+", label: "Products proving the stack" },
            { num: "11",  label: "Anthropic certifications" },
            { num: "3",   label: "Smart contracts live on Base" },
            { num: "3",   label: "LLMs in active production" },
          ].map((s, i) => (
            <div key={i} className="bg-[#080808] border border-white/[0.06] rounded-[1.5rem] p-5 text-center">
              <div className="text-2xl font-black text-white mb-1" style={{ fontFamily: "'Syne', sans-serif" }}>{s.num}</div>
              <div className="text-[9px] text-white/25 uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
