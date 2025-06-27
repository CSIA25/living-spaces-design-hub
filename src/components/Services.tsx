
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      title: "Residential Design",
      description: "Transform your home into a personalized sanctuary. From concept to completion, we create spaces that reflect your lifestyle and aesthetic preferences while maximizing functionality and comfort.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Commercial Design",
      description: "Professional spaces that inspire productivity and reflect your brand identity. We specialize in creating environments that enhance business operations while maintaining sophisticated aesthetics.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Design Consultation",
      description: "Expert guidance for your design journey. Whether you need a complete renovation plan or styling advice, our consultations provide professional insights tailored to your vision and budget.",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-4">
            Ways to work with us
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="aspect-w-16 aspect-h-12">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-serif text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <Button 
                  variant="outline" 
                  className="border-gray-300 text-gray-600 hover:bg-gray-800 hover:text-white transition-colors text-sm uppercase tracking-wider"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
