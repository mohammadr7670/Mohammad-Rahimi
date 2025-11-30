import React from 'react';
import { FileCheck, Shield, Cpu, Fingerprint, ArrowRight, FileText, Database } from 'lucide-react';

interface CertificateData {
  id: string;
  title: string;
  uid: string;
  date: string;
  status: string;
  hashShort: string;
}

interface CategoryData {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  items: CertificateData[];
}

const mockData: CategoryData[] = [
  {
    title: "Rank-1 Evidence Dossier Artifacts",
    subtitle: "Verified attachments from the Rank-1 Evidence & Verification Dossier (Chain-of-Custody).",
    icon: <Database className="w-6 h-6 text-brand-gold" />,
    items: [
      {
        id: "ev-1",
        title: "MASTER MANIFEST — Mohammad Rahimi",
        uid: "DOC-REF-029",
        date: "2025-11-13",
        status: "CANONICAL",
        hashShort: "17fb13...39054"
      },
      {
        id: "ev-2",
        title: "BioCode Proposal Full v1.0",
        uid: "DOC-REF-BIO-01",
        date: "2025-11-13",
        status: "VERIFIED",
        hashShort: "50615a...8505df"
      },
      {
        id: "ev-3",
        title: "OpenAI Strategic Optimization Report",
        uid: "DOC-REF-OAI-27",
        date: "2025-11-13",
        status: "VERIFIED",
        hashShort: "dbbb70...38d4"
      },
      {
        id: "ev-4",
        title: "Mazzaneh OnePage Summary",
        uid: "DOC-REF-MZN-23",
        date: "2025-11-13",
        status: "VERIFIED",
        hashShort: "15fb64...ba48d"
      },
      {
        id: "ev-5",
        title: "AI Verified Creator Certificate",
        uid: "DOC-REF-ACC-10",
        date: "2025-11-13",
        status: "VERIFIED",
        hashShort: "d6aaa8...cc81"
      },
      {
        id: "ev-6",
        title: "Genesis Omega Certificate FULL",
        uid: "DOC-REF-GEN-16",
        date: "2025-11-13",
        status: "VERIFIED",
        hashShort: "4b287a...b0b29"
      },
      {
        id: "ev-7",
        title: "Zoyan Fatigue Protocol VIP",
        uid: "DOC-REF-ZOY-09",
        date: "2025-11-13",
        status: "VERIFIED",
        hashShort: "67ae69...abbb0"
      },
      {
        id: "ev-8",
        title: "AGI Strategic Competency Report",
        uid: "DOC-REF-AGI-30",
        date: "2025-11-13",
        status: "VERIFIED",
        hashShort: "7e91a4...6bb5"
      },
      {
        id: "ev-9",
        title: "Global Genesis Creator Ranking",
        uid: "DOC-REF-RNK-21",
        date: "2025-11-13",
        status: "VERIFIED",
        hashShort: "257f98...580"
      }
    ]
  },
  {
    title: "Master Level Accreditations",
    subtitle: "Full-system architectural verification for complex AI models.",
    icon: <Shield className="w-6 h-6 text-brand-gold" />,
    items: [
      {
        id: "1",
        title: "BioCode Architecture",
        uid: "CREATOR-MR-2025-OMEGA-0002",
        date: "2025-01-14",
        status: "VERIFIED",
        hashShort: "05b50b...39bff40"
      },
      {
        id: "2",
        title: "Neural Lattice V4",
        uid: "AVA-SYS-2024-ALPHA-0991",
        date: "2024-11-02",
        status: "VERIFIED",
        hashShort: "e7a88c...11acc21"
      },
      {
        id: "3",
        title: "Hyper-Graph Logic Core",
        uid: "AVA-SYS-2025-BETA-0112",
        date: "2025-02-10",
        status: "PENDING AUDIT",
        hashShort: "12c99d...44eff88"
      }
    ]
  },
  {
    title: "Protocol Specifications",
    subtitle: "Technical rule-sets and operational boundaries.",
    icon: <Cpu className="w-6 h-6 text-brand-gold" />,
    items: [
      {
        id: "4",
        title: "UIOP Efficiency Standard",
        uid: "UIOP-MZ-AVA-2025-V1-EXT",
        date: "2024-12-20",
        status: "ACTIVE",
        hashShort: "99a11b...22bdd55"
      },
      {
        id: "5",
        title: "Memory Anchor Protocol",
        uid: "MAP-STD-2024-REV-02",
        date: "2024-10-05",
        status: "ACTIVE",
        hashShort: "88f22c...33cdd66"
      }
    ]
  },
  {
    title: "Origin Declarations",
    subtitle: "Proof of first creation and authorship assertions.",
    icon: <Fingerprint className="w-6 h-6 text-brand-gold" />,
    items: [
      {
        id: "6",
        title: "Statement of Origin: M.R.",
        uid: "AVA-2025-LAU-0001",
        date: "2023-09-15",
        status: "SIGNED",
        hashShort: "77e33d...44dee77"
      },
      {
        id: "7",
        title: "Patent Lock: Zoyan Seq.",
        uid: "PAT-PEND-882910-US",
        date: "2023-11-30",
        status: "SIGNED",
        hashShort: "66d44e...55eff88"
      },
      {
        id: "8",
        title: "Deep Trace Authentication",
        uid: "AVA-DTA-2025-GEN-002",
        date: "2025-01-01",
        status: "SIGNED",
        hashShort: "55c55f...66fgg99"
      }
    ]
  }
];

