import { CLIENT_LOGOS } from "../data";

export default function Marquee() {
  // Duplicate logos array twice for continuous seamless loop without jumpy gaps
  const doubleLogos = [...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section id="clientes" className="bg-vtech-dark py-10 border-y border-white/5 overflow-hidden relative select-none">
      {/* Background shadow guides for side fading */}
      <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-vtech-dark to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-vtech-dark to-transparent z-10 pointer-events-none"></div>

      <div className="flex w-max items-center">
        <div className="flex items-center gap-16 px-4 py-1 animate-marquee">
          {doubleLogos.map((logo, index) => (
            <div 
              key={`${logo.name}-${index}`} 
              className="flex items-center gap-3 grayscale opacity-35 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-108"
            >
              <img 
                alt={`${logo.name} logo`} 
                className="h-9 w-auto max-w-[130px] object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.06)]"
                src={logo.url}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
