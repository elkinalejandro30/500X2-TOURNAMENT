import React from 'react';
import newsUpdateImg from '../assets/news_update.png';

const Anuncios = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-militar-dark relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(196,164,86,0.05),transparent_70%)] -z-10" />
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4">
            Últimos <span className="text-militar-accent">Anuncios</span>
          </h1>
          <div className="w-24 h-1 bg-militar-accent mx-auto rounded-full" />
        </div>

        {/* Featured Announcement */}
        <article className="glass-dark rounded-3xl border border-white/5 overflow-hidden shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="relative h-[300px] md:h-[450px]">
            <img 
              src={newsUpdateImg} 
              alt="Wilhelm von Thaden Update" 
              className="w-full h-full object-cover brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-militar-dark via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8">
              <span className="inline-block px-4 py-1 bg-militar-accent text-militar-dark text-[10px] font-black uppercase tracking-widest rounded-full mb-4">
                Actualización de Héroe
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
                ANUNCIO 5 DE MAYO
              </h2>
            </div>
          </div>

          <div className="p-8 md:p-12 space-y-8">
            <div className="flex items-center space-x-4 border-b border-white/5 pb-8">
              <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center text-militar-accent font-black text-2xl border border-militar-accent/20">
                WT
              </div>
              <div>
                <h3 className="text-xl font-black text-white uppercase tracking-tight">Wilhelm von Thaden</h3>
                <p className="text-militar-accent text-xs font-bold uppercase tracking-widest mt-1">Héroe Zeppelin</p>
              </div>
            </div>

            <div className="prose prose-invert max-w-none text-militar-light/70 leading-relaxed text-lg italic">
              "Disciplina, precisión y una determinación inquebrantable. Wilhelm von Thaden, acompañado por el estruendoso rugido de sus motores, trae consigo una armada de dirigibles, listos para destruir los centros de producción de tus enemigos."
            </div>

            <p className="text-militar-light/80 leading-relaxed">
              Gracias a sus habilidades especiales, Wilhelm von Thaden aumenta el daño, los puntos de vida y la velocidad de todos los zepelines bajo su mando.
              A partir de hoy 5 de mayo, puedes reclutar a Wilhelm von Thaden usando Medallas de Héroe. Avanza en su Pase de Batalla y demuéstrale tu valía.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h4 className="text-militar-accent font-black uppercase tracking-[0.2em] text-sm">Habilidades Especiales</h4>
                
                <div className="space-y-4">
                  {[
                    { title: "¡La seguridad es lo primero!", desc: "Los zepelines obtienen puntos de vida aumentados." },
                    { title: "Bombardeo de precisión", desc: "Sus zepelines infligen mayor daño con precisión inigualable." },
                    { title: "Navegante experimentado", desc: "Aumenta la velocidad de todos los zepelines bajo su mando." }
                  ].map((skill, i) => (
                    <div key={i} className="glass p-5 rounded-2xl border border-white/5">
                      <h5 className="text-white font-bold text-sm uppercase mb-1">{skill.title}</h5>
                      <p className="text-xs text-militar-light/50">{skill.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-militar-accent font-black uppercase tracking-[0.2em] text-sm">Estadísticas y Progresión</h4>
                <div className="glass p-8 rounded-3xl border border-white/5 space-y-4">
                  <div className="flex justify-between items-center border-b border-white/5 pb-3">
                    <span className="text-[10px] uppercase font-bold text-militar-light/30">Clase de Unidad</span>
                    <span className="text-sm font-bold text-white">Héroe Zeppelin</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/5 pb-3">
                    <span className="text-[10px] uppercase font-bold text-militar-light/30">Disponibilidad</span>
                    <span className="text-sm font-bold text-white">Día 12</span>
                  </div>
                  <div className="space-y-2 pt-2">
                    <span className="text-[10px] uppercase font-bold text-militar-light/30 block">Costos Diarios</span>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-militar-dark/50 p-2 rounded-lg text-center">
                        <span className="text-[9px] block text-militar-light/20">Madera</span>
                        <span className="text-xs font-bold text-white">100</span>
                      </div>
                      <div className="bg-militar-dark/50 p-2 rounded-lg text-center">
                        <span className="text-[9px] block text-militar-light/20">Hierro</span>
                        <span className="text-xs font-bold text-white">100</span>
                      </div>
                      <div className="bg-militar-dark/50 p-2 rounded-lg text-center">
                        <span className="text-[9px] block text-militar-light/20">Gas</span>
                        <span className="text-xs font-bold text-white">1200</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-militar-accent/10 border border-militar-accent/20 p-8 rounded-3xl text-center">
              <p className="text-militar-accent font-bold text-sm">
                Recuerda que comprando desde el navegador obtienes precios <span className="text-white">-20% más económicos</span> y usando el código <span className="text-white underline underline-offset-4">BATALLON</span> estarás apoyando a la comunidad.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Anuncios;
