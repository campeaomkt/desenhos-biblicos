
import { GoogleGenAI, Type } from "@google/genai";

const apiKey = process.env.API_KEY || "";
const ai = new GoogleGenAI({ apiKey });

export async function getSpiritualLesson(age: number, topic: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Sugira uma atividade bíblica rápida e criativa para uma criança de ${age} anos sobre o tema "${topic}". Responda em Português do Brasil, de forma amigável e encorajadora para os pais. Mantenha a resposta curta (máximo 150 palavras).`,
      config: {
        temperature: 0.7,
        topP: 0.95,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Error fetching spiritual lesson:", error);
    return "Desculpe, tive um probleminha para pensar em uma aula agora. Mas o Kit está recheado de ótimas ideias!";
  }
}
