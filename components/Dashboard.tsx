import React from 'react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import { Activity, ArrowRight, ShieldCheck, Database, Cpu } from 'lucide-react';

const data = [
  { name: '00:00', verifications: 40, integrity: 24 },
  { name: '04:00', verifications: 30, integrity: 13 },
  { name: '08:00', verifications: 20, integrity: 98 },
  { name: '12:00', verifications: 27, integrity: 39 },
  { name: '16:00', verifications: 18, integrity: 48 },
  { name: '20:00', verifications: 23, integrity: 38 },
  { name: '23:59', verifications: 34, integrity: 43 },
];

export const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen">
      
      {/* HERO SECTION: Brutalist Overlay */}
      <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden border-b border-gray-800">
        
        {/* Massive Background Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none select-none overflow-hidden">
           <h1 className="text-[20vw] leading-[0.8] font-black text-brand-dark opacity-50 mix-blend-difference">
             VERIFIED
           </h1>
           <h1 className="text-[20vw] leading-[0.8] font-black text-brand-dark opacity-50 mix-blend-difference ml-[20vw]">
             ORIGIN
           </h1>
        </div>

        {/* Content Grid */}
        <div className="relative z-10 max-w-[1600px] mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-8 h-full items-center">
            
            {/* Left Column: Text */}
            <div className="lg:col-span-5 py-12 lg:py-0">
                <div className="flex items-center space-x-4 mb-8">
                    <div className="h-[1px] w-12 bg-brand-gold"></div>
                    <span className="font-mono text-brand-gold text-xs uppercase tracking-widest">Protocol V2.0</span>
                </div>
                <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8 text-white">
                    PROOF <br />
                    <span className="text-stroke-gold">FIRST</span> <br />
                    STANDARD
                </h2>
                <p className="text-gray-400 text-lg max-w-md leading-relaxed mb-10 font-light">
                    The only cryptographic baseline for AGI. 
                    We certify the origin of deep tech architectures with mathematical certainty.
                </p>
                <button className="bg-brand-gold text-brand-black px-10 py-5 font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors flex items-center space-x-4">
                    <span>Initiate Verification</span>
                    <ArrowRight className="w-5 h-5" />
                </button>
            </div>

            {/* Right Column: Floating Image Card */}
            <div className="lg:col-span-7 relative h-[500px] lg:h-[800px]">
                {/* Main Image */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-xl aspect-[3/4] bg-gray-900 shadow-2xl group">
                    <img 
                        src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2574&auto=format&fit=crop" 
                        alt="Mazzaneh Business Traditional" 
                        className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700"
                    />
                    {/* Overlay Text on Image */}
                    <div className="absolute -bottom-10 -left-10 bg-white text-black p-8 max-w-xs shadow-xl hidden md:block">
                         <h3 className="font-black text-2xl uppercase mb-2">Vault No. 01</h3>
                         <p className="font-mono text-xs uppercase leading-relaxed text-gray-600">
                             Secure storage for BioCode and UIOP origin hashes.
                         </p>
                    </div>
                    {/* Gold Accent Box */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-gold z-[-1]"></div>
                </div>
            </div>
        </div>
      </section>

      {/* DATA SECTION: Gold Background */}
      <section className="bg-brand-gold text-brand-black py-20 relative overflow-hidden">
         <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
         
         <div className="max-w-[1600px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            <div className="border-l-2 border-black/20 pl-6">
                <h4 className="font-black text-5xl mb-2">99.9%</h4>
                <p className="font-mono text-xs uppercase text-black/60 font-bold">Verification Accuracy</p>
            </div>
            <div className="border-l-2 border-black/20 pl-6">
                <h4 className="font-black text-5xl mb-2">4,096</h4>
                <p className="font-mono text-xs uppercase text-black/60 font-bold">Active Nodes</p>
            </div>
            <div className="border-l-2 border-black/20 pl-6">
                <h4 className="font-black text-5xl mb-2">12ms</h4>
                <p className="font-mono text-xs uppercase text-black/60 font-bold">Global Latency</p>
            </div>
            <div className="border-l-2 border-black/20 pl-6">
                <h4 className="font-black text-5xl mb-2">∞</h4>
                <p className="font-mono text-xs uppercase text-black/60 font-bold">Scalability</p>
            </div>
         </div>
      </section>

      {/* MANIFESTS / FEATURE GRID */}
      <section className="py-32 bg-brand-light text-black relative">
          <div className="max-w-[1600px] mx-auto px-6">
              
              <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-gray-300 pb-10">
                  <h2 className="text-7xl md:text-9xl font-black tracking-tighter uppercase">
                      Mani<br/>fests
                  </h2>
                  <div className="mb-4 md:mb-0 md:text-right">
                      <p className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-2">System Architecture</p>
                      <p className="text-xl font-bold max-w-md">Foundational pillars of the AI Verified Accreditation standard.</p>
                  </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Card 1 */}
                  <div className="group cursor-pointer">
                      <div className="relative aspect-[4/5] bg-gray-200 mb-6 overflow-hidden">
                          <div className="absolute inset-0 bg-brand-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-10 mix-blend-multiply"></div>
                          <img 
                             src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2670&auto=format&fit=crop" 
                             className="w-full h-full object-cover grayscale group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute top-4 left-4 z-20 bg-white px-3 py-1 font-mono text-xs font-bold">01</div>
                      </div>
                      <h3 className="text-4xl font-bold uppercase mb-2 group-hover:text-brand-gold transition-colors">BioCode</h3>
                      <p className="font-mono text-xs text-gray-500 uppercase border-t border-gray-300 pt-2 mt-2">Biological Logic / Safety</p>
                  </div>

                  {/* Card 2 - Offset */}
                  <div className="group cursor-pointer md:mt-24">
                      <div className="relative aspect-[4/5] bg-gray-200 mb-6 overflow-hidden">
                          <div className="absolute inset-0 bg-brand-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-10 mix-blend-multiply"></div>
                           <img 
                             src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop" 
                             className="w-full h-full object-cover grayscale group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute top-4 left-4 z-20 bg-white px-3 py-1 font-mono text-xs font-bold">02</div>
                      </div>
                      <h3 className="text-4xl font-bold uppercase mb-2 group-hover:text-brand-gold transition-colors">UIOP Hash</h3>
                      <p className="font-mono text-xs text-gray-500 uppercase border-t border-gray-300 pt-2 mt-2">Memory Anchor / Efficiency</p>
                  </div>

                  {/* Card 3 */}
                  <div className="group cursor-pointer">
                      <div className="relative aspect-[4/5] bg-gray-200 mb-6 overflow-hidden">
                          <div className="absolute inset-0 bg-brand-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-10 mix-blend-multiply"></div>
                           <img 
                             src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2670&auto=format&fit=crop" 
                             className="w-full h-full object-cover grayscale group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute top-4 left-4 z-20 bg-white px-3 py-1 font-mono text-xs font-bold">03</div>
                      </div>
                      <h3 className="text-4xl font-bold uppercase mb-2 group-hover:text-brand-gold transition-colors">Protocol</h3>
                      <p className="font-mono text-xs text-gray-500 uppercase border-t border-gray-300 pt-2 mt-2">Cryptographic Origin</p>
                  </div>
              </div>
          </div>
      </section>

      {/* CHART SECTION: Dark Mode Return */}
      <section className="py-20 bg-brand-black border-t border-gray-800">
          <div className="max-w-[1600px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                  <h2 className="text-5xl font-black text-white mb-6 uppercase tracking-tighter">
                      Network <br/> <span className="text-brand-gold">Activity</span>
                  </h2>
                  <p className="text-gray-400 mb-8 max-w-md font-light">
                      Real-time visualization of the accreditation network. Monitoring hash rates and origin verification requests across the distributed ledger.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="bg-brand-dark p-4 border-l-4 border-brand-gold">
                          <Activity className="text-white w-6 h-6 mb-2" />
                          <div className="text-2xl font-bold text-white">24.5k</div>
                          <div className="text-[10px] font-mono text-gray-500 uppercase">Daily Requests</div>
                      </div>
                      <div className="bg-brand-dark p-4 border-l-4 border-white">
                          <ShieldCheck className="text-white w-6 h-6 mb-2" />
                          <div className="text-2xl font-bold text-white">100%</div>
                          <div className="text-[10px] font-mono text-gray-500 uppercase">Uptime</div>
                      </div>
                  </div>
              </div>
              
              <div className="h-[400px] w-full bg-brand-dark border border-gray-800 p-4 relative">
                  <div className="absolute top-0 left-0 bg-brand-gold text-brand-black text-[10px] font-bold px-2 py-1">LIVE FEED</div>
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                        <defs>
                        <linearGradient id="colorGold" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#FFD34A" stopOpacity={0.5}/>
                            <stop offset="95%" stopColor="#FFD34A" stopOpacity={0}/>
                        </linearGradient>
                        </defs>
                        <Area type="step" dataKey="integrity" stroke="#FFD34A" strokeWidth={3} fill="url(#colorGold)" />
                    </AreaChart>
                  </ResponsiveContainer>
              </div>
          </div>
      </section>
    </div>
  );
};