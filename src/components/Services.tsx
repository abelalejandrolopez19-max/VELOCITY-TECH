import React from "react";
import { SERVICES_DATA } from "../data";
import { ServiceItem } from "../types";
import { Search, Zap, MessageSquare, Monitor, ShoppingBag, PenTool, ArrowRight, X, Sparkles, CheckCircle, Palette, Database } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "Search": return <Search size={26} className="text-[#adc7ff]" />;
    case "Zap": return <Zap size={26} className="text-[#adc7ff]" />;
    case "MessageSquare": return <MessageSquare size={26} className="text-[#adc7ff]" />;
    case "Monitor": return <Monitor size={26} className="text-[#adc7ff]" />;
    case "ShoppingBag": return <ShoppingBag size={26} className="text-[#adc7ff]" />;
    case "PenTool": return <PenTool size={26} className="text-[#adc7ff]" />;
    case "Palette": return <Palette size={26} className="text-[#adc7ff]" />;
    case "Database": return <Database size={26} className="text-[#adc7ff]" />;
    default: return <Zap size={26} className="text-[#adc7ff]" />;
  }
};

export default function Services() {
  const [selectedService, setSelectedService] = React.useState<ServiceItem | null>(null);

  return (
    <section id="servicios" className="py-24 bg-vtech-black px-6 border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Header section */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-mono font-bold text-vtech-blue bg-blue-600/10 border border-vtech-blue/20 rounded-full py-1.5 px-4 inline-block mb-3 tracking-widest uppercase"
          >
            NUESTRO PORTAFOLIO DE PODER
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 font-display"
          >
            Soluciones de <span className="text-vtech-blue">Alto Rendimiento</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed"
          >
            Nuestro enfoque de ingeniería integral nos permite dominar cada punto de contacto comercial de tu cliente ideal, maximizando resultados finales.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="service-card p-8 rounded-2xl flex flex-col justify-between group"
            >
              <div>
                {/* Icon Wrapper */}
                <div className="w-14 h-14 bg-vtech-blue/10 border border-vtech-blue/20 rounded-xl flex items-center justify-center mb-7 transition-all duration-300 group-hover:bg-vtech-blue group-hover:scale-110">
                  {getIcon(service.icon)}
                </div>

                <h3 className="text-xl font-bold mb-4 font-display text-white group-hover:text-vtech-blue transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <button
                onClick={() => setSelectedService(service)}
                className="text-vtech-blue text-xs font-bold font-mono tracking-widest uppercase hover:underline flex items-center gap-1.5 transition-all w-max cursor-pointer self-start"
              >
                Más info 
                <ArrowRight size={14} className="transform transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive Detail Modal Drawer */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            ></motion.div>

            {/* Content Card */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-vtech-dark max-w-2xl w-full rounded-2xl border border-white/10 p-6 md:p-8 relative z-10 overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 right-0 h-40 w-40 bg-vtech-blue/10 rounded-full blur-3xl pointer-events-none"></div>

              {/* Close Button */}
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white bg-white/5 rounded-full cursor-pointer hover:bg-white/10 transition-all"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-4 mb-6 relative z-10 mt-2">
                <div className="w-12 h-12 bg-vtech-blue/20 rounded-xl flex items-center justify-center border border-vtech-blue/30">
                  {getIcon(selectedService.icon)}
                </div>
                <div>
                  <h3 className="text-2xl font-black font-display text-white">{selectedService.title}</h3>
                  <span className="text-xs font-mono font-bold text-emerald-400">{selectedService.costEstimate}</span>
                </div>
              </div>

              <div className="space-y-6 relative z-10 text-sm text-gray-300">
                <p className="text-base leading-relaxed text-gray-400">
                  {selectedService.extendedDescription}
                </p>

                <div className="bg-vtech-black/55 p-4 rounded-xl border border-white/5">
                  <h4 className="font-bold text-white mb-2 font-display flex items-center gap-1.5 uppercase text-[11px] tracking-wider text-vtech-blue">
                    <Sparkles size={14} /> Cómo Trabajamos Contigo
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-vtech-blue shrink-0" /> Medición clara de tus ventas</li>
                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-vtech-blue shrink-0" /> Mejora continua de tus anuncios</li>
                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-vtech-blue shrink-0" /> Reportes en vivo fáciles de entender</li>
                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-vtech-blue shrink-0" /> Asesoría directa y sin rodeos</li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <a 
                    href="#contacto"
                    onClick={() => setSelectedService(null)}
                    className="flex-1 text-center bg-vtech-blue text-white font-bold py-3 rounded-xl hover:bg-blue-600 transition-all font-display hover:shadow-[0_0_15px_rgba(0,123,255,0.4)]"
                  >
                    Cotizar este servicio
                  </a>
                  <button 
                    onClick={() => setSelectedService(null)}
                    className="flex-1 bg-white/5 hover:bg-white/10 text-white font-bold py-3 rounded-xl border border-white/10 transition-all font-display"
                  >
                    Cerrar ventana
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
