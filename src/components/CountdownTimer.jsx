import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate, title, subtitle }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTime = () => {
      const difference = +new Date(targetDate) - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    const timer = setInterval(calculateTime, 1000);
    calculateTime();

    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeBox = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <div className="glass-dark w-16 h-16 md:w-24 md:h-24 flex items-center justify-center rounded-xl border border-militar-accent/30 mb-2 glow">
        <span className="text-2xl md:text-4xl font-black text-white">
          {value.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-militar-accent/70 font-bold">
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex flex-col items-center p-6 md:p-10 rounded-3xl glass-dark border border-white/10 glow-hover transition-all">
      <h3 className="text-militar-accent uppercase tracking-[0.3em] text-sm mb-2 font-bold">
        {subtitle}
      </h3>
      <h2 className="text-xl md:text-3xl font-black text-white uppercase mb-8 tracking-tighter">
        {title}
      </h2>
      
      <div className="flex space-x-3 md:space-x-6">
        <TimeBox value={timeLeft.days} label="Días" />
        <TimeBox value={timeLeft.hours} label="Horas" />
        <TimeBox value={timeLeft.minutes} label="Minutos" />
        <TimeBox value={timeLeft.seconds} label="Segundos" />
      </div>
    </div>
  );
};

export default CountdownTimer;
