import React, { useState } from 'react';
import { Check, Zap, Shield, Users, Phone } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { digiTariffs, contactInfo } from '../mockData';

const DigiPage = () => {
  const [selectedTab, setSelectedTab] = useState('mobile');

  const mobileTariffs = digiTariffs.filter(t => t.type === 'mobile');
  const comboTariffs = digiTariffs.filter(t => t.type === 'combo');

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-lime-500 via-green-500 to-emerald-600 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">Tarifas DIGI sin Permanencia</h1>
            <p className="text-xl sm:text-2xl mb-8 opacity-90">
              Ahorra hasta un 50% en tu factura de móvil. Te ayudamos con todo el proceso.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={`https://wa.me/${contactInfo.whatsapp}?text=Hola, quiero información sobre tarifas DIGI`} target="_blank" rel="noopener noreferrer">
                <Button className="bg-white text-lime-600 hover:bg-gray-100 text-lg px-8 py-6 rounded-xl shadow-2xl">
                  Consultar por WhatsApp
                </Button>
              </a>
              <a href={`tel:${contactInfo.phone}`}>
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-xl">
                  Llamar ahora
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why DIGI with us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">¿Por qué contratar DIGI con FriiMóvil?</h2>
            <p className="text-xl text-gray-600">Te lo ponemos fácil. Tú solo disfrutas del ahorro.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-lime-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-lime-600" />
                </div>
                <h3 className="text-lg font-bold mb-2">Atención Personalizada</h3>
                <p className="text-gray-600 text-sm">Te asesoramos cara a cara en nuestra tienda</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold mb-2">Portabilidad Rápida</h3>
                <p className="text-gray-600 text-sm">Nos encargamos de todo. Mantienes tu número</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold mb-2">Configuración Incluida</h3>
                <p className="text-gray-600 text-sm">Configuramos tu móvil y SIM gratis</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-lg font-bold mb-2">Soporte Local</h3>
                <p className="text-gray-600 text-sm">Resolvemos tus dudas en persona</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tariffs */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-lime-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">Nuestras Tarifas DIGI</h2>
            <p className="text-xl text-gray-600">Elige la que mejor se adapte a ti</p>
          </div>

          <Tabs defaultValue="mobile" className="w-full" onValueChange={setSelectedTab}>
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="mobile" className="text-lg">Solo Móvil</TabsTrigger>
              <TabsTrigger value="combo" className="text-lg">Fibra + Móvil</TabsTrigger>
            </TabsList>

            <TabsContent value="mobile">
              <div className="grid md:grid-cols-3 gap-8">
                {mobileTariffs.map((tariff) => (
                  <Card key={tariff.id} className={`border-2 ${
                    tariff.popular 
                      ? 'border-lime-500 shadow-2xl scale-105 relative' 
                      : 'border-gray-200 hover:border-lime-300'
                  } transition-all duration-300 hover:shadow-xl`}>
                    {tariff.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-lime-500 to-green-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                        MÁS POPULAR
                      </div>
                    )}
                    <CardHeader className="text-center pb-4">
                      <CardTitle className="text-2xl font-bold">{tariff.name}</CardTitle>
                      <div className="mt-4">
                        <span className="text-5xl font-black text-lime-600">{tariff.price}€</span>
                        <span className="text-gray-500">/mes</span>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-center py-4 bg-lime-50 rounded-xl">
                        <div className="text-3xl font-black text-gray-900">{tariff.data}</div>
                        <div className="text-sm text-gray-600">{tariff.calls}</div>
                      </div>
                      <ul className="space-y-3">
                        {tariff.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <Check className="w-5 h-5 text-lime-500 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <a href={`https://wa.me/${contactInfo.whatsapp}?text=Quiero contratar ${tariff.name}`} target="_blank" rel="noopener noreferrer" className="block">
                        <Button className={`w-full mt-4 ${
                          tariff.popular
                            ? 'bg-gradient-to-r from-lime-500 to-green-500 hover:from-lime-600 hover:to-green-600'
                            : 'bg-gray-900 hover:bg-gray-800'
                        } text-white`}>
                          Contratar ahora
                        </Button>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="combo">
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {comboTariffs.map((tariff) => (
                  <Card key={tariff.id} className={`border-2 ${
                    tariff.popular 
                      ? 'border-lime-500 shadow-2xl scale-105 relative' 
                      : 'border-gray-200 hover:border-lime-300'
                  } transition-all duration-300 hover:shadow-xl`}>
                    {tariff.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-lime-500 to-green-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                        RECOMENDADO
                      </div>
                    )}
                    <CardHeader className="text-center pb-4">
                      <CardTitle className="text-2xl font-bold">{tariff.name}</CardTitle>
                      <div className="mt-4">
                        <span className="text-5xl font-black text-lime-600">{tariff.price}€</span>
                        <span className="text-gray-500">/mes</span>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="text-center py-3 bg-lime-50 rounded-xl">
                          <div className="text-xl font-black text-gray-900">{tariff.speed}</div>
                          <div className="text-xs text-gray-600">Fibra</div>
                        </div>
                        <div className="text-center py-3 bg-green-50 rounded-xl">
                          <div className="text-xl font-black text-gray-900">{tariff.data}</div>
                          <div className="text-xs text-gray-600">Móvil</div>
                        </div>
                      </div>
                      <ul className="space-y-3">
                        {tariff.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <Check className="w-5 h-5 text-lime-500 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <a href={`https://wa.me/${contactInfo.whatsapp}?text=Quiero contratar ${tariff.name}`} target="_blank" rel="noopener noreferrer" className="block">
                        <Button className={`w-full mt-4 ${
                          tariff.popular
                            ? 'bg-gradient-to-r from-lime-500 to-green-500 hover:from-lime-600 hover:to-green-600'
                            : 'bg-gray-900 hover:bg-gray-800'
                        } text-white`}>
                          Contratar ahora
                        </Button>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">¿Cómo funciona?</h2>
            <p className="text-xl text-gray-600">Contratar DIGI nunca fue tan fácil</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-lime-500 to-green-500 w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-black mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Elige tu tarifa</h3>
              <p className="text-gray-600">Selecciona la que mejor se adapte a tus necesidades o consúltanos</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-500 to-emerald-500 w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-black mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Visita nuestra tienda</h3>
              <p className="text-gray-600">Ven con tu DNI. Nosotros nos encargamos de todo el papeleo</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-500 w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-black mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">¡Listo!</h3>
              <p className="text-gray-600">Configuramos todo y empiezas a ahorrar desde el primer día</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-lime-500 to-green-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-6">¿Tienes dudas? ¡Contáctanos!</h2>
          <p className="text-xl mb-8 opacity-90">Estamos para ayudarte a elegir la mejor opción</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`https://wa.me/${contactInfo.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <Button className="bg-white text-lime-600 hover:bg-gray-100 text-lg px-8 py-6 rounded-xl">
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

export default DigiPage;