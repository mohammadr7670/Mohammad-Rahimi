import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { VerificationConsole } from './components/VerificationConsole';
import { BannerForge } from './components/BannerForge';
import { About } from './components/About';
import { Certificates } from './components/Certificates';
import { Rank1Proof } from './components/Rank1Proof';
import { Tab } from './types';
import { ShieldAlert } from 'lucide-react';

const ApiKeySelectionModal = ({ onSelect }: { onSelect: () => void }) => (
  <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center px-4">
    <div className="bg-neutral-900 border border-brand-gold p-8 max-w-md w-full text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(45deg, #FFD34A 1px, transparent 1px)', backgroundSize: '10px 10px'}}></div>
      <div className="relative z-10">
        <div className="flex justify-center mb-6">
            <ShieldAlert className="w-12 h-12 text-brand-gold" />
        </div>
        <h2 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">Security Clearance Required</h2>
        <p className="text-gray-400 mb-8 font-mono text-sm">
          Accessing the AVA Quantum Vault requires a valid cryptographic key (API Key). 
          Please select a key with billing enabled to access the Image Generation Modules.
        </p>
        <div className="text-xs text-brand-gold mb-6 font-bold uppercase">
            <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" rel="noreferrer" className="hover:underline">
                View Billing Documentation
            </a>
        </div>
        <button 
          onClick={onSelect}
          className="w-full bg-brand-gold text-brand-black font-bold py-4 uppercase tracking-widest hover:bg-white hover:text-brand-black transition-colors"
        >
          Authenticate Identity
        </button>
      </div>
    </div>
  </div>
);

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.DASHBOARD);
  const [hasKey, setHasKey] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const checkKey = async () => {
      try {
        if (window.aistudio) {
          const hasSelected = await window.aistudio.hasSelectedApiKey();
          setHasKey(hasSelected);
        } else {
          // Fallback for development environments outside of AI Studio
          setHasKey(!!process.env.API_KEY);
        }
      } catch (e) {
        console.error("Error checking API key:", e);
        // Default to process env if check fails
        setHasKey(!!process.env.API_KEY);
      } finally {
        setChecking(false);
      }
    };
    checkKey();
  }, []);

  const handleSelectKey = async () => {
    if (window.aistudio) {
      try {
        await window.aistudio.openSelectKey();
        // Assume success after dialog close to avoid race conditions
        setHasKey(true);
      } catch (e) {
        console.error("Key selection failed:", e);
        // Reset state to prompt again if needed
        const hasSelected = await window.aistudio.hasSelectedApiKey();
        setHasKey(hasSelected);
      }
    } else {
       alert("AI Studio environment not detected. Please set process.env.API_KEY manually.");
    }
  };

  if (checking) return null;

  return (
    <>
      {!hasKey && <ApiKeySelectionModal onSelect={handleSelectKey} />}
      
      {hasKey && (
        <Layout activeTab={activeTab} onTabChange={setActiveTab}>
          <div className="animate-fade-in duration-500">
            {activeTab === Tab.DASHBOARD && <Dashboard />}
            {activeTab === Tab.RANK1 && <Rank1Proof />}
            {activeTab === Tab.VERIFY && <VerificationConsole />}
            {activeTab === Tab.CERTIFICATES && <Certificates />}
            {activeTab === Tab.FORGE && <BannerForge />}
            {activeTab === Tab.ABOUT && <About />}
          </div>
        </Layout>
      )}
    </>
  );
};

export default App;