"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiCheckCircle, FiXCircle } from 'react-icons/fi';
import { officialMembers } from './data/members';

export default function TrustCenter() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleVerify = () => {
    const found = officialMembers.find(
      (m) => 
        m.username.toLowerCase() === query.toLowerCase().trim() || 
        m.email.toLowerCase() === query.toLowerCase().trim()
    );
    setResult(found || null);
    setHasSearched(true);
  };

  return (
    <div className="relative min-h-screen w-full bg-[#000000] text-white selection:bg-yellow-500/30 overflow-x-hidden font-sans">
      
      {/* LAYER 2: Grain Texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* LAYER 3: Mesh Grid */}
      <motion.div 
        initial={{ y: 0 }}
        animate={{ y: -20 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror", ease: "linear" }}
        className="fixed inset-0 pointer-events-none opacity-[0.06] z-0"
        style={{ 
          backgroundImage: `linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)`,
          backgroundSize: '100px 100px',
          filter: 'blur(1px)'
        }}
      />

      <div className="relative z-20 flex flex-col items-center pt-20 px-6">
        {/* TOP BRAND SECTION */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center w-full max-w-4xl"
        >
          <div className="text-yellow-500 font-bold text-xl tracking-tighter mb-8">YELLOW LABS</div>
          <div className="w-full h-[1px] bg-white/10 mb-24" />
        </motion.div>

        {/* HERO SECTION */}
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-semibold tracking-tight mb-4"
          >
            Trust Center
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg tracking-wide"
          >
            Official Yellow Labs Identity Verification
          </motion.p>
        </div>

        {/* VERIFICATION INPUT */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-full max-w-xl flex flex-col md:flex-row gap-4 mb-20"
        >
          <input 
            type="text"
            placeholder="Enter username or email"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-grow bg-[#111] border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-yellow-500/50 focus:ring-4 focus:ring-yellow-500/5 transition-all duration-200"
          />
          <button 
            onClick={handleVerify}
            className="bg-black border border-yellow-500 text-yellow-500 px-8 py-4 rounded-2xl font-medium hover:bg-yellow-500 hover:text-black hover:-translate-y-0.5 transition-all duration-200"
          >
            Verify
          </button>
        </motion.div>

        {/* RESULTS SECTION */}
        <AnimatePresence mode="wait">
          {hasSearched && (
            <motion.div
              key={result ? result.id : 'not-found'}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-2xl bg-[#0A0A0A] border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl mb-32"
            >
              <div className="flex justify-between items-center mb-10">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${result ? 'bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.6)]' : 'bg-white/20'}`} />
                  <span className="text-xs uppercase tracking-[0.2em] text-white/40 font-medium">
                    {result ? 'Verified Identity' : 'Identity Not Found'}
                  </span>
                </div>
                {result && <span className="text-xs font-mono text-white/30">{result.id}</span>}
              </div>

              {result ? (
                <>
                  <div className="mb-10">
                    <h2 className="text-3xl font-semibold mb-1">{result.username}</h2>
                    <p className="text-yellow-500/80 font-medium">{result.role}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-y-8 gap-x-4 mb-12 border-t border-white/5 pt-10">
                    <DataPoint label="Status" value={result.status} highlight />
                    <DataPoint label="Member Since" value={result.since} />
                    <DataPoint label="Role" value={result.role} />
                    <DataPoint label="Verification ID" value={result.id} />
                  </div>

                  <button className="w-full group flex items-center justify-center gap-2 border border-yellow-500/50 text-yellow-500 py-4 rounded-xl hover:bg-yellow-500 hover:text-black transition-all duration-300">
                    Request Official Contact
                    <FiMail className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </>
              ) : (
                <div className="text-center py-10">
                  <p className="text-white/60">This account is not registered within the Yellow Labs Trust System.</p>
                </div>
              )}
              
              <p className="mt-8 text-center text-[10px] text-white/20 tracking-wider">
                ALL COMMUNICATIONS ARE SUBJECT TO YELLOW LABS INTERNAL REVIEW AND COMPLIANCE.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* FOOTER */}
        <footer className="pb-10 opacity-30 text-[10px] tracking-[0.3em] uppercase">
          Powered by Yellow Labs Internal Authentication Protocol
        </footer>
      </div>
    </div>
  );
}

function DataPoint({ label, value, highlight = false }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-widest text-white/30 mb-1">{label}</p>
      <p className={`text-sm font-medium ${highlight ? 'text-yellow-500' : 'text-white/80'}`}>{value}</p>
    </div>
  );
}