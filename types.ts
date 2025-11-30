export enum Tab {
  DASHBOARD = 'DASHBOARD',
  RANK1 = 'RANK1',
  VERIFY = 'VERIFY',
  FORGE = 'FORGE',
  CERTIFICATES = 'CERTIFICATES',
  ABOUT = 'ABOUT',
}

export interface VerificationResult {
  score: number;
  integrity: string;
  hash: string;
  analysis: string;
  timestamp: string;
}

export interface LogEntry {
  id: string;
  timestamp: string;
  action: string;
  status: 'SUCCESS' | 'WARNING' | 'ERROR' | 'PENDING';
}

declare global {
  interface AIStudio {
    hasSelectedApiKey: () => Promise<boolean>;
    openSelectKey: () => Promise<void>;
  }

  interface Window {
    aistudio?: AIStudio;
  }
}