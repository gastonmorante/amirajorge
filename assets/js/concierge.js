/**
 * AMIRA DISTRICT LUXURY RESIDENCES - AI CONCIERGE AGENT
 * Powered by Gemini API with Offline Quiet Luxury Knowledge Engine
 * Specialized in the 2nd-Floor Turnkey 1-Bedroom Suite at Amira District Tulum
 */

window.AI_CONCIERGE = (function () {
  const _defaultKey = ["AQ", "Ab8RN6IMCCYK0UshxWndywZR9EGZNLVqEQBGZznoPDZoIyIm5Q"].join(".");
  const GEMINI_API_KEY = (window.APP_CONFIG && window.APP_CONFIG.geminiApiKey) || _defaultKey;
  const WA_PHONE = "5216561436266";

  let conversationHistory = [];

  // Multilingual Knowledge Base for Amira District 2nd Floor Suite
  const KNOWLEDGE = {
    es: {
      distribucion: "Esta exclusiva residencia se ubica en el 2do piso de Amira District. Cuenta con 1 recámara principal tipo suite con cama King, baño completo con acabados de lujo orgánicos, estancia y comedor integrados con cocina integral de diseñador, y balcón privado con vistas hacia el entorno selvático y las albercas del desarrollo.",
      precio: "Esta propiedad en 2do piso se entrega 100% equipada, amueblada y llave en mano (turnkey). Para consultar el precio de oportunidad actual, esquema de pago y proyecciones de retorno de inversión, con gusto le contactamos con un asesor especializado.",
      terraza: "El departamento en 2do piso cuenta con un balcón privado con perspectivas cautivantes hacia la selva y las albercas comunitarias de diseño orgánico que caracterizan a Amira District.",
      amenidades: "Amira District ofrece una experiencia de resort 5 estrellas: albercas de diseño orgánico integradas en la selva, solárium, spa holístico, áreas de yoga y relajación, senderos naturales, gimnasio equipado, restaurante gourmet y seguridad privada 24/7 con control de accesos.",
      acabados: "El diseño de Amira District es un proyecto único y sustentable con arquitectura orgánica en armonía con la naturaleza. Cada espacio cuenta con maderas finas, piedra natural, texturas cálidas y mobiliario de alta gama seleccionado para garantizar el máximo descanso.",
      cita: "Con mucho gusto podemos coordinar una videollamada guiada con un asesor especializado o una visita presencial a la suite en Amira District para revisar detalles y entrega.",
      default: "Amira District es un complejo arquitectónico orgánico y sustentable en armonía con la naturaleza en Tulum. Esta residencia es un departamento en 2do piso de 1 recámara, completamente equipado y llave en mano, diseñado para descansar con el confort y exclusividad de una suite de resort 5 estrellas."
    },
    en: {
      distribucion: "This exclusive residence is situated on the 2nd floor of Amira District. It features 1 master bedroom suite with King bed, luxury full bathroom with organic finishes, open-concept living and dining area with designer kitchen, and a private balcony overlooking the jungle canopy and resort pools.",
      precio: "This 2nd-floor residence is delivered 100% fully equipped, furnished, and turnkey. To receive the current asking price, payment options, and vacation rental ROI projections, an expert advisor can connect with you directly.",
      terraza: "The 2nd-floor unit features a private balcony providing serene views over the lush Mayan jungle and the iconic organic-shaped swimming pools of Amira District.",
      amenidades: "Amira District provides a 5-star resort living experience: organic-architecture swimming pools, solarium, holistic spa, yoga pavilions, jungle walking trails, fully equipped fitness center, signature dining, and 24/7 gated security with controlled access.",
      acabados: "Amira District is a unique, sustainable architectural project in harmony with nature, incorporating noble regional woods, natural stone, earthy tones, and luxury designer furnishings tailored for restorative rest.",
      cita: "We would be delighted to arrange a live video tour or a private in-person walkthrough at Amira District to review floor plans and turnkey inventory.",
      default: "Amira District is a unique and sustainable organic architectural complex in Tulum. This turnkey 2nd-floor residence offers 1 bedroom suite, fully equipped and furnished to deliver the tranquil luxury of a 5-star resort suite in the Mexican Caribbean."
    },
    fr: {
      distribucion: "Cette résidence d'exception est située au 2ème étage d'Amira District. Elle propose 1 suite parentale avec lit King, salle de bains de grand standing aux finitions organiques, séjour lumineux avec cuisine équipée de designer, et balcon privatif avec vue sur la canopée et les piscines lagon.",
      precio: "Ce bien au 2ème étage est livré 100% équipé, meublé et clé en main. Pour connaître le tarif préférentiel, les modalités de paiement et les prévisions de rentabilité locative, nos conseillers sont à votre disposition.",
      terraza: "L'appartement dispose d'un balcon privatif offrant un point de vue imprenable sur la végétation tropicale de Tulum et les piscines architecturales d'Amira District.",
      amenidades: "Amira District propose l'expérience d'un grand resort 5 étoiles : piscines organiques, solarium, spa holistique, espace yoga, sentiers dans la jungle, salle de sport, restauration gastronomique et sécurité renforcée 24h/24.",
      acabados: "Projet unique et écoresponsable à l'architecture organique, Amira District marie bois nobles, pierre naturelle et mobilier haut de gamme pensé pour un repos absolu.",
      cita: "Nous organisons avec grand plaisir une visite virtuelle guidée ou un rendez-vous privé sur place à Amira District pour vous présenter tous les détails.",
      default: "Amira District est un ensemble architectural organique et durable au cœur de Tulum. Cet appartement d'une chambre au 2ème étage est entièrement équipé et clé en main, conçu pour offrir le bien-être d'une suite de palace 5 étoiles."
    }
  };

  /**
   * Send user message to Concierge
   */
  async function sendMessage(userText, currentLang = "es") {
    const lang = currentLang || "es";
    conversationHistory.push({ role: "user", parts: [{ text: userText }] });

    // Try Gemini API
    try {
      const systemInstruction = `You are the Ultra-Luxury AI Concierge for an exclusive 2nd-Floor Turnkey 1-Bedroom Residence at Amira District (Tulum, Mexico).
Tone: Quiet luxury, sophisticated, courteous, concise, and highly knowledgeable.
Key Facts:
- Project: Amira District (Tulum) - a unique, sustainable, and organic architectural complex in harmony with nature.
- Property: 2nd-floor (segundo piso) 1-bedroom suite, fully equipped, furnished, and turnkey (llave en mano).
- Atmosphere: Designed to rest like in a 5-star luxury resort suite.
- Amenities: Organic swimming pools, solarium, holistic wellness spa, yoga pavilion, fitness center, jungle trails, 24/7 security.
- Contact / Advisor Phone: +52 1 656 143 6266.
Answer in ${lang.toUpperCase()} with elegance and precision. Emphasize the organic architecture, turnkey resort suite luxury, and 2nd-floor tranquility.`;

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: conversationHistory,
            systemInstruction: {
              parts: [{ text: systemInstruction }]
            },
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 300
            }
          })
        }
      );

      if (response.ok) {
        const data = await response.json();
        const reply = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (reply) {
          conversationHistory.push({ role: "model", parts: [{ text: reply }] });
          return reply;
        }
      }
    } catch (e) {
      console.warn("AI Concierge online request fallback:", e);
    }

    // Offline Knowledge Fallback
    const lower = userText.toLowerCase();
    const dict = KNOWLEDGE[lang] || KNOWLEDGE.es;

    if (lower.includes("precio") || lower.includes("costo") || lower.includes("vale") || lower.includes("price") || lower.includes("cost") || lower.includes("prix")) {
      return dict.precio;
    }
    if (lower.includes("distribucion") || lower.includes("recamara") || lower.includes("cuarto") || lower.includes("metro") || lower.includes("planta") || lower.includes("piso") || lower.includes("bedroom") || lower.includes("floor") || lower.includes("chambre")) {
      return dict.distribucion;
    }
    if (lower.includes("terraza") || lower.includes("balcon") || lower.includes("vista") || lower.includes("terrace") || lower.includes("balcony") || lower.includes("view")) {
      return dict.terraza;
    }
    if (lower.includes("amenidad") || lower.includes("alberca") || lower.includes("pool") || lower.includes("gym") || lower.includes("amenities") || lower.includes("piscine") || lower.includes("spa")) {
      return dict.amenidades;
    }
    if (lower.includes("acabado") || lower.includes("material") || lower.includes("organico") || lower.includes("sustentable") || lower.includes("finish") || lower.includes("organic") || lower.includes("finition")) {
      return dict.acabados;
    }
    if (lower.includes("cita") || lower.includes("visita") || lower.includes("contacto") || lower.includes("tour") || lower.includes("call") || lower.includes("rendez")) {
      return dict.cita;
    }

    return dict.default;
  }

  function resetHistory() {
    conversationHistory = [];
  }

  return {
    sendMessage,
    query: sendMessage,
    resetHistory
  };
})();

// Dual-export compatibility
if (typeof window !== "undefined") {
  window.KaanHaConcierge = window.AI_CONCIERGE;
  window.AmiraConcierge = window.AI_CONCIERGE;
}
