
import React from 'react';
import { Instagram, Facebook, Twitter, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif mb-4">
            Ready to transform your space?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Let's discuss your vision and create something beautiful together. Contact us today to begin your design journey.
          </p>
          <button className="bg-stone-400 hover:bg-stone-500 text-white px-8 py-3 rounded text-sm uppercase tracking-wider transition-colors">
            Get Started
          </button>
        </div>

        <div className="grid md:grid-cols-6 gap-4 mb-12">
          <div className="md:col-span-2">
            <img 
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              alt="Interior design sample 1"
              className="w-full h-32 object-cover rounded"
            />
          </div>
          <div className="md:col-span-2">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              alt="Interior design sample 2"
              className="w-full h-32 object-cover rounded"
            />
          </div>
          <div className="md:col-span-2">
            <img 
              src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              alt="Interior design sample 3"
              className="w-full h-32 object-cover rounded"
            />
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-serif mb-2">LIVING SPACES</h3>
              <p className="text-gray-400 text-sm">Interior Design Studio | Creating Beautiful Spaces</p>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Mail size={16} />
                <span>hello@livingspaces.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Phone size={16} />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex space-x-4">
                <Instagram size={20} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Facebook size={20} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Twitter size={20} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8 pt-8 border-t border-gray-700">
            <p className="text-gray-400 text-sm">
              © 2024 Living Spaces Interior Design. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
