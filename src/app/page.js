"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUpRight, FiShield, FiGlobe, FiUser } from 'react-icons/fi';

const members = [
  { username: "@yellowjeff", email: "jeff@yellow-labs.net", fullName: "Jeffrey R. Sterling", role: "Founder & Managing Director", status: "Verified Platinum", location: "Global Operations" },
  { username: "@theycallmemarco", email: "marco@yellow-labs.net", fullName: "Marco Rossi", role: "Lead Systems Architect", status: "Verified Lead", location: "Zurich HQ" },
  { username: "@Karlgray8", email: "karl@yellow-labs.net", fullName: "Karl Gray", role: "Head of Community Relations", status: "Verified Senior", location: "London Bureau" },
  { username: "@MeetSourav", email: "sourav@yellow-labs.net", fullName: "Sourav Kumar", role: "Core Protocol Engineer", status: "Verified Core", location: "Singapore Hub" },
];

export default function LuxuryTrustCenter() {
  const [input, setInput] = useState('');
  const [user, setUser] = useState(null);
  const [searched, setSearched] = useState(false);

  const handleSearch = () => {
    const found = members.find(m => 
      m.username.toLowerCase() === input.toLowerCase().trim() || 
      m.email.toLowerCase() === input.toLowerCase().trim()
    );
    setUser(found || null);
    setSearched(true);
  };

  return (
    <div className="min-h-screen bg-[#000] text-[#EAEAEA] selection:bg-yellow-500/30 font-light overflow-hidden relative">
      
      {/* INSTITUTIONAL BACKGROUND SYSTEM */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        {/* Subtle Grain Overlay */}
        <div className="absolute inset-0 opacity-[0.04] bg-[url('https://res.cloudinary.com/dqr68ovm5/image/upload/v1680554553/noise_v1.png')] mix-blend-overlay"></div>
        
        {/* Architectural Grid Lines */}
        <div className="absolute inset-0 border-x border-white/[0.03] mx-auto max-w-7xl h-full"></div>
        <div className="absolute top-[15%] w-full h-[1px] bg-white/[0.03]"></div>
        <div className="absolute top-[85%] w-full h-[1px] bg-white/[0.03]"></div>
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-8 flex flex-col min-h-screen">
        
        {/* NAV / LOGO SECTION */}
        <header className="py-12 flex justify-between items-center border-b border-white/[0.05]">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xs tracking-[0.4em] font-bold text-yellow-500"
          >
            YELLOW LABS <span className="text-white/20 ml-2">/ INTERNAL TRUST</span>
          </motion.div>
          <div className="text-[10px] tracking-[0.2em] text-white/40 uppercase hidden md:block">
            Institutional Verification Portal v2.0
          </div>
        </header>

        {/* HERO SECTION */}
        <div className="flex-grow flex flex-col justify-center py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7">
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-yellow-500 text-xs font-medium tracking-[0.3em] uppercase block mb-6"
              >
                Identity Assurance
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-6xl md:text-8xl font-medium tracking-tighter leading-[0.9] mb-8"
              >
                Yellow <br /> Trust Center
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="max-w-md text-white/40 text-lg leading-relaxed"
              >
                Verify the digital credentials of Yellow Labs personnel. 
                Ensuring secure, authenticated communication within the ecosystem.
              </motion.p>
            </div>

            <div className="lg:col-span-5 w-full">
              <div className="relative group">
                <input 
                  type="text"
                  placeholder="USERNAME OR EMAIL"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="w-full bg-transparent border-b border-white/20 py-6 text-xl tracking-widest uppercase focus:border-yellow-500 outline-none transition-all duration-500 placeholder:text-white/10"
                />
                <button 
                  onClick={handleSearch}
                  className="absolute right-0 bottom-6 group-hover:text-yellow-500 transition-colors"
                >
                  <FiArrowUpRight size={32} />
                </button>
              </div>
            </div>
          </div>

          {/* RESULTS AREA */}
          <div className="mt-24 min-h-[400px]">
            <AnimatePresence mode="wait">
              {searched && (
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="w-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm relative overflow-hidden"
                >
                  {user ? (
                    <div className="p-1 w-full">
                      <div className="border border-white/[0.05] p-12">
                        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
                          <div className="space-y-8">
                            <div>
                              <p className="text-[10px] tracking-[0.3em] text-yellow-500 uppercase mb-2">Verified Personnel</p>
                              <h2 className="text-4xl md:text-5xl font-medium tracking-tight uppercase">{user.fullName}</h2>
                              <p className="text-white/30 tracking-[0.2em] mt-1 uppercase text-sm">{user.username}</p>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-16">
                              <InfoBlock icon={<FiShield />} label="Security Status" value={user.status} />
                              <InfoBlock icon={<FiGlobe />} label="Location" value={user.location} />
                            </div>
                          </div>

                          <div className="w-full md:w-auto flex flex-col gap-4">
                            <div className="text-[10px] tracking-[0.2em] text-white/20 uppercase text-right hidden md:block mb-4">
                              Official Credentials
                            </div>
                            <button className="bg-white text-black px-10 py-5 font-bold uppercase text-xs tracking-widest hover:bg-yellow-500 transition-colors flex items-center justify-center gap-3">
                              Request Contact <FiArrowUpRight />
                            </button>
                            <button className="border border-white/20 px-10 py-5 font-bold uppercase text-xs tracking-widest hover:border-white transition-colors">
                              Download Signature
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="p-20 text-center border border-white/[0.05]">
                      <h3 className="text-xl tracking-widest uppercase opacity-40">Identity Not Recognized</h3>
                      <p className="text-sm text-white/20 mt-4 max-w-xs mx-auto uppercase tracking-tighter">
                        The requested credentials do not exist in our institutional ledger.
                      </p>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* FOOTER */}
        <footer className="py-12 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center text-[9px] tracking-[0.4em] text-white/20 uppercase font-bold">
          <div>© 2026 Yellow Labs Int. Protocol</div>
          <div className="mt-4 md:mt-0">SECURE END-TO-END VERIFICATION</div>
        </footer>
      </main>
    </div>
  );
}

function InfoBlock({ icon, label, value }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-white/20 text-[10px] tracking-widest uppercase">
        {icon} <span>{label}</span>
      </div>
      <div className="text-lg font-medium tracking-tight text-white/80 uppercase">{value}</div>
    </div>
  );
}