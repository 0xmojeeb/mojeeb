/* ... existing imports ... */

{/* DYNAMIC PRODUCT CARD */}
<Card className="md:col-span-4 glass-card border-primary/20 bg-primary/5 p-8 relative overflow-hidden flex flex-col justify-between">
  <Gauge size={80} className="absolute -right-4 -bottom-4 text-primary opacity-10" />
  <div>
    <Badge className="mb-4 bg-primary text-white border-none">Active Builds</Badge>
    <h3 className="text-2xl font-bold mb-4 text-white">Blindspot Labs</h3>
    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
      A venture studio deploying high-fidelity tools for the next on-chain cycle. 
    </p>
  </div>
  
  <div className="space-y-4">
    {/* Product 1: AI Auditor */}
    <a href="https://blindspotlabs.vercel.app/" target="_blank" className="group block">
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-2 text-[10px] font-bold text-primary uppercase">
          <Terminal size={14} /> Web3 AI Auditor 
        </div>
        <ExternalLink size={10} className="opacity-0 group-hover:opacity-100 transition-all text-primary" />
      </div>
      <div className="text-[9px] text-white/40 group-hover:text-white/60 transition-colors">
        LLM-driven smart contract vulnerability detection & risk scoring.
      </div>
    </a>

    {/* Product 2: Trench Sniper (The New Name) */}
    <a href="https://trench-sniper.vercel.app" target="_blank" className="group block">
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-2 text-[10px] font-bold text-primary uppercase">
          <ShieldCheck size={14} /> Trench Sniper: On-Chain Intelligence Engine
        </div>
        <div className="flex items-center gap-1">
          <span className="w-1 h-1 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[7px] text-green-500 font-bold uppercase">Live</span>
        </div>
      </div>
      <div className="text-[9px] text-white/40 group-hover:text-white/60 transition-colors">
        Behavioral alpha simulator for rapid on-chain pattern recognition.
      </div>
    </a>

    <hr className="border-white/5 my-2" />
    
    <a href="https://blindspotlabs.vercel.app/" target="_blank" className="text-white/80 font-bold text-[10px] uppercase tracking-widest hover:text-primary transition-all inline-flex items-center gap-2">
      Launch Dashboard <span className="text-primary">→</span>
    </a>
  </div>
</Card>
