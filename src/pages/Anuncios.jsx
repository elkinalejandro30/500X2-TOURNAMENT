import React from 'react';
// import newsUpdateImg from '../assets/news_update.png'; // Comentado por ahora si no existe

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

        <div className="glass-dark p-12 rounded-3xl border border-white/5 shadow-2xl text-center">
          <p className="text-xl md:text-2xl font-bold text-militar-light/40 uppercase tracking-widest animate-pulse">
            Próximamente anuncios oficiales del torneo
          </p>
        </div>
      </div>
    </div>
  );
};

export default Anuncios;
