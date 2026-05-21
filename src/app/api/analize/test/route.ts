import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function GET() {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: "Say hello",
  });

  return NextResponse.json({
    message: response.text,
  });
}