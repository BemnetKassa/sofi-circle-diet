import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const image = formData.get("image") as File;
    const weight = formData.get("weight");
    const height = formData.get("height");
    const exerciseLevel = formData.get("exerciseLevel");
    const goal = formData.get("goal");

    if (!image) {
      return NextResponse.json(
        { error: "Image is required" },
        { status: 400 }
      );
    }

    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const prompt = `
Analyze this person's physique for fitness guidance.

User Information:
- Weight: ${weight}
- Height: ${height}
- Exercise Level: ${exerciseLevel}
- Goal: ${goal}

Return ONLY valid JSON:

{
  "bodyType": "",
  "fitnessLevel": "",
  "fatLevel": "",
  "muscleDevelopment": "",
  "recommendedCalories": "",
  "recommendedProtein": "",
  "mealRecommendation": "",
  "workoutRecommendation": ""
}

Do not provide medical advice.
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: [
        {
          text: prompt,
        },
        {
          inlineData: {
            mimeType: image.type,
            data: buffer.toString("base64"),
          },
        },
      ],
    });

    const cleaned = response.text
      ?.replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    try {
      return NextResponse.json(JSON.parse(cleaned || "{}"));
    } catch (parseError) {
      console.error("Failed to parse Gemini response:", cleaned, parseError);
      return NextResponse.json(
        { error: "Invalid AI response", raw: cleaned || null },
        { status: 502 }
      );
    }
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to analyze image" },
      { status: 500 }
    );
  }
}