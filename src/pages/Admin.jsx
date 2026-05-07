import React from 'react';
import { Lock } from 'lucide-react';

const Admin = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="glass p-12 rounded-3xl border border-white/5 text-center">
          <div className="w-20 h-20 bg-militar-accent/10 rounded-full flex items-center justify-center text-militar-accent mx-auto mb-8">
            <Lock size={40} />
          </div>
          <h1 className="text-4xl font-black text-white uppercase mb-4 tracking-tighter">
            Panel de <span className="text-militar-accent">Administración</span>
          </h1>
          <p className="text-militar-light/40 mb-12 max-w-lg mx-auto">
            Acceso restringido para organizadores del torneo. Próximamente disponible con gestión de registros, reportes y estadísticas.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {['Gestionar Registros', 'Ver Reportes', 'Anuncios'].map((item) => (
              <div key={item} className="bg-militar-dark/50 border border-white/5 p-6 rounded-2xl opacity-50 cursor-not-allowed">
                <span className="text-sm font-bold uppercase tracking-widest text-militar-light/20">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
