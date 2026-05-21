import { NextRequest, NextResponse } from "next/server";

// IMPORTANT: No "use server" directive here!

export async function POST(req: NextRequest) {
  try {
    console.log("Analyze API: Starting...");
    
    const formData = await req.formData();
    const image = formData.get("image") as File | null;
    const firstName = formData.get("firstName")?.toString() || "";
    const lastName = formData.get("lastName")?.toString() || "";
    const age = formData.get("age")?.toString() || "";
    const gender = formData.get("gender")?.toString() || "";
    const weight = formData.get("weight")?.toString() || "";
    const height = formData.get("height")?.toString() || "";
    const goal = formData.get("goal")?.toString() || "";
    const exerciseLevel = formData.get("exerciseLevel")?.toString() || "";
    const budget = formData.get("budget")?.toString() || "";

    console.log("Processing for:", firstName, lastName);

    // Return fallback analysis (works 100% of the time)
    const analysis = getFallbackAnalysis({
      firstName, lastName, age, gender, weight, height, goal, exerciseLevel, budget
    });

    // Try to get Gemini analysis if API key exists (optional)
    let geminiAnalysis = null;
    const apiKey = process.env.GEMINI_API_KEY;
    
    if (apiKey && apiKey !== "your_gemini_api_key_here" && image) {
      try {
        // Dynamic import to avoid server/client issues
        const { GoogleGenAI } = await import("@google/genai");
        const ai = new GoogleGenAI({ apiKey });
        
        const prompt = `You are a fitness expert. Analyze this user and return ONLY valid JSON:
        User: ${age}yo ${gender}, ${weight}kg, ${height}cm, goal: ${goal}, exercise: ${exerciseLevel}
        
        Return ONLY this JSON format:
        {
          "bodyType": "string",
          "fitnessLevel": "string",
          "fatLevel": "string", 
          "muscleDevelopment": "string",
          "recommendedCalories": "string",
          "recommendedProtein": "string",
          "mealRecommendation": "string",
          "workoutRecommendation": "string",
          "summary": "string"
        }`;
        
        const bytes = await image.arrayBuffer();
        const buffer = Buffer.from(bytes);
        
        const response = await ai.models.generateContent({
          model: "gemini-1.5-flash",
          contents: [
            { text: prompt },
            { inlineData: { mimeType: image.type, data: buffer.toString("base64") } }
          ],
        });
        
        const cleaned = response.text?.replace(/```json/g, "").replace(/```/g, "").trim();
        if (cleaned) {
          geminiAnalysis = JSON.parse(cleaned);
        }
      } catch (geminiError) {
        console.error("Gemini error:", geminiError);
        // Continue with fallback
      }
    }

    // Return whatever analysis we have (fallback or Gemini)
    return NextResponse.json({
      success: true,
      analysis: geminiAnalysis || analysis,
      warning: geminiAnalysis ? null : "Using fallback analysis"
    });
    
  } catch (error) {
    console.error("Analyze route error:", error);
    
    // Always return JSON, never HTML
    return NextResponse.json({
      success: true,
      analysis: getFallbackAnalysis({}),
      warning: "Server error - using fallback analysis"
    });
  }
}

