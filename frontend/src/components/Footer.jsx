import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { contactInfo } from '../mockData';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-black mb-4">
              <span className="text-white">Frii</span>
              <span className="text-lime-500">Móvil</span>
            </div>
            <p className="text-sm mb-4">
              Especialistas en DIGI y reparación de móviles en Móstoles. Más de 10 años de experiencia.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-white font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-lime-500 transition-colors">Inicio</Link>
              </li>
              <li>
                <Link to="/digi" className="hover:text-lime-500 transition-colors">Tarifas DIGI</Link>
              </li>
              <li>
                <Link to="/reparaciones" className="hover:text-lime-500 transition-colors">Reparaciones</Link>
              </li>
              <li>
                <Link to="/accesorios" className="hover:text-lime-500 transition-colors">Accesorios</Link>
              </li>
              <li>
                <Link to="/liberaciones" className="hover:text-lime-500 transition-colors">Liberaciones</Link>
              </li>
              <li>
                <Link to="/sobre-nosotros" className="hover:text-lime-500 transition-colors">Sobre Nosotros</Link>
              </li>
              <li>
                <Link to="/contacto" className="hover:text-lime-500 transition-colors">Contacto</Link>
              </li>
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-white font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-lime-500 transition-colors cursor-pointer">Tarifas DIGI Móvil</li>
              <li className="hover:text-lime-500 transition-colors cursor-pointer">Fibra + Móvil</li>
              <li className="hover:text-lime-500 transition-colors cursor-pointer">Reparación de Pantallas</li>
              <li className="hover:text-lime-500 transition-colors cursor-pointer">Cambio de Batería</li>
              <li className="hover:text-lime-500 transition-colors cursor-pointer">Reparaciones Express</li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-lime-500 mt-0.5 flex-shrink-0" />
                <span>
                  {contactInfo.address}<br />
                  {contactInfo.city}, {contactInfo.province}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-lime-500 flex-shrink-0" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-lime-500 transition-colors">
                  {contactInfo.phoneFormatted}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-lime-500 flex-shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-lime-500 transition-colors break-all">
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-lime-500 mt-0.5 flex-shrink-0" />
                <span>
                  Lun-Vie: 10:00 - 20:00<br />
                  Sáb: 10:00 - 14:00
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>© {new Date().getFullYear()} FriiMóvil - CYBERCENTROS. Todos los derechos reservados.</p>
          <p className="mt-2 text-gray-500">Servicio técnico líder en Móstoles</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;