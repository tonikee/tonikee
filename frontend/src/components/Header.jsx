import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { contactInfo } from '../mockData';
import { Button } from './ui/button';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Inicio', href: '/' },
    { name: 'DIGI', href: '/digi' },
    { name: 'Reparaciones', href: '/reparaciones' },
    { name: 'Sobre Nosotros', href: '/sobre-nosotros' },
    { name: 'Contacto', href: '/contacto' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      {/* Top bar */}
      <div className="bg-gradient-to-r from-lime-500 to-green-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 text-sm">
            <div className="flex items-center gap-4">
              <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-1 hover:text-lime-100 transition-colors">
                <Phone className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{contactInfo.phoneFormatted}</span>
              </a>
              <a href={`mailto:${contactInfo.email}`} className="hidden md:flex items-center gap-1 hover:text-lime-100 transition-colors">
                <Mail className="w-3.5 h-3.5" />
                <span>{contactInfo.email}</span>
              </a>
            </div>
            <div className="text-xs sm:text-sm font-medium">
              📍 {contactInfo.city} - {contactInfo.metro}
            </div>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="text-2xl sm:text-3xl font-black">
              <span className="text-gray-900">Frii</span>
              <span className="text-lime-500">Móvil</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(item.href)
                    ? 'bg-lime-500 text-white shadow-md'
                    : 'text-gray-700 hover:bg-lime-50 hover:text-lime-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden lg:block">
            <a href={`https://wa.me/${contactInfo.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-to-r from-lime-500 to-green-500 hover:from-lime-600 hover:to-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                WhatsApp
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-all ${
                    isActive(item.href)
                      ? 'bg-lime-500 text-white'
                      : 'text-gray-700 hover:bg-lime-50 hover:text-lime-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2">
                <a href={`https://wa.me/${contactInfo.whatsapp}`} target="_blank" rel="noopener noreferrer" className="block">
                  <Button className="w-full bg-gradient-to-r from-lime-500 to-green-500 hover:from-lime-600 hover:to-green-600 text-white">
                    Contactar por WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;