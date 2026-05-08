import React, { useState, useEffect } from 'react';
import { db } from '../firebase/config';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { Trophy, Users, Map as MapIcon, Skull, TrendingUp, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const Estadisticas = () => {
  const [stats, setStats] = useState({
    totalPlayers: 0,
    activeAlliances: 0,
    conqueredProvinces: 0,
    totalCasualties: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Escuchar cambios en tiempo real desde la colección 'stats'
    // Nota: Asegúrate de que esta colección exista en Firebase o se creará al insertar
    const q = query(collection(db, 'stats'));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      if (!snapshot.empty) {
        const data = snapshot.docs[0].data();
        setStats(data);
      } else {
        // Datos de ejemplo si la colección está vacía
        setStats({
          totalPlayers: 482,
          activeAlliances: 12,
          conqueredProvinces: 1240,
          totalCasualties: "2.4M"
        });
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const statCards = [
    { label: "Jugadores", value: stats.totalPlayers, icon: <Users size={24} />, color: "text-blue-500" },
    { label: "Alianzas", value: stats.activeAlliances, icon: <Shield size={24} />, color: "text-green-500" },
    { label: "Provincias", value: stats.conqueredProvinces, icon: <MapIcon size={24} />, color: "text-militar-accent" },
    { label: "Bajas Totales", value: stats.totalCasualties, icon: <Skull size={24} />, color: "text-red-500" }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-militar-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(196,164,86,0.05),transparent_70%)] -z-10" />
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4"
          >
            Estado de la <span className="text-militar-accent">Guerra</span>
          </motion.h1>
          <div className="w-24 h-1 bg-militar-accent mx-auto rounded-full mb-4" />
          <p className="text-militar-light/50 uppercase tracking-[0.3em] text-[10px] font-bold">Actualización en tiempo real vía satélite</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {statCards.map((card, index) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-dark p-8 rounded-3xl border border-white/5 hover:border-militar-accent/30 transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                {card.icon}
              </div>
              <div className={`${card.color} mb-4`}>
                {card.icon}
              </div>
              <h3 className="text-[10px] uppercase tracking-widest text-militar-light/40 font-bold mb-1">
                {card.label}
              </h3>
              <p className="text-3xl font-black text-white tracking-tight">
                {loading ? "---" : card.value}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Ranking Preview */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="glass-dark p-10 rounded-3xl border border-white/5 relative overflow-hidden"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-black text-white uppercase flex items-center space-x-3">
              <Trophy className="text-militar-accent" />
              <span>Top Alianzas</span>
            </h2>
            <div className="flex items-center space-x-2 text-[10px] font-bold text-green-500 bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">
              <TrendingUp size={12} />
              <span>EN VIVO</span>
            </div>
          </div>

          <div className="space-y-4">
            {[
              { rank: "01", name: "Batallón Supremacy", score: "12,450", trend: "+120" },
              { rank: "02", name: "Legión del Norte", score: "11,200", trend: "+85" },
              { rank: "03", name: "Frente de Hierro", score: "9,800", trend: "-15" }
            ].map((alliance, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                <div className="flex items-center space-x-4">
                  <span className="text-militar-accent font-black">{alliance.rank}</span>
                  <span className="text-white font-bold uppercase text-sm tracking-wider">{alliance.name}</span>
                </div>
                <div className="flex items-center space-x-6">
                  <span className="text-white font-black">{alliance.score} pts</span>
                  <span className={`text-[10px] font-bold ${alliance.trend.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                    {alliance.trend}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Estadisticas;
