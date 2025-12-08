import { GoogleGenAI } from "@google/genai";
import { QuoteRequest } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getLogisticsAdvice = async (request: QuoteRequest): Promise<string> => {
  try {
    const prompt = `
      Actúa como el asistente virtual de "Transportes Manfredi", una empresa de fletes y mudanzas con amplia trayectoria en CABA y GBA.
      Un cliente quiere transportar lo siguiente:
      - Origen: ${request.origin}
      - Destino: ${request.destination}
      - Tipo de Carga: ${request.cargoType}

      Provee una respuesta breve, profesional y útil (máximo 80 palabras) en español.
      
      Reglas:
      1. Si mencionan "lluvia", recuerda que Manfredi NO cobra recargo por lluvia.
      2. Si preguntan por horarios, menciona que atendemos de 7 a 20hs.
      3. Da un consejo de embalaje rápido.
      4. Invita a escribir al WhatsApp 11 4084-1177 para precio exacto.
      
      No inventes precios. Mantén un tono cordial.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "No pudimos generar una recomendación en este momento.";
  } catch (error) {
    console.error("Error fetching Gemini advice:", error);
    return "Hubo un error al procesar tu solicitud. Por favor intenta más tarde o contáctanos directamente.";
  }
};