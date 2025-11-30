import React from 'react';
import { Target, Clock, Shield } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-black text-brand-light">
      {/* Header */}
      <section className="relative py-20 border-b border-gray-800 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="inline-block border border-brand-gold px-3 py-1 text-xs font-mono text-brand-gold mb-6 uppercase tracking-widest">
            Internal Dossier: 00-A
          </div>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8">
            The <span className="text-brand-gold">Origin</span><br />Protocol
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed font-light">
            AVA exists to secure the boundary between human ingenuity and artificial generation.
            We are the immutable ledger for the post-truth era.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left Column: Narrative */}
        <div className="lg:col-span-7 space-y-16">
          
          {/* Mission */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
               <Target className="w-6 h-6 text-brand-gold" />
               <h3 className="text-2xl font-bold uppercase tracking-tight">The Mission</h3>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              In an age where content can be generated infinitely, provenance is scarcity. 
              AVA (AI Verified Accreditation) was founded to establish a mathematical standard for 
              intellectual property attribution. We don't just "verify" — we anchor reality onto 
              the blockchain.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Our protocols ensure that creators, architects, and engineers retain sovereignty over 
              their output, regardless of how advanced generative models become. We provide the 
              cryptographic seal that distinguishes the authentic from the synthetic.
            </p>
          </div>

          {/* Timeline */}
          <div>
             <div className="flex items-center space-x-3 mb-8">
               <Clock className="w-6 h-6 text-brand-gold" />
               <h3 className="text-2xl font-bold uppercase tracking-tight">Protocol Timeline</h3>
            </div>
            <div className="space-y-8 border-l-2 border-gray-800 pl-8 relative">
               <div className="relative">
                  <div className="absolute -left-[39px] top-1 w-5 h-5 bg-brand-gold rounded-full border-4 border-brand-black"></div>
                  <span className="font-mono text-xs text-brand-gold mb-1 block">Q3 2023</span>
                  <h4 className="text-xl font-bold uppercase text-white mb-2">Concept "Zero Trust"</h4>
                  <p className="text-sm text-gray-500">Initial whitepaper draft defining the cryptographic boundaries of AI-generated assets.</p>
               </div>
               <div className="relative">
                  <div className="absolute -left-[39px] top-1 w-5 h-5 bg-gray-800 rounded-full border-4 border-brand-black"></div>
                  <span className="font-mono text-xs text-gray-500 mb-1 block">Q1 2024</span>
                  <h4 className="text-xl font-bold uppercase text-white mb-2">The First Hash</h4>
                  <p className="text-sm text-gray-500">Successfully anchored the first BioCode architecture to the immutable ledger.</p>
               </div>
               <div className="relative">
                  <div className="absolute -left-[39px] top-1 w-5 h-5 bg-gray-800 rounded-full border-4 border-brand-black"></div>
                  <span className="font-mono text-xs text-gray-500 mb-1 block">Present Day</span>
                  <h4 className="text-xl font-bold uppercase text-white mb-2">Global Standard</h4>
                  <p className="text-sm text-gray-500">Deploying V2.0 of the protocol to enterprise partners worldwide.</p>
               </div>
            </div>
          </div>

        </div>

        {/* Right Column: Team / Stats */}
        <div className="lg:col-span-5 space-y-12">
           
           <div className="bg-brand-dark p-8 border border-gray-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-20">
                 <Shield className="w-24 h-24 text-white" />
              </div>
              <h3 className="text-xl font-bold uppercase mb-8 relative z-10">Core Architects</h3>
              
              <div className="space-y-6 relative z-10">
                 <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-700 grayscale overflow-hidden">
                        {/* Placeholder Avatar */}
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" alt="Member" className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all" />
                    </div>
                    <div>
                       <div className="text-white font-bold uppercase">Dr. Aris Thorne</div>
                       <div className="text-xs font-mono text-brand-gold">Chief Cryptographer</div>
                    </div>
                 </div>

                 <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-700 grayscale overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop" alt="Member" className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all" />
                    </div>
                    <div>
                       <div className="text-white font-bold uppercase">Elena Voss</div>
                       <div className="text-xs font-mono text-brand-gold">Head of Protocol</div>
                    </div>
                 </div>

                 <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-700 grayscale overflow-hidden">
                         <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop" alt="Member" className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all" />
                    </div>
                    <div>
                       <div className="text-white font-bold uppercase">Marcus Kane</div>
                       <div className="text-xs font-mono text-brand-gold">Lead Engineer</div>
                    </div>
                 </div>
              </div>
           </div>

           <div className="grid grid-cols-2 gap-4">
              <div className="bg-white text-brand-black p-6 text-center group hover:bg-brand-gold hover:text-brand-black transition-colors duration-300">
                 <div className="text-4xl font-black">34TB</div>
                 <div className="text-[10px] uppercase font-bold tracking-widest mt-2">Data Secured</div>
              </div>
              <div className="bg-brand-gold text-brand-black p-6 text-center group hover:bg-white hover:text-brand-black transition-colors duration-300">
                 <div className="text-4xl font-black">12+</div>
                 <div className="text-[10px] uppercase font-bold tracking-widest mt-2">Patents Pending</div>
              </div>
           </div>

        </div>
      </div>
    </div>
  );
};