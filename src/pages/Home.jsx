import React from 'react';
import Hero from '../sections/Hero';
import TimersSection from '../sections/TimersSection';

const Home = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <Hero />
      <TimersSection />
    </div>
  );
};

export default Home;
