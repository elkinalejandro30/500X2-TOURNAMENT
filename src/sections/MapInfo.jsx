import React from 'react';
import { Users, Zap, Shuffle, Users2, ShieldAlert, Trophy, UserCheck, Plane, Sword, Coins, CreditCard } from 'lucide-react';

const MapInfo = () => {
  const specs = [
    { icon: <Users size={24} />, label: "Mapa", value: "500 jugadores" },
    { icon: <Zap size={24} />, label: "Velocidad", value: "x2" },
    { icon: <Shuffle size={24} />, label: "Entrada", value: "Aleatoria" },
    { icon: <Users2 size={24} />, label: "Coaliciones", value: "Permitidas" },
    { icon: <ShieldAlert size={24} />, label: "Paz Jugadores", value: "12 horas" },
    { icon: <ShieldAlert size={24} />, label: "Paz con IA", value: "0 horas" },
    { icon: <Trophy size={24} />, label: "Victoria", value: "Al 75%" },
    { icon: <UserCheck size={24} />, label: "Héroes", value: "Permitidos" },
    { icon: <Plane size={24} />, label: "Zepelines", value: "Permitidos" },
    { icon: <Sword size={24} />, label: "Unidades", value: "Asalto Permitidas" },
    { icon: <Coins size={24} />, label: "Uso de Oro", value: "Prohibido", color: "text-red-500" },
    { icon: <CreditCard size={24} />, label: "Uso de Cartas", value: "Prohibido", color: "text-red-500" },
  ];

  return (
    <section id="info-mapa" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
            Información del <span className="text-militar-accent">Mapa</span>
          </h2>
          <div className="w-24 h-1 bg-militar-accent mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {specs.map((spec, index) => (
            <div 
              key={index}
              className={`glass p-8 rounded-2xl border border-white/5 hover:border-militar-accent/30 transition-all group flex flex-col items-center text-center ${spec.color ? 'bg-red-900/5' : ''}`}
            >
              <div className={`w-12 h-12 rounded-full bg-militar-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${spec.color || 'text-militar-accent'}`}>
                {spec.icon}
              </div>
              <h4 className="text-[10px] uppercase tracking-widest text-militar-light/40 font-bold mb-1">
                {spec.label}
              </h4>
              <p className="text-lg font-bold text-white uppercase tracking-tight">
                {spec.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MapInfo;
