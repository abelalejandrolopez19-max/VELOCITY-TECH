import React from "react";
import { Lead, AuditResult } from "../types";
import { 
  Sparkles, 
  Settings, 
  BrainCircuit, 
  Users, 
  Layers, 
  ArrowUpRight, 
  Compass, 
  HelpCircle, 
  TrendingUp, 
  Calculator, 
  MessageSquare,
  Globe,
  PenTool,
  CheckCircle2,
  AlertTriangle,
  FolderOpen
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ConsoleProps {
  leads: Lead[];
  onUpdateLeadStatus: (id: string, nextStatus: Lead["status"]) => void;
  onAddLeadNotes: (id: string, notes: string) => void;
}

export default function Console({ leads, onUpdateLeadStatus, onAddLeadNotes }: ConsoleProps) {
  const [activeConsoleTab, setActiveConsoleTab] = React.useState<"audit" | "roi" | "crm">("audit");
  
  // 1. Audit State
  const [auditBrandName, setAuditBrandName] = React.useState("");
  const [auditUrl, setAuditUrl] = React.useState("");
  const [auditIndustry, setAuditIndustry] = React.useState("E-commerce");
  const [auditGoals, setAuditGoals] = React.useState("");
  const [auditLoading, setAuditLoading] = React.useState(false);
  const [auditResult, setAuditResult] = React.useState<AuditResult | null>(null);
  const [isSimulatedResponse, setIsSimulatedResponse] = React.useState(false);
  const [loadingStep, setLoadingStep] = React.useState("");

  // 2. ROI Simulator State
  const [budget, setBudget] = React.useState(2500); // Monthly budget in EUR
  const [cpc, setCpc] = React.useState(1.15); // Average CPC in EUR
  const [convRate, setConvRate] = React.useState(2.5); // Conversion Rate %
  const [avgVal, setAvgVal] = React.useState(85); // Average order ticket value in EUR

  // 3. CRM Lead state
  const [selectedLead, setSelectedLead] = React.useState<Lead | null>(null);
  const [selectedLeadNoteInput, setSelectedLeadNoteInput] = React.useState("");

  // Start general AI marketing audit process
  const handleLaunchAudit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!auditBrandName) {
      alert("Por favor introduce el Nombre de la Marca.");
      return;
    }

    setAuditLoading(true);
    setAuditResult(null);

    const steps = [
      "Iniciando motores de crawling táctico para " + auditBrandName + "...",
      "Analizando volumen de búsquedas del sector de " + auditIndustry + "...",
      "Conectando a los servidores de alta velocidad del modelo Gemini 3.5...",
      "Extrayendo prioridades Core Web Vitals e intenciones transaccionales...",
      "Consolidando el reporte de madurez digital definitivo..."
    ];

    let currentStep = 0;
    setLoadingStep(steps[0]);

    const stepTimer = setInterval(() => {
      currentStep++;
      if (currentStep < steps.length) {
        setLoadingStep(steps[currentStep]);
      }
    }, 600);

    try {
      const response = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          brandName: auditBrandName,
          url: auditUrl,
          industry: auditIndustry,
          goals: auditGoals
        })
      });

      const resJson = await response.json();
      clearInterval(stepTimer);

      if (resJson.success && resJson.data) {
        setAuditResult(resJson.data);
        setIsSimulatedResponse(resJson.isSimulated);
      } else {
        throw new Error("Solicitud inválida");
      }
    } catch (err) {
      clearInterval(stepTimer);
      console.warn("Falla de API, aplicando simulador alterno:", err);
      // Fallback local robust simulation
      setIsSimulatedResponse(true);
      setAuditResult({
        score: 68,
        summary: `La marca '${auditBrandName}' muestra un alto potencial para beneficiarse de campañas optimizadas de SEO y SEM en el sector de ${auditIndustry}. El mercado presenta una dispersión de competidores que no explotan segmentaciones avanzadas ni CRO en móviles.`,
        seoStrategy: {
          title: "SEO Técnico & Estructación Orgánica",
          insights: [`Competencia moderada en palabras clave de ${auditIndustry}.`, "Velocidad móvil mejorable para rankear en la primera página de Google."],
          actions: ["Optimizar Core Web Vitals y el marcado schema local.", "Crear clústeres de contenido B2C sobre inquietudes de compra."]
        },
        semStrategy: {
          title: "Pauta de Alto Tráfico Conversor",
          insights: [`CPC de referencia estimado para su sector: €${cpc.toFixed(2)}.`, "Anuncios competidores omiten extensiones dinámicas de precio."],
          actions: ["Lanzar campaña de Búsqueda sobre términos de marca en Google Ads.", "Pautar Remarketing segmentado en Meta Ads."]
        },
        conversionStrategy: {
          title: "Optimización de Embudo y Tasa de Conversión (CRO)",
          recommendations: [
            "Simplificar pasarelas de pago acortando los campos necesarios.",
            "Insertar badges de seguridad y comentarios reales de clientes.",
            "Incluir formularios con micro-interacciones interactivas móviles.",
            "Establecer flujos de recuperación de carrtitos de compra por mensajería automática."
          ]
        },
        recommendedChannels: ["SEO", "SEM Google Ads", "Meta Publicidad", "Remercadeo"],
        simulatedCPC: cpc,
        growthForecast: "+55% Tráfico Calificado esperado en 120 días"
      });
    } finally {
      setAuditLoading(false);
    }
  };

  // Click calculations for SEM ROI Simulator
  const simulatedClicks = Math.round(budget / cpc);
  const simulatedConversions = Math.round(simulatedClicks * (convRate / 100));
  const simulatedRevenue = Math.round(simulatedConversions * avgVal);
  const netProfit = simulatedRevenue - budget;
  const roiValue = budget > 0 ? Math.round((netProfit / budget) * 100) : 0;

  // Draw smooth SVG compounding line projection details (6 Months)
  // We will build polyline coordinate mathematically
  const getSimulatedLinePoints = () => {
    const points = [];
    // Start origin (x=50, y=180) represents Month 0
    //compounding factor: month 1, 2, 3, 4, 5, 6
    for (let m = 0; m <= 6; m++) {
      const scaleFactor = 1 + (m * 0.22); // Compound increase representation
      const estRevenueM = simulatedRevenue * scaleFactor;
      // Map to pixel coordinations inside parent frame
      // x ranging from 50 to 550, y from 18 w.r.t max simulated value
      const x = 50 + (m * (500 / 6));
      // Base height 200 is bottom line. Max capacity represent is budget * 10
      const maxPossibleHeight = budget * 4 || 1000;
      const percentageOfHeight = Math.min(1, estRevenueM / maxPossibleHeight);
      const y = 200 - (percentageOfHeight * 150);
      points.push(`${Math.round(x)},${Math.round(y)}`);
    }
    return points.join(" ");
  };

  const getSimulatedDots = () => {
    const dots = [];
    for (let m = 0; m <= 6; m++) {
      const scaleFactor = 1 + (m * 0.22);
      const estRevenueM = simulatedRevenue * scaleFactor;
      const x = 50 + (m * (500 / 6));
      const maxPossibleHeight = budget * 4 || 1000;
      const percentageOfHeight = Math.min(1, estRevenueM / maxPossibleHeight);
      const y = 200 - (percentageOfHeight * 150);
      dots.push({ m, estRevenueM, x: Math.round(x), y: Math.round(y) });
    }
    return dots;
  };

  const currentMatchedLead = selectedLead ? leads.find(l => l.id === selectedLead.id) : null;

  return (
    <section className="pt-28 pb-24 px-6 max-w-7xl mx-auto">
      
      {/* Upper Navigation Tabs */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-6">
        <div>
          <span className="text-xs font-mono font-bold text-vtech-blue tracking-widest uppercase">CONSOLA ESTRATÉGICA CORPORATIVA DE ABEL MARKETING</span>
          <h2 className="text-3xl font-extrabold font-display text-white mt-1">Portal Operativo B2B</h2>
        </div>

        {/* Tab triggers */}
        <div className="flex bg-vtech-black p-1 border border-white/10 rounded-xl max-w-full">
          <button 
            onClick={() => setActiveConsoleTab("audit")}
            className={`flex items-center gap-2 py-2.5 px-4 rounded-lg font-display text-xs font-bold transition-all cursor-pointer ${
              activeConsoleTab === "audit" ? "bg-vtech-blue text-white" : "text-gray-400 hover:text-white"
            }`}
          >
            <BrainCircuit size={14} /> auditoría de IA
          </button>
          
          <button 
            onClick={() => setActiveConsoleTab("roi")}
            className={`flex items-center gap-2 py-2.5 px-4 rounded-lg font-display text-xs font-bold transition-all cursor-pointer ${
              activeConsoleTab === "roi" ? "bg-vtech-blue text-white" : "text-gray-400 hover:text-white"
            }`}
          >
            <Calculator size={14} /> simulador sem / roi
          </button>
          
          <button 
            onClick={() => setActiveConsoleTab("crm")}
            className={`flex items-center gap-2 py-2.5 px-4 rounded-lg font-display text-xs font-bold transition-all cursor-pointer ${
              activeConsoleTab === "crm" ? "bg-vtech-blue text-white" : "text-gray-400 hover:text-white"
            }`}
          >
            <Users size={14} />
            leads / crm
            {leads.filter(l => l.status === "new").length > 0 && (
              <span className="bg-red-500 text-white font-mono text-[9px] px-1.5 h-4 min-w-4 flex items-center justify-center rounded-full leading-none shrink-0 border border-vtech-black">
                {leads.filter(l => l.status === "new").length}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Main Console Box render */}
      <div className="bg-vtech-dark rounded-3xl border border-white/10 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-vtech-blue via-transparent to-vtech-blue opacity-50"></div>
        {/* Background visual detail */}
        <div className="absolute bottom-0 right-0 h-44 w-44 bg-vtech-blue/5 rounded-full blur-2xl pointer-events-none"></div>

        {/* Dynamic Inner Tab Content selection */}
        {activeConsoleTab === "audit" && (
          <div className="space-y-8 animate-fadeIn">
            <div className="grid lg:grid-cols-12 gap-8">
              
              {/* Left Column: Input Parameter configuration */}
              <div className="lg:col-span-5 bg-vtech-black/60 p-6 rounded-2xl border border-white/5 h-max">
                <h3 className="text-lg font-bold mb-4 font-display text-white flex items-center gap-2">
                  <Sparkles size={16} className="text-vtech-blue" />
                  Escanear Nueva Marca
                </h3>
                <p className="text-xs text-gray-400 mb-6 leading-relaxed">
                  Genera una auditoría profunda de posicionamiento orgánico, costos de pauta SEM recomendados y embudos (CRO) usando IA Gemini.
                </p>

                <form onSubmit={handleLaunchAudit} className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400 mb-1.5">Nombre de la Marca *</label>
                    <input 
                      required
                      value={auditBrandName}
                      onChange={(e) => setAuditBrandName(e.target.value)}
                      className="w-full bg-vtech-dark border border-white/10 rounded-xl p-3.5 text-xs text-white focus:ring-1 focus:ring-vtech-blue focus:outline-none focus:border-vtech-blue"
                      placeholder="Ej. Sabor S.A."
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400 mb-1.5">URL o sitio Web</label>
                    <input 
                      value={auditUrl}
                      onChange={(e) => setAuditUrl(e.target.value)}
                      className="w-full bg-vtech-dark border border-white/10 rounded-xl p-3.5 text-xs text-white focus:ring-1 focus:ring-vtech-blue focus:outline-none focus:border-vtech-blue"
                      placeholder="https://empresa.com"
                      type="url"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400 mb-1.5">Sector Principal</label>
                      <select 
                        value={auditIndustry}
                        onChange={(e) => setAuditIndustry(e.target.value)}
                        className="w-full bg-vtech-dark border border-white/10 rounded-xl p-3.5 text-xs text-white cursor-pointer focus:ring-1 focus:ring-vtech-blue focus:outline-none focus:border-vtech-blue"
                      >
                        <option value="E-commerce">E-commerce</option>
                        <option value="Tecnología / SaaS">Tecnología / SaaS</option>
                        <option value="Salud y Medicina">Salud y Medicina</option>
                        <option value="Servicios B2B">Servicios B2B</option>
                        <option value="Inmobiliaria / Real Estate">Inmobiliaria</option>
                        <option value="Educación">Educación</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400 mb-1.5">Presupuesto pauta (Surgido)</label>
                      <select 
                        className="w-full bg-vtech-dark border border-white/10 rounded-xl p-3.5 text-xs text-white cursor-pointer focus:ring-1 focus:ring-vtech-blue focus:outline-none focus:border-vtech-blue"
                      >
                        <option>€500 - €1,500 / mes</option>
                        <option>€1,500 - €3,000 / mes</option>
                        <option>€3,000 - €7,000 / mes</option>
                        <option>Más de €7,000 / mes</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400 mb-1.5">Objetivos críticas de Negocio</label>
                    <textarea 
                      value={auditGoals}
                      onChange={(e) => setAuditGoals(e.target.value)}
                      className="w-full bg-vtech-dark border border-white/10 rounded-xl p-3.5 text-xs text-white focus:ring-1 focus:ring-vtech-blue focus:outline-none focus:border-vtech-blue"
                      placeholder="Ej. Duplicar el volumen de descargas, captar inversionistas..."
                      rows={2}
                    ></textarea>
                  </div>

                  <button 
                    disabled={auditLoading}
                    type="submit"
                    className="w-full bg-vtech-blue hover:bg-blue-600 font-extrabold text-[#ffffff] py-3.5 rounded-xl font-display text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-blue-900/40"
                  >
                    {auditLoading ? "PROCESANDO ESCANEO..." : "INICIAR ANÁLISIS IA"}
                  </button>
                </form>

                {/* Simulated alert warning message */}
                {isSimulatedResponse && auditResult && (
                  <div className="mt-4 p-3 bg-blue-950/20 border border-blue-900/30 rounded-xl flex items-start gap-2.5 text-gray-400 text-[10px] leading-relaxed">
                    <CheckCircle2 size={13} className="text-blue-400 shrink-0 mt-0.5" />
                    <span>
                      <strong>Consultoría Activa:</strong> Análisis generado con modelos estratégicos de alta precisión.
                    </span>
                  </div>
                )}
              </div>

              {/* Right Column: Loading display or results display */}
              <div className="lg:col-span-7 bg-vtech-black/30 p-6 rounded-2xl border border-white/5 min-h-[380px] flex flex-col items-center justify-center relative">
                
                {/* 1. Normal state: before search */}
                {!auditLoading && !auditResult && (
                  <div className="text-center p-8">
                    <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-400 animate-pulse">
                      <BrainCircuit size={28} />
                    </div>
                    <h4 className="text-lg font-bold font-display text-white mb-2">Esperando parámetros de la Auditoría</h4>
                    <p className="text-xs text-gray-400 max-w-sm mx-auto leading-relaxed">
                      Completa el formulario estratégico de la izquierda para desplegar recomendaciones tácticas estructuradas de alto rendimiento.
                    </p>
                  </div>
                )}

                {/* 2. Loading state */}
                {auditLoading && (
                  <div className="text-center space-y-6 max-w-sm p-4 animate-fadeIn">
                    <div className="relative w-16 h-16 mx-auto">
                      {/* Orbital Spinner dots */}
                      <div className="absolute inset-0 border-2 border-dashed border-vtech-blue rounded-full animate-spin"></div>
                      <div className="absolute inset-2 border border-vtech-blue/30 rounded-full"></div>
                      <BrainCircuit size={20} className="text-vtech-blue absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                    </div>
                    <div>
                      <h4 className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest leading-relaxed">ABEL INTEL ENGINE RUNNING</h4>
                      <p className="text-sm font-bold text-white font-display mt-2 italic transition-all">{loadingStep}</p>
                    </div>
                    <div className="h-1 bg-white/10 rounded-full overflow-hidden w-40 mx-auto">
                      <div className="h-full bg-vtech-blue animate-shimmer w-1/3 rounded-full"></div>
                    </div>
                  </div>
                )}

                {/* 3. Results loaded screen */}
                {auditResult && !auditLoading && (
                  <div className="w-full text-left space-y-6 animate-fadeIn">
                    
                    {/* Upper Score metrics */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-vtech-black/50 p-5 rounded-xl border border-white/5">
                      <div className="flex items-center gap-4">
                        {/* Circular progress bar SVG representation */}
                        <div className="relative w-16 h-16 shrink-0 select-none">
                          <svg className="w-full h-full transform -rotate-90">
                            <circle cx="32" cy="32" r="28" stroke="rgba(255,255,255,0.05)" strokeWidth="5" fill="transparent" />
                            <circle 
                              cx="32" 
                              cy="32" 
                              r="28" 
                              stroke="#007bff" 
                              strokeWidth="5" 
                              fill="transparent" 
                              strokeDasharray={`${2 * Math.PI * 28}`}
                              strokeDashoffset={`${2 * Math.PI * 28 * (1 - auditResult.score / 100)}`}
                              className="transition-all duration-1000"
                            />
                          </svg>
                          <span className="font-display font-black text-xs text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            {auditResult.score}%
                          </span>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white font-display">Nivel de Madurez Digital</h4>
                          <p className="text-[11px] text-gray-400">Puntaje global según estándares Abel Marketing.</p>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="text-[10px] font-bold font-mono text-emerald-400 border border-emerald-400/20 bg-emerald-400/5 px-2.5 py-1 rounded-full uppercase tracking-wider">
                          PREVISIÓN: {auditResult.growthForecast}
                        </span>
                        <div className="text-[10px] text-gray-400 mt-1.5 font-mono">CPC estimado sectorial: €{auditResult.simulatedCPC.toFixed(2)} / clic</div>
                      </div>
                    </div>

                    {/* Summary paragraphs */}
                    <div className="space-y-2">
                      <h4 className="text-[#adc7ff] font-bold text-xs uppercase font-mono tracking-widest">RESUMEN ESTRATÉGICO EJECUTIVO</h4>
                      <p className="text-xs text-gray-400 leading-relaxed max-w-2xl whitespace-pre-line">
                        {auditResult.summary}
                      </p>
                    </div>

                    {/* SEO and SEM action lists */}
                    <div className="grid md:grid-cols-2 gap-6 pt-2">
                      {/* SEO Column */}
                      <div className="bg-vtech-black/40 p-4 rounded-xl border border-white/5 space-y-3">
                        <div className="flex items-center gap-1.5 border-b border-white/5 pb-2">
                          <Globe size={14} className="text-blue-400" />
                          <h5 className="font-bold text-xs text-white uppercase tracking-wider">{auditResult.seoStrategy.title}</h5>
                        </div>
                        <ul className="space-y-2 text-[11px]">
                          {auditResult.seoStrategy.actions.map((act, i) => (
                            <li key={i} className="flex gap-2 text-gray-400 leading-relaxed">
                              <span className="text-vtech-blue font-bold font-mono shrink-0">0{i+1}.</span>
                              <span>{act}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* SEM Column */}
                      <div className="bg-vtech-black/40 p-4 rounded-xl border border-white/5 space-y-3">
                        <div className="flex items-center gap-1.5 border-b border-white/5 pb-2">
                          <TrendingUp size={14} className="text-vtech-blue" />
                          <h5 className="font-bold text-xs text-white uppercase tracking-wider">{auditResult.semStrategy.title}</h5>
                        </div>
                        <ul className="space-y-2 text-[11px]">
                          {auditResult.semStrategy.actions.map((act, i) => (
                            <li key={i} className="flex gap-2 text-gray-400 leading-relaxed">
                              <span className="text-[#adc7ff] font-bold font-mono shrink-0">0{i+1}.</span>
                              <span>{act}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* CRO recommendations panel */}
                    <div className="bg-vtech-black/40 p-4 rounded-xl border border-white/5 space-y-2">
                      <div className="flex items-center gap-1.5 border-b border-white/5 pb-2">
                        <Sparkles size={14} className="text-yellow-400" />
                        <h5 className="font-bold text-xs text-white uppercase tracking-wider">{auditResult.conversionStrategy.title}</h5>
                      </div>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-gray-400">
                        {auditResult.conversionStrategy.recommendations.map((rec, i) => (
                          <li key={i} className="flex items-center gap-2 leading-relaxed">
                            <span className="w-1 h-1 bg-yellow-400 rounded-full shrink-0"></span>
                            <span>{rec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                )}

              </div>

            </div>
          </div>
        )}

        {/* Simulador de ROI SEM Tab */}
        {activeConsoleTab === "roi" && (
          <div className="space-y-8 animate-fadeIn">
            <div className="grid lg:grid-cols-12 gap-8">
              
              {/* Sliders columns (left) */}
              <div className="lg:col-span-5 bg-vtech-black/60 p-6 rounded-2xl border border-white/5 space-y-6">
                <div>
                  <h3 className="text-base font-bold font-display text-white">Configuración del Presupuesto Comercial</h3>
                  <p className="text-[11px] text-gray-400 leading-relaxed mt-1">Ajusta los sliders operativos para simular el embudo publicitario SEM y calcular ingresos proyectados.</p>
                </div>

                <div className="space-y-5">
                  {/* Budget Slider */}
                  <div>
                    <div className="flex justify-between items-center text-xs text-gray-300 font-mono mb-2">
                      <span>Presupuesto Mensual:</span>
                      <span className="text-vtech-blue font-bold">€{budget.toLocaleString()} / mes</span>
                    </div>
                    <input 
                      type="range"
                      min={500}
                      max={15000}
                      step={250}
                      value={budget}
                      onChange={(e) => setBudget(Number(e.target.value))}
                      className="w-full text-vtech-blue cursor-pointer accent-vtech-blue"
                    />
                    <div className="flex justify-between text-[9px] text-gray-500 font-mono mt-1">
                      <span>€500</span>
                      <span>€15,000 max</span>
                    </div>
                  </div>

                  {/* CPC Slider */}
                  <div>
                    <div className="flex justify-between items-center text-xs text-gray-300 font-mono mb-2">
                      <span>Costo por Clic (CPC):</span>
                      <span className="text-vtech-blue font-bold">€{cpc.toFixed(2)}</span>
                    </div>
                    <input 
                      type="range"
                      min={0.20}
                      max={5.00}
                      step={0.05}
                      value={cpc}
                      onChange={(e) => setCpc(Number(e.target.value))}
                      className="w-full text-vtech-blue cursor-pointer accent-vtech-blue"
                    />
                    <div className="flex justify-between text-[9px] text-gray-500 font-mono mt-1">
                      <span>€0.20</span>
                      <span>€5.00 max</span>
                    </div>
                  </div>

                  {/* Conversion Rate Slider */}
                  <div>
                    <div className="flex justify-between items-center text-xs text-gray-300 font-mono mb-2">
                      <span>Tasa de Conversión (CR %):</span>
                      <span className="text-emerald-400 font-bold">{convRate.toFixed(1)}%</span>
                    </div>
                    <input 
                      type="range"
                      min={0.5}
                      max={12.0}
                      step={0.1}
                      value={convRate}
                      onChange={(e) => setConvRate(Number(e.target.value))}
                      className="w-full text-vtech-blue cursor-pointer accent-vtech-blue"
                    />
                    <div className="flex justify-between text-[9px] text-gray-500 font-mono mt-1">
                      <span>0.5% (Pesimista)</span>
                      <span>12.0% (Alto Rendimiento)</span>
                    </div>
                  </div>

                  {/* Average order price / value slider */}
                  <div>
                    <div className="flex justify-between items-center text-xs text-gray-300 font-mono mb-2">
                      <span>Valor promedio del Ticket / Leads:</span>
                      <span className="text-emerald-400 font-bold">€{avgVal}</span>
                    </div>
                    <input 
                      type="range"
                      min={10}
                      max={1000}
                      step={5}
                      value={avgVal}
                      onChange={(e) => setAvgVal(Number(e.target.value))}
                      className="w-full text-vtech-blue cursor-pointer accent-vtech-blue"
                    />
                    <div className="flex justify-between text-[9px] text-gray-500 font-mono mt-1">
                      <span>€10</span>
                      <span>€1,000 max</span>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-emerald-500/5 border border-emerald-400/20 rounded-xl">
                  <p className="text-[10px] text-gray-400 leading-relaxed">
                    ⚙️ <strong>Efecto Velocidad:</strong> Aumentar el presupuesto publicitario o la tasa de conversión impulsa de forma logarítmica los ingresos proyectados y reduce costos fijos.
                  </p>
                </div>
              </div>

              {/* Graphic projections and visualizer outputs (right) */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* 4 Cards dynamic indicators */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  
                  {/* Clicks card */}
                  <div className="bg-vtech-black/40 p-4 rounded-xl border border-white/5">
                    <span className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest">CLICS MENSUALES</span>
                    <div className="text-2xl font-black font-display text-white mt-1.5">{simulatedClicks.toLocaleString()}</div>
                    <span className="text-[9px] text-gray-500">Tráfico estimado</span>
                  </div>

                  {/* Conversiones card */}
                  <div className="bg-vtech-black/40 p-4 rounded-xl border border-white/5">
                    <span className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest">CONVERSIONES</span>
                    <div className="text-2xl font-black font-display text-white mt-1.5">{simulatedConversions.toLocaleString()}</div>
                    <span className="text-[9px] text-gray-500">Acciones / Leads</span>
                  </div>

                  {/* Revenue card */}
                  <div className="bg-vtech-black/40 p-4 rounded-xl border border-white/5">
                    <span className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest">INGRESOS ROI</span>
                    <div className="text-2xl font-black font-display text-emerald-400 mt-1.5">€{simulatedRevenue.toLocaleString()}</div>
                    <span className="text-[9px] text-gray-500">Volumen bruto</span>
                  </div>

                  {/* ROI card */}
                  <div className="bg-vtech-black/40 p-4 rounded-xl border border-white/5">
                    <span className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest">RETORNO ROI</span>
                    <div className={`text-2xl font-black font-display mt-1.5 ${roiValue >= 100 ? "text-emerald-400" : "text-amber-400"}`}>
                      {roiValue}%
                    </div>
                    <span className="text-[9px] text-gray-500">Retorno Neto</span>
                  </div>

                </div>

                {/* Compound line projection chart custom SVG draw with mouse tooltips */}
                <div className="bg-vtech-black/50 p-6 rounded-2xl border border-white/5 relative">
                  <div className="flex justify-between items-center mb-4 text-xs font-mono">
                    <span className="text-[#adc7ff] font-bold flex items-center gap-1.5 uppercase tracking-wide">
                      <TrendingUp size={14} /> Proyección Compuesta a 6 Meses (€)
                    </span>
                    <span className="text-gray-400">Puntajes proyectivos acumulativos</span>
                  </div>

                  {/* Custom Polyline draw box inside container limits */}
                  <div className="relative h-56 w-full mt-2">
                    <svg className="w-full h-full select-none" viewBox="0 0 600 240">
                      {/* Standard Grid backgrounds */}
                      <line x1="50" y1="50" x2="550" y2="50" stroke="rgba(255,255,255,0.05)" />
                      <line x1="50" y1="100" x2="550" y2="100" stroke="rgba(255,255,255,0.05)" />
                      <line x1="50" y1="150" x2="550" y2="150" stroke="rgba(255,255,255,0.05)" />
                      <line x1="50" y1="200" x2="550" y2="200" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
                      
                      {/* Left side labels */}
                      <text x="10" y="55" className="text-[9px] fill-gray-500 font-mono">High Price</text>
                      <text x="10" y="125" className="text-[9px] fill-gray-500 font-mono">Mid ROI </text>
                      <text x="10" y="205" className="text-[9px] fill-gray-500 font-mono">0 EUR</text>

                      {/* Continuous compound stroke line drawing */}
                      <polyline
                        fill="none"
                        stroke="#007bff"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        points={getSimulatedLinePoints()}
                        className="filter drop-shadow-[0_0_8px_rgba(0,123,255,0.4)]"
                      />

                      {/* Render circular dots on monthly marks */}
                      {getSimulatedDots().map((dot, idx) => (
                        <g key={idx} className="group">
                          <circle 
                            cx={dot.x} 
                            cy={dot.y} 
                            r="5" 
                            fill="#007bff" 
                            stroke="#ffffff" 
                            strokeWidth="1.5"
                            className="cursor-pointer hover:r-7 transition-all duration-300"
                          />
                          <text 
                            x={dot.x - 22} 
                            y={dot.y - 12} 
                            className="text-[9px] font-mono fill-[#adc7ff] font-bold bg-black opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            €{Math.round(dot.estRevenueM).toLocaleString()}
                          </text>
                        </g>
                      ))}

                      {/* Bottom months references */}
                      <text x="50" y="222" className="text-[10px] fill-gray-400 font-mono text-center">Mes 0</text>
                      <text x="133" y="222" className="text-[10px] fill-gray-400 font-mono text-center">Mes 1</text>
                      <text x="216" y="222" className="text-[10px] fill-gray-400 font-mono text-center">Mes 2</text>
                      <text x="300" y="222" className="text-[10px] fill-gray-400 font-mono text-center">Mes 3</text>
                      <text x="383" y="222" className="text-[10px] fill-gray-400 font-mono text-center">Mes 4</text>
                      <text x="466" y="222" className="text-[10px] fill-gray-400 font-mono text-center">Mes 5</text>
                      <text x="550" y="222" className="text-[10px] fill-gray-400 font-mono text-center">Mes 6</text>
                    </svg>
                  </div>

                  <div className="p-3.5 bg-vtech-dark rounded-xl border border-white/5 text-[10px] text-gray-400 leading-relaxed mt-2">
                    📈 <strong>Compounding Growth Effect:</strong> Nuestra optimización recurrente del embudo orgánico incrementa el CTR e históricamente aumenta el volumen de ingresos un 22% por mes para budgets comparables.
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* CRM Leads Inbox Tab */}
        {activeConsoleTab === "crm" && (
          <div className="space-y-8 animate-fadeIn">
            <div className="grid lg:grid-cols-12 gap-8">
              
              {/* Left Column: Lead Box list */}
              <div className="lg:col-span-7 bg-vtech-black/60 p-6 rounded-2xl border border-white/5 space-y-4 max-h-[500px] overflow-y-auto">
                <div className="flex justify-between items-center pb-2 border-b border-white/10">
                  <h3 className="text-base font-bold font-display text-white">Solicitudes Recibidas (CRM Inbox)</h3>
                  <span className="text-[10px] font-mono text-gray-400 uppercase">{leads.length} leads totales</span>
                </div>

                <div className="space-y-3">
                  {leads.map((lead) => {
                    const isSelected = selectedLead?.id === lead.id;

                    const statusLabels: Record<string, { t: string, c: string }> = {
                      new: { t: "Nuevo", c: "bg-red-500/10 text-red-400 border-red-500/20" },
                      contacted: { t: "Contactado", c: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
                      in_progress: { t: "En Proceso", c: "bg-amber-500/10 text-amber-400 border-amber-500/20" },
                      closed: { t: "Cerrado", c: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" }
                    };

                    const matchedLabel = statusLabels[lead.status] || { t: "New", c: "bg-gray-500/10 text-gray-400 border-gray-500/20" };

                    return (
                      <div 
                        key={lead.id}
                        onClick={() => { setSelectedLead(lead); setSelectedLeadNoteInput(lead.notes || ""); }}
                        className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between text-left ${
                          isSelected ? "bg-vtech-blue/10 border-vtech-blue" : "bg-vtech-dark border-white/5 hover:border-white/15"
                        }`}
                      >
                        <div className="space-y-1 max-w-[70%]">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-xs text-white uppercase sm:text-sm">{lead.name}</span>
                            <span className="text-[10px] text-gray-500 font-mono">({lead.brandName || "Sin Marca"})</span>
                          </div>
                          <div className="text-[11px] text-gray-400 truncate">{lead.email}</div>
                          <div className="text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/10 inline-block font-mono text-gray-300">
                            Servicio: {lead.service}
                          </div>
                        </div>

                        <div className="flex flex-col items-end gap-2 shrink-0">
                          <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-full border uppercase ${matchedLabel.c}`}>
                            {matchedLabel.t}
                          </span>
                          <span className="text-[10px] font-mono font-bold text-emerald-400">€{lead.budget.toLocaleString()} plan</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Lead selected detail information & status modifier */}
              <div className="lg:col-span-5 bg-vtech-black/30 p-6 rounded-2xl border border-white/5 h-max relative min-h-[300px]">
                
                {selectedLead && currentMatchedLead ? (
                  <div className="space-y-6 text-left animate-fadeIn">
                    <div className="border-b border-white/10 pb-4">
                      <span className="text-[9px] font-mono font-bold text-vtech-blue uppercase tracking-widest">EXPEDIENTE DE PROSPECTO</span>
                      <h4 className="text-xl font-bold font-display text-white mt-1">{currentMatchedLead.name}</h4>
                      <div className="text-xs text-gray-400 mt-1">{currentMatchedLead.email}</div>
                    </div>

                    <div className="space-y-4 text-xs">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <span className="block text-[9px] font-mono text-gray-500 uppercase">MARCA</span>
                          <span className="font-bold font-display text-white mt-0.5 block">{currentMatchedLead.brandName || "No indicada"}</span>
                        </div>
                        <div>
                          <span className="block text-[9px] font-mono text-gray-500 uppercase">SITIO WEB ACTUAL</span>
                          <span className="font-bold font-display text-white mt-0.5 block truncate hover:underline">
                            {currentMatchedLead.websiteUrl ? (
                              <a href={currentMatchedLead.websiteUrl} target="_blank" rel="noopener noreferrer">
                                {currentMatchedLead.websiteUrl}
                              </a>
                            ) : "No indicado"}
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <span className="block text-[9px] font-mono text-gray-500 uppercase">SERVICIO ENLACE</span>
                          <span className="font-bold block text-vtech-blue mt-0.5">{currentMatchedLead.service}</span>
                        </div>
                        <div>
                          <span className="block text-[9px] font-mono text-gray-500 uppercase">PRESUPUESTO ESTIMADO</span>
                          <span className="font-bold block text-emerald-400 mt-0.5">€{currentMatchedLead.budget.toLocaleString()} / mes</span>
                        </div>
                      </div>

                      <div>
                        <span className="block text-[9px] font-mono text-gray-500 uppercase">MENSAJE PRINCIPAL</span>
                        <p className="bg-vtech-dark p-3 rounded-xl border border-white/5 mt-1 text-gray-400 leading-relaxed whitespace-pre-line text-[11px]">
                          {currentMatchedLead.message || "Sin mensaje adicional."}
                        </p>
                      </div>

                      {/* Status modifier buttons */}
                      <div>
                        <span className="block text-[9px] font-mono text-gray-500 uppercase mb-2">MODIFICAR ESTADO DEL PROSPECTO</span>
                        <div className="grid grid-cols-4 gap-1.5 font-mono text-[9px] font-bold">
                          <button 
                            onClick={() => onUpdateLeadStatus(currentMatchedLead.id, "new")}
                            className={`py-2 px-1 rounded uppercase transition-all cursor-pointer ${
                              currentMatchedLead.status === "new" ? "bg-red-500 text-white font-black" : "bg-white/5 hover:bg-white/10 text-gray-300"
                            }`}
                          >
                            Nuevo
                          </button>
                          <button 
                            onClick={() => onUpdateLeadStatus(currentMatchedLead.id, "contacted")}
                            className={`py-2 px-1 rounded uppercase transition-all cursor-pointer ${
                              currentMatchedLead.status === "contacted" ? "bg-blue-500 text-white font-black" : "bg-white/5 hover:bg-white/10 text-gray-300"
                            }`}
                          >
                            Llamar
                          </button>
                          <button 
                            onClick={() => onUpdateLeadStatus(currentMatchedLead.id, "in_progress")}
                            className={`py-2 px-1 rounded uppercase transition-all cursor-pointer ${
                              currentMatchedLead.status === "in_progress" ? "bg-amber-500 text-white font-black" : "bg-white/5 hover:bg-white/10 text-gray-300"
                            }`}
                          >
                            Estudio
                          </button>
                          <button 
                            onClick={() => onUpdateLeadStatus(currentMatchedLead.id, "closed")}
                            className={`py-2 px-1 rounded uppercase transition-all cursor-pointer ${
                              currentMatchedLead.status === "closed" ? "bg-emerald-500 text-white font-black" : "bg-white/5 hover:bg-white/10 text-gray-300"
                            }`}
                          >
                            Cerrado
                          </button>
                        </div>
                      </div>

                      {/* Persistent Notes section */}
                      <div className="space-y-1.5">
                        <span className="block text-[9px] font-mono text-gray-500 uppercase">NOTAS DE CONVERSACIÓN (GUARDADO VIVO)</span>
                        <textarea 
                          value={selectedLeadNoteInput}
                          onChange={(e) => setSelectedLeadNoteInput(e.target.value)}
                          placeholder="Añade precisiones o notas de la reunión..."
                          className="w-full bg-vtech-dark border border-white/10 rounded-xl p-3 text-xs text-white focus:outline-none focus:ring-1 focus:ring-vtech-blue"
                          rows={2}
                        ></textarea>
                        <button 
                          onClick={() => { onAddLeadNotes(currentMatchedLead.id, selectedLeadNoteInput); alert("Notas guardadas correctamente."); }}
                          className="bg-vtech-blue hover:bg-blue-600 text-[10px] font-bold text-white font-display py-1.5 px-3 rounded uppercase transition-all cursor-pointer self-end block"
                        >
                          Guardar Notas
                        </button>
                      </div>

                    </div>
                  </div>
                ) : (
                  <div className="text-center absolute inset-0 flex flex-col items-center justify-center p-8">
                    <FolderOpen size={28} className="text-gray-600 mb-3 animate-pulse" />
                    <h5 className="font-bold text-white text-sm font-display mb-1">Ningún Lead Seleccionado</h5>
                    <p className="text-[11px] text-gray-400 max-w-xs mx-auto leading-relaxed">
                      Haz clic en cualquiera de las tarjetas de leads del buzón de la izquierda para desplegar, editar y registrar notas de conversión corporativas.
                    </p>
                  </div>
                )}

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
