import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, MapPin, ExternalLink } from "lucide-react";

const PRODUCTS = [
  { name: "arcapush.com",              tag: "startup registry",    stat: "27 indexed",    live: true },
  { name: "whate.online",              tag: "meal intelligence",    stat: "10k+ meals",    live: true },
  { name: "angelvow.xyz",              tag: "web3 charity",         stat: "base mainnet",  live: true },
  { name: "firsttx.xyz",              tag: "on-chain story",       stat: "11 chains",     live: true },
  { name: "syncsurge.xyz",            tag: "creator mgmt",         stat: "surge partner", live: true },
  { name: "roasturl.xyz",             tag: "url roaster",          stat: "ai brutal",     live: true },
  { name: "arcaprompt.arcapush.com",  tag: "prompt engineering",   stat: "ai tools",      live: true },
  { name: "promptrank.arcapush.com",  tag: "prompt ranker",        stat: "gemini 2.5",    live: true },
  { name: "dearly.icu",               tag: "personalization",      stat: "gemini ai",     live: true },
  { name: "xunfollow.xyz",            tag: "x tool",               stat: "1,948 launch",  live: true },
  { name: "blindspotlab.xyz",         tag: "ai auditor",           stat: "gemini 2.5",    live: true },
  { name: "peerfix.dev",              tag: "builder help network",  stat: "experts on-demand", live: true },
];

const STACK = [
  "Next.js","Supabase","Prisma","NextAuth v5","Wagmi/Viem","Vercel",
  "TypeScript","Tailwind","Claude Code","Base · Solana",
  "Claude API","Gemini API","OpenAI","Prompt Engineering","LLM Integration",
];

