import { MessageSquare, Zap, BarChart3, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

export default function WhyUs() {
  const points = [
    {
      icon: <MessageSquare size={22} className="text-vtech-blue" />,
      title: "Comunicación Directa",
      desc: "Canales abiertos 24/7 y tableros interactivos con reportes claros de progreso."
    },
    {
      icon: <Zap size={22} className="text-vtech-blue" />,
      title: "Agilidad Técnica",
      desc: "Implementamos pautas, landing pages y optimizaciones de código a gran velocidad sin burocracia."
    },
    {
      icon: <BarChart3 size={22} className="text-vtech-blue" />,
      title: "Decisiones en Datos",
      desc: "Cero suposiciones. Cada movimiento y sugerencia de presupuesto está respaldada por analítica rigurosa."
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-vtech-dark px-6 border-b border-white/5 relative overflow-hidden">
      
      {/* Decorative gradient element */}
      <div className="absolute top-1/2 left-2/3 h-96 w-96 bg-vtech-blue/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Text and bullets */}
        <div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono font-bold text-vtech-blue bg-blue-600/10 border border-vtech-blue/20 rounded-full py-1.5 px-4 inline-block mb-3 tracking-widest uppercase"
          >
            DIFERENCIADOR ESTRATÉGICO
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold mb-6 font-display"
          >
            ¿Por qué <span className="text-vtech-blue">Abel Marketing</span>?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-base sm:text-lg mb-10 leading-relaxed"
          >
            Nos convertimos en tu aliado de crecimiento y tecnología. Nos involucramos de lleno para comprender tu negocio y generar resultados reales de ventas y clientes.
          </motion.p>

          <div className="space-y-8">
            {points.map((pt, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex gap-5 group"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-vtech-blue/15 group-hover:border-vtech-blue">
                  {pt.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold font-display text-white group-hover:text-vtech-blue transition-colors mb-1">
                    {pt.title}
                  </h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {pt.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side: Big Logo Shield Graphic Accent */}
        <div className="relative">
          {/* Subtle Ambient Outer Aura */}
          <div className="absolute inset-0 bg-blue-600/10 rounded-full blur-[80px] pointer-events-none transform scale-90 animate-pulse"></div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10 w-full max-w-[420px] mx-auto filter drop-shadow-[0_0_40px_rgba(0,123,255,0.25)] select-none"
          >
            <div className="relative p-1 bg-gradient-to-tr from-vtech-blue/30 via-white/5 to-vtech-blue/20 rounded-full">
              <img 
                alt="Abel Logo Shield" 
                className="w-full h-auto object-center animate-glow-pulse" 
                src="/brand/logo.png"
              />
            </div>

            {/* Glowing Brand Accents overlay */}
            <div className="absolute top-4 left-4 flex gap-1 items-center bg-black/70 backdrop-blur-md border border-white/10 rounded-full py-1.5 px-3.5 shadow-lg">
              <ShieldCheck size={14} className="text-[#adc7ff]" />
              <span className="text-[10px] font-bold font-mono tracking-wider uppercase text-gray-200">Abel Shield Active</span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
