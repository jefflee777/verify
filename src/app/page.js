"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineShieldExclamation, HiOutlineArrowRight } from 'react-icons/hi2';
import { RiTelegram2Line, RiShieldUserLine } from 'react-icons/ri';
import { LuMail, LuShieldAlert } from "react-icons/lu";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import Image from 'next/image';
import { FaExternalLinkAlt } from "react-icons/fa";

const MEMBERS = [
  { name: 'Jeff', handle: '@yellowjeff', email: 'jeff@yellow-labs.net' },
  { name: 'Marco', handle: '@theycallmemarco', email: 'marco@yellow-labs.net' },
  { name: 'Karl Gray', handle: '@Karlgray8', email: 'official@yellow-labs.net' },
  { name: 'Sourav', handle: '@meetsourav', email: 'sourav@yellow-labs.net' },
];

export default function LuxuryPortal() {
  const [query, setQuery] = useState('');
  const [verifiedMember, setVerifiedMember] = useState(null);
  const [hasChecked, setHasChecked] = useState(false);

  const handleVerify = (e) => {
    e.preventDefault();
    const found = MEMBERS.find(m => 
      m.handle.toLowerCase() === query.toLowerCase() || 
      m.email.toLowerCase() === query.toLowerCase() ||
      m.handle.toLowerCase().replace('@', '') === query.toLowerCase()
    );
    setVerifiedMember(found || null);
    setHasChecked(true);
  };

  const telegramMsg = encodeURIComponent("Hello! I am reaching out to you after verifying your profile on the Yellow Labs Official Portal.");
  const mailMsg = encodeURIComponent("Subject: Inquiry via Yellow Labs Portal");

  return (
    <div className="relative min-h-screen w-full text-white font-sans selection:bg-yellow-400 selection:text-black overflow-x-hidden">
      {/* 1. Refined Background */}
      <div className="fixed inset-0 z-0 bg-[#050505]" />
      <div 
        className="fixed inset-0 z-0 opacity-40 bg-cover bg-center"
        style={{ backgroundImage: `url('/background.svg')` }}
      />
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-transparent via-black/20 to-black" />

      {/* 2. Content Layer */}
      <nav className="relative z-10 flex justify-between items-center px-6 md:px-12 py-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <Image src="/logo.png" alt='Logo' width={110} height={40} className='brightness-120 scale-125'/>
        </div>
        <a href='https://www.yellow-labs.net/' target='_blank' rel="noreferrer" 
           className="group flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-zinc-500 hover:text-yellow-400 transition-colors">
          Main Website <FaExternalLinkAlt className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </nav>

      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-32">
        
        {/* Verification Engine */}
        <section className="text-center mb-32">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl py-1 font-bold tracking-tighter mb-8 bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent"
          >
            Verify <span className="text-yellow-400">Identity</span>
          </motion.h1>

          <div className="max-w-xl mx-auto relative group">
            <form onSubmit={handleVerify} className="relative flex flex-col md:flex-row items-center bg-zinc-900/50 border border-white/10 backdrop-blur-3xl rounded-2xl md:rounded-full overflow-hidden p-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <input 
                type="text"
                placeholder="Paste handle or email here..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent px-6 py-4 outline-none text-base placeholder:text-zinc-600 font-medium"
              />
              <button className="w-full md:w-auto bg-white text-black h-12 md:h-14 px-8 rounded-xl md:rounded-full font-bold text-xs uppercase tracking-widest hover:bg-yellow-400 transition-all flex items-center justify-center gap-2">
                Verify Now <HiOutlineArrowRight className="text-lg" />
              </button>
            </form>

            <AnimatePresence mode="wait">
              {hasChecked && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                  className={`mt-8 p-10 rounded-[2rem] border backdrop-blur-md ${verifiedMember ? 'bg-yellow-400/5 border-yellow-400/20' : 'bg-red-500/5 border-red-500/20'}`}
                >
                  {verifiedMember ? (
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-yellow-400/10 rounded-full flex items-center justify-center mb-4">
                        <HiOutlineBadgeCheck className="text-4xl text-yellow-400" />
                      </div>
                      <h2 className="text-3xl font-bold tracking-tight mb-1">Official Member: {verifiedMember.name}</h2>
                      <p className="text-zinc-400 text-sm tracking-wide">This identity is verified and part of the Yellow Labs core team.</p>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mb-4">
                        <HiOutlineShieldExclamation className="text-4xl text-red-500" />
                      </div>
                      <h2 className="text-2xl font-bold tracking-tight mb-2">This is not a Yellow Member</h2>
                      <p className="text-zinc-400 text-sm max-w-md leading-relaxed">
                        Please be aware of scammers. To avoid being misled, only use the official contact buttons below to reach our team.
                      </p>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Member Grid - The "Professional Cards" */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-40">
          {MEMBERS.map((m, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -8 }}
              className="group relative p-px rounded-3xl bg-gradient-to-b from-white/20 to-transparent hover:from-yellow-400/40 transition-all duration-500"
            >
              <div className="bg-[#0A0A0A] backdrop-blur-2xl rounded-[23px] p-8 h-full flex flex-col justify-between">
                <div>
                  {/* <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-400/10 transition-colors">
                    <RiShieldUserLine className="text-zinc-500 group-hover:text-yellow-400" />
                  </div> */}
                  <h3 className="text-xl font-bold tracking-tight mb-1">{m.name}</h3>
                  <p className="text-zinc-500 text-xs mb-8 tracking-widest uppercase">Core Team</p>
                </div>
                
                <div className="space-y-3">
                  <a href={`https://t.me/${m.handle.replace('@', '')}?text=${telegramMsg}`} 
                     className="flex items-center justify-center gap-2 w-full py-3 bg-white/5 border border-white/5 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                    <RiTelegram2Line className="text-base" /> Telegram
                  </a>
                  <a href={`mailto:${m.email}?subject=Portal%20Inquiry&body=Hello%20${m.name},`} 
                     className="flex items-center justify-center gap-2 w-full py-3 border border-white/10 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:border-yellow-400/50 hover:text-yellow-400 transition-all">
                    <LuMail className="text-base" /> Send Email
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Human-Centered Content Footer */}
        <footer className="max-w-4xl mx-auto space-y-32 border-t border-white/10 pt-32">
          <section className="grid md:grid-cols-2 gap-20">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight">Our Commitment to Trust</h2>
              <p className="text-zinc-400 leading-relaxed font-light">
                Yellow Labs operates at the intersection of high-end design and blockchain technology. Because our reputation is our most valuable asset, we've created this portal to eliminate any confusion. 
                <br /><br />
                Scammers often impersonate our developers and founders to request sensitive information. If a name is not on this list, they do not speak for Yellow Labs.
              </p>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight">How to Interact</h2>
              <p className="text-zinc-400 leading-relaxed font-light">
                When you click a contact button above, it includes a verified portal tag. This helps our team know you have taken the correct steps to verify their identity. 
                <br /><br />
                We will never ask for your seed phrases, private keys, or passwords. Any such request is a definitive sign of a scam attempt.
              </p>
            </div>
          </section>

          <section className="bg-gradient-to-br from-zinc-900 to-black border border-white/10 p-8 md:p-16 rounded-[3rem] relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <LuShieldAlert size={120} />
            </div>
            <h3 className="text-2xl font-bold mb-10 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-yellow-400 flex items-center justify-center text-black text-sm">!</span>
              The Safety Protocol
            </h3>
            <div className="grid sm:grid-cols-3 gap-10 text-sm">
              <div className="space-y-4">
                <span className="text-yellow-400 font-mono tracking-tighter">STEP 01</span>
                <p className="text-zinc-300 leading-relaxed">Copy the username or email of the person who reached out to you on Discord, Telegram, or Twitter.</p>
              </div>
              <div className="space-y-4">
                <span className="text-yellow-400 font-mono tracking-tighter">STEP 02</span>
                <p className="text-zinc-300 leading-relaxed">Paste it into our Verification Engine at the top of this page and wait for the official confirmation badge.</p>
              </div>
              <div className="space-y-4">
                <span className="text-yellow-400 font-mono tracking-tighter">STEP 03</span>
                <p className="text-zinc-300 leading-relaxed">Only proceed if you see the "Official Member" status. When in doubt, use the direct buttons on this page.</p>
              </div>
            </div>
          </section>

          <div className="flex flex-col items-center gap-8 pt-20">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
            <div className="text-center opacity-50 text-[9px] tracking-widest uppercase">
              Official Yellow Labs Security Directory
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}