"use client";

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { 
  LayoutGrid, Medal, Search, Calendar, 
  User, LogOut, FlaskConical 
} from 'lucide-react';

export default function Home() {
  const [scholarships, setScholarships] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('Overview');

  // Sidebar Items matching your image
  const navItems = [
    { name: 'Overview', icon: <LayoutGrid size={20} /> },
    { name: 'Scholarships', icon: <Medal size={20} /> },
    { name: 'Research', icon: <FlaskConical size={20} /> },
    { name: 'Calendar', icon: <Calendar size={20} /> },
    { name: 'Profile', icon: <User size={20} /> },
  ];

  return (
    <div className="flex min-h-screen bg-[#020617] text-slate-200 overflow-hidden relative">
      
      {/* 1. ANIMATED BACKGROUND BLOBS */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] rounded-full bg-sky-500/10 blur-[100px] animate-pulse"></div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[500px] h-[500px] rounded-full bg-blue-700/10 blur-[100px] animate-pulse"></div>
      </div>

      {/* 2. SIDEBAR */}
      <aside className="w-64 bg-[#0B0E14] border-r border-white/5 flex flex-col fixed h-full z-20">
        <div className="p-8 pb-12">
          <a href="/" className="text-3xl font-extrabold text-white tracking-tighter">
            UC<span className="text-purple-500">.</span>
          </a>
        </div>

        <nav className="flex-1 px-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveTab(item.name)}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 group relative
                ${activeTab === item.name 
                  ? 'text-white bg-gradient-to-r from-purple-500/10 to-transparent' 
                  : 'text-slate-500 hover:text-slate-200'}`}
            >
              {/* Purple indicator from image */}
              {activeTab === item.name && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-purple-500 rounded-r-full shadow-[0_0_15px_#a855f7]" />
              )}
              <span className={activeTab === item.name ? 'text-purple-400' : 'group-hover:text-slate-300'}>
                {item.icon}
              </span>
              <span className="font-semibold">{item.name}</span>
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-white/5">
          <button className="w-full flex items-center gap-4 px-4 py-3 text-slate-500 hover:text-white transition-colors">
            <LogOut size={20} />
            <span className="font-semibold">Logout</span>
          </button>
        </div>
      </aside>

      {/* 3. MAIN CONTENT */}
      <main className="flex-1 ml-64 p-12 relative z-10">
        <header className="mb-12">
          <h1 className="text-5xl font-extrabold text-white tracking-tight mb-4">
            Bridge to the <br />
            <span className="text-slate-400 font-medium">Academic Elite.</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl">
            Curated scholarship pipelines and research opportunities for the next generation of global scholars.
          </p>
        </header>

        {/* SEARCH BAR */}
        <div className="relative max-w-md mb-12">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-sky-400" size={20} />
          <input 
            type="text" 
            placeholder="Search research cycles..."
            className="w-full bg-[#0F172A]/80 border border-white/10 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-sky-500/50 transition-all text-white backdrop-blur-md"
          />
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-[#0F172A]/40 border border-white/5 p-8 rounded-[32px] backdrop-blur-xl hover:border-sky-500/30 transition-all hover:-translate-y-2 cursor-pointer group">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">Scholarships</h3>
            <p className="text-slate-400 leading-relaxed">Access high-stipend programs and fully-funded opportunities at global institutions.</p>
          </div>
          {/* Add more cards here... */}
        </div>
      </main>
    </div>
  );
}