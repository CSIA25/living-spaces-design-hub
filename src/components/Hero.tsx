
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3011&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-white/30"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-gray-600 mb-4">Interior Design Excellence</p>
          <h1 className="text-4xl md:text-6xl font-serif text-gray-800 mb-6 leading-tight">
            We transform spaces into beautiful, functional environments
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Creating timeless interiors that reflect your unique style and enhance your daily living experience.
          </p>
          <Button 
            size="lg" 
            className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 text-sm uppercase tracking-wider"
          >
            View Our Work
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