const ROLES = ["AI Native Developer", "Web3 Strategist", "Vibe Coder"];

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [roleIdx, setRoleIdx] = useState(0);
  const [roleVis, setRoleVis] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { const t = setTimeout(() => setMounted(true), 80); return () => clearTimeout(t); }, []);

  useEffect(() => {
    const iv = setInterval(() => {
      setRoleVis(false);
      setTimeout(() => { setRoleIdx(i => (i + 1) % ROLES.length); setRoleVis(true); }, 350);
    }, 2800);
    return () => clearInterval(iv);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let raf: number;

    const resize = () => {
      canvas.width = canvas.offsetWidth * devicePixelRatio;
      canvas.height = canvas.offsetHeight * devicePixelRatio;
      ctx.scale(devicePixelRatio, devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    const COLS = 14, ROWS = 8;
    type N = { x: number; y: number; ox: number; oy: number; active: boolean; t: number };
    let nodes: N[] = [];

    const build = () => {
      nodes = [];
      const W = canvas.offsetWidth, H = canvas.offsetHeight;
      for (let r = 0; r < ROWS; r++) for (let c = 0; c < COLS; c++) {
        const x = (c / (COLS - 1)) * W, y = (r / (ROWS - 1)) * H;
        nodes.push({ x, y, ox: x, oy: y, active: Math.random() > 0.68, t: Math.random() * Math.PI * 2 });
      }
    };
    build();
    window.addEventListener("resize", build);

    let tick = 0;
    const draw = () => {
      const W = canvas.offsetWidth, H = canvas.offsetHeight;
      ctx.clearRect(0, 0, W, H);
      tick++;
      nodes.forEach(n => { n.t += 0.007; n.x = n.ox + Math.sin(n.t) * 7; n.y = n.oy + Math.cos(n.t * 0.8) * 4; });

      for (let i = 0; i < nodes.length; i++) for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d > 130) continue;
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = `rgba(78,36,207,${(1 - d / 130) * 0.13})`; ctx.lineWidth = 0.5; ctx.stroke();
      }

      nodes.forEach(n => {
        const p = n.active ? (Math.sin(tick * 0.04 + n.t) * 0.5 + 0.5) : 0;
        ctx.beginPath(); ctx.arc(n.x, n.y, n.active ? 2 + p * 1.8 : 1.4, 0, Math.PI * 2);
        ctx.fillStyle = n.active ? `rgba(78,36,207,${0.35 + p * 0.55})` : "rgba(78,36,207,0.1)"; ctx.fill();
      });

      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); window.removeEventListener("resize", build); };
  }, []);

  const ease = (delay: number) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? "translateY(0)" : "translateY(18px)",
    transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
  });

  return (
    <section id="hero" style={{ fontFamily:"'DM Mono',monospace", background:"#050507", minHeight:"100vh", position:"relative", overflow:"hidden", display:"flex", flexDirection:"column" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Mono:wght@400;500&display=swap');
        @keyframes mp { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        @keyframes ms { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        .mrq-p { animation: mp 36s linear infinite; }
        .mrq-s { animation: ms 28s linear infinite reverse; }
        #hero a { cursor:pointer; }
        .social-link {
          display:inline-flex; align-items:center; gap:5px;
          font-size:10px; color:rgba(255,255,255,0.35); letter-spacing:0.15em;
          text-decoration:none; text-transform:uppercase;
          border:0.5px solid rgba(255,255,255,0.12); border-radius:99px;
          padding:6px 14px; transition:all 0.2s;
        }
        .social-link:hover {
          color:#fff; border-color:rgba(78,36,207,0.6);
          background:rgba(78,36,207,0.1);
        }
      `}</style>

      {/* Canvas */}
      <canvas ref={canvasRef} style={{ position:"absolute", inset:0, width:"100%", height:"100%", pointerEvents:"none", zIndex:0 }} />
      {/* Vignette */}
      <div style={{ position:"absolute", inset:0, zIndex:1, pointerEvents:"none", background:"radial-gradient(ellipse 75% 65% at 50% 50%, transparent 0%, #050507 72%)" }} />
      {/* Glow */}
      <div style={{ position:"absolute", top:"-140px", left:"-100px", width:"550px", height:"550px", background:"radial-gradient(circle, rgba(78,36,207,0.1) 0%, transparent 70%)", zIndex:1, pointerEvents:"none" }} />

      {/* Nav */}
      <nav style={{ position:"relative", zIndex:10, display:"flex", alignItems:"center", justifyContent:"space-between", padding:"28px 40px 0", ...ease(0) }}>
        <div style={{ display:"flex", alignItems:"center", gap:8 }}>
          <div style={{ width:7, height:7, borderRadius:"50%", background:"#22c55e", boxShadow:"0 0 8px #22c55e" }} />
          <span style={{ fontSize:10, color:"rgba(255,255,255,0.3)", letterSpacing:"0.25em", textTransform:"uppercase" }}>available · mojeeb.xyz</span>
        </div>
        <div style={{ display:"flex", alignItems:"center", gap:6, fontSize:10, color:"rgba(255,255,255,0.2)", letterSpacing:"0.2em", textTransform:"uppercase" }}>
          <MapPin size={10} /> Nigeria / Global
        </div>
      </nav>

      {/* Main grid — name left, photo right */}
      <div style={{ position:"relative", zIndex:10, flex:1, display:"grid", gridTemplateColumns:"1fr auto", gap:40, alignItems:"center", padding:"40px 40px 0", maxWidth:1200, margin:"0 auto", width:"100%" }}>

        {/* LEFT — identity */}
        <div>
          {/* Role pill */}
          <div style={{ marginBottom:22, ...ease(0.1) }}>
            <span style={{ fontSize:9, letterSpacing:"0.35em", textTransform:"uppercase", color:"#4e24cf", fontWeight:700, border:"0.5px solid rgba(78,36,207,0.4)", borderRadius:99, padding:"4px 14px", transition:"opacity 0.35s ease", opacity:roleVis?1:0 }}>
              // {ROLES[roleIdx]}
            </span>
          </div>

          {/* Name */}
          <h1 style={{ fontSize:"clamp(54px,8vw,100px)", fontFamily:"'Syne',sans-serif", fontWeight:800, lineHeight:0.88, letterSpacing:"-0.04em", color:"#fff", textTransform:"uppercase", margin:"0 0 26px", ...ease(0.15) }}>
            Mojeeb<br /><span style={{ color:"rgba(255,255,255,0.15)" }}>Titilayo</span><span style={{ color:"#4e24cf" }}>.</span>
          </h1>

          {/* Statement */}
          <p style={{ fontSize:14, lineHeight:1.75, color:"rgba(255,255,255,0.4)", maxWidth:500, marginBottom:36, fontFamily:"'DM Mono',monospace", ...ease(0.2) }}>
            I don't use AI to paste prompts.{" "}
            <span style={{ color:"rgba(255,255,255,0.85)" }}>I build systems with it.</span>{" "}
            15+ shipped products, each solving a real problem. Solo. Fast. Founder of{" "}
            <a href="https://blindspotlab.xyz" target="_blank" rel="noopener noreferrer" style={{ color:"#4e24cf", textDecoration:"none", borderBottom:"0.5px solid rgba(78,36,207,0.45)" }}>Blindspot Lab</a>.
          </p>

          {/* CTAs */}
          <div style={{ display:"flex", flexWrap:"wrap", gap:10, alignItems:"center", marginBottom:44, ...ease(0.25) }}>
            <a href="#contact"
              style={{ display:"inline-flex", alignItems:"center", gap:8, background:"#4e24cf", color:"#fff", padding:"11px 26px", borderRadius:99, fontSize:10, fontWeight:700, letterSpacing:"0.2em", textTransform:"uppercase", textDecoration:"none", boxShadow:"0 0 40px rgba(78,36,207,0.35)", transition:"all 0.2s" }}
              onMouseEnter={e=>{ const el=e.currentTarget as HTMLElement; el.style.transform="scale(1.04)"; el.style.boxShadow="0 0 60px rgba(78,36,207,0.55)"; }}
              onMouseLeave={e=>{ const el=e.currentTarget as HTMLElement; el.style.transform="scale(1)"; el.style.boxShadow="0 0 40px rgba(78,36,207,0.35)"; }}>
              Hire Me <ArrowUpRight size={12} />
            </a>
            <a href="#work"
              style={{ display:"inline-flex", alignItems:"center", gap:8, background:"transparent", color:"rgba(255,255,255,0.5)", padding:"11px 26px", borderRadius:99, border:"0.5px solid rgba(255,255,255,0.1)", fontSize:10, fontWeight:700, letterSpacing:"0.2em", textTransform:"uppercase", textDecoration:"none", transition:"all 0.2s" }}
              onMouseEnter={e=>{ const el=e.currentTarget as HTMLElement; el.style.color="#fff"; el.style.borderColor="rgba(78,36,207,0.5)"; }}
              onMouseLeave={e=>{ const el=e.currentTarget as HTMLElement; el.style.color="rgba(255,255,255,0.5)"; el.style.borderColor="rgba(255,255,255,0.1)"; }}>
              See the Work
            </a>
            {/* Social links — clearly clickable */}
            <a href="https://x.com/mojeebeth" target="_blank" rel="noopener noreferrer" className="social-link">
              <ExternalLink size={9} /> X
            </a>
            <a href="https://linkedin.com/in/mojeebeth" target="_blank" rel="noopener noreferrer" className="social-link">
              <ExternalLink size={9} /> LinkedIn
            </a>
          </div>

          {/* Stats */}
          <div style={{ display:"flex", width:"fit-content", borderTop:"0.5px solid rgba(255,255,255,0.07)", borderBottom:"0.5px solid rgba(255,255,255,0.07)", marginBottom:44, ...ease(0.3) }}>
            {[{ num:"15+", label:"shipped products" },{ num:"100%", label:"solo built" },{ num:"4+", label:"chains deployed" }].map((s,i) => (
              <div key={i} style={{ padding:"16px 32px", borderRight:i<2?"0.5px solid rgba(255,255,255,0.07)":"none" }}>
                <div style={{ fontSize:24, fontFamily:"'Syne',sans-serif", fontWeight:800, color:"#fff", lineHeight:1 }}>{s.num}</div>
                <div style={{ fontSize:9, color:"rgba(255,255,255,0.25)", letterSpacing:"0.22em", textTransform:"uppercase", marginTop:4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — headshot + terminal card */}
        <div style={{ display:"flex", flexDirection:"column", gap:12, width:280, ...ease(0.2) }}>

          {/* Photo */}
          <div style={{ position:"relative", borderRadius:20, overflow:"hidden", border:"0.5px solid rgba(78,36,207,0.25)", aspectRatio:"3/4", width:"100%" }}>
            <img
              src="/mojeeb-2026-headshot.jpeg"
              alt="Mojeeb"
              style={{ width:"100%", height:"100%", objectFit:"cover", display:"block", filter:"grayscale(20%)", transition:"filter 0.8s" }}
              onMouseEnter={e=>{ (e.currentTarget as HTMLElement).style.filter="grayscale(0%)"; }}
              onMouseLeave={e=>{ (e.currentTarget as HTMLElement).style.filter="grayscale(20%)"; }}
            />
            <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top, #050507 0%, transparent 50%)" }} />
            <div style={{ position:"absolute", bottom:14, left:14 }}>
              <p style={{ fontSize:9, fontWeight:700, color:"#4e24cf", textTransform:"uppercase", letterSpacing:"0.3em", marginBottom:2 }}>Founder</p>
              <p style={{ fontSize:12, fontWeight:700, color:"#fff", textTransform:"uppercase", letterSpacing:"0.05em" }}>Blindspot Lab</p>
            </div>
          </div>

          {/* Mini terminal card */}
          <div style={{ background:"#0a0a0f", border:"0.5px solid rgba(78,36,207,0.2)", borderRadius:14, overflow:"hidden" }}>
            <div style={{ display:"flex", alignItems:"center", gap:6, padding:"8px 14px", borderBottom:"0.5px solid rgba(255,255,255,0.04)" }}>
              <span style={{ width:8, height:8, borderRadius:"50%", background:"#ff5f57" }} />
              <span style={{ width:8, height:8, borderRadius:"50%", background:"#ffbd2e" }} />
              <span style={{ width:8, height:8, borderRadius:"50%", background:"#28c840" }} />
              <span style={{ fontSize:9, color:"rgba(255,255,255,0.2)", marginLeft:6, fontFamily:"'DM Mono',monospace" }}>~/blindspotlab</span>
            </div>
            <div style={{ padding:"12px 14px", fontFamily:"'DM Mono',monospace", fontSize:10, lineHeight:1.8 }}>
              <div><span style={{ color:"#4e24cf" }}>$</span> <span style={{ color:"rgba(255,255,255,0.7)" }}>cat ./identity</span></div>
              <div style={{ color:"rgba(255,255,255,0.3)" }}>→ AI Native Developer</div>
              <div style={{ color:"rgba(255,255,255,0.3)" }}>→ Web3 Strategist</div>
              <div style={{ color:"rgba(255,255,255,0.3)" }}>→ Vibe Coder</div>
              <div style={{ marginTop:6 }}><span style={{ color:"#4e24cf" }}>$</span> <span style={{ color:"rgba(255,255,255,0.7)" }}>node build --fast</span></div>
              <div><span style={{ color:"#22c55e" }}>✓</span> <span style={{ color:"rgba(255,255,255,0.3)" }}>idea → live URL<span style={{ display:"inline-block", width:6, height:11, background:"rgba(255,255,255,0.4)", marginLeft:2, verticalAlign:"middle", animation:"blink 1s step-end infinite" }} /></span></div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee rail */}
      <div style={{ position:"relative", zIndex:10, borderTop:"0.5px solid rgba(255,255,255,0.06)", overflow:"hidden", opacity:mounted?1:0, transition:"opacity 0.7s ease 0.4s" }}>
        {/* Products */}
        <div style={{ display:"flex", alignItems:"stretch", borderBottom:"0.5px solid rgba(255,255,255,0.06)" }}>
          <div style={{ flexShrink:0, padding:"14px 20px", borderRight:"0.5px solid rgba(255,255,255,0.06)", fontSize:8, color:"rgba(255,255,255,0.2)", letterSpacing:"0.3em", textTransform:"uppercase", display:"flex", alignItems:"center", whiteSpace:"nowrap" }}>Shipped</div>
          <div style={{ overflow:"hidden", flex:1 }}>
            <div className="mrq-p" style={{ display:"flex", width:"max-content" }}>
              {[...PRODUCTS,...PRODUCTS].map((p,i) => (
                <div key={i} style={{ display:"flex", alignItems:"center", gap:12, padding:"14px 28px", borderRight:"0.5px solid rgba(255,255,255,0.04)", whiteSpace:"nowrap" }}>
                  <div style={{ width:5, height:5, borderRadius:"50%", background:p.live?"#22c55e":"rgba(255,255,255,0.15)" }} />
                  <span style={{ fontSize:10, color:"rgba(255,255,255,0.6)" }}>{p.name}</span>
                  <span style={{ fontSize:9, color:"rgba(255,255,255,0.2)", letterSpacing:"0.12em", textTransform:"uppercase" }}>{p.tag}</span>
                  <span style={{ fontSize:9, color:"#4e24cf" }}>{p.stat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Stack */}
        <div style={{ display:"flex", alignItems:"stretch" }}>
          <div style={{ flexShrink:0, padding:"12px 20px", borderRight:"0.5px solid rgba(255,255,255,0.06)", fontSize:8, color:"rgba(255,255,255,0.2)", letterSpacing:"0.3em", textTransform:"uppercase", display:"flex", alignItems:"center", whiteSpace:"nowrap" }}>Stack</div>
          <div style={{ overflow:"hidden", flex:1 }}>
            <div className="mrq-s" style={{ display:"flex", width:"max-content" }}>
              {[...STACK,...STACK].map((s,i) => (
                <span key={i} style={{ display:"inline-block", padding:"12px 20px", fontSize:9, color:"rgba(255,255,255,0.22)", letterSpacing:"0.2em", textTransform:"uppercase", borderRight:"0.5px solid rgba(255,255,255,0.04)", whiteSpace:"nowrap" }}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
    </section>
  );
};

export default Hero;
