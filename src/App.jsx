import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Reglamento from './pages/Reglamento';
import InfoMapa from './pages/InfoMapa';
import RegistroReportes from './pages/RegistroReportes';
import Anuncios from './pages/Anuncios';
import Estadisticas from './pages/Estadisticas';
import Admin from './pages/Admin';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  useEffect(() => {
    // Advanced UI Security
    const handleContextMenu = (e) => e.preventDefault();
    
    const handleKeyDown = (e) => {
      // Block F12
      if (e.key === 'F12') e.preventDefault();
      // Block Ctrl+U (View Source)
      if (e.ctrlKey && e.key === 'u') e.preventDefault();
      // Block Ctrl+Shift+I (Inspect)
      if (e.ctrlKey && e.shiftKey && e.key === 'I') e.preventDefault();
      // Block Ctrl+Shift+J (Console)
      if (e.ctrlKey && e.shiftKey && e.key === 'J') e.preventDefault();
      // Block Ctrl+S (Save)
      if (e.ctrlKey && e.key === 's') e.preventDefault();
    };

    // Detect DevTools opening (simple check)
    let devtoolsOpen = false;
    const threshold = 160;
    const checkDevTools = () => {
      const widthThreshold = window.outerWidth - window.innerWidth > threshold;
      const heightThreshold = window.outerHeight - window.innerHeight > threshold;
      if (widthThreshold || heightThreshold) {
        if (!devtoolsOpen) {
          console.log('%cAcceso Restringido', 'color: gold; font-size: 30px; font-weight: bold; -webkit-text-stroke: 1px black;');
          console.log('Este sitio está protegido por seguridad avanzada.');
        }
        devtoolsOpen = true;
      } else {
        devtoolsOpen = false;
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', checkDevTools);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', checkDevTools);
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="bg-militar-dark min-h-screen selection:bg-militar-accent selection:text-militar-dark">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reglamento" element={<Reglamento />} />
            <Route path="/info-mapa" element={<InfoMapa />} />
            <Route path="/registro-reportes" element={<RegistroReportes />} />
            <Route path="/anuncios" element={<Anuncios />} />
            <Route path="/estadisticas" element={<Estadisticas />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Cinematic Background Ambience */}
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(196,164,86,0.05),transparent_70%)]" />
          <div className="absolute -bottom-20 -right-20 w-[600px] h-[600px] bg-militar-accent/5 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.03]" />
        </div>

        {/* Floating Action Button - Back to top */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-14 h-14 glass rounded-2xl flex items-center justify-center text-militar-accent hover:bg-militar-accent hover:text-militar-dark transition-all z-40 group shadow-[0_10px_30px_rgba(0,0,0,0.5)] active:scale-90"
          aria-label="Volver arriba"
        >
          <svg className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </Router>
  );
}

export default App;
