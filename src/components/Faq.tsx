import React from "react";
import { FAQ_DATA } from "../data";
import { ChevronDown, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Faq() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0); // Keep first one open by default as shown in illustration

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-vtech-black px-6 border-b border-white/5">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-mono font-bold text-vtech-blue bg-blue-600/10 border border-vtech-blue/20 rounded-full py-1.5 px-4 inline-block mb-3 tracking-widest uppercase"
          >
            RESOLVEMOS TUS DUDAS
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold font-display text-white"
          >
            Preguntas Frecuentes
          </motion.h2>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-vtech-dark border border-white/10 rounded-xl overflow-hidden shadow-md"
              >
                {/* Header button click */}
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer transition-colors hover:bg-white/[0.02]"
                >
                  <span className="text-base sm:text-lg font-bold font-display text-white">
                    {faq.question}
                  </span>
                  <div className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                    <ChevronDown size={22} className="text-vtech-blue shrink-0" />
                  </div>
                </button>

                {/* Answer drawer with smooth scale accordion height animation */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-sm sm:text-base text-gray-400 border-t border-white/5 pt-4 leading-relaxed bg-black/10">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Ask another question CTA */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-400">
            ¿Tienes otra pregunta sobre pauta publicitaria, integraciones o plazos?{" "}
            <a href="#contacto" className="text-vtech-blue font-bold hover:underline font-mono">
              Conversemos directo →
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
