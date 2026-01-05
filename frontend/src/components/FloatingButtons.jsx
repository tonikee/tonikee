import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { contactInfo } from '../mockData';

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${contactInfo.whatsapp}?text=Hola, necesito información sobre sus servicios`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 animate-bounce"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          WhatsApp
        </span>
      </a>

      {/* Phone Button */}
      <a
        href={`tel:${contactInfo.phone}`}
        className="group relative bg-gradient-to-r from-lime-500 to-green-500 text-white p-4 rounded-full shadow-2xl hover:shadow-lime-500/50 transition-all duration-300 hover:scale-110"
        aria-label="Llamar ahora"
      >
        <Phone className="w-6 h-6" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Llamar
        </span>
      </a>
    </div>
  );
};

export default FloatingButtons;