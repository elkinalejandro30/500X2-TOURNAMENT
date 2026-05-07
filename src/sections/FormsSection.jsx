import React, { useState, useCallback, memo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { db } from '../firebase/config';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { Send, AlertTriangle, CheckCircle2 } from 'lucide-react';

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

  // Effect to load data from Hero quick form if available
  useEffect(() => {
    if (location.state?.quickForm) {
      setRegForm(prev => ({
        ...prev,
        username: location.state.quickForm.username || '',
        gameId: location.state.quickForm.gameId || ''
      }));
    }
  }, [location.state]);

  const [reportForm, setReportForm] = useState({
    reportedPlayer: '',
    reason: '',
    description: '',
    reporter: ''
  });

  const [status, setStatus] = useState({ type: '', msg: '' });
  const [loading, setLoading] = useState(false);

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
    if (loading) return;
    setLoading(true);

    // Basic sanitization before sending to DB
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
      setStatus({ type: 'success', msg: '¡Registro completado con éxito!' });
      setRegForm({ username: '', gameId: '', country: '', discord: '', team: '', lookingForTeam: false, comments: '' });
    } catch (error) {
      setStatus({ type: 'error', msg: 'Error al registrar. Inténtalo de nuevo.' });
    }
    setLoading(false);
    setTimeout(() => setStatus({ type: '', msg: '' }), 5000);
  };

  const handleReportSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    const sanitizedReport = {
      ...reportForm,
      reportedPlayer: sanitize(reportForm.reportedPlayer),
      reason: sanitize(reportForm.reason),
      description: sanitize(reportForm.description),
      reporter: sanitize(reportForm.reporter)
    };

    try {
      await addDoc(collection(db, 'reports'), {
        ...sanitizedReport,
        status: 'pending',
        createdAt: serverTimestamp()
      });
      setStatus({ type: 'success', msg: 'Reporte enviado para revisión.' });
      setReportForm({ reportedPlayer: '', reason: '', description: '', reporter: '' });
    } catch (error) {
      setStatus({ type: 'error', msg: 'Error al enviar reporte.' });
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
        </div>

        {/* Report Form */}
        <div id="reportes" className="glass p-10 rounded-3xl border border-white/5 relative overflow-hidden bg-red-900/5">
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-3xl -mr-16 -mt-16" />
          
          <h2 className="text-3xl font-black text-white uppercase mb-8 flex items-center space-x-3">
            <AlertTriangle className="text-red-500" size={32} />
            <span>Enviar Reporte</span>
          </h2>

          <form onSubmit={handleReportSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <CustomInput 
                label="Jugador Reportado" 
                name="reportedPlayer"
                required 
                value={reportForm.reportedPlayer}
                onChange={handleReportChange}
              />
              <CustomInput 
                label="Tu Usuario" 
                name="reporter"
                required 
                value={reportForm.reporter}
                onChange={handleReportChange}
              />
            </div>
            <CustomInput 
              label="Motivo de la Falta" 
              name="reason"
              required 
              placeholder="Ej: Multicuenta, Pushing, Lenguaje ofensivo..."
              value={reportForm.reason}
              onChange={handleReportChange}
            />
            <div className="flex flex-col space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-militar-light/40 font-bold ml-1">
                Descripción Detallada <span className="text-militar-accent">*</span>
              </label>
              <textarea 
                name="description"
                required
                className="bg-militar-dark border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-militar-accent transition-all placeholder:text-white/10 min-h-[120px]"
                value={reportForm.description}
                onChange={handleReportChange}
              />
            </div>
            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-4 rounded-xl uppercase tracking-[0.2em] transition-all transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 flex items-center justify-center space-x-2 shadow-lg"
            >
              {loading ? "Enviando..." : <><span>Enviar Reporte Crítico</span> <AlertTriangle size={18}/></>}
            </button>
          </form>
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
