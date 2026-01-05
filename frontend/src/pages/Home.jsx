import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Zap, Shield, Award, ArrowRight, Star, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { contactInfo, whyChooseUs, testimonials, repairServices, digiTariffs } from '../mockData';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-lime-50 via-white to-green-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="bg-gradient-to-r from-lime-500 to-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  ⚡ Más de 10 años en Móstoles
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
                Especialistas en <span className="text-lime-500">DIGI</span> y Reparación de Móviles
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Contrata DIGI o repara tu móvil <span className="font-semibold text-gray-900">rápido, sin citas</span> y con garantía en el corazón de Móstoles
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/digi">
                  <Button className="w-full sm:w-auto bg-gradient-to-r from-lime-500 to-green-500 hover:from-lime-600 hover:to-green-600 text-white text-lg px-8 py-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
                    📲 Contratar DIGI
                  </Button>
                </Link>
                <Link to="/reparaciones">
                  <Button variant="outline" className="w-full sm:w-auto border-2 border-lime-500 text-lime-600 hover:bg-lime-50 text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    🔧 Reparar mi Móvil
                  </Button>
                </Link>
              </div>
              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-lime-500" />
                  <span className="text-sm font-medium text-gray-700">Reparación Express</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-lime-500" />
                  <span className="text-sm font-medium text-gray-700">Sin Permanencia</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-lime-500" />
                  <span className="text-sm font-medium text-gray-700">Garantía Total</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1735875530804-d661ca2001da?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjB0ZWNobmljaWFufGVufDB8fHx8MTc2NzU4NTM5MXww&ixlib=rb-4.1.0&q=85"
                  alt="Técnico profesional reparando móvil"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-2xl border-4 border-lime-500">
                <div className="flex items-center gap-3">
                  <div className="bg-lime-500 p-3 rounded-lg">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-gray-900">4.9/5</div>
                    <div className="text-sm text-gray-600">+500 clientes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* DIGI Card */}
            <Card className="border-2 border-lime-200 hover:border-lime-500 transition-all duration-300 hover:shadow-2xl group">
              <CardContent className="p-6">
                <div className="bg-gradient-to-br from-lime-500 to-green-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Smartphone className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Tarifas DIGI</h3>
                <p className="text-gray-600 text-sm mb-4">Las mejores tarifas sin permanencia</p>
                <Link to="/digi">
                  <Button className="w-full bg-gradient-to-r from-lime-500 to-green-500 hover:from-lime-600 hover:to-green-600 text-white group-hover:shadow-xl transition-all duration-300 text-sm">
                    Ver tarifas <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Repairs Card */}
            <Card className="border-2 border-green-200 hover:border-green-500 transition-all duration-300 hover:shadow-2xl group">
              <CardContent className="p-6">
                <div className="bg-gradient-to-br from-green-500 to-emerald-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Reparaciones Express</h3>
                <p className="text-gray-600 text-sm mb-4">Reparamos en menos de 1 hora</p>
                <Link to="/reparaciones">
                  <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white group-hover:shadow-xl transition-all duration-300 text-sm">
                    Ver servicios <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Accessories Card */}
            <Card className="border-2 border-amber-200 hover:border-amber-500 transition-all duration-300 hover:shadow-2xl group">
              <CardContent className="p-6">
                <div className="bg-gradient-to-br from-amber-500 to-yellow-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Accesorios</h3>
                <p className="text-gray-600 text-sm mb-4">Fundas, cargadores y más</p>
                <Link to="/accesorios">
                  <Button className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white group-hover:shadow-xl transition-all duration-300 text-sm">
                    Ver catálogo <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Unlock Card */}
            <Card className="border-2 border-purple-200 hover:border-purple-500 transition-all duration-300 hover:shadow-2xl group">
              <CardContent className="p-6">
                <div className="bg-gradient-to-br from-purple-500 to-violet-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Liberaciones</h3>
                <p className="text-gray-600 text-sm mb-4">Libera tu móvil en el acto</p>
                <Link to="/liberaciones">
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-600 hover:to-violet-600 text-white group-hover:shadow-xl transition-all duration-300 text-sm">
                    Más info <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-lime-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">¿Por qué elegir FriiMóvil?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Somos tu tienda de confianza en Móstoles</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item) => {
              const IconComponent = require('lucide-react')[item.icon];
              return (
                <Card key={item.id} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-6">
                    <div className="bg-lime-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-lime-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">Lo que dicen nuestros clientes</h2>
            <p className="text-xl text-gray-600">Más de 500 clientes satisfechos en Móstoles</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-2 border-gray-100 hover:border-lime-500 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 mb-4">"{testimonial.text}"</p>
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                    <p className="text-xs text-gray-500">{testimonial.date}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-lime-500 to-green-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl sm:text-4xl font-black mb-6">¿Listo para ahorrar o reparar tu móvil?</h2>
          <p className="text-xl mb-8 opacity-90">Visítanos en Móstoles o contáctanos por WhatsApp</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`https://wa.me/${contactInfo.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <Button className="bg-white text-lime-600 hover:bg-gray-100 text-lg px-8 py-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
                💬 WhatsApp
              </Button>
            </a>
            <a href={`tel:${contactInfo.phone}`}>
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
                📞 Llamar ahora
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">Encuéntranos en Móstoles</h2>
            <p className="text-xl text-gray-600">{contactInfo.address}, {contactInfo.city}</p>
            <p className="text-gray-500 mt-2">{contactInfo.metro}</p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3042.8!2d-3.8648!3d40.3226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDE5JzIxLjQiTiAzwrA1MSc1My4zIlc!5e0!3m2!1sen!2ses!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Ubicación FriiMóvil"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;