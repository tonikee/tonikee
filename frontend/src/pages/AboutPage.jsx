import React from 'react';
import { Award, Users, Shield, Heart, MapPin, Clock } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { contactInfo } from '../mockData';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-lime-500 via-green-500 to-emerald-600 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">Sobre FriiMóvil</h1>
          <p className="text-xl sm:text-2xl opacity-90">
            Tu tienda de confianza en Móstoles desde hace más de 10 años
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-black text-gray-900 mb-6">Nuestra Historia</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                <span className="font-bold text-lime-600">FriiMóvil - CYBERCENTROS</span> nació hace más de una década con una misión clara: ser el servicio técnico de referencia en Móstoles para todo lo relacionado con telefonía móvil e informática.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Empezamos como un pequeño taller de reparaciones y, gracias a la confianza de nuestros clientes, hemos crecido hasta convertirnos en especialistas también en servicios de telefonía DIGI.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Hoy en día, seguimos siendo ese negocio familiar cercano donde cada cliente es importante, combinando experiencia profesional con atención personalizada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-lime-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">Nuestros Valores</h2>
            <p className="text-xl text-gray-600">Lo que nos define</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="bg-lime-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-lime-600" />
                </div>
                <h3 className="text-lg font-bold mb-2">Profesionalidad</h3>
                <p className="text-gray-600 text-sm">Más de 10 años de experiencia respaldándonos</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold mb-2">Cercanía</h3>
                <p className="text-gray-600 text-sm">Trato personal y humano en cada servicio</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold mb-2">Confianza</h3>
                <p className="text-gray-600 text-sm">Garantía y transparencia en todos nuestros servicios</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-lg font-bold mb-2">Pasión</h3>
                <p className="text-gray-600 text-sm">Nos encanta lo que hacemos y se nota</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-12 text-center">¿Qué hacemos?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-lime-50 to-green-50 p-8 rounded-2xl border-2 border-lime-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Servicios DIGI</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-lime-500 font-bold">•</span>
                  <span>Venta de tarifas móvil y fibra DIGI</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lime-500 font-bold">•</span>
                  <span>Asesoramiento personalizado</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lime-500 font-bold">•</span>
                  <span>Gestión de portabilidades</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lime-500 font-bold">•</span>
                  <span>Configuración de equipos y SIM</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lime-500 font-bold">•</span>
                  <span>Soporte post-venta</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border-2 border-green-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Reparaciones</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">•</span>
                  <span>Pantallas y cristales</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">•</span>
                  <span>Baterías</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">•</span>
                  <span>Conectores de carga</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">•</span>
                  <span>Cámaras y altavoces</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">•</span>
                  <span>Software y actualizaciones</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Location Info */}
      <section className="py-20 bg-gradient-to-br from-lime-50 to-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-12 text-center">Encuéntranos</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-lime-100 p-3 rounded-xl">
                    <MapPin className="w-6 h-6 text-lime-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Dirección</h3>
                    <p className="text-gray-600">
                      {contactInfo.address}<br />
                      {contactInfo.city}, {contactInfo.province}<br />
                      <span className="text-sm text-lime-600 font-medium">{contactInfo.metro}</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-xl">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Horario</h3>
                    <p className="text-gray-600">
                      <span className="font-medium">Lunes a Viernes:</span> 10:00 - 20:00<br />
                      <span className="font-medium">Sábados:</span> 10:00 - 14:00<br />
                      <span className="text-sm text-gray-500">Domingos y festivos: Cerrado</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-r from-lime-500 to-green-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-black mb-2">10+</div>
              <div className="text-lg opacity-90">Años de experiencia</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2">5000+</div>
              <div className="text-lg opacity-90">Reparaciones realizadas</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2">500+</div>
              <div className="text-lg opacity-90">Clientes DIGI</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2">4.9</div>
              <div className="text-lg opacity-90">Valoración media</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;