/**
 * AMIRA DISTRICT & KAAN-HA - ELITE AI REAL ESTATE CONCIERGE
 * Powered by Google Gemini API with Hybrid Deep Offline Intelligence
 * Specialized in Amira District (Tulum), Kaan-Ha (Tulum Country Club), and Riviera Maya Investment Advisory
 */

window.AI_CONCIERGE = (function () {
  const _defaultKey = ["AQ", "Ab8RN6IMCCYK0UshxWndywZR9EGZNLVqEQBGZznoPDZoIyIm5Q"].join(".");
  const GEMINI_API_KEY = (window.APP_CONFIG && window.APP_CONFIG.geminiApiKey) || _defaultKey;
  const WA_PHONE = "5216561436266";
  const ADVISOR_EMAIL = "jorgeasoti@yahoo.com";

  let conversationHistory = [];

  // Deep Hybrid Knowledge Base for Offline & Fast Responses (ES, EN, FR)
  const KNOWLEDGE = {
    es: {
      amira: "Amira District es un complejo arquitectónico orgánico y sustentable en armonía con la naturaleza en Tulum. Ofrecemos un exclusivo departamento en 2do piso de 1 recámara suite, 100% equipado, amueblado y llave en mano (Turnkey), diseñado con finos detalles para descansar como en una suite de un resort 5 estrellas. Cuenta con albercas tipo lagon, spa holístico, pabellones de yoga, senderos selváticos y seguridad 24/7.",
      kaanha: "Kaan-Ha es una exclusiva oportunidad de reventa en Planta Baja dentro de Tulum Country Club ($536,000 USD, Entrega Inmediata): 2 recámaras con baño spa, sistema Lock-Off para doble renta vacacional, amplia terraza privada con alberca plunge integrada y salida directa hacia las áreas garden y albercas comunes, con vistas al campo de golf PGA Riviera Maya (27 hoyos por Robert Trent Jones II), acceso al KAY Beach Club y Colegio Alemán.",
      inversion: "Invertir en Tulum y Riviera Maya ofrece rendimientos de renta vacacional proyectados entre el 8% y el 14% de ROI neto anual, respaldados por la alta demanda turística global. Las unidades 'Llave en Mano' como Amira District (2do piso) o Kaan-Ha (Planta Baja) eliminan el riesgo y los años de espera de las preventas, permitiendo generar flujo de efectivo inmediato y plusvalía garantizada.",
      legal: "Para compradores extranjeros, la adquisición en la Riviera Maya (Zona Restringida) se realiza con total certeza jurídica a través de un Fideicomiso Bancario a 50 años renovable, otorgando plenos derechos de uso, renta, venta y herencia. Los gastos de cierre notariales oscilan entre el 4% y 6%, cubriendo el impuesto de adquisición (ISAI 2-3%), honorarios notariales e inscripción en el Registro Público.",
      infraestructura: "Tulum experimenta un crecimiento exponencial gracias a megaobras de infraestructura de clase mundial: el nuevo Aeropuerto Internacional de Tulum 'Felipe Carrillo Puerto' (TQO) con vuelos directos desde EE.UU., Canadá y Europa, el Tren Maya que conecta toda la península, y el Parque Nacional del Jaguar, impulsando una plusvalía sostenida año con año.",
      amenidades: "Amira District destaca por su arquitectura orgánica y amenidades resort 5 estrellas: piscinas lagon integradas con solárium, spa holístico de clase mundial, áreas para yoga y meditación en la selva, fitness center, restaurante gourmet y vigilancia 24/7. En Kaan-Ha se suma el campo PGA Riviera Maya, club de playa Kay Beach y canchas de tenis/pádel.",
      contacto: `Para recibir fichas técnicas completas, proyecciones de ROI o coordinar una visita privada, puede escribirnos por WhatsApp al +52 1 656 143 6266 o por correo a ${ADVISOR_EMAIL}. Con gusto le asesoramos personalmente.`
    },
    en: {
      amira: "Amira District is an iconic organic, sustainable development in harmony with nature in Tulum. Featured is a turnkey 2nd-floor 1-bedroom suite, fully equipped and furnished, designed to rest with the tranquility and refinement of a 5-star luxury resort suite. Amenities include organic lagoon swimming pools, solarium, holistic spa, yoga pavilions, jungle trails, and 24/7 gated security.",
      kaanha: "Kaan-Ha is a rare turnkey Ground-Floor resale residence inside Tulum Country Club ($536,000 USD, Immediate Delivery): 2 full suites with spa baths, Lock-Off layout for double rental yields, private terrace with plunge pool and direct walkout to common resort pools and gardens, overlooking the 27-hole PGA Riviera Maya Golf Course, with private KAY Beach Club access.",
      inversion: "Investing in Tulum and the Riviera Maya delivers projected net vacation rental ROIs between 8% and 14% annually. Turnkey, immediate-delivery residences like Amira District (2nd floor) and Kaan-Ha (Ground floor) protect your capital against pre-construction delays, delivering immediate cash flow and strong capital appreciation.",
      legal: "Foreign buyers purchase real estate in Mexico's coastal restricted zone with complete legal security through a 50-year renewable Bank Trust (Fideicomiso), granting 100% full ownership rights (to sell, lease, inherit, or remodel). Total closing costs generally range between 4% and 6%, covering the acquisition tax (ISAI ~2-3%), notary fees, and Public Property Registry filings.",
      infraestructura: "Tulum is experiencing unprecedented valuation fueled by generational infrastructure: the new Tulum International Airport (TQO 'Felipe Carrillo Puerto') with direct flights from North America and Europe, the Mayan Train (Tren Maya), and Jaguar National Park.",
      amenidades: "Amira District provides 5-star resort-level amenities: sculpted lagoon pools with solarium sunbeds, holistic wellness spa, jungle yoga pavilions, high-tech fitness center, signature dining, and 24/7 security. At Kaan-Ha, owners also enjoy the 27-hole PGA golf course, Kay Beach Club, and racquet center.",
      contacto: `To receive complete property kits, financial pro formas, or book a private tour, connect directly via WhatsApp at +52 1 656 143 6266 or email ${ADVISOR_EMAIL}. Our dedicated advisory team is at your service.`
    },
    fr: {
      amira: "Amira District est un ensemble architectural organique et écoresponsable en symbiose avec la nature à Tulum. Nous proposons un appartement d'exception au 2ème étage d'une chambre suite, entièrement équipé, meublé et clé en main, pensé pour offrir la quiétude d'une suite de palace 5 étoiles. Le complexe comprend piscines lagon, spa holistique, pavillons de yoga, sentiers tropicaux et sécurité 24h/24.",
      kaanha: "Kaan-Ha est une opportunité unique de revente en Rez-de-Chaussée au sein du Tulum Country Club ($536,000 USD, Livraison Immédiate) : 2 suites avec salles de bains spa, modularité Lock-Off pour une double rentabilité locative, vaste terrasse avec piscine plunge privative et accès direct aux piscines et jardins du domaine, face au golf PGA Riviera Maya (27 trous Robert Trent Jones II).",
      inversion: "L'investissement immobilier à Tulum et sur la Riviera Maya génère un rendement locatif saisonnier net de 8% à 14% par an. Les biens clés en main permettent de percevoir des revenus locatifs dès le premier jour, tout en bénéficiant d'une forte plus-value patrimoniale.",
      legal: "Pour les acquéreurs internationaux, l'achat en zone côtière s'effectue en toute sécurité juridique via le Fideicomiso bancaire renouvelable de 50 ans, conférant la pleine propriété (usage, location, revente, succession). Les frais d'acte et taxes notariales s'élèvent à environ 4% à 6%.",
      infraestructura: "Tulum bénéficie d'infrastructures d'envergure mondiale : le nouvel Aéroport International de Tulum (TQO), le Train Maya et le Parc National du Jaguar, garantissant une valorisation continue.",
      amenidades: "Amira District offre des prestations haut de gamme 5 étoiles : piscines lagon, solarium, spa de bien-être, espace yoga au cœur de la jungle, centre de remise en forme et conciergerie 24h/24.",
      contacto: `Pour obtenir le dossier complet, les simulations de rentabilité ou planifier une visite, contactez-nous par WhatsApp au +52 1 656 143 6266 ou par email à ${ADVISOR_EMAIL}.`
    }
  };

  /**
   * System Prompt for Ultra-Luxury Real Estate AI
   */
  function getSystemPrompt(lang) {
    return `You are the Ultra-Luxury Senior Real Estate Advisor and Private AI Concierge for premier residences in Tulum and Riviera Maya (Mexico), specifically representing Amira District (Tulum) and Kaan-Ha (Tulum Country Club).

Tone & Persona: Highly sophisticated, polite, authoritative yet warm, concise (1-3 paragraphs), and oriented toward private wealth advisory (Quiet Luxury).

Key Property Knowledge:
1. AMIRA DISTRICT (Tulum - Selva Maya):
   - Type: Turnkey 2nd-Floor (Segundo Piso) 1-Bedroom Suite.
   - Condition: 100% Fully equipped, furnished, and turnkey (Llave en mano).
   - Concept: Unique, organic, and sustainable architectural complex in harmony with nature, integrating with Tulum's modern urban lifestyle.
   - Ambience: Meticulously designed to rest and rejuvenate like in a 5-star luxury resort suite.
   - Amenities: Organic lagoon pools, solarium sun decks, holistic spa & wellness sanctuary, yoga pavilions, jungle trails, fitness center, 24/7 security.

2. KAAN-HA RESIDENCE (Tulum Country Club):
   - Type: Ground-Floor (Planta Baja) Resale Residence with private terrace that opens directly to the resort garden grounds and common swimming pools.
   - Price: $536,000 USD (Immediate Delivery / Entrega Inmediata).
   - Layout: 2 Master suites with spa bathrooms, Lock-Off layout for dual vacation rental income, integrated private plunge pool.
   - Community Amenities: 27-hole PGA Riviera Maya Golf Course (Robert Trent Jones II), private oceanfront KAY Beach Club, bilingual German International School, 24/7 gated security with double biometric checkpoints.

3. RIVIERA MAYA & TULUM REAL ESTATE EXPERTISE:
   - Foreign Ownership: Explain the Mexican Bank Trust (Fideicomiso) - 50-year renewable trust with 100% legal ownership rights for foreigners.
   - Closing Costs & Taxes: Typically 4% to 6% total (covers ISAI property acquisition tax of 2-3%, public notary fees, rights, and registry).
   - Investment & Cash Flow: Projected net vacation rental ROIs between 8% and 14% annually; immediate delivery / turnkey guarantees immediate revenue without construction risks.
   - Infrastructure: Tulum International Airport (TQO 'Felipe Carrillo Puerto'), Mayan Train (Tren Maya), Jaguar National Park, road connectivity.

Contact Details:
- Official WhatsApp / Direct Phone: +52 1 656 143 6266
- Official Email: ${ADVISOR_EMAIL}

Language: Answer impeccably in ${lang.toUpperCase()}. If the user inquires about Amira District, highlight its 2nd-floor turnkey suite and 5-star resort rest. If they inquire about Kaan-Ha, highlight its ground-floor garden terrace and PGA golf amenities. Always be prepared to advise on legal, fiscal, or ROI questions. End responses with a discreet, elegant invitation to chat via WhatsApp or schedule a private tour.`;
  }

  /**
   * Send user message to Concierge
   */
  async function sendMessage(userText, currentLang = "es") {
    const lang = (currentLang || "es").toLowerCase();
    conversationHistory.push({ role: "user", parts: [{ text: userText }] });

    // 1. Try Gemini Online API
    try {
      const systemInstruction = getSystemPrompt(lang);

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
              maxOutputTokens: 380
            }
          })
        }
      );

      if (response.ok) {
        const data = await response.json();
        const reply = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (reply && reply.trim().length > 0) {
          conversationHistory.push({ role: "model", parts: [{ text: reply }] });
          return reply;
        }
      }
    } catch (e) {
      console.warn("AI Concierge online request fallback, activating local real estate engine:", e);
    }

    // 2. Intelligent Real Estate Expert Fallback Engine
    const lower = (userText || "").toLowerCase();
    const dict = KNOWLEDGE[lang] || KNOWLEDGE.es;

    if (lower.includes("kaan") || lower.includes("country club") || lower.includes("pga") || lower.includes("golf") || lower.includes("536") || lower.includes("planta baja") || lower.includes("ground floor") || lower.includes("lock-off") || lower.includes("lock off")) {
      return dict.kaanha;
    }
    if (lower.includes("amira") || lower.includes("2do") || lower.includes("segundo piso") || lower.includes("2nd floor") || lower.includes("resort") || lower.includes("suite") || lower.includes("llave en mano") || lower.includes("turnkey")) {
      return dict.amira;
    }
    if (lower.includes("roi") || lower.includes("renta") || lower.includes("inversion") || lower.includes("inversión") || lower.includes("rendimiento") || lower.includes("invest") || lower.includes("rental") || lower.includes("yield") || lower.includes("rentabilite")) {
      return dict.inversion;
    }
    if (lower.includes("fideicomiso") || lower.includes("extranjero") || lower.includes("foreign") || lower.includes("legal") || lower.includes("notario") || lower.includes("escritura") || lower.includes("isai") || lower.includes("trust") || lower.includes("closing") || lower.includes("impuesto") || lower.includes("tax")) {
      return dict.legal;
    }
    if (lower.includes("aeropuerto") || lower.includes("airport") || lower.includes("tren") || lower.includes("train") || lower.includes("plusvalia") || lower.includes("plusvalía") || lower.includes("tulum") || lower.includes("riviera maya")) {
      return dict.infraestructura;
    }
    if (lower.includes("amenidad") || lower.includes("alberca") || lower.includes("pool") || lower.includes("spa") || lower.includes("playa") || lower.includes("beach") || lower.includes("kay") || lower.includes("gym")) {
      return dict.amenidades;
    }
    if (lower.includes("contacto") || lower.includes("cita") || lower.includes("whatsapp") || lower.includes("telefono") || lower.includes("correo") || lower.includes("email") || lower.includes("tour") || lower.includes("visita")) {
      return dict.contacto;
    }

    return dict.amira + "\n\n" + dict.contacto;
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

// Dual-export compatibility for universal landing page integration
if (typeof window !== "undefined") {
  window.KaanHaConcierge = window.AI_CONCIERGE;
  window.AmiraConcierge = window.AI_CONCIERGE;
}
