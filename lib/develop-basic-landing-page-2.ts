// components/HeroSection.tsx
import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Welcome to Journal
          </h1>
          <p className="mt-3 max-w-md mx-auto text-gray-300 sm:text-xl md:mt-5 md:text-2xl md:max-w-3xl">
            A simple and elegant way to keep track of your thoughts and experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;