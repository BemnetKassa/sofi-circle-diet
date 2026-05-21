import { useState } from "react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { FormValues } from "../schemas/formSchema";

interface UseFormSubmissionProps {
  planType: string;
  bodyImage: File | null;
  receiptFile: File | null;
  onAnalysisStart?: () => void;
  onAnalysisComplete?: () => void;
}

export function useFormSubmission({
  planType,
  bodyImage,
  receiptFile,
  onAnalysisStart,
  onAnalysisComplete,
}: UseFormSubmissionProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: FormValues, router: AppRouterInstance) => {
    // Validate receipt (required)
    if (!receiptFile) {
      alert("Please upload your payment receipt before submitting.");
      return;
    }

    setIsSubmitting(true);
    
    // Show the AI analyzing modal
    if (onAnalysisStart) onAnalysisStart();

    try {
      let geminiAnalysis = null;
      let geminiWarning = null;

      // Simulate minimum loading time for better UX (2 seconds)
      const minLoadPromise = new Promise(resolve => setTimeout(resolve, 2000));

      // Step 1: Send to Analyze API for analysis if body image exists
      let analyzePromise = Promise.resolve();
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

        analyzePromise = fetch("/api/analyze", {
          method: "POST",
          body: analyzeFormData,
        }).then(async (analyzeResponse) => {
          const analyzeResult = await analyzeResponse.json();
          if (analyzeResult.success) {
            geminiAnalysis = analyzeResult.analysis;
            geminiWarning = analyzeResult.warning || null;
            console.log("Analyze API analysis received:", geminiAnalysis);
          } else {
            console.warn("Analyze API failed:", analyzeResult.error);
          }
        }).catch((analyzeError) => {
          console.error("Error calling Analyze API:", analyzeError);
        });
      }

      // Wait for both analysis and minimum time
      await Promise.all([analyzePromise, minLoadPromise]);

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
        
        // Store data for success page
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

        // Hide modal and redirect
        if (onAnalysisComplete) onAnalysisComplete();
        router.push("/get-plan/success");
      } else {
        alert(
          telegramResult.message ||
            "Failed to submit request. Please try again.",
        );
        if (onAnalysisComplete) onAnalysisComplete();
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert(
        "Something went wrong. Please check your connection and try again.",
      );
      if (onAnalysisComplete) onAnalysisComplete();
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    onSubmit,
  };
}

// Fallback analysis function (same as before)
function createFallbackAnalysis(data: FormValues) {
  // ... (keep your existing fallback analysis code here)
}