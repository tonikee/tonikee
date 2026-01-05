import React from 'react';
import { Unlock, CheckCircle, Shield, Clock, Zap, Smartphone } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { unlockOperators, contactInfo, brands } from '../mockData';

const UnlockPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-purple-500 via-violet-500 to-indigo-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="inline-block mb-4">
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
                🔓 Liberación segura y rápida
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
              Liberación de Móviles en Móstoles
            </h1>
            <p className="text-xl sm:text-2xl mb-8 opacity-90">
              Liberamos tu móvil <span className="font-bold">en el acto</span> para usar con cualquier operador. Proceso legal, seguro y sin perder la garantía.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={`https://wa.me/${contactInfo.whatsapp}?text=Hola, quiero liberar mi móvil`} target="_blank" rel="noopener noreferrer">
                <Button className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6 rounded-xl shadow-2xl">
                  Liberar mi móvil
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
                <CheckCircle className="w-5 h-5" />
                <span className="text-sm font-medium">En el acto</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span className="text-sm font-medium">Mantiene garantía</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span className="text-sm font-medium">Proceso legal</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="border-2 border-purple-200 hover:border-purple-500 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold mb-2">Liberación Rápida</h3>
                <p className="text-gray-600 text-sm">La mayoría en el acto o 24-48h</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-violet-200 hover:border-violet-500 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-violet-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-violet-600" />
                </div>
                <h3 className="text-lg font-bold mb-2">Sin Perder Garantía</h3>
                <p className="text-gray-600 text-sm">Proceso legal y seguro</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-indigo-200 hover:border-indigo-500 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-lg font-bold mb-2">Todas las Marcas</h3>
                <p className="text-gray-600 text-sm">iPhone, Samsung, Xiaomi...</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-pink-200 hover:border-pink-500 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Unlock className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-lg font-bold mb-2">Por IMEI</h3>
                <p className="text-gray-600 text-sm">Método más seguro y fiable</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What is Unlocking */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">¿Qué es liberar un móvil?</h2>
            <p className="text-xl text-gray-600">Todo lo que necesitas saber</p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-6">
            <p className="text-gray-700 leading-relaxed">
              <span className="font-bold text-purple-600">Liberar un móvil</span> es el proceso mediante el cual se elimina el bloqueo de operador que impide utilizar el dispositivo con otras compañías telefónicas.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Cuando compras un móvil con un operador (Vodafone, Movistar, Orange, Yoigo, etc.), normalmente viene bloqueado para funcionar solo con la tarjeta SIM de esa compañía.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Al liberarlo, podrás usar tu móvil con <span className="font-semibold">cualquier operador</span> que desees, tanto en España como en el extranjero, sin restricciones.
            </p>
            <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-6 rounded-xl border-2 border-purple-200 mt-6">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-purple-600" />
                Beneficios de liberar tu móvil:
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">•</span>
                  <span>Cambiar de operador sin cambiar de móvil</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">•</span>
                  <span>Usar tarjetas SIM locales cuando viajes al extranjero</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">•</span>
                  <span>Mayor valor de reventa del dispositivo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">•</span>
                  <span>Libertad total para elegir la mejor tarifa</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Operators */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">Liberamos Todos los Operadores</h2>
            <p className="text-xl text-gray-600">Proceso rápido y garantizado</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {unlockOperators.map((operator) => (
              <Card key={operator.id} className="border-2 border-gray-200 hover:border-purple-500 hover:shadow-2xl transition-all duration-300 group">
                <CardHeader className="text-center">
                  <div className="h-20 flex items-center justify-center mb-4">
                    <div className="text-2xl font-black text-gray-900">{operator.name}</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between py-2 border-t border-gray-100">
                    <span className="text-sm text-gray-600">Tiempo:</span>
                    <span className="font-semibold text-purple-600">{operator.time}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-t border-gray-100">
                    <span className="text-sm text-gray-600">Método:</span>
                    <span className="font-semibold text-gray-900">{operator.method}</span>
                  </div>
                  {operator.instant && (
                    <div className="bg-purple-50 text-purple-600 text-sm font-semibold py-2 px-3 rounded-lg text-center">
                      ⚡ Liberación rápida
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">¿Cómo funciona?</h2>
            <p className="text-xl text-gray-600">Proceso sencillo en 3 pasos</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-500 to-violet-500 w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-black mx-auto mb-4 shadow-lg">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Trae tu móvil</h3>
              <p className="text-gray-600">Visítanos con tu dispositivo o consúltanos por WhatsApp con tu IMEI</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-violet-500 to-indigo-500 w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-black mx-auto mb-4 shadow-lg">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Lo liberamos</h3>
              <p className="text-gray-600">Realizamos la liberación por IMEI de forma segura y legal</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-indigo-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-black mx-auto mb-4 shadow-lg">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">¡Listo!</h3>
              <p className="text-gray-600">Usa tu móvil con cualquier operador sin restricciones</p>
            </div>
          </div>
        </div>
      </section>

      {/* Compatible Brands */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">Liberamos Todas las Marcas</h2>
            <p className="text-xl text-gray-600">iPhone, Android y más</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {brands.map((brand) => (
              <div key={brand} className="bg-gradient-to-br from-purple-50 to-violet-50 px-6 py-3 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-purple-200">
                <span className="font-semibold text-gray-800">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">Preguntas Frecuentes</h2>
          </div>
          <div className="space-y-4">
            <Card className="border-2 border-purple-200">
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-900 mb-2">¿Es legal liberar un móvil?</h3>
                <p className="text-gray-600 text-sm">Sí, es completamente legal. Es tu derecho como propietario del dispositivo.</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-violet-200">
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-900 mb-2">¿Pierdo la garantía al liberar el móvil?</h3>
                <p className="text-gray-600 text-sm">No, al hacerlo por IMEI (método legal) mantienes la garantía del fabricante.</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-indigo-200">
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-900 mb-2">¿Cuánto tiempo tarda?</h3>
                <p className="text-gray-600 text-sm">Dependiendo del operador, desde liberación en el acto hasta 48 horas máximo.</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-pink-200">
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-900 mb-2">¿Qué necesito para liberar mi móvil?</h3>
                <p className="text-gray-600 text-sm">Solo necesitas el IMEI de tu dispositivo (marca *#06# para verlo) y el móvil.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-6">¿Listo para liberar tu móvil?</h2>
          <p className="text-xl mb-8 opacity-90">Visítanos en Móstoles o contáctanos por WhatsApp</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`https://wa.me/${contactInfo.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <Button className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6 rounded-xl">
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

export default UnlockPage;