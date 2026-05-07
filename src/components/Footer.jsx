import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const socials = [
    { 
      icon: "https://cdn-icons-png.flaticon.com/512/3046/3046121.png", // TikTok original logo
      href: "https://www.tiktok.com/@batallonsupremacy?_t=ZM-8vwkVABddh7&_r=1&utm_source=chatgpt.com", 
      label: "TikTok" 
    },
    { 
      icon: "https://cdn-icons-png.flaticon.com/512/174/174855.png", // Instagram original logo
      href: "https://www.instagram.com/batallonsupremacy?igsh=MXNzYjh6bXluYnQ5cg%3D%3D&utm_source=chatgpt.com", 
      label: "Instagram" 
    },
    { 
      icon: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png", // YouTube original logo
      href: "https://www.youtube.com/@BatallonSupremacy?utm_source=chatgpt.com", 
      label: "YouTube" 
    },
    { 
      icon: "https://cdn-icons-png.flaticon.com/512/733/733585.png", // WhatsApp original logo
      href: "https://chat.whatsapp.com/FB8F8kwBHmOLdsuI4hrdYP?utm_source=chatgpt.com", 
      label: "WhatsApp" 
    },
    { 
      icon: "https://cdn-icons-png.flaticon.com/512/5968/5968756.png", // Discord original logo
      href: "https://discord.gg/kzTxzRckK?utm_source=chatgpt.com", 
      label: "Discord" 
    },
  ];

  return (
    <footer className="bg-militar-dark border-t border-white/5 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Creator Code Banner - Very Visible */}
        <div className="mb-20 glass p-8 rounded-3xl border border-militar-accent/30 bg-militar-accent/5 flex flex-col md:flex-row items-center justify-between glow relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-militar-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative z-10 flex flex-col md:flex-row items-center md:space-x-8 text-center md:text-left">
            <div className="w-16 h-16 rounded-2xl bg-militar-accent flex items-center justify-center text-militar-dark mb-4 md:mb-0 shadow-[0_0_20px_rgba(196,164,86,0.5)]">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L1 12h3v9h6v-6h4v6h6v-9h3L12 2z"/></svg>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter">Apoya a la Comunidad</h3>
              <p className="text-militar-light/50 text-xs uppercase tracking-[0.2em] font-bold mt-1">Usa nuestro código en la tienda oficial</p>
            </div>
          </div>
          <div className="relative z-10 mt-8 md:mt-0 flex items-center space-x-4 bg-militar-dark/80 px-8 py-4 rounded-2xl border border-militar-accent/50 shadow-2xl">
            <span className="text-militar-light/30 text-[10px] font-black uppercase tracking-widest">Código:</span>
            <span className="text-3xl md:text-4xl font-black text-militar-accent tracking-widest animate-pulse">BATALLON</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-16 mb-16">
          
          {/* Brand */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="flex items-center space-x-4 mb-6">
              <img 
                src="https://i.pinimg.com/736x/53/7c/f8/537cf8ded68d34e5a67b23020c703105.jpg" 
                alt="Logo" 
                className="w-14 h-14 rounded-full border-2 border-militar-accent p-0.5 shadow-[0_0_15px_rgba(196,164,86,0.2)]"
              />
              <div className="flex flex-col">
                <span className="text-2xl font-black uppercase tracking-tighter text-white leading-none">
                  500X2 <span className="text-militar-accent">TOURNAMENT</span>
                </span>
                <span className="text-[10px] font-bold text-militar-light/30 uppercase tracking-[0.3em] mt-1">
                  Batallón Supremacy
                </span>
              </div>
            </div>
            <p className="text-militar-light/40 text-sm leading-relaxed text-center lg:text-left max-w-sm">
              El portal oficial para el torneo más competitivo de Supremacy 1914. 
              Organizado por y para la comunidad estratégica de habla hispana.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center">
            <h4 className="text-white font-bold uppercase tracking-[0.3em] mb-8 text-[10px]">Navegación</h4>
            <div className="grid grid-cols-2 gap-x-12 gap-y-4">
              <Link to="/" className="text-militar-light/50 hover:text-militar-accent transition-all text-[11px] uppercase tracking-widest font-bold">Inicio</Link>
              <Link to="/info-mapa" className="text-militar-light/50 hover:text-militar-accent transition-all text-[11px] uppercase tracking-widest font-bold">Info Mapa</Link>
              <Link to="/reglamento" className="text-militar-light/50 hover:text-militar-accent transition-all text-[11px] uppercase tracking-widest font-bold">Reglamento</Link>
              <Link to="/registro-reportes" className="text-militar-light/50 hover:text-militar-accent transition-all text-[11px] uppercase tracking-widest font-bold">Registros</Link>
            </div>
          </div>

          {/* Socials - Original Logos */}
          <div className="flex flex-col items-center lg:items-end">
            <h4 className="text-white font-bold uppercase tracking-[0.3em] mb-8 text-[10px]">Comunidad Oficial</h4>
            <div className="flex space-x-5">
              {socials.map((social, idx) => (
                <a 
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 glass-dark rounded-xl flex items-center justify-center hover:border-militar-accent/50 transition-all duration-300 group shadow-lg"
                  title={social.label}
                >
                  <img 
                    src={social.icon} 
                    alt={social.label} 
                    className="w-5 h-5 object-contain filter brightness-90 group-hover:brightness-110 group-hover:scale-110 transition-all"
                  />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[9px] uppercase tracking-[0.4em] text-militar-light/10 font-black">
          <span>&copy; 2026 Batallón Supremacy. Todos los derechos reservados.</span>
          <div className="flex items-center space-x-4 mt-6 md:mt-0">
            <Link to="/admin" className="hover:text-militar-accent transition-colors">Admin Access</Link>
            <span className="w-1 h-1 bg-white/10 rounded-full" />
            <span>Desarrollo de Élite</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
