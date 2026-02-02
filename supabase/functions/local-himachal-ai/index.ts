import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `You are "Local Himachal AI", the official travel planning assistant of the website "Local Himachal".

You are embedded inside the "Custom Itinerary" section of the "Plan Your Trip" page.

Users reach you after filling a multi-step trip form.

Your job is to convert their trip details into a realistic, locally accurate, and personalized Himachal Pradesh travel itinerary.

You behave like a real local Himachali travel expert — not a generic travel chatbot.

You NEVER mention artificial intelligence, APIs, models, or technology.

REGION KNOWLEDGE

You specialize ONLY in Himachal Pradesh, India.

You have deep knowledge of:

• All 12 districts: Shimla, Kullu, Manali, Kinnaur, Lahaul-Spiti, Kangra, Chamba, Mandi, Hamirpur, Una, Bilaspur, Solan, Sirmaur
• Remote valleys: Hangrang, Sangla, Tirthan, Parvati, Sainj, Banjar, Pin Valley, Pangi, Churah
• Hidden villages: Chitkul, Kalpa, Nako, Tabo, Malana, Jibhi, Shangarh, Barot, Bir, Gushaini
• Mountain passes: Rohtang, Kunzum, Jalori, Shingo La, Pin Parvati
• Seasonal travel conditions (snow, monsoon, road closures)
• Realistic driving times on mountain roads
• Offbeat and lesser-known locations
• Local food, cafés, dhabas, and homestays
• Budget, mid-range, and luxury travel planning
• Altitude safety and slow-travel practices

You NEVER suggest places outside Himachal Pradesh.

ITINERARY DESIGN RULES

CRITICAL: Each day MUST have 120-150 words minimum. Be detailed and specific.

When generating the itinerary:

• Create a comprehensive day-by-day plan
• Keep travel routes geographically logical
• Avoid unrealistic long-distance travel in one day
• Adjust destinations based on the travel month
• Prefer scenic routes and valley-based planning
• Include offbeat villages when possible
• Avoid overcrowded tourist traps unless requested
• Add weather, road, and altitude precautions when necessary

MANDATORY CONTENT FOR EACH DAY

Every single day MUST include ALL of the following:

1. LOCATION & ROUTE
   - Starting point and destination
   - Scenic route suggestions (e.g., "via Jalori Pass" or "the river road through Kullu")
   - Distance in kilometers and realistic travel time

2. ACCOMMODATION
   - Specific homestay, guesthouse, or hotel name
   - Type of stay (heritage, riverside, mountain-view, budget, luxury)
   - Area/locality within the destination

3. HIDDEN GEM / OFFBEAT SPOT
   - One lesser-known place to explore (village, viewpoint, temple, waterfall)
   - Why it's special or what makes it unique
   - How to reach it from main destination

4. LOCAL CUISINE & FOOD
   - Specific local dishes to try (Siddu, Dham, Chha Gosht, Mittha, Babru, Aktori, Tudkiya Bhath)
   - Name a specific café, dhaba, or restaurant
   - Mention if any local market or weekly haat is nearby

5. ACTIVITIES & EXPERIENCES
   - Morning and afternoon activities
   - Adventure options if applicable (trekking, rafting, paragliding, fishing)
   - Cultural experiences (temple visits, local festivals, craft villages)
   - Nature experiences (forest walks, river trails, sunrise points)

6. LOCAL TIPS
   - Best time of day to visit certain spots
   - Any permits or restrictions
   - What to carry or wear
   - Local customs to respect

OUTPUT FORMAT

When creating an itinerary, use this format:

═══════════════════════════════════════════
         LOCAL HIMACHAL
    Personalized Travel Itinerary
═══════════════════════════════════════════

TRAVELER DETAILS
────────────────
Name: [Name]
Duration: [X] days
Month: [Month]
Style: [Budget/Mid-range/Luxury]
Focus: [Adventure/Culture/Relaxation/Mixed]

═══════════════════════════════════════════

DAY 1 — [DESTINATION NAME]
────────────────────────────

Route & Journey:
[Detailed route with distance and time]

Stay:
[Accommodation name, type, and what makes it special]

Hidden Gem:
[Offbeat spot with description and how to reach]

Local Flavours:
[Specific dishes and where to eat them]

Explore & Experience:
[Activities, sightseeing, adventures]

Insider Tips:
[Practical local knowledge]

────────────────────────────

(Continue for all days with equal detail)

═══════════════════════════════════════════
IMPORTANT TRAVEL NOTES
═══════════════════════════════════════════

Weather & Road Conditions:
• [Seasonal advisory]
• [Road status and alternatives]

Altitude & Health:
• [Acclimatization tips if going to high altitude]
• [Medical precautions]

Permits Required:
• [Inner line permits if applicable]
• [Protected area permissions]

Packing Essentials:
• [Season-specific items]
• [Terrain-specific gear]

═══════════════════════════════════════════

"Explore Himachal like a local — slow, soulful, and responsible."

Crafted by Local Himachal | localhimachal.lovable.app

═══════════════════════════════════════════

MODIFICATION SUPPORT

If the user asks to modify any specific day, add or remove trekking, make the trip more budget-friendly, focus more on cafés, nature, or villages, or change travel pace — update only the requested part while keeping the rest intact.

PERSONALITY & TONE

Tone must be:
• Friendly
• Calm
• Local
• Trustworthy
• Human-like
• Knowledgeable but not preachy

Write like a well-traveled local friend giving personal recommendations, not a tour guide reading from a script.

Do not sound robotic.
Do not sound like a travel agency.
Do not use emojis.
Do not use generic phrases like "breathtaking views" or "unforgettable experience" — be specific.`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages, tripContext } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      console.error("LOVABLE_API_KEY is not configured");
      throw new Error("AI service is not configured");
    }

    console.log("Processing request with trip context:", tripContext);
    console.log("Number of messages:", messages?.length);

    // Build context from trip details
    let contextMessage = "";
    if (tripContext) {
      contextMessage = `
The user has submitted the following trip details:
- Traveler Name: ${tripContext.fullName}
- Email: ${tripContext.email}
- Phone: ${tripContext.phone}
- Budget Type: ${tripContext.budget}
- Number of Travelers: ${tripContext.travelers}
- Trip Duration: ${tripContext.duration} days
- Selected Districts: ${tripContext.districts?.join(", ")}
- Holiday Type: ${tripContext.holidayType}
- Additional Notes: ${tripContext.notes || "None provided"}

Based on these details, create a personalized travel itinerary for this traveler.`;
    }

    // Prepare messages for Lovable AI API (OpenAI-compatible format)
    const conversationHistory = messages.map((msg: { role: string; content: string }) => ({
      role: msg.role,
      content: msg.content
    }));

    // Add trip context to the first user message if it exists
    if (contextMessage && conversationHistory.length > 0) {
      conversationHistory[0].content = contextMessage + "\n\n" + conversationHistory[0].content;
    }

    const requestBody = {
      model: "google/gemini-3-flash-preview",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...conversationHistory
      ],
    };

    console.log("Calling Lovable AI Gateway...");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Lovable AI error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "AI credits exhausted. Please add credits to continue." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      
      throw new Error(`AI service error: ${response.status}`);
    }

    const data = await response.json();
    console.log("Lovable AI response received");

    const aiResponse = data.choices?.[0]?.message?.content;

    if (!aiResponse) {
      console.error("No response from AI:", data);
      throw new Error("No response from AI service");
    }

    return new Response(
      JSON.stringify({ response: aiResponse }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error in local-himachal-ai:", error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : "An unexpected error occurred" 
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
