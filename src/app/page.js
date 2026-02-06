"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineShieldExclamation, HiOutlineArrowRight } from 'react-icons/hi2';
import { RiTelegramFill, RiMailFill } from 'react-icons/ri';
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
      m.email.toLowerCase() === query.toLowerCase()
    );
    setVerifiedMember(found || null);
    setHasChecked(true);
  };

  return (
    <div className="relative min-h-screen w-full text-white font-sans selection:bg-brand-yellow selection:text-black">
      {/* 1. Fixed Background Image Layer */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/background.svg')` }}
      />
      
      {/* 2. Grain & Noise Overlay */}
      <div className="grain-overlay" />

      {/* 3. Content Layer */}
      <nav className="relative z-10 flex justify-between items-center px-10 pt-8 max-w-350 mx-auto">
        <div className="flex items-center gap-4">
          <Image src="/logo.png" alt='Logo' width={125} height={50} className='scale-125'/>
        </div>
        <a href='https://www.yellow-labs.net/' target='_blank'>
        <div className="text-sm tracking-widest opacity-40 uppercase flex items-center justify-center gap-2">Web <FaExternalLinkAlt/></div>
        </a>
      </nav>

      <main className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-32">
        
        {/* Verification Engine */}
        <section className="text-center mb-32">
        <div className='flex items-center justify-center gap-2.5 mx-auto w-fit'>
        <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-semibold tracking-tighter mb-10"
          >
            Verify <span className="text-brand-yellow">Identity</span>
          </motion.h1>
          <HiOutlineBadgeCheck className='text-4xl md:text-6xl text-brand-yellow -mt-8'/>
        </div>

          <div className="max-w-2xl mx-auto relative group">
            <form onSubmit={handleVerify} className="relative flex items-center bg-black/40 border border-white/10 backdrop-blur-2xl rounded-2xl overflow-hidden p-1 shadow-2xl">
              <input 
                type="text"
                placeholder="Enter handle or official email..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent px-8 py-6 outline-none text-lg placeholder:text-zinc-600 font-light"
              />
              <button className="bg-white text-black h-[60px] px-10 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-brand-yellow transition-all flex items-center gap-2">
                Check <HiOutlineArrowRight className="text-lg" />
              </button>
            </form>

            <AnimatePresence>
              {hasChecked && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                  className={`mt-6 p-8 rounded-2xl border backdrop-blur-3xl ${verifiedMember ? 'bg-brand-yellow/10 border-brand-yellow/30' : 'bg-red-500/10 border-red-500/30'}`}
                >
                  {verifiedMember ? (
                    <div className="flex flex-col items-center gap-3">
                      <HiOutlineBadgeCheck className="text-5xl text-brand-yellow" />
                      <p className="text-2xl font-bold tracking-tight">Verified: {verifiedMember.name}</p>
                      <span className="text-xs uppercase tracking-[0.3em] opacity-60">Official Yellow Labs Staff</span>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-3">
                      <HiOutlineShieldExclamation className="text-5xl text-red-500" />
                      <p className="text-2xl font-bold tracking-tight">Access Denied</p>
                      <span className="text-xs uppercase tracking-[0.3em] opacity-60">Unknown Entity — Proceed with Caution</span>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Minimal Member Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-40">
          {MEMBERS.map((m, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="relative p-1 rounded-3xl bg-gradient-to-b from-white/10 to-transparent group"
            >
              <div className="bg-black/40 backdrop-blur-xl rounded-[22px] p-8 h-full border border-white/5 transition-all group-hover:border-brand-yellow/50">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold tracking-tight group-hover:text-brand-yellow transition-colors">{m.name}</h3>
                </div>
                
                <div className="flex flex-col gap-3">
                  <a href={`https://t.me/${m.handle.replace('@', '')}`} className="flex items-center justify-between group/link text-xs font-bold uppercase tracking-widest opacity-60 hover:opacity-100 hover:text-brand-yellow transition-all">
                    Telegram <RiTelegramFill className="text-xl" />
                  </a>
                  <a href={`mailto:${m.email}`} className="flex items-center justify-between group/link text-xs font-bold uppercase tracking-widest opacity-60 hover:opacity-100 hover:text-brand-yellow transition-all">
                    Email <RiMailFill className="text-xl" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Simple English Documentation */}
        <footer className="max-w-4xl mx-auto space-y-24 border-t border-white/10 pt-32">
          <section className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold mb-6 tracking-tighter">Why this page exists</h2>
              <p className="text-zinc-400 text-lg leading-relaxed font-light">
                We believe that honesty is the foundation of everything we do at Yellow Labs. Because our work is popular, some people try to trick others by using names that look like ours. We built this portal so you never have to guess who you are talking to.
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 tracking-tighter">Stay Safe</h2>
              <p className="text-zinc-400 text-lg leading-relaxed font-light">
                A real team member will never mind if you ask them to wait while you check this page. If someone gets angry or tries to rush you into a decision, that is usually a sign of a scam. Take your time and verify every single time.
              </p>
            </div>
          </section>

          <section className="bg-white/5 border border-white/10 p-12 rounded-[3rem] backdrop-blur-md">
            <h3 className="text-2xl font-bold mb-8">Simple steps to protect yourself:</h3>
            <ul className="space-y-6 text-zinc-300">
              <li className="flex gap-4">
                <span className="text-brand-yellow font-bold">01.</span>
                <p>Copy the username or email address of the person who contacted you.</p>
              </li>
              <li className="flex gap-4">
                <span className="text-brand-yellow font-bold">02.</span>
                <p>Paste it into the search box at the top of this page.</p>
              </li>
              <li className="flex gap-4">
                <span className="text-brand-yellow font-bold">03.</span>
                <p>If you see a green checkmark, it is safe. If not, do not share any information with them.</p>
              </li>
            </ul>
          </section>

          <div className="text-center pt-20 opacity-20 text-[10px] tracking-[1em] uppercase">
            Official Yellow Labs Directory
          </div>
        </footer>
      </main>
    </div>
  );
}