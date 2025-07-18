// app/page.tsx
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow">
        <HeroSection />
      </main>
    </div>
  );
};

export default HomePage;