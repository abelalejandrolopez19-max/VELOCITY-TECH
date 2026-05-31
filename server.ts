import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini Client
const apiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;

if (apiKey && apiKey !== "MY_GEMINI_API_KEY") {
  try {
    ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
    console.log("Gemini client successfully initialized.");
  } catch (err) {
    console.error("Failed to initialize Gemini client:", err);
  }
} else {
  console.log("No valid GEMINI_API_KEY found, running with professional simulation model.");
}

// API endpoint to generate high-performance strategic audits
app.post("/api/audit", async (req, res) => {
  const { brandName, url, industry, goals } = req.body;

  if (!brandName || !industry) {
    return res.status(400).json({ error: "Faltan datos obligatorios (Nombre y Sector)." });
  }

  // Set default prompt
  const systemPrompt = `Eres el Director Ejecutivo de Estrategia de Abel Marketing, la agencia líder de marketing digital de alta conversión.
Tu labor es entregar una auditoría de marca y marketing digital extremadamente minuciosa, estructurada y persuasiva en formato JSON estructurado.
No agregues comentarios iniciales ni finales, solo devuelve el objeto JSON correspondiente. El idioma debe ser Español.`;

  const userPrompt = `Realiza una auditoría estratégica de marketing digital para la empresa:
- Nombre: ${brandName}
- URL/Sitio Web: ${url || "Sin sitio web todavía (nueva marca)"}
- Sector/Nicho: ${industry}
- Objetivos de negocio: ${goals || "Aumentar ventas online y captar clientes potenciales"}

Genera un plan con los siguientes campos exactos en formato JSON:
{
  "score": un número de 0 a 100 indicando la madurez digital estimada,
  "summary": "un resumen ejecutivo contundente de la situación actual y la oportunidad clave (2 párrafos)",
  "seoStrategy": {
    "title": "Estrategia Orgánica de Enfoque",
    "insights": ["3 puntos clave analizados del sector"],
    "actions": ["3 acciones críticas e inmediatas de SEO técnico y de contenido"]
  },
  "semStrategy": {
    "title": "Campañas de Pago de Alto ROI",
    "insights": ["3 descubrimientos de volumen de búsquedas o competencia de anuncios", "Ejemplo de CPC del sector"],
    "actions": ["3 acciones prioritarias en Google Ads/Meta Ads con presupuestos sugeridos"]
  },
  "conversionStrategy": {
    "title": "Optimización UX/UI y Conversión (CRO)",
    "recommendations": ["4 recomendaciones estéticas y de flujos de conversión de Checkout o Formularios"]
  },
  "recommendedChannels": ["SEO", "SEM Google Ads", "Meta Ads", "Email Marketing", "Contenidos"],
  "simulatedCPC": un número decimal estimado para su sector en EUR (ej. 1.25),
  "growthForecast": "previsión de crecimiento estimada en porcentaje (ej: '+45% en 6 meses')"
}`;

  if (ai) {
    try {
      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: userPrompt,
        config: {
          systemInstruction: systemPrompt,
          responseMimeType: "application/json"
        },
      });

      const responseText = response.text || "";
      const parsedData = JSON.parse(responseText);
      return res.json({ success: true, data: parsedData, isSimulated: false });
    } catch (apiError) {
      console.error("Gemini API error, falling back to simulated data:", apiError);
      // Fall back to elegant simulator below
    }
  }

  // Professional marketing strategic generator for simulated fallback
  const simulatedCPCMap: Record<string, number> = {
    "tecnologia": 1.45,
    "e-commerce": 0.85,
    "salud": 1.95,
    "finanzas": 2.50,
    "educacion": 1.10,
    "inmobiliaria": 2.10,
    "turismo": 1.30,
    "b2b": 2.80,
    "default": 1.20
  };

  const selectedNiche = industry.toLowerCase();
  const matchedKey = Object.keys(simulatedCPCMap).find(k => selectedNiche.includes(k)) || "default";
  const cpc = simulatedCPCMap[matchedKey];
  const auditScore = Math.floor(Math.random() * 21) + 55; // 55 to 75 as standard space for growth

  const simulatedAudit = {
    score: auditScore,
    summary: `La marca '${brandName}' dentro del sector de ${industry} muestra una base con un potencial extraordinario de aceleración digital. Al optimizar los embudos de conversión actuales, existe una oportunidad masiva para duplicar el volumen de leads calificados y reducir el costo de adquisición de clientes (CAC) de manera orgánica y pagada.

Nuestros modelos estiman que la implementación de una arquitectura UX estructurada y una optimización SEO a nivel técnico permitirá a la marca liderar la visibilidad orgánica local y nacional frente a competidores tradicionales que no aplican metodologías de alto rendimiento.`,
    seoStrategy: {
      title: "Optimización Orgánica de Alto Impacto",
      insights: [
        `Competencia media-alta en palabras clave transaccionales de ${industry}.`,
        "Oportunidad de posicionar contenido de intención de compra (long-tail keywords).",
        "Tasa de rebote estimada superior al 45% debido a velocidad de carga inicial mejorable."
      ],
      actions: [
        "Indexación técnica completa y optimización de Core Web Vitals para lograr tiempos de carga menores a 1.5s.",
        `Creación de un clúster de contenidos centrado en las consultas frecuentes de mayor valor para '${brandName}'.`,
        "Construcción sistemática de menciones y enlaces locales de alta autoridad (Link Building estratégico)."
      ]
    },
    semStrategy: {
      title: "Campañas de Tráfico Calificado (ROI de Conversión)",
      insights: [
        `Costo Promedio por Clic (CPC) estimado para su nicho: €${cpc.toFixed(2)}.`,
        "Anunciantes competidores tienen baja puntuación en concordancia de anuncios y calidad de Landing Page.",
        "Existe volumen de búsqueda no explotado en horarios específicos de alta conversión comercial."
      ],
      actions: [
        `Lanzamiento de campaña de Búsqueda en Google Ads enfocada estrictamente en términos transaccionales de '${brandName}'.`,
        "Implementación de anuncios dinámicos de retargeting en Meta Ads con ofertas personalizadas de acuerdo al embudo.",
        "Configuración del pixel de conversión en servidor para evitar la pérdida de eventos comerciales por ad-blockers."
      ]
    },
    conversionStrategy: {
      title: "Ingeniería de Conversión e Interfaz (CRO)",
      recommendations: [
        `Simplificar el formulario de contacto para ${brandName} a no más de 3 campos clave en primer contacto.`,
        "Insertar pruebas de confianza social o garantías inmediatamente debajo del botón de llamado a la acción.",
        "Ejecutar pruebas A/B automatizadas en el texto de los botones principales (ej. 'Iniciar Auditoría' vs. 'Comenzar Ahora').",
        "Optimizar el embudo móvil con componentes nativos de selección rápida para acelerar compras e inscripciones."
      ]
    },
    recommendedChannels: ["SEO Avanzado", "Google Ads SEM", "E-Mail Automatizado", "Meta Remarketing"],
    simulatedCPC: cpc,
    growthForecast: `+${Math.floor(Math.random() * 41) + 40}% de Conversión en 90 días`
  };

  return res.json({ success: true, data: simulatedAudit, isSimulated: true });
});

// Start server
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    // Integrate Vite in development
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
    console.log("Vite development server connected with Express.");
  } else {
    // Serve static files in production
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
}

startServer().catch((error) => {
  console.error("Error starting full-stack server:", error);
});
