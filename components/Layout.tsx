import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Tab } from '../types';

interface LayoutProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ activeTab, onTabChange, children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: Tab.DASHBOARD, label: 'Home / Dashboard' },
    { id: Tab.RANK1, label: 'Rank-1 Proof' },
    { id: Tab.VERIFY, label: 'Verification Protocol' },
    { id: Tab.CERTIFICATES, label: 'Manifests / Certs' },
    { id: Tab.FORGE, label: 'Asset Forge' },
    { id: Tab.ABOUT, label: 'Mission / About' },
  ];

  return (
    <div className="min-h-screen bg-brand-black text-brand-light relative">
      
      {/* BRUTALIST BACKGROUND GRID SYSTEM */}
      <div className="grid-lines">
        <div className="grid-line"></div>
        <div className="grid-line"></div>
        <div className="grid-line"></div>
        <div className="grid-line"></div>
        <div className="grid-line"></div>
        <div className="grid-line"></div>
      </div>

      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 bg-brand-black border-b border-gray-800 shadow-2xl text-white">
        <div className="px-6 py-6 flex justify-between items-center max-w-[1920px] mx-auto w-full">
          {/* Logo */}
          <div className="flex items-center cursor-pointer group" onClick={() => onTabChange(Tab.DASHBOARD)}>
            <span className="text-4xl font-black tracking-tighter text-white">AVA</span>
            <div className="w-3 h-3 bg-brand-gold rounded-full ml-1 group-hover:animate-ping"></div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`text-xs font-bold tracking-[0.2em] uppercase relative group transition-colors ${
                  activeTab === item.id ? 'text-brand-gold' : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-2 left-0 h-[2px] bg-brand-gold transition-all duration-300 ${activeTab === item.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </button>
            ))}
          </nav>

          {/* Status / Menu */}
          <div className="flex items-center space-x-6">
            <span className="hidden md:inline-block font-mono text-[10px] text-brand-gold border border-brand-gold px-2 py-1 bg-brand-gold/5">
              SYSTEM: ONLINE
            </span>
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-brand-gold text-brand-black pt-32 px-6">
          <div className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onTabChange(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className="text-4xl font-black uppercase tracking-tighter text-left flex items-center justify-between border-b border-black/20 pb-4"
              >
                <span>{item.label}</span>
                <ArrowUpRight className="w-8 h-8" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="relative z-10 pt-24">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-brand-black border-t border-gray-800 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-6xl font-black text-gray-800">AVA</h3>
          </div>
          <div className="col-span-2">
            <p className="font-mono text-xs text-gray-500 leading-relaxed max-w-md uppercase">
              The incorruptible standard for AI verification. 
              Built on the principles of cryptographic truth and absolute provenance.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end justify-between">
             <div className="flex space-x-4">
               <div className="w-8 h-8 bg-brand-gold"></div>
               <div className="w-8 h-8 bg-gray-800"></div>
               <div className="w-8 h-8 bg-gray-200"></div>
             </div>
             <p className="text-[10px] font-mono text-gray-600 mt-4">© 2025 AVA PROTOCOL</p>
          </div>
        </div>
      </footer>
    </div>
  );
};