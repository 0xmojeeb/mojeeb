import { Mail, MessageSquare, X, Network, TrendingUp, Cpu, ArrowRight, Zap } from "lucide-react";

const social = [
  { icon: <Mail size={16} />, label: "Email", val: "mojeeb.eth@gmail.com", link: "mailto:mojeeb.eth@gmail.com" },
  { icon: <MessageSquare size={16} />, label: "Telegram", val: "@mojeebhq", link: "https://t.me/mojeebhq" },
  { icon: <X size={16} />, label: "X (Twitter)", val: "@mojeebeth", link: "https://x.com/mojeebeth" },
];

const services = [
  { icon: <Cpu size={14} />, label: "AI-Native Product Builds" },
  { icon: <Network size={14} />, label: "Web3 Strategy & Systems" },
  { icon: <TrendingUp size={14} />, label: "Growth Architecture" },
  { icon: <Zap size={14} />, label: "Vibe Coding / Full-Stack" },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-[#030303]">
      <div className="container mx-auto max-w-6xl">

        <div className="bg-[#4e24cf] rounded-[2rem] p-10 md:p-14 mb-6 relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-white/10" />
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <p className="text-white/50 text-[10px] font-black uppercase tracking-[0.4em] mb-3">Available Now</p>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-[-0.04em] uppercase leading-none">
                Let's Build<br />Something.
              </h2>
            </div>
            <a
              href="mailto:mojeeb.eth@gmail.com"
              className="group shrink-0 bg-white text-[#4e24cf] px-8 py-4 rounded-full font-black text-[11px] uppercase tracking-[0.2em] hover:bg-white/90 transition-all flex items-center gap-3 shadow-[0_0_40px_rgba(0,0,0,0.3)] hover:scale-105 active:scale-95"
            >
              Hire Me <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">

          <div className="md:col-span-7 flex flex-col gap-3">
            {social.map((s) => (
              <a key={s.label} href={s.link} target="_blank" rel="noopener noreferrer"
                className="group flex items-center justify-between bg-[#080808] border border-white/[0.06] hover:border-[#4e24cf]/40 rounded-[1.5rem] p-6 transition-all">
                <div className="flex items-center gap-5">
                  <div className="w-9 h-9 bg-[#4e24cf]/10 border border-[#4e24cf]/20 rounded-xl flex items-center justify-center text-[#4e24cf] group-hover:bg-[#4e24cf]/20 transition-colors">
                    {s.icon}
                  </div>
                  <div>
                    <p className="text-[9px] font-black text-white/30 uppercase tracking-[0.25em] mb-0.5">{s.label}</p>
                    <p className="text-white font-bold text-sm font-mono">{s.val}</p>
                  </div>
                </div>
                <span className="text-white/10 group-hover:text-[#4e24cf] transition-all group-hover:translate-x-1 transform text-lg">→</span>
              </a>
            ))}
          </div>

          <div className="md:col-span-5 bg-[#080808] border border-white/[0.06] rounded-[1.75rem] p-8 flex flex-col justify-between">
            <p className="text-[9px] font-black text-[#4e24cf] uppercase tracking-[0.4em] mb-6">What I Build</p>
            <ul className="flex flex-col gap-4 flex-1">
              {services.map((s) => (
                <li key={s.label}
                  className="flex items-center gap-4 pb-4 border-b border-white/[0.05] last:border-none last:pb-0">
                  <div className="w-7 h-7 bg-[#4e24cf]/10 rounded-lg flex items-center justify-center text-[#4e24cf] shrink-0">
                    {s.icon}
                  </div>
                  <span className="text-white/70 font-bold text-sm uppercase tracking-tight">{s.label}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-6 border-t border-white/[0.05] flex items-center justify-between">
              <div>
                <p className="text-[8px] text-white/20 uppercase tracking-widest font-bold mb-1">Status</p>
                <p className="text-[#4e24cf] font-black text-sm uppercase tracking-tight">Open for Work</p>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
                <span className="text-[9px] text-white/30 font-mono uppercase">Active</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
