import React from "react";
import { Zap, Menu, LayoutDashboard, Globe, X } from "lucide-react";
import { motion } from "motion/react";

interface HeaderProps {
  activeTab: "home" | "console";
  setActiveTab: (tab: "home" | "console") => void;
  onOpenConsultation: () => void;
}

export default function Header({ activeTab, setActiveTab, onOpenConsultation }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems = [
    { label: "Inicio", id: "hero" },
    { label: "Servicios", id: "servicios" },
    { label: "Clientes", id: "clientes" },
    { label: "Contacto", id: "contacto" }
  ];

  const handleSmoothScroll = (id: string) => {
    setMobileMenuOpen(false);
    setActiveTab("home");
    // Wait for state update is processed, then scroll
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 glass-nav">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand Logo */}
        <button 
          onClick={() => { setActiveTab("home"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="flex items-center gap-3 cursor-pointer group text-left"
          id="nav-logo"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-blue-600/30 rounded-full blur-md group-hover:bg-blue-600/50 transition-all"></div>
            <img 
              alt="Abel Marketing Logo" 
              className="h-10 w-10 relative z-10 transition-transform duration-500 group-hover:rotate-12" 
              src="/brand/logo.png"
            />
          </div>
          <div>
            <span className="text-xl font-extrabold tracking-tighter text-white font-display">
              ABEL<span className="text-vtech-blue"> MARKETING</span>
            </span>
            <div className="text-[9px] text-[#adc7ff] tracking-widest font-mono font-bold leading-none">HIGH-PERFORMANCE</div>
          </div>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 font-semibold text-xs uppercase tracking-wider">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleSmoothScroll(item.id)}
              className={`hover:text-vtech-blue transition-colors cursor-pointer font-display ${activeTab === "home" ? "text-white" : "text-gray-400"}`}
            >
              {item.label}
            </button>
          ))}

          {/* Toggle Screen Option */}
          <div className="h-4 w-px bg-white/20"></div>

          <button
            onClick={() => setActiveTab(activeTab === "home" ? "console" : "home")}
            className={`flex items-center gap-2 py-1.5 px-3.5 rounded-lg border text-[11px] font-bold tracking-widest transition-all cursor-pointer ${
              activeTab === "console"
                ? "bg-blue-600/20 border-vtech-blue text-blue-400"
                : "border-white/10 hover:border-vtech-blue text-gray-300 hover:text-white"
            }`}
          >
            {activeTab === "console" ? (
              <>
                <Globe size={13} className="text-blue-400" />
                VER LANDING PRINCIPAL
              </>
            ) : (
              <>
                <LayoutDashboard size={13} className="text-vtech-blue" />
                CONSOLA ESTRATÉGICA B2B
              </>
            )}
          </button>
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <button 
            onClick={() => {
              if (activeTab === "console") {
                setActiveTab("home");
                setTimeout(() => handleSmoothScroll("contacto"), 100);
              } else {
                handleSmoothScroll("contacto");
              }
            }}
            className="glow-button cursor-pointer bg-vtech-blue text-white px-6 py-2.5 rounded-full font-bold text-xs tracking-wider uppercase hover:bg-blue-600 transition-all font-display"
          >
            ¿COMENZAMOS?
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={() => setActiveTab(activeTab === "home" ? "console" : "home")}
            className="p-2 rounded-lg border border-white/10 text-xs font-bold text-blue-400 bg-blue-950/20"
          >
            {activeTab === "console" ? "Web" : "Consola B2B"}
          </button>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="text-white p-1 hover:text-vtech-blue transition-colors cursor-pointer"
            id="mobile-nav-toggle"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-vtech-dark border-t border-white/10 p-6 absolute top-full left-0 w-full z-40 space-y-4"
        >
          <div className="flex flex-col space-y-3 font-semibold text-sm uppercase">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleSmoothScroll(item.id)}
                className="text-left py-2 hover:text-vtech-blue transition-colors font-display"
              >
                {item.label}
              </button>
            ))}
            <div className="h-px bg-white/10 my-1"></div>
            <button
              onClick={() => {
                setActiveTab(activeTab === "home" ? "console" : "home");
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 py-3 px-4 rounded-xl bg-blue-950/30 border border-vtech-blue/30 text-blue-400 font-bold"
            >
              <LayoutDashboard size={15} />
              {activeTab === "console" ? "Ver Sitio de Ventas" : "Ir a Consola Estratégica B2B"}
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
}
