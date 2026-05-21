import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    console.log("Telegram API: Starting request processing...");
    
    const formData = await req.formData();
    console.log("Form data received, fields:", Array.from(formData.keys()));

    // Files
    const receipt = formData.get("receipt") as File | null;
    const bodyImage = formData.get("bodyImage") as File | null;
    const aiAnalysisRaw = formData.get("aiAnalysis") as string | null;

    // User Data
    const firstName = formData.get("firstName")?.toString() || "";
    const lastName = formData.get("lastName")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const telegramUsername = formData.get("telegramUsername")?.toString() || "";
    const age = formData.get("age")?.toString() || "";
    const gender = formData.get("gender")?.toString() || "";
    const height = formData.get("height")?.toString() || "";
    const weight = formData.get("weight")?.toString() || "";
    const goal = formData.get("goal")?.toString() || "";
    const exerciseLevel = formData.get("exerciseLevel")?.toString() || "";
    const dietaryPreferences = formData.get("dietaryPreferences")?.toString() || "";
    const allergies = formData.get("allergies")?.toString() || "";
    const budget = formData.get("budget")?.toString() || "";
    const amount = formData.get("amount")?.toString() || "";
    const planType = formData.get("planType")?.toString() || "";

    // Validate required fields
    if (!receipt) {
      return NextResponse.json(
        { success: false, message: "Payment receipt is required" },
        { status: 400 }
      );
    }

    // Telegram Credentials
    const tgToken = process.env.TELEGRAM_BOT_TOKEN;
    const tgChatId = process.env.TELEGRAM_CHAT_ID;

    if (!tgToken || !tgChatId) {
      console.error("Missing Telegram credentials");
      return NextResponse.json(
        { success: false, message: "Telegram credentials missing" },
        { status: 500 }
      );
    }

    // Parse AI analysis if available
    let aiAnalysis = null;
    if (aiAnalysisRaw) {
      try {
        aiAnalysis = JSON.parse(aiAnalysisRaw);
      } catch (e) {
        console.error("Failed to parse AI analysis:", e);
      }
    }

    // Calculate BMI
    const bmi = calculateBMI(Number(height), Number(weight));
    const goalText = goal.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());

    // Build message
    let message = `🥗 NEW NUTRITION PLAN REQUEST

👤 CLIENT INFORMATION
━━━━━━━━━━━━━━━━━━━━━
Name: ${firstName} ${lastName}
Email: ${email}
Telegram: ${telegramUsername ? `@${telegramUsername.replace("@", "")}` : "Not provided"}
Age: ${age}
Gender: ${gender}

📏 BODY STATISTICS
━━━━━━━━━━━━━━━━━━━━━
Height: ${height} cm
Weight: ${weight} kg
BMI: ${bmi}

🎯 GOALS & LIFESTYLE
━━━━━━━━━━━━━━━━━━━━━
Goal: ${goalText}
Exercise Level: ${formatExerciseLevel(exerciseLevel)}
Budget: ${budget}

🍽 DIETARY INFO
━━━━━━━━━━━━━━━━━━━━━
Preferences: ${dietaryPreferences || "Not specified"}
Allergies: ${allergies || "None"}

📦 PLAN DETAILS
━━━━━━━━━━━━━━━━━━━━━
Plan: ${planType.toUpperCase()}
Amount: ${amount} ETB`;

    // Add AI Analysis if available
    if (aiAnalysis) {
      message += `

🤖 GEMINI AI ANALYSIS
━━━━━━━━━━━━━━━━━━━━━
Body Type: ${aiAnalysis.bodyType || "N/A"}
Fitness Level: ${aiAnalysis.fitnessLevel || "N/A"}
Fat Level: ${aiAnalysis.fatLevel || "N/A"}
Muscle Development: ${aiAnalysis.muscleDevelopment || "N/A"}

📊 RECOMMENDATIONS
━━━━━━━━━━━━━━━━━━━━━
Daily Calories: ${aiAnalysis.recommendedCalories || "N/A"}
Daily Protein: ${aiAnalysis.recommendedProtein || "N/A"}g

Meal Plan:
${aiAnalysis.mealRecommendation || "N/A"}

Workout Plan:
${aiAnalysis.workoutRecommendation || "N/A"}

Summary:
${aiAnalysis.summary || "N/A"}`;
    }

    // Send message to Telegram
    const messageResponse = await fetch(
      `https://api.telegram.org/bot${tgToken}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: tgChatId, text: message }),
      }
    );

    const messageResult = await messageResponse.json();

    if (!messageResult.ok) {
      console.error("Telegram message error:", messageResult);
      return NextResponse.json(
        { success: false, message: "Failed to send Telegram message" },
        { status: 500 }
      );
    }

    // Send body image if provided
    if (bodyImage) {
      try {
        const bodyImageFormData = new FormData();
        bodyImageFormData.append("chat_id", tgChatId);
        bodyImageFormData.append("caption", `📸 Body Photo - ${firstName} ${lastName}`);
        bodyImageFormData.append("photo", bodyImage);

        await fetch(`https://api.telegram.org/bot${tgToken}/sendPhoto`, {
          method: "POST",
          body: bodyImageFormData,
        });
      } catch (error) {
        console.error("Error sending body image:", error);
      }
    }

    // Send receipt
    if (receipt) {
      try {
        const receiptFormData = new FormData();
        receiptFormData.append("chat_id", tgChatId);
        receiptFormData.append("caption", `💰 Payment Receipt - ${firstName} ${lastName} (${planType.toUpperCase()} Plan - ${amount} ETB)`);
        receiptFormData.append("document", receipt);

        const receiptResponse = await fetch(
          `https://api.telegram.org/bot${tgToken}/sendDocument`,
          { method: "POST", body: receiptFormData }
        );

        const receiptResult = await receiptResponse.json();
        if (!receiptResult.ok) {
          console.error("Receipt upload error:", receiptResult);
        }
      } catch (error) {
        console.error("Error sending receipt:", error);
      }
    }

    return NextResponse.json({ success: true, message: "Form submitted successfully" });
  } catch (error) {
    console.error("Telegram Route Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to process request" },
      { status: 500 }
    );
  }
}

// Helper functions
function calculateBMI(heightCm: number, weightKg: number): string {
  if (!heightCm || !weightKg || heightCm <= 0 || weightKg <= 0) return "N/A";
  const heightM = heightCm / 100;
  const bmi = weightKg / (heightM * heightM);
  return bmi.toFixed(1);
}

function formatExerciseLevel(level: string): string {
  const levels: Record<string, string> = {
    sedentary: "Sedentary (Little to no exercise)",
    light: "Light (1-2 days/week)",
    moderate: "Moderate (3-4 days/week)",
    active: "Active (5-6 days/week)",
    very_active: "Very Active (Daily intense exercise)",
  };
  return levels[level] || level || "Not specified";
}