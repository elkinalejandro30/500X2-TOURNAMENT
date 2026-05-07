import React from 'react';
import CountdownTimer from '../components/CountdownTimer';

const TimersSection = () => {
  // Convert dates to JS Date objects
  // 10 June 14:00 Germany (CEST - UTC+2) -> 12:00 UTC
  const tournamentDate = new Date('2026-06-10T12:00:00Z');
  
  // 7 June 21:00 Colombia (COT - UTC-5) -> 02:00 UTC (8 June)
  const drawDate = new Date('2026-06-08T02:00:00Z');

  return (
    <section className="py-20 px-6 bg-militar-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-militar-accent/5 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        <CountdownTimer 
          targetDate={tournamentDate}
          title="El torneo comienza el 10 de junio"
          subtitle="Inicio del Torneo"
        />
        <CountdownTimer 
          targetDate={drawDate}
          title="Sorteo oficial — 7 de junio"
          subtitle="Preparativos Finales"
        />
      </div>
    </section>
  );
};

export default TimersSection;