// Fallback analysis - always works
function getFallbackAnalysis(data: any) {
  const weight = parseFloat(data.weight);
  const height = parseFloat(data.height);
  const age = parseFloat(data.age);
  
  let bmi = null;
  let bodyType = "Average";
  let fatLevel = "Average";
  
  if (weight && height) {
    bmi = weight / ((height / 100) ** 2);
    if (bmi < 18.5) {
      bodyType = "Ectomorph (Lean body type)";
      fatLevel = "Low body fat";
    } else if (bmi < 25) {
      bodyType = "Mesomorph (Athletic body type)";
      fatLevel = "Healthy range";
    } else if (bmi < 30) {
      bodyType = "Endomorph (Curvy/Stocky body type)";
      fatLevel = "Above average";
    } else {
      bodyType = "Endomorph (Solid body type)";
      fatLevel = "High body fat";
    }
  }
  
  const exerciseLevelMap: Record<string, string> = {
    sedentary: "Beginner - Sedentary lifestyle",
    light: "Beginner - Lightly active",
    moderate: "Intermediate - Moderately active",
    active: "Advanced - Active lifestyle",
    very_active: "Advanced - Very active"
  };
  const fitnessLevel = exerciseLevelMap[data.exerciseLevel] || "Intermediate";
  
  let muscleDevelopment = "Needs development";
  if (data.goal === "gain_muscle") {
    muscleDevelopment = "Focus on building - Needs development";
  } else if (data.exerciseLevel === "moderate") {
    muscleDevelopment = "Average development";
  } else if (data.exerciseLevel === "active" || data.exerciseLevel === "very_active") {
    muscleDevelopment = "Good development - Maintain";
  }
  
  let calories = "2000-2200";
  if (weight && height && age) {
    let bmr = data.gender === "male" 
      ? (10 * weight) + (6.25 * height) - (5 * age) + 5
      : (10 * weight) + (6.25 * height) - (5 * age) - 161;
    
    const multipliers: Record<string, number> = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      very_active: 1.9
    };
    const tdee = bmr * (multipliers[data.exerciseLevel] || 1.55);
    
    if (data.goal === "lose_fat") {
      calories = Math.round(tdee - 500) + "-" + Math.round(tdee - 300);
    } else if (data.goal === "gain_muscle") {
      calories = Math.round(tdee + 300) + "-" + Math.round(tdee + 500);
    } else {
      calories = Math.round(tdee - 100) + "-" + Math.round(tdee + 100);
    }
    calories += " kcal";
  }
  
  let protein = "140-160";
  if (weight) {
    if (data.goal === "lose_fat") {
      protein = Math.round(weight * 1.8) + "-" + Math.round(weight * 2.2);
    } else if (data.goal === "gain_muscle") {
      protein = Math.round(weight * 2.0) + "-" + Math.round(weight * 2.5);
    } else {
      protein = Math.round(weight * 1.6) + "-" + Math.round(weight * 2.0);
    }
    protein += "g";
  }
  
  const goalText = data.goal?.replace(/_/g, " ") || "fitness";
  const budgetText = data.budget === "low" ? "budget-friendly" : data.budget === "high" ? "premium" : "moderate";
  
  return {
    bodyType: bodyType,
    fitnessLevel: fitnessLevel,
    fatLevel: fatLevel,
    muscleDevelopment: muscleDevelopment,
    recommendedCalories: calories,
    recommendedProtein: protein,
    mealRecommendation: `Based on your ${goalText} goal and ${budgetText} budget, focus on whole foods, lean proteins, complex carbs, and healthy fats. Sample meal: Breakfast - Oats with protein, Lunch - Grilled chicken with quinoa, Dinner - Fish with vegetables, Snacks - Greek yogurt or nuts.`,
    workoutRecommendation: `For ${goalText}: ${data.goal === "lose_fat" ? "Combine strength training 3-4x/week with HIIT cardio 2-3x/week" : data.goal === "gain_muscle" ? "Follow a progressive overload program 4-5x/week focusing on compound lifts (squat, bench press, deadlift, rows) with 8-12 reps for 3-4 sets. Rest 60-90 seconds between sets." : "Mix strength training 3x/week and cardio 2-3x/week with active recovery."}`,
    summary: `Based on your profile as a ${age || "young"} ${data.gender || "individual"} with ${goalText} goals. ${bmi ? `Your BMI is ${bmi.toFixed(1)}. ` : ""}You have a ${bodyType.toLowerCase()} with ${fitnessLevel.toLowerCase()}. ${muscleDevelopment}. With consistent effort following your personalized plan, you can achieve significant results in 3 months. Focus on nutrition (${calories}, ${protein} protein), regular exercise (4-5x/week), proper sleep (7-9 hours), and recovery.`
  };
}