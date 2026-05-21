import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    // Files
    const receipt = formData.get("receipt") as File | null;

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

    const dietaryPreferences =
      formData.get("dietaryPreferences")?.toString() || "";

    const allergies = formData.get("allergies")?.toString() || "";

    const budget = formData.get("budget")?.toString() || "";

    const amount = formData.get("amount")?.toString() || "";

    const planType = formData.get("planType")?.toString() || "";

    // Telegram Credentials
    const tgToken = process.env.TELEGRAM_BOT_TOKEN;

    const tgChatId = process.env.TELEGRAM_CHAT_ID;

    if (!tgToken || !tgChatId) {
      return NextResponse.json(
        {
          success: false,
          message: "Telegram credentials missing",
        },
        { status: 500 },
      );
    }

    // Beautiful Telegram Message
    const message = `
🥗 NEW NUTRITION PLAN REQUEST

👤 Client Information
━━━━━━━━━━━━━━
• Name: ${firstName} ${lastName}
• Email: ${email}
• Telegram: ${
    telegramUsername
      ? `@${telegramUsername.replace("@", "")}`
      : "Not provided"
  }
• Age: ${age}
• Gender: ${gender}

📏 Body Statistics
━━━━━━━━━━━━━━
• Height: ${height} cm
• Weight: ${weight} kg

🎯 Goal
━━━━━━━━━━━━━━
• ${goal.replace("_", " ")}

🍽 Dietary Preferences
━━━━━━━━━━━━━━
• ${dietaryPreferences || "Not specified"}

⚠️ Allergies
━━━━━━━━━━━━━━
• ${allergies || "None"}

💰 Budget
━━━━━━━━━━━━━━
• ${budget}

📦 Selected Plan
━━━━━━━━━━━━━━
• ${planType.toUpperCase()}

💵 Amount Paid
━━━━━━━━━━━━━━
• ${amount} ETB
`;

    // Send Message
    const messageResponse = await fetch(
      `https://api.telegram.org/bot${tgToken}/sendMessage`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          chat_id: tgChatId,
          text: message,
        }),
      },
    );

    const messageResult = await messageResponse.json();

    if (!messageResult.ok) {
      console.error(messageResult);

      return NextResponse.json(
        {
          success: false,
          message: "Failed to send Telegram message",
        },
        { status: 500 },
      );
    }

    // Send Receipt
    if (receipt) {
      const receiptFormData = new FormData();

      receiptFormData.append("chat_id", tgChatId);

      receiptFormData.append(
        "caption",
        `Payment Receipt - ${firstName} ${lastName}`,
      );

      receiptFormData.append("document", receipt);

      const receiptResponse = await fetch(
        `https://api.telegram.org/bot${tgToken}/sendDocument`,
        {
          method: "POST",
          body: receiptFormData,
        },
      );

      const receiptResult = await receiptResponse.json();

      if (!receiptResult.ok) {
        console.error(receiptResult);

        return NextResponse.json(
          {
            success: false,
            message: "Message sent but receipt upload failed",
          },
          { status: 500 },
        );
      }
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("Telegram Route Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to process request",
      },
      { status: 500 },
    );
  }
}
