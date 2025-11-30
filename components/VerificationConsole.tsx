import React, { useState } from 'react';
import { Loader2, AlertTriangle, Check, X } from 'lucide-react';
import { verifyContent } from '../services/gemini';
import { VerificationResult } from '../types';

export const VerificationConsole: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<VerificationResult | null>(null);

  const handleVerify = async () => {
    if (!input.trim()) return;
    setLoading(true);
    try {
      const data = await verifyContent(input);
      setResult({
        ...data,
        timestamp: new Date().toLocaleTimeString(),
      });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh] border-l border-gray-800">
      
      {/* Left: Input */}
      <div className="p-8 lg:p-12 flex flex-col border-r border-gray-800 bg-brand-black relative">
         <div className="absolute top-0 left-0 w-full h-1 bg-brand-gold"></div>
         <h2 className="text-4xl font-black text-white mb-2 uppercase tracking-tighter">Input Stream</h2>
         <p className="font-mono text-xs text-gray-500 mb-8 uppercase">Paste raw data or origin hashes below</p>
         
         <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 w-full bg-brand-dark border border-gray-700 text-gray-300 p-6 font-mono text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all resize-none mb-6"
          placeholder="// AWAITING DATA SEQUENCE..."
          spellCheck={false}
        />

        <button
            onClick={handleVerify}
            disabled={loading || !input}
            className="w-full py-5 bg-white text-black font-black text-xl uppercase tracking-widest hover:bg-brand-gold hover:text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center space-x-2"
          >
            {loading && <Loader2 className="animate-spin w-5 h-5" />}
            <span>{loading ? 'Processing' : 'Execute Verify'}</span>
        </button>
      </div>

      {/* Right: Output */}
      <div className="p-8 lg:p-12 bg-brand-dark flex flex-col justify-center relative overflow-hidden">
         {/* Background Texture */}
         <div className="absolute inset-0 opacity-5 pointer-events-none" style={{backgroundImage: 'linear-gradient(45deg, #fff 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>

         {result ? (
           <div className="relative z-10 space-y-8 animate-fade-in">
              <div className="flex items-center justify-between border-b-2 border-white pb-4">
                 <h3 className="text-2xl font-bold text-white uppercase">Analysis Report</h3>
                 <span className="bg-brand-gold text-brand-black px-2 py-1 text-xs font-mono">{result.timestamp}</span>
              </div>

              <div className="grid grid-cols-2 gap-8">
                  <div>
                     <span className="block text-xs font-mono text-gray-500 uppercase mb-1">Trust Score</span>
                     <span className={`text-6xl font-black ${result.score > 80 ? 'text-white' : 'text-brand-gold'}`}>
                       {result.score}<span className="text-2xl">%</span>
                     </span>
                  </div>
                  <div>
                     <span className="block text-xs font-mono text-gray-500 uppercase mb-1">Status</span>
                     <div className="flex items-center space-x-2 mt-2">
                        {result.integrity === 'SECURE' ? (
                          <div className="flex items-center text-green-500 font-bold uppercase tracking-widest border border-green-500 px-3 py-1">
                             <Check className="w-4 h-4 mr-2" /> Secure
                          </div>
                        ) : (
                          <div className="flex items-center text-brand-gold font-bold uppercase tracking-widest border border-brand-gold px-3 py-1">
                             <AlertTriangle className="w-4 h-4 mr-2" /> Warning
                          </div>
                        )}
                     </div>
                  </div>
              </div>

              <div className="bg-black p-6 border border-gray-700">
                  <p className="font-mono text-sm text-gray-400 leading-relaxed">{result.analysis}</p>
              </div>

              <div>
                  <span className="block text-xs font-mono text-gray-500 uppercase mb-2">Cryptographic Hash</span>
                  <div className="font-mono text-[10px] text-brand-gold break-all border border-brand-gold/30 p-2 bg-brand-gold/5">
                      {result.hash}
                  </div>
              </div>
           </div>
         ) : (
           <div className="flex flex-col items-center justify-center text-gray-600 opacity-50">
              <div className="w-32 h-32 border-4 border-gray-700 rounded-full flex items-center justify-center mb-6">
                  <div className="w-24 h-24 bg-gray-800 rounded-full animate-pulse"></div>
              </div>
              <p className="font-mono uppercase tracking-widest">System Idle</p>
           </div>
         )}
      </div>
    </div>
  );
};