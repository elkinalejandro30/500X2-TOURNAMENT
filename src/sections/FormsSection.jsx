import React, { useState, useCallback, memo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { db } from '../firebase/config';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { Send, AlertTriangle, CheckCircle2, MessageSquare, Phone } from 'lucide-react';

// Memoized Input component to prevent focus loss and unnecessary re-renders
const CustomInput = memo(({ label, required, ...props }) => (
  <div className="flex flex-col space-y-2">
    <label className="text-[10px] uppercase tracking-widest text-militar-light/40 font-bold ml-1">
      {label} {required && <span className="text-militar-accent">*</span>}
    </label>
    <input 
      {...props}
      className="bg-militar-dark border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-militar-accent transition-all placeholder:text-white/10"
    />
  </div>
));

CustomInput.displayName = 'CustomInput';

const FormsSection = () => {
  const location = useLocation();
  const [regForm, setRegForm] = useState({
    username: '',
    gameId: '',
    country: '',
    discord: '',
    team: '',
    lookingForTeam: false,
    comments: ''
  });

  const [reportForm, setReportForm] = useState({
    reporter: '',
    reason: '',
    description: ''
  });

  const [status, setStatus] = useState({ type: '', msg: '' });
  const [loading, setLoading] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem('tournament_user');
    if (savedUser) {
      setIsRegistered(true);
      const data = JSON.parse(savedUser);
      setRegForm(prev => ({
        ...prev,
        username: data.username || '',
        gameId: data.gameId || ''
      }));
    }
    
    if (location.state?.quickForm) {
      setRegForm(prev => ({
        ...prev,
        username: location.state.quickForm.username || '',
        gameId: location.state.quickForm.gameId || ''
      }));
    }
  }, [location.state, isRegistered]);

  const handleRegChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    setRegForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  }, []);

  const handleReportChange = useCallback((e) => {
    const { name, value } = e.target;
    setReportForm(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const sanitize = (text) => {
    return text.replace(/[<>]/g, "").trim();
  };

  const handleRegSubmit = async (e) => {
    e.preventDefault();
    if (loading || isRegistered) return;
    setLoading(true);

    const sanitizedForm = {
      ...regForm,
      username: sanitize(regForm.username),
      gameId: sanitize(regForm.gameId),
      country: sanitize(regForm.country),
      discord: sanitize(regForm.discord),
      team: sanitize(regForm.team),
      comments: sanitize(regForm.comments)
    };

    try {
      await addDoc(collection(db, 'registrations'), {
        ...sanitizedForm,
        createdAt: serverTimestamp()
      });

      localStorage.setItem('tournament_user', JSON.stringify({
        username: sanitizedForm.username,
        gameId: sanitizedForm.gameId,
        date: new Date().toISOString()
      }));

      setStatus({ type: 'success', msg: '¡Registro completado con éxito!' });
      setIsRegistered(true);
    } catch (error) { 
      setStatus({ type: 'error', msg: 'Error al registrar. Inténtalo de nuevo.' });
    }
    setLoading(false);
    setTimeout(() => setStatus({ type: '', msg: '' }), 5000);
  };

  const handleExternalReport = async (method) => {
    if (!reportForm.reporter || !reportForm.reason) {
      setStatus({ type: 'error', msg: 'Por favor completa tu usuario y motivo del reporte.' });
      setTimeout(() => setStatus({ type: '', msg: '' }), 3000);
      return;
    }

    setLoading(true);
    try {
      // Save report data to DB first
      await addDoc(collection(db, 'reports'), {
        reporter: sanitize(reportForm.reporter),
        reason: sanitize(reportForm.reason),
        description: sanitize(reportForm.description),
        method: method,
        createdAt: serverTimestamp(),
        status: 'redirected'
      });

      // Redirect
      if (method === 'discord') {
        window.open('https://discord.com/', '_blank');
      } else {
        window.open('https://wa.me/573239040190', '_blank');
      }
      
      setStatus({ type: 'success', msg: 'Reporte registrado. Redirigiendo...' });
    } catch (error) {
      setStatus({ type: 'error', msg: 'Error al registrar el reporte.' });
    }
    setLoading(false);
    setTimeout(() => setStatus({ type: '', msg: '' }), 5000);
  };

  return (
    <section className="py-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        
        {/* Registration Form */}
        <div id="registro" className="glass p-10 rounded-3xl border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-militar-accent/5 rounded-full blur-3xl -mr-16 -mt-16" />
          
          <h2 className="text-3xl font-black text-white uppercase mb-8 flex items-center space-x-3">
            <CheckCircle2 className="text-militar-accent" size={32} />
            <span>Registro de Jugador</span>
          </h2>

          {isRegistered ? (
            <div className="bg-militar-accent/5 border border-militar-accent/20 p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-militar-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="text-militar-accent" size={32} />
              </div>
              <h3 className="text-xl font-black text-white uppercase mb-2">Ya estás registrado en el torneo</h3>
              <p className="text-militar-light/40 text-xs uppercase tracking-widest font-bold">Tus datos han sido guardados correctamente.</p>
            </div>
          ) : (
            <form onSubmit={handleRegSubmit} className="grid md:grid-cols-2 gap-6">
              <CustomInput 
                label="Nombre de Usuario" 
                name="username"
                required 
                value={regForm.username}
                onChange={handleRegChange}
              />
              <CustomInput 
                label="ID del Juego" 
                name="gameId"
                value={regForm.gameId}
                onChange={handleRegChange}
              />
              <CustomInput 
                label="País" 
                name="country"
                required 
                value={regForm.country}
                onChange={handleRegChange}
              />
              <CustomInput 
                label="Discord" 
                name="discord"
                required 
                placeholder="User#0000"
                value={regForm.discord}
                onChange={handleRegChange}
              />
              <CustomInput 
                label="Equipo/Alianza" 
                name="team"
                value={regForm.team}
                onChange={handleRegChange}
              />
              <div className="flex flex-col space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-militar-light/40 font-bold ml-1">
                  ¿Buscas equipo?
                </label>
                <select 
                  name="lookingForTeam"
                  className="bg-militar-dark border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-militar-accent transition-all"
                  value={regForm.lookingForTeam}
                  onChange={handleRegChange}
                >
                  <option value="false">No</option>
                  <option value="true">Sí</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <CustomInput 
                  label="Comentarios" 
                  name="comments"
                  value={regForm.comments}
                  onChange={handleRegChange}
                />
              </div>
              <button 
                type="submit"
                disabled={loading}
                className="md:col-span-2 bg-militar-accent hover:bg-militar-accent/90 text-militar-dark font-black py-4 rounded-xl uppercase tracking-[0.2em] transition-all transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 flex items-center justify-center space-x-2 shadow-lg glow-hover"
              >
                {loading ? "Procesando..." : <><span>Completar Registro</span> <Send size={18}/></>}
              </button>
            </form>
          )}
        </div>

        {/* Report Form - Redesigned */}
        <div id="reportes" className="glass p-10 rounded-3xl border border-white/5 relative overflow-hidden bg-red-900/5">
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-3xl -mr-16 -mt-16" />
          
          <h2 className="text-3xl font-black text-white uppercase mb-8 flex items-center space-x-3">
            <AlertTriangle className="text-red-500" size={32} />
            <span>Sistema de Reportes</span>
          </h2>

          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <CustomInput 
                label="Tu Usuario" 
                name="reporter"
                required 
                value={reportForm.reporter}
                onChange={handleReportChange}
              />
              <CustomInput 
                label="Motivo del Reporte" 
                name="reason"
                required 
                placeholder="Ej: Multicuenta"
                value={reportForm.reason}
                onChange={handleReportChange}
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-militar-light/40 font-bold ml-1">
                Breve Descripción
              </label>
              <textarea 
                name="description"
                className="bg-militar-dark border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-militar-accent transition-all placeholder:text-white/10 min-h-[80px]"
                value={reportForm.description}
                onChange={handleReportChange}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4 pt-4">
              <button 
                onClick={() => handleExternalReport('discord')}
                disabled={loading}
                className="bg-[#5865F2] hover:bg-[#4752C4] text-white font-black py-4 rounded-xl uppercase tracking-[0.15em] transition-all flex items-center justify-center space-x-3 shadow-lg group"
              >
                <MessageSquare className="group-hover:scale-110 transition-transform" />
                <span>Reportar por Discord</span>
              </button>
              <button 
                onClick={() => handleExternalReport('whatsapp')}
                disabled={loading}
                className="bg-[#25D366] hover:bg-[#1DA851] text-white font-black py-4 rounded-xl uppercase tracking-[0.15em] transition-all flex items-center justify-center space-x-3 shadow-lg group"
              >
                <Phone className="group-hover:scale-110 transition-transform" />
                <span>Reportar por WhatsApp</span>
              </button>
            </div>
            <p className="text-[10px] text-militar-light/30 uppercase tracking-widest text-center font-bold">
              Se registrará el reporte en nuestra base de datos antes de redirigirte.
            </p>
          </div>
        </div>

      </div>

      {/* Global Status Notification */}
      {status.msg && (
        <div className={`fixed bottom-10 right-10 px-8 py-4 rounded-2xl shadow-2xl animate-in slide-in-from-bottom-10 z-[100] border ${status.type === 'success' ? 'bg-green-600 border-green-400' : 'bg-red-600 border-red-400'} text-white font-bold`}>
          {status.msg}
        </div>
      )}
    </section>
  );
};

export default FormsSection;
