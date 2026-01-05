// Mock data para FriiMóvil

export const contactInfo = {
  phone: '912385500',
  phoneFormatted: '91 238 55 00',
  email: 'friimovil@gmail.com',
  address: 'Calle Río Llobregat, N.º 13 Local 3',
  city: 'Móstoles',
  province: 'Madrid',
  metro: 'Metro Hospital de Móstoles',
  whatsapp: '34912385500'
};

export const digiTariffs = [
  {
    id: 1,
    type: 'mobile',
    name: 'DIGI Móvil 25GB',
    price: '10',
    data: '25GB',
    calls: 'Llamadas ilimitadas',
    features: ['5G incluido', 'Sin permanencia', 'Portabilidad gratuita'],
    popular: false
  },
  {
    id: 2,
    type: 'mobile',
    name: 'DIGI Móvil 50GB',
    price: '15',
    data: '50GB',
    calls: 'Llamadas ilimitadas',
    features: ['5G incluido', 'Sin permanencia', 'Portabilidad gratuita', 'Datos en UE'],
    popular: true
  },
  {
    id: 3,
    type: 'mobile',
    name: 'DIGI Móvil 100GB',
    price: '20',
    data: '100GB',
    calls: 'Llamadas ilimitadas',
    features: ['5G incluido', 'Sin permanencia', 'Portabilidad gratuita', 'Datos en UE', 'Roaming mundial'],
    popular: false
  },
  {
    id: 4,
    type: 'combo',
    name: 'Fibra 1GB + Móvil 50GB',
    price: '30',
    speed: '1GB simétrico',
    data: '50GB móvil',
    features: ['Router incluido', 'Sin permanencia', 'Instalación gratis', 'Llamadas ilimitadas'],
    popular: true
  },
  {
    id: 5,
    type: 'combo',
    name: 'Fibra 1GB + Móvil 100GB',
    price: '35',
    speed: '1GB simétrico',
    data: '100GB móvil',
    features: ['Router incluido', 'Sin permanencia', 'Instalación gratis', 'Llamadas ilimitadas', '5G incluido'],
    popular: false
  }
];

export const repairServices = [
  {
    id: 1,
    name: 'Cambio de Pantalla',
    description: 'Reparación o sustitución de pantalla en el acto',
    icon: 'Smartphone',
    time: '30-60 min',
    warranty: '3 meses'
  },
  {
    id: 2,
    name: 'Cambio de Batería',
    description: 'Batería nueva con garantía oficial',
    icon: 'Battery',
    time: '20-30 min',
    warranty: '6 meses'
  },
  {
    id: 3,
    name: 'Reparación Conector',
    description: 'Carga y puerto de datos',
    icon: 'Plug',
    time: '45 min',
    warranty: '3 meses'
  },
  {
    id: 4,
    name: 'Problemas de Software',
    description: 'Actualización, reseteo y optimización',
    icon: 'Settings',
    time: '30 min',
    warranty: '1 mes'
  },
  {
    id: 5,
    name: 'Cámara',
    description: 'Reparación de cámara frontal o trasera',
    icon: 'Camera',
    time: '40 min',
    warranty: '3 meses'
  },
  {
    id: 6,
    name: 'Botones y Altavoces',
    description: 'Reparación de botones y audio',
    icon: 'Volume2',
    time: '35 min',
    warranty: '3 meses'
  }
];

export const brands = [
  'Apple', 'Samsung', 'Xiaomi', 'Huawei', 'Oppo', 'OnePlus', 'Realme', 'Motorola', 'Nokia', 'Sony', 'LG', 'Google'
];

export const testimonials = [
  {
    id: 1,
    name: 'María García',
    rating: 5,
    text: 'Excelente servicio. Me cambiaron la pantalla del iPhone en menos de una hora. Muy profesionales.',
    date: '2024'
  },
  {
    id: 2,
    name: 'Carlos Ruiz',
    rating: 5,
    text: 'Contraté DIGI con ellos y me ayudaron con todo el proceso. Ahorro 30€ al mes. Totalmente recomendable.',
    date: '2024'
  },
  {
    id: 3,
    name: 'Laura Martínez',
    rating: 5,
    text: 'Rápidos y económicos. Me repararon el móvil mientras esperaba. Gran atención al cliente.',
    date: '2024'
  },
  {
    id: 4,
    name: 'Javier López',
    rating: 5,
    text: 'Servicio express de verdad. Batería nueva en 20 minutos. Precio justo y garantía.',
    date: '2024'
  }
];

export const whyChooseUs = [
  {
    id: 1,
    title: 'Más de 10 años de experiencia',
    description: 'Servicio técnico líder en Móstoles',
    icon: 'Award'
  },
  {
    id: 2,
    title: 'Reparaciones Express',
    description: 'La mayoría de reparaciones en menos de 1 hora',
    icon: 'Zap'
  },
  {
    id: 3,
    title: 'Garantía en todas las reparaciones',
    description: 'Hasta 6 meses de garantía',
    icon: 'Shield'
  },
  {
    id: 4,
    title: 'Presupuesto sin compromiso',
    description: 'Valoración gratuita antes de reparar',
    icon: 'FileText'
  },
  {
    id: 5,
    title: 'Atención personalizada DIGI',
    description: 'Te ayudamos con la portabilidad y configuración',
    icon: 'Users'
  },
  {
    id: 6,
    title: 'Sin permanencia',
    description: 'Total flexibilidad en todas las tarifas DIGI',
    icon: 'Unlock'
  }
];

export const faqData = [
  {
    id: 1,
    question: '¿Cuánto tarda una reparación?',
    answer: 'La mayoría de reparaciones las realizamos en menos de 1 hora. Reparaciones complejas pueden tardar hasta 24 horas.'
  },
  {
    id: 2,
    question: '¿Qué garantía tienen las reparaciones?',
    answer: 'Todas nuestras reparaciones tienen garantía. De 3 a 6 meses según el tipo de reparación.'
  },
  {
    id: 3,
    question: '¿Puedo contratar DIGI sin cambiar mi número?',
    answer: 'Sí, nos encargamos de toda la portabilidad de forma gratuita. Mantienes tu número actual.'
  },
  {
    id: 4,
    question: '¿Las tarifas DIGI tienen permanencia?',
    answer: 'No, todas las tarifas DIGI son sin permanencia. Puedes darte de baja cuando quieras.'
  },
  {
    id: 5,
    question: '¿Reparáis todas las marcas de móviles?',
    answer: 'Sí, reparamos todas las marcas: Apple, Samsung, Xiaomi, Huawei, y muchas más.'
  }
];