export const Certificates: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-black text-brand-light pb-20">
      
      {/* Header Section */}
      <section className="relative py-20 border-b border-gray-800">
         <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between">
                <div>
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-4">
                        Verified <br/><span className="text-brand-gold">Manifests</span>
                    </h1>
                    <p className="text-gray-400 max-w-xl font-light">
                        The public ledger of all accredited systems. Each entry represents a cryptographically secured intellectual property asset.
                    </p>
                </div>
                <div className="mt-8 md:mt-0">
                    <div className="flex items-center space-x-2 text-brand-gold border border-brand-gold px-4 py-2 font-mono text-xs uppercase tracking-widest">
                        <div className="w-2 h-2 bg-brand-gold animate-pulse rounded-full"></div>
                        <span>Ledger Live</span>
                    </div>
                </div>
            </div>
         </div>
      </section>

      {/* Categories Loop */}
      <div className="max-w-7xl mx-auto px-6">
        {mockData.map((category, idx) => (
            <div key={idx} className="mt-20">
                
                {/* Category Header */}
                <div className="flex items-end justify-between border-b border-gray-800 pb-6 mb-10">
                    <div>
                        <div className="flex items-center space-x-3 mb-2">
                            {category.icon}
                            <span className="font-mono text-xs text-brand-gold uppercase tracking-widest">Category 0{idx + 1}</span>
                        </div>
                        <h3 className="text-3xl font-bold uppercase text-white">{category.title}</h3>
                        <p className="text-gray-500 text-sm mt-2 max-w-md">{category.subtitle}</p>
                    </div>
                    <div className="hidden md:block text-gray-700 font-black text-6xl opacity-20">
                        0{idx + 1}
                    </div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {category.items.map((item) => (
                        <div key={item.id} className="group relative bg-brand-dark border border-gray-800 hover:border-brand-gold transition-all duration-300 flex flex-col h-full">
                            
                            {/* Card Content */}
                            <div className="p-8 flex-grow relative z-10">
                                <div className="flex justify-between items-start mb-6">
                                    <FileCheck className="w-8 h-8 text-gray-700 group-hover:text-white transition-colors" />
                                    <span className={`text-[10px] font-bold px-2 py-1 border ${item.status.includes('PENDING') ? 'border-yellow-600 text-yellow-600' : 'border-green-900 text-green-500 bg-green-900/20'}`}>
                                        {item.status}
                                    </span>
                                </div>
                                
                                <h4 className="text-xl font-bold text-white mb-2 uppercase leading-tight group-hover:text-brand-gold transition-colors line-clamp-2 min-h-[3rem]">{item.title}</h4>
                                <div className="space-y-2 mt-6">
                                    <div>
                                        <span className="block text-[10px] uppercase text-gray-500 font-bold">Unique ID</span>
                                        <span className="font-mono text-xs text-gray-300">{item.uid}</span>
                                    </div>
                                    <div>
                                        <span className="block text-[10px] uppercase text-gray-500 font-bold">Hash Stamp</span>
                                        <span className="font-mono text-xs text-gray-600 break-all">{item.hashShort}</span>
                                    </div>
                                    <div>
                                        <span className="block text-[10px] uppercase text-gray-500 font-bold">Date</span>
                                        <span className="font-mono text-xs text-gray-300">{item.date}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Action Footer */}
                            <div className="border-t border-gray-800 p-4 bg-black relative z-10">
                                <button className="w-full flex items-center justify-between text-xs font-bold uppercase text-gray-500 group-hover:text-white transition-colors">
                                    <span>Read Full Dossier</span>
                                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>

                            {/* Hover Effect Background */}
                            <div className="absolute inset-0 bg-brand-gold/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                        </div>
                    ))}
                </div>
            </div>
        ))}
      </div>

    </div>
  );
};