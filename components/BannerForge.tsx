import React, { useState } from 'react';
import { Image as ImageIcon, Loader2, Download, RefreshCw, ChevronRight } from 'lucide-react';
import { generateBanner } from '../services/gemini';
import { DEFAULT_IMAGE_PROMPT } from '../constants';

export const BannerForge: React.FC = () => {
  const [prompt, setPrompt] = useState(DEFAULT_IMAGE_PROMPT);
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await generateBanner(prompt);
      if (result) {
        setImage(result);
      } else {
        setError("Generation failed. Try again.");
      }
    } catch (err) {
      setError("Connection error.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[80vh]">
        
        {/* Left: Controls */}
        <div className="lg:col-span-4 bg-white text-black p-8 flex flex-col h-full border-r border-gray-200">
            <div className="mb-8">
                <h2 className="text-3xl font-black uppercase tracking-tighter mb-2">Banner Forge</h2>
                <div className="h-1 w-12 bg-brand-gold"></div>
            </div>

            <div className="flex-grow flex flex-col space-y-4">
                <label className="font-mono text-xs font-bold uppercase text-gray-500">Prompt Configuration</label>
                <textarea 
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    className="flex-grow w-full bg-gray-100 border-2 border-transparent focus:border-black p-4 text-xs font-mono leading-relaxed resize-none outline-none transition-colors text-gray-800"
                    placeholder="// Enter generation parameters..."
                />
            </div>

            <button 
                onClick={handleGenerate}
                disabled={loading}
                className="mt-6 w-full py-4 bg-black text-white font-bold uppercase tracking-widest hover:bg-brand-gold hover:text-black transition-colors flex justify-between items-center px-6 group disabled:opacity-50"
            >
                <span>{loading ? 'Forging...' : 'Generate Asset'}</span>
                {loading ? <Loader2 className="animate-spin w-5 h-5" /> : <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
            </button>
        </div>

        {/* Right: Preview Canvas */}
        <div className="lg:col-span-8 bg-brand-dark relative flex items-center justify-center p-8 lg:p-16 overflow-hidden">
            {/* Grid Background */}
            <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>

            <div className="relative w-full aspect-video bg-black border border-gray-800 shadow-2xl z-10 group overflow-hidden">
                {image ? (
                    <>
                        <img src={image} alt="Generated" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4 backdrop-blur-sm">
                             <a href={image} download="ava_forge_asset.png" className="p-4 bg-white text-black hover:bg-brand-gold hover:text-black transition-colors rounded-full">
                                 <Download className="w-6 h-6" />
                             </a>
                             <button onClick={() => setImage(null)} className="p-4 bg-white text-black hover:bg-brand-gold hover:text-black transition-colors rounded-full">
                                 <RefreshCw className="w-6 h-6" />
                             </button>
                        </div>
                        <div className="absolute top-4 left-4 bg-brand-gold text-brand-black text-[10px] font-bold uppercase px-2 py-1">
                            Generated Asset
                        </div>
                    </>
                ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500">
                        {loading ? (
                            <div className="flex flex-col items-center space-y-4">
                                <div className="w-16 h-16 border-4 border-brand-gold border-t-transparent rounded-full animate-spin"></div>
                                <p className="font-mono text-xs uppercase tracking-widest text-brand-gold">Rendering High-Fidelity Asset...</p>
                            </div>
                        ) : error ? (
                            <div className="text-brand-gold font-mono text-sm px-4 text-center border border-brand-gold p-4">
                                {error}
                            </div>
                        ) : (
                            <>
                                <ImageIcon className="w-16 h-16 mb-4 opacity-20" />
                                <p className="font-mono text-xs uppercase tracking-widest opacity-50">Canvas Empty</p>
                            </>
                        )}
                    </div>
                )}
                
                {/* Cinematic Bars */}
                <div className="absolute top-0 left-0 right-0 h-12 bg-black pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-black pointer-events-none"></div>
            </div>
        </div>
    </div>
  );
};