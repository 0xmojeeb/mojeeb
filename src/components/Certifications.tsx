import { ExternalLink, Award, ShieldCheck } from "lucide-react";

const CERTS = [
  { name: "MCP: Advanced Topics",         date: "Apr 17, 2026", url: "https://verify.skilljar.com/c/ykxqffqedeku",  hot: true },
  { name: "Introduction to MCP",           date: "Apr 17, 2026", url: "https://verify.skilljar.com/c/3gks8s488u94",  hot: true },
  { name: "Introduction to Agent Skills",  date: "Apr 17, 2026", url: "https://verify.skilljar.com/c/ertfda5n9c5q",  hot: true },
  { name: "Introduction to Subagents",     date: "Apr 17, 2026", url: "https://verify.skilljar.com/c/jm9cyk2wzbov",  hot: true },
  { name: "AI Capabilities & Limitations", date: "Apr 17, 2026", url: "https://verify.skilljar.com/c/srcpwo9j8wqw",  hot: false },
  { name: "Building with the Claude API",  date: "Apr 17, 2026", url: "https://verify.skilljar.com/c/a8w8mb5daeq8",  hot: false },
  { name: "AI Fluency: Framework & Foundations", date: "Apr 15, 2026", url: "https://verify.skilljar.com/c/hhsgtv8stwzy", hot: false },
  { name: "Introduction to Claude Cowork", date: "Apr 13, 2026", url: "https://verify.skilljar.com/c/8miyxz95p4hj",  hot: false },
  { name: "Claude Code in Action",         date: "Apr 13, 2026", url: "https://verify.skilljar.com/c/brm3qw44eyk4",  hot: false },
  { name: "Claude Code 101",               date: "Apr 13, 2026", url: "https://verify.skilljar.com/c/wensq6sctwjz",  hot: false },
  { name: "Claude 101",                    date: "Apr 13, 2026", url: "https://verify.skilljar.com/c/k3hn2g58cway",  hot: false },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-6 bg-[#030303]">
      <div className="container mx-auto max-w-6xl">

        {/* Header */}
        <div className="flex items-end justify-between mb-10 pb-6 border-b border-white/[0.06]">
          <div>
            <span className="text-[#4e24cf] text-[10px] font-black uppercase tracking-[0.4em] mb-3 block">
              Verified · Anthropic Academy
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-[-0.04em] uppercase leading-none">
              Certifications<span className="text-[#4e24cf]">.</span>
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <ShieldCheck size={13} className="text-[#4e24cf]" />
            <span className="text-[9px] text-white/20 font-mono uppercase tracking-widest">{CERTS.length} certificates · April 2026</span>
          </div>
        </div>

        {/* Issuer badge */}
        <div className="flex items-center gap-4 mb-8 bg-[#4e24cf]/8 border border-[#4e24cf]/20 rounded-2xl px-6 py-4">
          <div className="w-8 h-8 bg-[#4e24cf]/15 rounded-lg flex items-center justify-center">
            <Award size={16} className="text-[#4e24cf]" />
          </div>
          <div>
            <p className="text-[9px] font-black text-[#4e24cf] uppercase tracking-[0.3em]">Issued By</p>
            <p className="text-sm font-black text-white uppercase tracking-tight">Anthropic Education — Anthropic Academy</p>
          </div>
          <a
            href="https://anthropic.skilljar.com"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto text-[9px] text-white/25 font-mono uppercase tracking-widest hover:text-[#4e24cf] transition-colors flex items-center gap-1"
          >
            anthropic.skilljar.com <ExternalLink size={9} />
          </a>
        </div>

        {/* Cert grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {CERTS.map((c, i) => (
            <a
              key={i}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-[#080808] border border-white/[0.06] hover:border-[#4e24cf]/40 rounded-[1.5rem] p-6 transition-all flex flex-col gap-3"
            >
              {c.hot && (
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-[#4e24cf]/15 border border-[#4e24cf]/30 px-2 py-0.5 rounded-full">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#4e24cf] animate-pulse" />
                  <span className="text-[8px] font-black text-[#4e24cf] uppercase tracking-widest">New</span>
                </div>
              )}

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#4e24cf]/10 border border-[#4e24cf]/20 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-[#4e24cf]/20 transition-colors">
                  <ShieldCheck size={14} className="text-[#4e24cf]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[9px] font-black text-[#4e24cf] uppercase tracking-[0.25em] mb-1">Anthropic Education</p>
                  <h3 className="text-sm font-black text-white uppercase tracking-tight leading-tight pr-8">{c.name}</h3>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-white/[0.05]">
                <span className="text-[9px] text-white/25 font-mono">{c.date}</span>
                <span className="flex items-center gap-1 text-[9px] text-[#4e24cf] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  Verify <ExternalLink size={9} />
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
