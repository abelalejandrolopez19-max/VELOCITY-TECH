import React from "react";
import { Phone } from "lucide-react";
import { motion } from "motion/react";

export default function ContactForm() {
  return (
    <section id="contacto" className="py-24 bg-vtech-dark relative overflow-hidden px-6">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      {/* Visual glowing effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-96 w-96 bg-vtech-blue/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-3xl mx-auto text-center relative z-10 flex flex-col items-center justify-center">
        
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-mono font-bold text-vtech-blue bg-blue-600/10 border border-vtech-blue/20 rounded-full py-1.5 px-4 inline-block mb-6 tracking-widest uppercase mx-auto"
        >
          INICIA TU CAMINO AL ÉXITO
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight font-display text-white"
        >
          Conversemos. <br/>
          <span className="text-vtech-blue font-black tracking-tight">Hagámoslo realidad.</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-400 mb-12 text-base sm:text-lg leading-relaxed max-w-xl mx-auto"
        >
          Cuéntanos sobre tu proyecto y ambiciones comerciales. Escríbenos directamente para asesorarte y diseñar la estrategia ideal para tu emprendimiento.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full max-w-md bg-vtech-black p-8 rounded-3xl border border-white/10 shadow-2xl transition-all hover:border-emerald-500/30"
        >
          <a 
            href="https://wa.me/5491171193302"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-6 group cursor-pointer text-center"
          >
            <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 transition-all group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] duration-350">
              <Phone size={28} />
            </div>
            <div>
              <p className="text-[10px] text-emerald-400 uppercase font-mono font-bold tracking-widest mb-1.5 matches-glow">Enlace Directo WhatsApp</p>
              <p className="text-2xl sm:text-3xl font-extrabold text-white font-display group-hover:text-emerald-400 transition-colors duration-300">
                +54 9 11 7119-3302
              </p>
              <p className="text-xs text-gray-500 mt-2 font-mono">Haz clic aquí para chatear al instante</p>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
