import { motion } from "motion/react";
import { Award, Target, Users } from "lucide-react";

export default function Stats() {
  const stats = [
    {
      icon: <Award size={20} className="text-white/80" />,
      value: "5+",
      label: "Años de Experiencia"
    },
    {
      icon: <Target size={20} className="text-white/80" />,
      value: "120+",
      label: "Proyectos Entregados"
    },
    {
      icon: <Users size={20} className="text-white/80" />,
      value: "95%",
      label: "Retención de Clientes"
    }
  ];

  return (
    <section className="py-16 bg-[#005bc0] text-white relative overflow-hidden select-none">
      {/* Decorative vector sparks */}
      <div className="absolute top-0 right-0 h-44 w-44 bg-white/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 left-0 h-32 w-32 bg-white/5 rounded-full blur-xl"></div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.h3 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-2xl lg:text-3xl font-black font-display text-white mb-10 tracking-tight uppercase"
        >
          Métricas de Crecimiento y Desempeño
        </motion.h3>

        <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-16 lg:gap-24">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center group w-full md:w-auto">
              {/* Internal Counter with Hover Trigger */}
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="flex items-center gap-2 mb-2"
              >
                <div className="p-1 px-2 rounded bg-white/10 shrink-0">
                  {stat.icon}
                </div>
                <div className="text-4xl sm:text-5xl font-black font-display tracking-tight text-white group-hover:scale-105 transition-transform duration-300">
                  {stat.value}
                </div>
              </motion.div>
              <div className="text-xs font-mono font-bold tracking-widest uppercase text-blue-100">
                {stat.label}
              </div>
              {idx < stats.length - 1 && (
                <div className="h-[1px] w-1/2 bg-white/10 my-4 md:hidden"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
