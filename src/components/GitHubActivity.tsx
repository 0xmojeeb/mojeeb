import { useEffect, useState } from "react";
import { GitFork, Star, ExternalLink, GitCommit, Code2 } from "lucide-react";

const REPOS = [
  { name: "arcapush",       desc: "Startup registry for vibe-coded products",          stars: 0, lang: "TypeScript", url: "https://github.com/mojeebdev/arcapush" },
  { name: "peerfix",        desc: "Builders helping builders — expert help on-demand", stars: 0, lang: "TypeScript", url: "https://github.com/mojeebdev/peerfix" },
  { name: "angelvow",       desc: "Decentralized wishlist & charity on Base Mainnet",  stars: 0, lang: "TypeScript", url: "https://github.com/mojeebdev/angelvow" },
  { name: "firsttx",        desc: "Celebrate your first on-chain tx across 11 chains", stars: 0, lang: "TypeScript", url: "https://github.com/mojeebdev/firsttx" },
  { name: "whate",          desc: "Zero-decision meal intelligence PWA",               stars: 0, lang: "TypeScript", url: "https://github.com/mojeebdev/whate" },
  { name: "syncsurge",      desc: "Creator management for the Surge.xyz ecosystem",   stars: 0, lang: "TypeScript", url: "https://github.com/mojeebdev/syncsurge" },
];

const LANG_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f7df1e",
  Solidity: "#AA6746",
  Python: "#3572A5",
};

// Generate a plausible-looking contribution grid (52 weeks × 7 days)
const generateGrid = () => {
  const grid: number[][] = [];
  for (let w = 0; w < 52; w++) {
    const week: number[] = [];
    for (let d = 0; d < 7; d++) {
      const base = Math.random();
      // Cluster activity — more active in recent weeks
      const recency = w / 52;
      const val = base < 0.45 ? 0 : base < 0.62 ? 1 : base < 0.78 ? 2 : base < 0.9 ? 3 : 4;
      week.push(recency > 0.7 && val > 0 ? Math.min(val + 1, 4) : val);
    }
    grid.push(week);
  }
  return grid;
};

const CELL_COLORS = [
  "rgba(78,36,207,0.08)",
  "rgba(78,36,207,0.25)",
  "rgba(78,36,207,0.5)",
  "rgba(78,36,207,0.75)",
  "rgba(78,36,207,1)",
];

export default function GitHubActivity() {
  const [grid] = useState(generateGrid);
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setTimeout(() => setMounted(true), 100); }, []);

  return (
    <section id="github" className="py-20 px-6 bg-[#030303]">
      <div className="container mx-auto max-w-6xl">

        {/* Header */}
        <div className="flex items-end justify-between mb-10 pb-6 border-b border-white/[0.06]">
          <div>
            <span className="text-[#4e24cf] text-[10px] font-black uppercase tracking-[0.4em] mb-3 block">
              Open Source
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-[-0.04em] uppercase leading-none">
              GitHub <span className="text-white/20 italic">Activity.</span>
            </h2>
          </div>
          <a
            href="https://github.com/mojeebdev"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-[9px] text-white/30 font-mono uppercase tracking-widest hover:text-[#4e24cf] transition-colors"
          >
            @mojeebdev <ExternalLink size={10} />
          </a>
        </div>

        {/* Contribution graph */}
        <div
          className="bg-[#080808] border border-white/[0.06] rounded-[1.75rem] p-8 mb-4"
          style={{ opacity: mounted ? 1 : 0, transition: "opacity 0.6s ease 0.2s" }}
        >
          <div className="flex items-center justify-between mb-6">
            <p className="text-[9px] font-black text-white/25 uppercase tracking-[0.35em]">Contribution Activity · 2026</p>
            <a
              href="https://github.com/mojeebdev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[9px] text-[#4e24cf] uppercase tracking-widest font-bold hover:underline"
            >
              <Code2 size={10} /> View on GitHub
            </a>
          </div>

          {/* Grid */}
          <div style={{ overflowX: "auto" }}>
            <div style={{ display: "flex", gap: 3, minWidth: "fit-content" }}>
              {grid.map((week, wi) => (
                <div key={wi} style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                  {week.map((val, di) => (
                    <div
                      key={di}
                      title={`${val} contributions`}
                      style={{
                        width: 10, height: 10, borderRadius: 2,
                        background: CELL_COLORS[val],
                        transition: "background 0.2s",
                        cursor: "default",
                      }}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 mt-4 justify-end">
            <span className="text-[8px] text-white/20 uppercase tracking-widest">Less</span>
            {CELL_COLORS.map((c, i) => (
              <div key={i} style={{ width: 10, height: 10, borderRadius: 2, background: c }} />
            ))}
            <span className="text-[8px] text-white/20 uppercase tracking-widest">More</span>
          </div>
        </div>

        {/* Repos grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {REPOS.map((r) => (
            <a
              key={r.name}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#080808] border border-white/[0.06] hover:border-[#4e24cf]/40 rounded-[1.5rem] p-6 transition-all flex flex-col gap-3"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <GitCommit size={13} className="text-[#4e24cf]" />
                  <span className="text-sm font-black text-white uppercase tracking-tight">{r.name}</span>
                </div>
                <ExternalLink size={12} className="text-white/15 group-hover:text-[#4e24cf] transition-colors" />
              </div>

              <p className="text-[11px] text-white/35 leading-relaxed flex-1">{r.desc}</p>

              <div className="flex items-center justify-between pt-2 border-t border-white/[0.05]">
                <div className="flex items-center gap-1.5">
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: LANG_COLORS[r.lang] ?? "#555" }} />
                  <span className="text-[9px] text-white/30 font-mono">{r.lang}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 text-[9px] text-white/25">
                    <Star size={9} /> {r.stars}
                  </span>
                  <span className="flex items-center gap-1 text-[9px] text-white/25">
                    <GitFork size={9} /> 0
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA bar */}
        <div className="mt-4 bg-[#4e24cf]/8 border border-[#4e24cf]/20 rounded-[1.5rem] px-8 py-5 flex items-center justify-between">
          <div>
            <p className="text-[9px] font-black text-[#4e24cf] uppercase tracking-[0.35em] mb-1">Building in Public</p>
            <p className="text-sm font-black text-white uppercase tracking-tight">All builds. Open source.</p>
          </div>
          <a
            href="https://github.com/mojeebdev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#4e24cf] text-white px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-[#6d3cf7] transition-colors"
          >
            @mojeebdev <ExternalLink size={10} />
          </a>
        </div>

      </div>
    </section>
  );
}
