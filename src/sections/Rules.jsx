import React, { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';

const Rules = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openIndex, setOpenIndex] = useState(0);

  const ruleCategories = [
    {
      title: "1. Información General",
      rules: [
        "El torneo se rige bajo las normas oficiales de Supremacy 1914 y las específicas de la comunidad Batallón Supremacy.",
        "La organización se reserva el derecho de admisión y expulsión ante conductas antideportivas."
      ]
    },
    {
      title: "2. Participación",
      rules: [
        "Inscripción obligatoria mediante esta web.",
        "Uso de Discord para comunicaciones oficiales.",
        "Identidad real del juego (Nombre de usuario e ID correctos)."
      ]
    },
    {
      title: "3. Configuración",
      rules: [
        "Mapa de 500 jugadores a velocidad x2.",
        "Periodo de paz de 12 horas reales.",
        "Selección de país aleatoria al inicio."
      ]
    },
    {
      title: "4. Mercado",
      rules: [
        "Prohibido el traspaso masivo de recursos para inflar a un solo jugador (pushing).",
        "Transacciones comerciales deben ser razonables bajo valor de mercado."
      ]
    },
    {
      title: "5. Diplomacia",
      rules: [
        "Coaliciones permitidas según límite del mapa.",
        "Traiciones son parte del juego, pero el acoso personal está prohibido."
      ]
    },
    {
      title: "6. Actividad",
      rules: [
        "Jugadores inactivos por más de 2 días serán sustituidos o expulsados según criterio de admin.",
        "Reportar ausencias justificadas en Discord."
      ]
    },
    {
      title: "7. Conducta",
      rules: [
        "Respeto absoluto en el chat del periódico y mensajes privados.",
        "Prohibido el lenguaje ofensivo, racista o discriminatorio."
      ]
    },
    {
      title: "8. Faltas críticas",
      rules: [
        "Uso de multicuentas (Baneo permanente).",
        "Uso de scripts o software externo no autorizado.",
        "Colusión externa fuera de las reglas del torneo."
      ]
    },
    {
      title: "9. Sanciones",
      rules: [
        "Advertencia escrita.",
        "Reducción de puntos o recursos.",
        "Expulsión inmediata del torneo actual."
      ]
    },
    {
      title: "10. Reportes y apelaciones",
      rules: [
        "Usar la sección de reportes de la web detallando la falta.",
        "Las decisiones de los administradores son inapelables tras revisión final."
      ]
    },
    {
      title: "11. Disposición final",
      rules: [
        "Cualquier situación no prevista será resuelta por el comité organizador."
      ]
    }
  ];

  const filteredCategories = ruleCategories.filter(cat => 
    cat.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cat.rules.some(r => r.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <section id="reglamento" className="py-24 px-6 bg-militar-gray/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
            Reglamento del <span className="text-militar-accent">Torneo</span>
          </h2>
          <div className="w-24 h-1 bg-militar-accent mx-auto rounded-full mb-10" />

          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-militar-light/30" size={20} />
            <input 
              type="text" 
              placeholder="Buscar regla o categoría..."
              className="w-full bg-militar-dark border border-white/10 rounded-full py-3 pl-12 pr-6 text-white focus:outline-none focus:border-militar-accent transition-all"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {filteredCategories.map((cat, idx) => (
            <div 
              key={idx}
              className="glass rounded-2xl overflow-hidden border border-white/5"
            >
              <button 
                className="w-full px-8 py-5 flex justify-between items-center text-left hover:bg-white/5 transition-colors"
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
              >
                <span className="text-lg font-bold uppercase tracking-tight text-white">
                  {cat.title}
                </span>
                <ChevronDown 
                  className={`text-militar-accent transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} 
                  size={20} 
                />
              </button>
              
              <div 
                className={`px-8 transition-all duration-300 ease-in-out overflow-hidden ${openIndex === idx ? 'max-h-[500px] py-6 border-t border-white/5' : 'max-h-0'}`}
              >
                <ul className="space-y-3">
                  {cat.rules.map((rule, rIdx) => (
                    <li key={rIdx} className="flex items-start space-x-3 text-militar-light/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-militar-accent mt-2 flex-shrink-0" />
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rules;
