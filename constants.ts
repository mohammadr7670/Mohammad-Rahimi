export const DEFAULT_IMAGE_PROMPT = `A cinematic, ultra-high resolution hero banner for a deep tech website called **AVA (AI Verified Accreditation)**.

The overall color palette must be a high-contrast blend of **Deep Black, Electric Cyan, and Gold/Amber.**

**Composition:**
1.  **Central Element:** A large, multi-faceted, glowing **Gold Hexagon** structure is centered, with the three letters **'AVA'** carved into it in a clean, futuristic, authoritative font. The hexagon should pulse with a soft, warm amber light, suggesting security and accreditation.
2.  **Background/Depth:** The background is an infinite void of **deep black**. Emerging from the center and receding into the distance is a grid of **Electric Cyan** data streams, holographic wireframes, and fast-moving light traces, creating a sense of **deep computational space** or a **network graph**.
3.  **Surrounding Data:** Surrounding the central hexagon, place four to six smaller, floating, semi-transparent **cyan text panels** that look like data feeds or code snippets. These represent the verified concepts (e.g., BioCode, UIOP Hash, Origin Statement). The text should be blurred but clearly contain lines of **monospace code or hash strings** (like SHA-256).
4.  **Aesthetic:** The entire scene must look like a **secured cryptographic vault** or a **live terminal display** from a high-budget sci-fi film (e.g., *Tron* or *Minority Report*). Use subtle volumetric lighting and depth-of-field effects to make the gold AVA hexagon stand out powerfully against the blue code streams.
5.  **Text Footer:** Below the main composition, include the tagline in a subtle, golden, all-caps font: **"THE INCORRUPTIBLE STANDARD."**

**Style Keywords:** Cyberpunk, Deep Learning, Cryptography, Blockchain, Digital Vault, Holographic UI, 4K, Cinematic.`;

export const MOCK_LOGS = [
  { id: '1', timestamp: '09:41:02', action: 'SYSTEM_INIT', status: 'SUCCESS' },
  { id: '2', timestamp: '09:41:05', action: 'NETWORK_HANDSHAKE', status: 'SUCCESS' },
  { id: '3', timestamp: '09:42:10', action: 'INTEGRITY_CHECK', status: 'WARNING' },
  { id: '4', timestamp: '09:45:00', action: 'VAULT_SYNC', status: 'PENDING' },
] as const;