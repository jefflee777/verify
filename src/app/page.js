'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSend, FiMail, FiAlertTriangle, FiArrowUpRight, FiSearch } from 'react-icons/fi';

const members = [
  { 
    username: "@yellowjeff", 
    email: "jeff@yellow-labs.net", 
    fullName: "Jeffrey R. Sterling", 
    role: "Founder & Managing Director",
    telegram: "https://t.me/yellowjeff"
  },
  { 
    username: "@theycallmemarco", 
    email: "marco@yellow-labs.net", 
    fullName: "Marco Rossi", 
    role: "Lead Systems Architect",
    telegram: "https://t.me/theycallmemarco"
  },
  { 
    username: "@Karlgray8", 
    email: "karl@yellow-labs.net", 
    fullName: "Karl Gray", 
    role: "Head of Community Relations",
    telegram: "https://t.me/Karlgray8"
  },
  { 
    username: "@MeetSourav", 
    email: "sourav@yellow-labs.net", 
    fullName: "Sourav Kumar", 
    role: "Core Protocol Engineer",
    telegram: "https://t.me/MeetSourav"
  }
];

export default function TrustPortal() {
  const [input, setInput] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = () => {
    if (!input.trim()) return;
    const found = members.find(m => 
      m.username.toLowerCase() === input.toLowerCase().trim() || 
      m.email.toLowerCase() === input.toLowerCase().trim()
    );
    setSearchResult(found || null);
    setHasSearched(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <div className="min-h-screen bg-[#000] text-[#F5F5F5] font-light selection:bg-yellow-500/30">
      
      {/* LUXURY BACKGROUND OVERLAY */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://res.cloudinary.com/dqr68ovm5/image/upload/v1680554553/noise_v1.png')]"></div>
        <div className="absolute inset-0 border-x border-white/[0.03] mx-auto max-w-7xl"></div>
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-8 flex flex-col pt-16 pb-24">
        
        {/* HEADER */}
        <header className="flex justify-between items-center mb-32">
          <div className="text-[12px] tracking-[0.6em] font-black">YELLOW LABS</div>
          <div className="h-[1px] flex-grow mx-12 bg-white/10 hidden md:block"></div>
          <div className="text-[10px] tracking-[0.2em] text-white/40 uppercase font-bold">Directory // 2026</div>
        </header>

        {/* HERO & SEARCH */}
        <section className="mb-40">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-[10rem] font-medium tracking-tighter leading-[0.8] mb-16 italic"
          >
            Trust Center
          </motion.h1>

          <div className="max-w-3xl relative">
            <input 
              type="text"
              placeholder="SEARCH THE LEDGER..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full bg-transparent border-b border-white/10 py-10 text-3xl tracking-widest uppercase focus:border-yellow-500 outline-none transition-all duration-700 placeholder:text-white/5 font-extralight"
            />
            <div className="absolute right-0 bottom-10 flex items-center gap-6">
              <span className="text-[10px] tracking-[0.3em] text-white/20 hidden md:block uppercase font-bold">Submit Query [Enter]</span>
              <button onClick={handleSearch} className="text-white/40 hover:text-yellow-500 transition-colors">
                <FiSearch size={32} />
              </button>
            </div>
          </div>

          {/* DYNAMIC SEARCH RESULT BOX */}
          <AnimatePresence>
            {hasSearched && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-12 overflow-hidden"
              >
                <div className={`p-10 border-l-2 ${searchResult ? 'border-yellow-500 bg-yellow-500/5' : 'border-white/10 bg-white/5'}`}>
                  {searchResult ? (
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                      <div>
                        <p className="text-yellow-500 text-[10px] tracking-[0.4em] uppercase font-bold mb-2">Verification Successful</p>
                        <h3 className="text-3xl uppercase tracking-tight">{searchResult.fullName} is a verified member.</h3>
                      </div>
                      <button 
                        onClick={() => {setHasSearched(false); setInput('');}}
                        className="text-[10px] tracking-widest text-white/40 hover:text-white uppercase border-b border-white/20 pb-1"
                      >
                        Clear Result
                      </button>
                    </div>
                  ) : (
                    <p className="text-white/40 tracking-[0.2em] uppercase text-sm italic">No matching identity found in the Yellow Labs database.</p>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* FULL MEMBER DIRECTORY */}
        <section className="mb-40">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-[11px] tracking-[0.5em] uppercase font-black text-white/30 whitespace-nowrap">Official Personnel Directory</h2>
            <div className="h-[1px] w-full bg-white/[0.05]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            {members.map((member, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group border border-white/[0.06] bg-[#050505] p-10 flex flex-col justify-between hover:bg-white/[0.02] transition-colors duration-500 h-[320px]"
              >
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <span className="text-[10px] tracking-widest text-white/20 uppercase font-bold">0{idx + 1}</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 shadow-[0_0_8px_#EAB308]"></div>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-light uppercase tracking-tighter mb-2 group-hover:text-yellow-500 transition-colors">
                    {member.fullName}
                  </h3>
                  <p className="text-white/30 text-[11px] tracking-[0.3em] uppercase font-medium">{member.role}</p>
                </div>

                <div className="flex gap-4 mt-8">
                  <a 
                    href={member.telegram} 
                    className="flex-grow flex items-center justify-center gap-2 py-4 bg-white text-black text-[10px] font-black uppercase tracking-[0.2em] hover:bg-yellow-500 transition-all duration-300"
                  >
                    <FiSend size={14} /> Chat Telegram
                  </a>
                  <a 
                    href={`mailto:${member.email}`}
                    className="flex-grow flex items-center justify-center gap-2 py-4 border border-white/10 text-white text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300"
                  >
                    <FiMail size={14} /> Mail Us
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECURITY & FRAUD AWARENESS */}
        <section className="border border-white/5 p-12 bg-white/[0.01]">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-full border border-yellow-500/20 flex items-center justify-center">
                <FiAlertTriangle className="text-yellow-500" size={24} />
              </div>
            </div>
            <div className="space-y-6">
              <h4 className="text-lg tracking-[0.1em] uppercase font-bold text-white">Security Protocol & Fraud Awareness</h4>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <p className="text-sm leading-relaxed text-white/30 tracking-wide uppercase text-[11px]">
                  Yellow Labs officials will <span className="text-white font-bold underline decoration-yellow-500 decoration-2 underline-offset-4">never</span> request sensitive information, private keys, or direct fund transfers via external messaging channels. 
                </p>
                <p className="text-sm leading-relaxed text-white/30 tracking-wide uppercase text-[11px]">
                  Scammers often create high-fidelity impersonation accounts. This directory serves as the <span className="text-white">only</span> authoritative source for identity verification. If a user is not listed here, they are not an official representative.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-[0.4em] text-white/20 font-black">
          <p>© 2026 YELLOW LABS GROUP — GLOBAL OPERATIONS</p>
          <div className="flex gap-8 mt-6 md:mt-0">
            <span className="hover:text-white cursor-pointer transition-colors">PRIVACY</span>
            <span className="hover:text-white cursor-pointer transition-colors">TERMS</span>
            <span className="hover:text-white cursor-pointer transition-colors">SYSTEM STATUS</span>
          </div>
        </footer>

      </main>
    </div>
  );
}