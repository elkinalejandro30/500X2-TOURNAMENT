import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase/config';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const Hero = () => {
  const navigate = useNavigate();
  const [quickForm, setQuickForm] = useState({
    username: '',
    gameId: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', msg: '' });

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setQuickForm(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleQuickRegister = async (e) => {
    e.preventDefault();
    if (!quickForm.username || loading) return;

    setLoading(true);
    try {
      await addDoc(collection(db, 'registrations'), {
        username: quickForm.username,
        gameId: quickForm.gameId || '',
        createdAt: serverTimestamp(),
        source: 'quick_hero'
      });
      
      setStatus({ type: 'success', msg: '¡Pre-registro exitoso! Redirigiendo...' });
      
      // Navigate after a small delay to show success message
      setTimeout(() => {
        navigate('/registro-reportes', { state: { quickForm } });
      }, 1500);
    } catch (error) {
      console.error("Error in quick register:", error);
      setStatus({ type: 'error', msg: 'Error al conectar. Inténtalo de nuevo.' });
      setLoading(false);
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Cinematic Background with Premium Overlays */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center scale-105 animate-slow-zoom" />
        <div className="absolute inset-0 bg-gradient-to-b from-militar-dark/80 via-militar-dark/40 to-militar-dark" />
        <div className="absolute inset-0 backdrop-blur-[2px]" />
        
        {/* Animated Particles / Fog effect overlay */}
        <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-block px-6 py-2 border border-militar-accent/30 rounded-full bg-militar-accent/5 text-militar-accent text-[10px] md:text-xs uppercase tracking-[0.4em] mb-8 animate-pulse shadow-[0_0_15px_rgba(196,164,86,0.1)]">
          Torneo Competitivo Oficial eSports
        </div>
        
        <h1 className="text-7xl md:text-9xl font-black mb-6 tracking-tighter uppercase text-white drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] leading-none">
          500X2 <span className="text-militar-accent block md:inline">TOURNAMENT</span>
        </h1>
        
        <p className="text-xl md:text-3xl text-militar-light/90 mb-14 font-medium tracking-wider max-w-2xl mx-auto italic">
          “Conquista el mapa. Domina la guerra.”
        </p>

        {/* Quick Registration Form */}
        <div className="max-w-md mx-auto glass-dark p-1 rounded-2xl glow shadow-2xl transition-transform hover:scale-[1.01] duration-500">
          <form onSubmit={handleQuickRegister} className="bg-militar-dark/40 p-8 rounded-2xl backdrop-blur-xl border border-white/5">
            <div className="flex flex-col space-y-5">
              <input 
                type="text" 
                name="username"
                required
                placeholder="Nombre de usuario del juego"
                value={quickForm.username}
                onChange={handleChange}
                className="w-full bg-militar-dark/60 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-militar-accent transition-all text-sm"
              />
              <input 
                type="text" 
                name="gameId"
                placeholder="ID del juego (Opcional)"
                value={quickForm.gameId}
                onChange={handleChange}
                className="w-full bg-militar-dark/60 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-militar-accent transition-all text-sm"
              />
              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-militar-accent hover:bg-militar-accent/90 text-militar-dark font-black py-5 rounded-xl uppercase tracking-[0.25em] transition-all duration-300 transform active:scale-[0.97] shadow-[0_0_20px_rgba(196,164,86,0.3)] hover:shadow-[0_0_30px_rgba(196,164,86,0.5)] disabled:opacity-50"
              >
                {loading ? 'Procesando...' : 'Registrarse Ahora'}
              </button>
            </div>
            {status.msg && (
              <div className={`mt-4 text-xs font-bold uppercase tracking-widest ${status.type === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                {status.msg}
              </div>
            )}
          </form>
        </div>
        
        {/* Live Status Indicators */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-[10px] md:text-xs uppercase tracking-[0.3em] text-militar-light/50 font-bold">
          <div className="flex items-center space-x-3 bg-white/5 px-4 py-2 rounded-full border border-white/5">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
            <span className="text-green-500">Inscripciones Abiertas</span>
          </div>
          <div className="flex items-center space-x-3 bg-white/5 px-4 py-2 rounded-full border border-white/5">
            <span className="w-2 h-2 bg-militar-accent rounded-full shadow-[0_0_8px_rgba(196,164,86,0.8)]" />
            <span>Mapa 500 Jugadores</span>
          </div>
          <div className="flex items-center space-x-3 bg-white/5 px-4 py-2 rounded-full border border-white/5">
            <span className="w-2 h-2 bg-blue-500 rounded-full" />
            <span>Velocidad X2</span>
          </div>
        </div>
      </div>

      {/* Premium Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-40">
        <span className="text-[8px] uppercase tracking-[0.5em] font-bold text-white/50">Explorar</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-militar-accent to-transparent animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;
