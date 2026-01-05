import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Card, CardContent } from '../components/ui/card';
import { contactInfo } from '../mockData';
import { useToast } from '../hooks/use-toast';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      toast({
        title: '¡Mensaje enviado!',
        description: 'Te contactaremos pronto. Gracias por tu interés.'
      });
      setFormData({ name: '', email: '', phone: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-lime-500 via-green-500 to-emerald-600 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">Contacta con Nosotros</h1>
          <p className="text-xl sm:text-2xl opacity-90">
            Estamos aquí para ayudarte. Visítanos, llámanos o escríbenos.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="border-2 border-lime-200 hover:border-lime-500 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-lime-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-lime-600" />
                </div>
                <h3 className="font-bold mb-2">Dirección</h3>
                <p className="text-sm text-gray-600">
                  {contactInfo.address}<br />
                  {contactInfo.city}, {contactInfo.province}
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-green-200 hover:border-green-500 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-bold mb-2">Teléfono</h3>
                <a href={`tel:${contactInfo.phone}`} className="text-sm text-gray-600 hover:text-green-600 transition-colors">
                  {contactInfo.phoneFormatted}
                </a>
              </CardContent>
            </Card>
            <Card className="border-2 border-emerald-200 hover:border-emerald-500 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="font-bold mb-2">Email</h3>
                <a href={`mailto:${contactInfo.email}`} className="text-sm text-gray-600 hover:text-emerald-600 transition-colors break-all">
                  {contactInfo.email}
                </a>
              </CardContent>
            </Card>
            <Card className="border-2 border-yellow-200 hover:border-yellow-500 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="font-bold mb-2">Horario</h3>
                <p className="text-sm text-gray-600">
                  L-V: 10:00-20:00<br />
                  S: 10:00-14:00
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Form and Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-black text-gray-900 mb-6">Envíanos un Mensaje</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="123 456 789"
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="¿En qué podemos ayudarte?"
                    rows={6}
                    className="w-full"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-lime-500 to-green-500 hover:from-lime-600 hover:to-green-600 text-white text-lg py-6"
                >
                  {isSubmitting ? 'Enviando...' : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Enviar Mensaje
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-3xl font-black text-gray-900 mb-6">Dónde Estamos</h2>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-200 mb-6">
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
              <div className="bg-gradient-to-br from-lime-50 to-green-50 p-6 rounded-xl border-2 border-lime-200">
                <h3 className="font-bold text-gray-900 mb-3">Cómo llegar:</h3>
                <p className="text-gray-600 text-sm mb-2">
                  <span className="font-semibold">Metro:</span> {contactInfo.metro}
                </p>
                <p className="text-gray-600 text-sm">
                  Estamos en una ubicación céntrica y de fácil acceso en Móstoles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-lime-500 to-green-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-6">¿Prefieres contacto directo?</h2>
          <p className="text-xl mb-8 opacity-90">Llámanos o escríbenos por WhatsApp</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`https://wa.me/${contactInfo.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <Button className="bg-white text-lime-600 hover:bg-gray-100 text-lg px-8 py-6 rounded-xl">
                WhatsApp
              </Button>
            </a>
            <a href={`tel:${contactInfo.phone}`}>
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-xl">
                Llamar ahora
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;