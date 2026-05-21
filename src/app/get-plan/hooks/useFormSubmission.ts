import { useState } from "react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { FormValues } from "../schemas/formSchema";

interface UseFormSubmissionProps {
  planType: string;
  bodyImage: File | null;
  receiptFile: File | null;
}

export function useFormSubmission({
  planType,
  bodyImage,
  receiptFile,
}: UseFormSubmissionProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: FormValues, router: AppRouterInstance) => {
    // Validate receipt (required)
    if (!receiptFile) {
      alert("Please upload your payment receipt before submitting.");
      return;
    }

    setIsSubmitting(true);

    try {
      let geminiAnalysis = null;
      let geminiWarning = null;

      // Step 1: Send to Analyze API for analysis if body image exists
      if (bodyImage) {
        console.log("Sending to Analyze API for analysis...");
        const analyzeFormData = new FormData();
        analyzeFormData.append("image", bodyImage);
        analyzeFormData.append("firstName", data.firstName);
        analyzeFormData.append("lastName", data.lastName);
        analyzeFormData.append("email", data.email);
        analyzeFormData.append("age", data.age);
        analyzeFormData.append("gender", data.gender);
        analyzeFormData.append("weight", data.weight);
        analyzeFormData.append("height", data.height);
        analyzeFormData.append("goal", data.goal);
        analyzeFormData.append("exerciseLevel", data.exerciseLevel);
        analyzeFormData.append("budget", data.budget);

        try {
          const analyzeResponse = await fetch("/api/analyze", {
            method: "POST",
            body: analyzeFormData,
          });

          const analyzeResult = await analyzeResponse.json();

          if (analyzeResult.success) {
            geminiAnalysis = analyzeResult.analysis;
            geminiWarning = analyzeResult.warning || null;
            console.log("Analyze API analysis received:", geminiAnalysis);
            if (geminiWarning) {
              console.warn("Analyze API warning:", geminiWarning);
            }
          } else {
            console.warn("Analyze API failed:", analyzeResult.error);
          }
        } catch (analyzeError) {
          console.error("Error calling Analyze API:", analyzeError);
          // Continue without AI analysis if it fails
        }
      }

      // If no analysis (either no image or API failed), create fallback analysis
      if (!geminiAnalysis) {
        console.log("Creating fallback analysis...");
        geminiAnalysis = createFallbackAnalysis(data);
      }

      // Step 2: Send to Telegram API directly
      console.log("Sending to Telegram API...");
      const telegramFormData = new FormData();

      // Add all form data
      telegramFormData.append("firstName", data.firstName);
      telegramFormData.append("lastName", data.lastName);
      telegramFormData.append("email", data.email);
      telegramFormData.append("telegramUsername", data.telegramUsername || "");
      telegramFormData.append("age", data.age);
      telegramFormData.append("gender", data.gender);
      telegramFormData.append("height", data.height);
      telegramFormData.append("weight", data.weight);
      telegramFormData.append("goal", data.goal);
      telegramFormData.append("exerciseLevel", data.exerciseLevel);
      telegramFormData.append(
        "dietaryPreferences",
        data.dietaryPreferences || "",
      );
      telegramFormData.append("allergies", data.allergies || "");
      telegramFormData.append("budget", data.budget);
      telegramFormData.append("planType", planType);

      const planPrice = planType === "premium" ? 4999 : 4000;
      telegramFormData.append("amount", String(planPrice));

      // Add receipt (required)
      telegramFormData.append("receipt", receiptFile);

      // Add body image if exists (optional)
      if (bodyImage) {
        telegramFormData.append("bodyImage", bodyImage);
      }

      // Add AI analysis if available
      if (geminiAnalysis) {
        telegramFormData.append("aiAnalysis", JSON.stringify(geminiAnalysis));
      }

      // Send directly to /api/telegram
      const telegramResponse = await fetch("/api/telegram", {
        method: "POST",
        body: telegramFormData,
      });

      const telegramResult = await telegramResponse.json();

      if (telegramResult.success) {
        console.log("Successfully submitted to Telegram");
        
        // Store data for success page (ALWAYS store, even if fallback)
        sessionStorage.setItem(
          "geminiAnalysis",
          JSON.stringify(geminiAnalysis),
        );
        sessionStorage.setItem(
          "userFormData",
          JSON.stringify({
            firstName: data.firstName,
            lastName: data.lastName,
            age: data.age,
            gender: data.gender,
            height: data.height,
            weight: data.weight,
            goal: data.goal,
            exerciseLevel: data.exerciseLevel,
          }),
        );
        
        if (geminiWarning) {
          sessionStorage.setItem("geminiWarning", geminiWarning);
        }

        router.push("/get-plan/success");
      } else {
        alert(
          telegramResult.message ||
            "Failed to submit request. Please try again.",
        );
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert(
        "Something went wrong. Please check your connection and try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    onSubmit,
  };
}

// Fallback analysis function - generates AI-like analysis without calling external API
function createFallbackAnalysis(data: FormValues) {
  const weight = parseFloat(data.weight);
  const height = parseFloat(data.height);
  const age = parseFloat(data.age);
  
  // Calculate BMI
  let bmi = null;
  let bodyType = "Average";
  let fatLevel = "Average";
  
  if (weight && height) {
    bmi = weight / ((height / 100) ** 2);
    
    // Determine body type
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
  
  // Determine fitness level
  const exerciseLevelMap: Record<string, string> = {
    sedentary: "Beginner - Sedentary lifestyle",
    light: "Beginner - Lightly active",
    moderate: "Intermediate - Moderately active",
    active: "Advanced - Active lifestyle",
    very_active: "Advanced - Very active"
  };
  const fitnessLevel = exerciseLevelMap[data.exerciseLevel] || "Intermediate";
  
  // Determine muscle development
  let muscleDevelopment = "Needs development";
  if (data.goal === "gain_muscle") {
    muscleDevelopment = "Focus on building - Needs development";
  } else if (data.exerciseLevel === "moderate") {
    muscleDevelopment = "Average development";
  } else if (data.exerciseLevel === "active" || data.exerciseLevel === "very_active") {
    muscleDevelopment = "Good development - Maintain";
  }
  
  // Calculate calories
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
  }
  
  // Calculate protein
  let protein = "140-160";
  if (weight) {
    if (data.goal === "lose_fat") {
      protein = Math.round(weight * 1.8) + "-" + Math.round(weight * 2.2);
    } else if (data.goal === "gain_muscle") {
      protein = Math.round(weight * 2.0) + "-" + Math.round(weight * 2.5);
    } else {
      protein = Math.round(weight * 1.6) + "-" + Math.round(weight * 2.0);
    }
  }
  
  // Add units to protein and calories
  const caloriesWithUnits = calories.includes("-") 
    ? calories.split("-").map(c => `${c} kcal`).join(" - ")
    : `${calories} kcal`;
  
  const proteinWithUnits = protein.includes("-")
    ? protein.split("-").map(p => `${p}g`).join(" - ")
    : `${protein}g`;
  
  const goalText = data.goal.replace(/_/g, " ");
  const budgetText = data.budget === "low" ? "budget-friendly" : data.budget === "high" ? "premium" : "moderate";
  
  return {
    bodyType: bodyType,
    fitnessLevel: fitnessLevel,
    fatLevel: fatLevel,
    muscleDevelopment: muscleDevelopment,
    recommendedCalories: caloriesWithUnits,
    recommendedProtein: proteinWithUnits,
    mealRecommendation: `Based on your ${goalText} goal and ${budgetText} budget, focus on whole foods, lean proteins, complex carbs, and healthy fats. Sample meal: Breakfast - Oats with protein powder and berries, Lunch - Grilled chicken breast with quinoa and roasted vegetables, Dinner - Baked fish with sweet potato and steamed broccoli, Snacks - Greek yogurt, nuts, or protein shake.`,
    workoutRecommendation: `For ${goalText}: ${data.goal === "lose_fat" ? "Combine strength training 3-4x/week with HIIT cardio 2-3x/week. Focus on compound exercises like squats, deadlifts, push-ups, and rows. Add 10,000 steps daily." : data.goal === "gain_muscle" ? "Follow a progressive overload program 4-5x/week focusing on compound lifts (squat, bench press, deadlift, overhead press, rows) with 8-12 reps for 3-4 sets. Rest 60-90 seconds between sets." : "Mix strength training 3x/week and cardio 2-3x/week with active recovery. Include full-body workouts and vary your cardio between LISS and moderate intensity."}.`,
    summary: `Based on your profile as a ${age}-year-old ${data.gender === "male" ? "male" : "female"} with ${goalText} goals. ${bmi ? `Your BMI is ${bmi.toFixed(1)}. ` : ""}You have a ${bodyType.toLowerCase()} with ${fitnessLevel.toLowerCase()}. ${muscleDevelopment}. With consistent effort following your personalized plan, you can achieve significant results in 3 months. Focus on nutrition (${caloriesWithUnits}, ${proteinWithUnits} protein), regular exercise (4-5x/week), proper sleep (7-9 hours), and recovery. Our nutritionist will provide a detailed plan within 24-48 hours.`
  };
}