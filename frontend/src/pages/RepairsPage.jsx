import React from 'react';
import { Smartphone, Battery, Plug, Settings, Camera, Volume2, Clock, Shield, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { repairServices, brands, contactInfo } from '../mockData';

const RepairsPage = () => {
  const iconMap = {
    Smartphone,
    Battery,
    Plug,
    Settings,
    Camera,
    Volume2
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-green-500 via-emerald-500 to-teal-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4">
                <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
                  ⚡ Servicio Express
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
                Reparaciones Rápidas y con Garantía
              </h1>
              <p className="text-xl sm:text-2xl mb-8 opacity-90">
                La mayoría de reparaciones en <span className="font-bold">menos de 1 hora</span>. Presupuesto sin compromiso.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={`https://wa.me/${contactInfo.whatsapp}?text=Hola, necesito reparar mi móvil`} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-6 rounded-xl shadow-2xl">
                    Solicitar presupuesto
                  </Button>
                </a>
                <a href={`tel:${contactInfo.phone}`}>
                  <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-xl">
                    Llamar ahora
                  </Button>
                </a>
              </div>
              <div className="flex flex-wrap gap-6 mt-8">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span className="text-sm font-medium">Express 30-60min</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  <span className="text-sm font-medium">Hasta 6 meses garantía</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm font-medium">Todas las marcas</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/6755057/pexels-photo-6755057.jpeg"
                  alt="Reparación express de móviles"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">Nuestros Servicios de Reparación</h2>
            <p className="text-xl text-gray-600">Reparamos todo tipo de averías</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repairServices.map((service) => {
              const IconComponent = iconMap[service.icon];
              return (
                <Card key={service.id} className="border-2 border-gray-200 hover:border-green-500 hover:shadow-xl transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="bg-green-100 p-3 rounded-xl group-hover:bg-green-500 transition-colors duration-300">
                        <IconComponent className="w-6 h-6 text-green-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-500">Tiempo</div>
                        <div className="text-sm font-bold text-green-600">{service.time}</div>
                      </div>
                    </div>
                    <CardTitle className="text-xl mt-4">{service.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Shield className="w-4 h-4 text-green-500" />
                        <span>Garantía {service.warranty}</span>
                      </div>
                      <a href={`https://wa.me/${contactInfo.whatsapp}?text=Necesito ${service.name}`} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" className="bg-green-500 hover:bg-green-600 text-white">
                          Consultar
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">Reparamos Todas las Marcas</h2>
            <p className="text-xl text-gray-600">Apple, Samsung, Xiaomi y muchas más</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {brands.map((brand) => (
              <div key={brand} className="bg-white px-6 py-3 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <span className="font-semibold text-gray-800">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">¿Cómo funciona?</h2>
            <p className="text-xl text-gray-600">Proceso rápido y transparente</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-500 to-emerald-500 w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-black mx-auto mb-4 shadow-lg">
                1
              </div>
              <h3 className="text-lg font-bold mb-2">Diagnóstico</h3>
              <p className="text-gray-600 text-sm">Revisamos tu móvil gratis</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-500 w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-black mx-auto mb-4 shadow-lg">
                2
              </div>
              <h3 className="text-lg font-bold mb-2">Presupuesto</h3>
              <p className="text-gray-600 text-sm">Sin compromiso y transparente</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-teal-500 to-cyan-500 w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-black mx-auto mb-4 shadow-lg">
                3
              </div>
              <h3 className="text-lg font-bold mb-2">Reparación</h3>
              <p className="text-gray-600 text-sm">Rápida y profesional</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-black mx-auto mb-4 shadow-lg">
                4
              </div>
              <h3 className="text-lg font-bold mb-2">Garantía</h3>
              <p className="text-gray-600 text-sm">Hasta 6 meses incluida</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <h2 className="text-3xl font-black text-gray-900 mb-8 text-center">¿Por qué elegirnos?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Los más rápidos de Móstoles</h3>
                  <p className="text-sm text-gray-600">Servicio express en menos de 1 hora</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Garantía en todo</h3>
                  <p className="text-sm text-gray-600">De 3 a 6 meses según reparación</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Más de 10 años de experiencia</h3>
                  <p className="text-sm text-gray-600">Miles de reparaciones realizadas</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Presupuesto sin compromiso</h3>
                  <p className="text-sm text-gray-600">Valoración gratuita antes de reparar</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Repuestos de calidad</h3>
                  <p className="text-sm text-gray-600">Componentes originales o compatibles AAA</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Cerca de ti</h3>
                  <p className="text-sm text-gray-600">En el centro de Móstoles</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-emerald-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-6">¿Móvil roto? ¡Lo reparamos hoy!</h2>
          <p className="text-xl mb-8 opacity-90">Ven sin cita o contáctanos por WhatsApp</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`https://wa.me/${contactInfo.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <Button className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-6 rounded-xl">
                WhatsApp
              </Button>
            </a>
            <a href={`tel:${contactInfo.phone}`}>
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-xl">
                Llamar
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RepairsPage;