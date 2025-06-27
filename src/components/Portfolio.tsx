
import React from 'react';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Recently completed modern loft interior"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
          
          <div className="order-1 lg:order-2 bg-stone-100 p-8 rounded-lg">
            <h2 className="text-3xl font-serif text-gray-800 mb-4">
              Recently Completed
            </h2>
            <h3 className="text-xl text-gray-700 mb-4">Modern Urban Loft</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              A complete transformation of a downtown loft space, combining industrial elements with warm, contemporary finishes. This project showcases our ability to balance modern aesthetics with functional living solutions.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              The design features custom millwork, curated lighting solutions, and a carefully selected palette that creates both intimacy and openness throughout the space.
            </p>
            <Button 
              className="bg-stone-400 hover:bg-stone-500 text-white px-6 py-2 text-sm uppercase tracking-wider"
            >
              See Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
