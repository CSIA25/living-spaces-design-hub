
import React from 'react';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-8">
            We can't wait to work with you
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Interior designer working on plans"
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-serif text-gray-800 mb-4">Hi, We're Living Spaces</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Our passionate team of designers brings over 15 years of combined experience in creating exceptional interior spaces that truly reflect our clients' personalities and lifestyles.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We believe that great design is about more than just aesthetics—it's about creating environments that enhance how you live, work, and feel in your space.
                </p>
                <Button 
                  className="bg-stone-400 hover:bg-stone-500 text-white px-6 py-2 text-sm uppercase tracking-wider self-start"
                >
                  Meet Our Team
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
