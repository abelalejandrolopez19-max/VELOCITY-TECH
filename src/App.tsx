import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Faq from "./components/Faq";
import ContactForm from "./components/ContactForm";
import Console from "./components/Console";
import { INITIAL_LEADS } from "./data";
import { Lead } from "./types";

export default function App() {
  const [activeTab, setActiveTab] = React.useState<"home" | "console">("home");

  // Local storage CRM persistence engine
  const [leads, setLeads] = React.useState<Lead[]>(() => {
    const saved = localStorage.getItem("abel_leads_db");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.warn("Failed to read leads from localStorage, reloading default dataset.", e);
      }
    }
    return INITIAL_LEADS;
  });

  React.useEffect(() => {
    localStorage.setItem("abel_leads_db", JSON.stringify(leads));
  }, [leads]);

  // Lead handlers
  const handleLeadSubmitted = (newLead: Lead) => {
    setLeads((prev) => [newLead, ...prev]);
  };

  const handleUpdateLeadStatus = (id: string, nextStatus: Lead["status"]) => {
    setLeads((prev) => 
      prev.map((lead) => (lead.id === id ? { ...lead, status: nextStatus } : lead))
    );
  };

  const handleAddLeadNotes = (id: string, notes: string) => {
    setLeads((prev) => 
      prev.map((lead) => (lead.id === id ? { ...lead, notes } : lead))
    );
  };

  // Helper trigger buttons to scroll to contact or open elements
  const handleExploreServices = () => {
    const el = document.getElementById("servicios");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOpenAiAudit = () => {
    React.startTransition(() => {
      setActiveTab("console");
    });
    // Smooth scroll top so they see the form
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-vtech-black text-vtech-silver font-sans selection:bg-vtech-blue selection:text-white">
      {/* Shared Header bar across views */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onOpenConsultation={() => {
          setActiveTab("home");
          setTimeout(() => {
            const contactEl = document.getElementById("contacto");
            if (contactEl) contactEl.scrollIntoView({ behavior: "smooth" });
          }, 150);
        }}
      />

      {/* Main Switch Display */}
      {activeTab === "home" ? (
        <main className="animate-fadeIn">
          {/* Main Hero presentation landing */}
          <Hero 
            onExploreServices={handleExploreServices} 
            onOpenAudit={handleOpenAiAudit} 
          />

          {/* Core Services catalog */}
          <Services />

          {/* Why Abel Marketing differentiate factors */}
          <WhyUs />

          {/* Accordion list FAQ */}
          <Faq />

          {/* Luminous dynamic validation Form */}
          <ContactForm />
        </main>
      ) : (
        <main className="animate-fadeIn">
          {/* Strat portal / SEM calculators / CRM */}
          <Console 
            leads={leads} 
            onUpdateLeadStatus={handleUpdateLeadStatus} 
            onAddLeadNotes={handleAddLeadNotes} 
          />
        </main>
      )}

      {/* Corporate branded Footer section */}
      <footer className="bg-vtech-black/90 py-14 text-center border-t border-white/5 flex flex-col items-center justify-center select-none px-6">
        <div className="flex items-center gap-2 mb-4">
          <img 
            alt="Abel Marketing small layout" 
            className="h-6 w-auto opacity-70 scale-90"
            src="/brand/logo.png"
          />
          <span className="text-xs font-bold tracking-widest text-[#adc7ff] font-display uppercase">ABEL MARKETING HIGH-PERFORMANCE</span>
        </div>
        <p className="text-[10px] text-gray-500 font-mono leading-relaxed max-w-md">
          © 2026 Abel Marketing. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}
