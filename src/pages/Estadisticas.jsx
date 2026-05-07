import React from 'react';

const Estadisticas = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-militar-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(196,164,86,0.05),transparent_70%)] -z-10" />
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4">
          Estadísticas del <span className="text-militar-accent">Torneo</span>
        </h1>
        <div className="w-24 h-1 bg-militar-accent mx-auto rounded-full mb-12" />
        
        <div className="glass-dark p-12 rounded-3xl border border-white/5 shadow-2xl animate-pulse">
          <p className="text-2xl md:text-3xl font-bold text-militar-light/40 uppercase tracking-widest">
            Próximamente estadísticas del torneo
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 opacity-20">
            {['Ranking', 'Provincias', 'Alianzas', 'Bajas'].map(stat => (
              <div key={stat} className="bg-militar-dark/50 p-6 rounded-2xl border border-white/5">
                <span className="text-xs font-black uppercase tracking-widest">{stat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Estadisticas;
