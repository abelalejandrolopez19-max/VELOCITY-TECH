import { motion } from "motion/react";
import { ArrowRight, BadgeCheck } from "lucide-react";

interface HeroProps {
  onExploreServices: () => void;
  onOpenAudit: () => void;
}

export default function Hero({ onExploreServices, onOpenAudit }: HeroProps) {
  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden py-24 px-6"
    >
      {/* Dynamic Background Glowing Blobs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] bg-blue-600/10 rounded-full blur-[140px] animate-pulse"></div>
        <div className="absolute bottom-1/8 -right-20 w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] bg-blue-500/15 rounded-full blur-[130px] animate-pulse" style={{ animationDuration: '6s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-14 mt-6">
        {/* Google Partner Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#adc7ff] font-display">
            Abel Marketing • Agencia de Rendimiento Digital
          </span>
        </motion.div>

        {/* Action Phrase */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight tracking-tight font-display"
        >
          La Agencia de Marketing Digital <br className="hidden md:block"/>
          <span className="gradient-text font-black select-none">que acelerará tu crecimiento</span>
        </motion.h1>

        {/* Bullet description */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 sm:px-4 ml-auto mr-auto leading-relaxed"
        >
          Impulsamos marcas líderes con estrategias basadas en datos, creatividad sin límites y una obsesión implacable por resultados comerciales verdaderos.
        </motion.p>

        {/* Call to action panel */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center px-4"
        >
          <button 
            onClick={onExploreServices}
            className="w-full sm:w-auto glow-button bg-vtech-blue text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-blue-600 transition-all cursor-pointer font-display flex items-center justify-center gap-2 group"
          >
            Nuestros Servicios
            <ArrowRight size={18} className="transform transition-transform group-hover:translate-x-1" />
          </button>
          
          <button 
            onClick={() => {
              const el = document.getElementById("contacto");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-bold text-base transition-all border border-white/10 hover:border-white/20 cursor-pointer font-display"
          >
            Contactar Ahora
          </button>
        </motion.div>
      </div>

      {/* Futuristic Grid background line accent */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </section>
  );
}
