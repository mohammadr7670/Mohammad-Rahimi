import { GoogleGenAI, Type } from "@google/genai";

export const verifyContent = async (content: string): Promise<any> => {
  // Create a new instance to ensure we use the latest API key
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `You are AVA (AI Verified Accreditation), a futuristic, high-security AI system. 
      Analyze the following text/code for security, integrity, and quality. 
      Return a JSON object with the following fields:
      - score (number 0-100)
      - integrity (string: "SECURE", "COMPROMISED", "UNKNOWN")
      - hash (string: generate a fake SHA-256 looking hash of the content)
      - analysis (string: a brief, technical, 2-sentence analysis in a robotic, authoritative tone).
      
      Input: "${content}"`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            score: { type: Type.NUMBER },
            integrity: { type: Type.STRING },
            hash: { type: Type.STRING },
            analysis: { type: Type.STRING }
          },
          required: ["score", "integrity", "hash", "analysis"]
        }
      }
    });
    
    return response.text ? JSON.parse(response.text) : null;
  } catch (error) {
    console.error("Verification failed:", error);
    throw error;
  }
};

export const generateBanner = async (prompt: string): Promise<string | null> => {
  // Create a new instance to ensure we use the latest API key
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

  try {
    // Using the pro-image-preview model for high fidelity as requested
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-image-preview',
      contents: {
        parts: [{ text: prompt }]
      },
      config: {
        imageConfig: {
          aspectRatio: '16:9',
          imageSize: '2K' 
        }
      }
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    return null;

  } catch (error: any) {
    console.warn("Image generation with gemini-3-pro-image-preview failed, attempting fallback.", error);

    // Fallback to gemini-2.5-flash-image if permission denied or model not available
    if (error.status === 403 || error.status === 404 || error.toString().includes('PERMISSION_DENIED')) {
       try {
        console.log("Fallback: Using gemini-2.5-flash-image");
        const fallbackResponse = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: {
            parts: [{ text: prompt }]
          },
          config: {
            imageConfig: {
              aspectRatio: '16:9',
              // imageSize is not supported in flash-image
            }
          }
        });

        for (const part of fallbackResponse.candidates?.[0]?.content?.parts || []) {
          if (part.inlineData) {
            return `data:image/png;base64,${part.inlineData.data}`;
          }
        }
       } catch (fallbackError) {
         console.error("Fallback generation also failed:", fallbackError);
         throw fallbackError;
       }
    }
    
    throw error;
  }
};