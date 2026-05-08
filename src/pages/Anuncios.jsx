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

        <div className="grid gap-8">
          {/* Anuncio 1 */}
          <div className="glass-dark p-8 rounded-3xl border border-white/5 shadow-2xl hover:border-militar-accent/30 transition-all group">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-militar-accent/10 flex items-center justify-center text-militar-accent">
                  <span className="font-black text-xl">01</span>
                </div>
                <div>
                  <h3 className="text-xl font-black text-white uppercase tracking-tight">Inscripciones Abiertas</h3>
                  <p className="text-militar-light/40 text-[10px] uppercase tracking-widest font-bold">Publicado el 05 de Mayo, 2026</p>
                </div>
              </div>
              <span className="px-4 py-1 rounded-full bg-green-500/10 text-green-500 text-[10px] uppercase tracking-widest font-black border border-green-500/20">
                Activo
              </span>
            </div>
            <p className="text-militar-light/70 leading-relaxed mb-6">
              ¡Soldados! Las inscripciones para el gran torneo 500X2 ya están oficialmente abiertas. Asegura tu lugar en el campo de batalla registrándote a través del formulario oficial. Recuerda que los cupos son limitados.
            </p>
            <div className="h-[1px] w-full bg-white/5 mb-6" />
            <div className="flex justify-between items-center">
              <span className="text-[10px] text-militar-light/30 uppercase tracking-[0.2em] font-bold">Categoría: General</span>
            </div>
          </div>

          {/* Anuncio 2 */}
          <div className="glass-dark p-8 rounded-3xl border border-white/5 shadow-2xl hover:border-militar-accent/30 transition-all group">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-militar-accent/10 flex items-center justify-center text-militar-accent">
                  <span className="font-black text-xl">02</span>
                </div>
                <div>
                  <h3 className="text-xl font-black text-white uppercase tracking-tight">Actualización de Reglas</h3>
                  <p className="text-militar-light/40 text-[10px] uppercase tracking-widest font-bold">Publicado el 01 de Mayo, 2026</p>
                </div>
              </div>
              <span className="px-4 py-1 rounded-full bg-blue-500/10 text-blue-500 text-[10px] uppercase tracking-widest font-black border border-blue-500/20">
                Información
              </span>
            </div>
            <p className="text-militar-light/70 leading-relaxed mb-6">
              Se ha actualizado el reglamento oficial con detalles específicos sobre el uso de unidades aéreas y la política de juego limpio. Es obligatorio para todos los participantes leer la sección de reglamento antes del inicio.
            </p>
            <div className="h-[1px] w-full bg-white/5 mb-6" />
            <div className="flex justify-between items-center">
              <span className="text-[10px] text-militar-light/30 uppercase tracking-[0.2em] font-bold">Categoría: Reglamento</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Anuncios;
