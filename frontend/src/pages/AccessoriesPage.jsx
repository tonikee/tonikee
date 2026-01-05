import React, { useState } from 'react';
import { ShieldCheck, Monitor, Cable, Headphones, BatteryCharging, Smartphone, HardDrive, MonitorSmartphone, CheckCircle, Package } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { accessoryCategories, contactInfo, brands } from '../mockData';

const AccessoriesPage = () => {
  const iconMap = {
    ShieldCheck,
    Monitor,
    Cable,
    Headphones,
    BatteryCharging,
    Smartphone,
    HardDrive,
    MonitorSmartphone
  };

  const mobileAccessories = accessoryCategories.slice(0, 7);
  const pcAccessories = [accessoryCategories[7]];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-amber-500 via-yellow-500 to-lime-500 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="inline-block mb-4">
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
                📦 Gran variedad en stock
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
              Accesorios de Calidad para tu Móvil
            </h1>
            <p className="text-xl sm:text-2xl mb-8 opacity-90">
              Fundas, protectores, cargadores y todo lo que necesitas para proteger y mejorar tu dispositivo
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={`https://wa.me/${contactInfo.whatsapp}?text=Hola, quiero información sobre accesorios`} target="_blank" rel="noopener noreferrer">
                <Button className="bg-white text-amber-600 hover:bg-gray-100 text-lg px-8 py-6 rounded-xl shadow-2xl">
                  Consultar disponibilidad
                </Button>
              </a>
              <a href={`tel:${contactInfo.phone}`}>
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-xl">
                  Visitar tienda
                </Button>
              </a>
            </div>
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span className="text-sm font-medium">Marcas reconocidas</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span className="text-sm font-medium">Garantía de calidad</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span className="text-sm font-medium">Compatible con todas las marcas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-amber-200 hover:border-amber-500 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-lg font-bold mb-2">Amplio Catálogo</h3>
                <p className="text-gray-600 text-sm">Fundas, protectores, cargadores y más para todos los modelos</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-yellow-200 hover:border-yellow-500 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-lg font-bold mb-2">Calidad Garantizada</h3>
                <p className="text-gray-600 text-sm">Productos seleccionados de marcas reconocidas y duraderos</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-lime-200 hover:border-lime-500 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-lime-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-8 h-8 text-lime-600" />
                </div>
                <h3 className="text-lg font-bold mb-2">Compatibilidad Total</h3>
                <p className="text-gray-600 text-sm">Para Apple, Samsung, Xiaomi y todas las marcas</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Accessories Categories */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">Categorías de Accesorios</h2>
            <p className="text-xl text-gray-600">Todo lo que necesitas en un solo lugar</p>
          </div>

          <Tabs defaultValue="mobile" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="mobile" className="text-lg">Móviles</TabsTrigger>
              <TabsTrigger value="pc" className="text-lg">PC e Informática</TabsTrigger>
            </TabsList>

            <TabsContent value="mobile">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {mobileAccessories.map((category) => {
                  const IconComponent = iconMap[category.icon];
                  return (
                    <Card key={category.id} className="border-2 border-gray-200 hover:border-amber-500 hover:shadow-2xl transition-all duration-300 group">
                      <CardHeader>
                        <div className="bg-amber-100 p-3 rounded-xl mb-4 group-hover:bg-amber-500 transition-colors duration-300 w-fit">
                          <IconComponent className="w-6 h-6 text-amber-600 group-hover:text-white transition-colors duration-300" />
                        </div>
                        <CardTitle className="text-xl">{category.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                        <ul className="space-y-2">
                          {category.items.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                              <div className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0"></div>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>

            <TabsContent value="pc">
              <div className="max-w-2xl mx-auto">
                {pcAccessories.map((category) => {
                  const IconComponent = iconMap[category.icon];
                  return (
                    <Card key={category.id} className="border-2 border-gray-200 hover:border-lime-500 hover:shadow-2xl transition-all duration-300 group">
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <div className="bg-lime-100 p-4 rounded-xl group-hover:bg-lime-500 transition-colors duration-300">
                            <IconComponent className="w-8 h-8 text-lime-600 group-hover:text-white transition-colors duration-300" />
                          </div>
                          <div>
                            <CardTitle className="text-2xl">{category.name}</CardTitle>
                            <p className="text-gray-600 mt-1">{category.description}</p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-4">
                          {category.items.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-gray-700">
                              <CheckCircle className="w-5 h-5 text-lime-500 flex-shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Compatible Brands */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">Compatible con Todas las Marcas</h2>
            <p className="text-xl text-gray-600">Tenemos accesorios para tu dispositivo</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {brands.map((brand) => (
              <div key={brand} className="bg-gradient-to-br from-amber-50 to-yellow-50 px-6 py-3 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-amber-200">
                <span className="font-semibold text-gray-800">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Buy Here */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-lime-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <h2 className="text-3xl font-black text-gray-900 mb-8 text-center">¿Por qué comprar tus accesorios con nosotros?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Productos de calidad</h3>
                  <p className="text-sm text-gray-600">Seleccionados de marcas reconocidas</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Compatibilidad garantizada</h3>
                  <p className="text-sm text-gray-600">Para todos los modelos y marcas</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Asesoramiento personalizado</h3>
                  <p className="text-sm text-gray-600">Te ayudamos a elegir lo mejor</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Stock disponible</h3>
                  <p className="text-sm text-gray-600">Amplia variedad en tienda</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Precios competitivos</h3>
                  <p className="text-sm text-gray-600">Mejor relación calidad-precio</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">En el centro de Móstoles</h3>
                  <p className="text-sm text-gray-600">Fácil acceso y cerca de ti</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-lime-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-6">¿Buscas algún accesorio en particular?</h2>
          <p className="text-xl mb-8 opacity-90">Visítanos o consúltanos por WhatsApp</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`https://wa.me/${contactInfo.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <Button className="bg-white text-amber-600 hover:bg-gray-100 text-lg px-8 py-6 rounded-xl">
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

export default AccessoriesPage;