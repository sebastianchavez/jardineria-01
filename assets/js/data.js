/* ============================================================
   Mock data — Verde Vita Jardinería
   ============================================================ */

const NEGOCIO = {
  nombre: 'Verde Vita Jardinería',
  eslogan: 'Transformamos espacios en vida',
  telefono: '+56 2 2897 4321',
  whatsapp: '+56 9 8765 4321',
  whatsappLink: 'https://wa.me/56987654321',
  email: 'contacto@verdevita.cl',
  direccion: 'Av. Las Condes 4521, Of. 803, Las Condes, Santiago, Chile',
  horarios: [
    { dias: 'Lunes a Viernes', horas: '08:30 — 19:00' },
    { dias: 'Sábado', horas: '09:00 — 14:00' },
    { dias: 'Domingo', horas: 'Cerrado (sólo emergencias)' }
  ],
  redes: {
    facebook: 'https://facebook.com/verdevita',
    instagram: 'https://instagram.com/verdevita',
    tiktok: 'https://tiktok.com/@verdevita',
    whatsapp: 'https://wa.me/56987654321'
  },
  mapaEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3331.123456789!2d-70.5678!3d-33.4123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5b0a0a0a0a0%3A0x0!2sLas%20Condes%2C%20Santiago!5e0!3m2!1ses-419!2scl!4v1700000000000'
};

/* ---------- Servicios ---------- */
const SERVICIOS = [
  {
    id: 'diseno',
    nombre: 'Diseño de Jardines',
    descripcion: 'Diseño paisajístico personalizado con planos en 3D, selección de especies y propuesta estética que se adapta a tu estilo y presupuesto.',
    descripcionCorta: 'Diseño paisajístico personalizado con planos 3D.',
    icono: 'bi-flower3',
    imagen: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80',
    precioDesde: 350000,
    destacado: true
  },
  {
    id: 'mantencion',
    nombre: 'Mantención Mensual',
    descripcion: 'Servicio recurrente de cuidado integral: corte de césped, poda, fertilización, fumigación preventiva y limpieza general.',
    descripcionCorta: 'Cuidado integral mensual del jardín.',
    icono: 'bi-droplet-half',
    imagen: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80',
    precioDesde: 75000,
    destacado: true
  },
  {
    id: 'poda',
    nombre: 'Poda y Tala',
    descripcion: 'Poda técnica de árboles y arbustos, tala controlada con equipo certificado y retiro de residuos verdes.',
    descripcionCorta: 'Poda técnica y tala controlada.',
    icono: 'bi-scissors',
    imagen: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=800&q=80',
    precioDesde: 45000
  },
  {
    id: 'riego',
    nombre: 'Riego Automático',
    descripcion: 'Diseño e instalación de sistemas de riego tecnificado con aspersores, goteo y control inteligente desde tu smartphone.',
    descripcionCorta: 'Sistemas de riego automatizado e inteligente.',
    icono: 'bi-moisture',
    imagen: 'https://images.unsplash.com/photo-1572450043130-7dc6c5b6c0c8?w=800&q=80',
    precioDesde: 280000
  },
  {
    id: 'cesped',
    nombre: 'Césped y Siembra',
    descripcion: 'Preparación de suelo, siembra de césped natural o instalación de pasto en rollo, con garantía de 6 meses.',
    descripcionCorta: 'Siembra e instalación de césped.',
    icono: 'bi-grid-3x3-gap',
    imagen: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80',
    precioDesde: 8500
  },
  {
    id: 'huerto',
    nombre: 'Huerto Orgánico',
    descripcion: 'Diseño y construcción de huertos urbanos y orgánicos, ideales para cultivar tus propias verduras y hierbas en casa.',
    descripcionCorta: 'Huertos urbanos y orgánicos.',
    icono: 'bi-basket3',
    imagen: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80',
    precioDesde: 120000
  },
  {
    id: 'iluminacion',
    nombre: 'Iluminación de Jardín',
    descripcion: 'Iluminación LED decorativa y funcional para realzar tu jardín de noche, con instalación eléctrica certificada.',
    descripcionCorta: 'Iluminación LED decorativa y funcional.',
    icono: 'bi-lightbulb',
    imagen: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&q=80',
    precioDesde: 195000,
    destacado: true
  },
  {
    id: 'plagas',
    nombre: 'Control de Plagas Eco',
    descripcion: 'Manejo integrado de plagas con productos orgánicos y técnicas biológicas, cuidando a tu familia y mascotas.',
    descripcionCorta: 'Control orgánico y biológico de plagas.',
    icono: 'bi-shield-check',
    imagen: 'https://images.unsplash.com/photo-1611843467160-25afb8df1074?w=800&q=80',
    precioDesde: 38000
  }
];

/* ---------- Equipo ---------- */
const EQUIPO = [
  {
    nombre: 'Tomás Vargas Reyes',
    cargo: 'Director & Paisajista Senior',
    especialidad: 'Diseño y planificación de áreas verdes',
    bio: 'Ingeniero Agrónomo de la Universidad de Chile con 15 años de experiencia en paisajismo residencial y comercial. Certificación internacional de la IFLA.',
    foto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80'
  },
  {
    nombre: 'Camila Fuentes Soto',
    cargo: 'Jefa de Mantención',
    especialidad: 'Jardinería orgánica y horticultura',
    bio: 'Técnica Agrícola con especialización en permacultura. Lidera nuestro equipo de mantención con enfoque 100% ecológico y respetuoso.',
    foto: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80'
  },
  {
    nombre: 'Matías Rojas Pérez',
    cargo: 'Especialista en Riego',
    especialidad: 'Sistemas tecnificados y automatización',
    bio: 'Técnico en Riego y Drenaje certificado por el CNR. Diseña sistemas eficientes que ahorran hasta un 40% de agua.',
    foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80'
  },
  {
    nombre: 'Valentina Muñoz Lara',
    cargo: 'Arquitecta Paisajista',
    especialidad: 'Diseño 3D y urbanismo verde',
    bio: 'Arquitecta de la PUC con magister en Paisajismo. Crea propuestas visuales en 3D para que veas tu jardín antes de construirlo.',
    foto: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80'
  }
];

/* ---------- Testimonios ---------- */
const TESTIMONIOS = [
  {
    nombre: 'Andrea Salazar',
    comuna: 'Las Condes',
    texto: 'Verde Vita transformó completamente nuestro jardín. El diseño 3D nos permitió ver el resultado antes de empezar y el equipo fue súper profesional durante toda la obra. Totalmente recomendados.',
    estrellas: 5,
    foto: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80'
  },
  {
    nombre: 'Sebastián Contreras',
    comuna: 'Vitacura',
    texto: 'Contratamos el plan de mantención mensual hace 2 años y nuestro jardín nunca se ha visto tan bien. Son puntuales, prolijos y siempre llegan con buenas recomendaciones para mejorar las especies.',
    estrellas: 5,
    foto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80'
  },
  {
    nombre: 'Carolina Jara',
    comuna: 'Providencia',
    texto: 'Nos hicieron un huerto orgánico precioso en el patio. Mis hijos están felices cosechando lechugas y tomates. El diseño quedó precioso y súper funcional. ¡100% recomendados!',
    estrellas: 5,
    foto: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80'
  }
];

/* ---------- Planes de precios ---------- */
const PLANES = [
  {
    nombre: 'Plan Esencial',
    precio: 75000,
    periodo: 'mes',
    color: 'outline',
    incluye: [
      '1 visita mensual de 3 horas',
      'Corte de césped y bordes',
      'Riego manual programado',
      'Limpieza general del jardín',
      'Informe mensual con fotos'
    ]
  },
  {
    nombre: 'Plan Premium',
    precio: 145000,
    periodo: 'mes',
    color: 'primary',
    destacado: true,
    incluye: [
      '2 visitas mensuales de 4 horas',
      'Todo lo del Plan Esencial',
      'Poda técnica de arbustos',
      'Fertilización estacional',
      'Fumigación preventiva orgánica',
      'Asesoría telefónica prioritaria'
    ]
  },
  {
    nombre: 'Plan Empresarial',
    precio: 320000,
    periodo: 'mes',
    color: 'outline',
    incluye: [
      'Visitas semanales ilimitadas',
      'Todos los beneficios Premium',
      'Equipo dedicado de 2 personas',
      'Mantenimiento sistema de riego',
      'Reporte ejecutivo mensual',
      'Servicio de emergencia 24/7'
    ]
  }
];

/* ---------- Tabla de precios detallada ---------- */
const PRECIOS_TABLA = [
  {
    categoria: 'Diseño y Planificación',
    items: [
      { nombre: 'Consulta inicial a domicilio', precio: '$35.000 CLP' },
      { nombre: 'Diseño paisajístico básico', precio: 'Desde $180.000 CLP' },
      { nombre: 'Diseño con renders 3D', precio: 'Desde $350.000 CLP' },
      { nombre: 'Masterplan para condominios', precio: 'Desde $850.000 CLP' }
    ]
  },
  {
    categoria: 'Mantención',
    items: [
      { nombre: 'Visita única de mantención', precio: 'Desde $45.000 CLP' },
      { nombre: 'Plan mensual Esencial', precio: '$75.000 CLP' },
      { nombre: 'Plan mensual Premium', precio: '$145.000 CLP' },
      { nombre: 'Plan mensual Empresarial', precio: '$320.000 CLP' }
    ]
  },
  {
    categoria: 'Servicios Extra',
    items: [
      { nombre: 'Poda de arbustos', precio: 'Desde $25.000 CLP' },
      { nombre: 'Tala controlada de árbol', precio: 'Desde $120.000 CLP' },
      { nombre: 'Instalación de riego por goteo', precio: 'Desde $280.000 CLP' },
      { nombre: 'Siembra de césped (m²)', precio: '$8.500 CLP' }
    ]
  },
  {
    categoria: 'Construcción de Áreas Verdes',
    items: [
      { nombre: 'Huerto orgánico básico', precio: 'Desde $120.000 CLP' },
      { nombre: 'Huerto orgánico premium', precio: 'Desde $320.000 CLP' },
      { nombre: 'Iluminación LED decorativa', precio: 'Desde $195.000 CLP' },
      { nombre: 'Pavimentación con piedra', precio: 'Desde $45.000 CLP/m²' }
    ]
  }
];

/* ---------- FAQ ---------- */
const FAQ = [
  {
    pregunta: '¿Realizan visitas a domicilio sin compromiso?',
    respuesta: 'Sí, hacemos una visita técnica gratuita en toda la Región Metropolitana para evaluar tu espacio, tomar medidas y entregarte una propuesta personalizada sin compromiso de compra.'
  },
  {
    pregunta: '¿Cuánto demora un diseño de jardín?',
    respuesta: 'Un diseño residencial típico demora entre 7 y 14 días hábiles desde la primera visita hasta la entrega de los planos 3D. Para proyectos comerciales o masterplans el plazo se extiende a 30-45 días.'
  },
  {
    pregunta: '¿Qué métodos de pago aceptan?',
    respuesta: 'Aceptamos efectivo, transferencia bancaria, tarjetas de crédito y débito (Visa, MasterCard, Amex, Redcompra), y pagos hasta en 12 cuotas precio contado con bancos seleccionados.'
  },
  {
    pregunta: '¿Trabajan fuera de Santiago?',
    respuesta: 'Sí, atendemos proyectos en Viña del Mar, Valparaíso, Rancagua y otras regiones. Los proyectos fuera de la Región Metropolitana tienen un cargo adicional de traslado que se cotiza por separado.'
  },
  {
    pregunta: '¿Los productos que usan son amigables con mascotas?',
    respuesta: 'Por supuesto. Todos nuestros fertilizantes, pesticidas y productos fitosanitarios son de origen orgánico o biodegradable. Cuidamos a tu familia, tus mascotas y el medio ambiente.'
  },
  {
    pregunta: '¿Qué garantía tienen sus trabajos?',
    respuesta: 'Ofrecemos garantía de 6 meses en siembra de césped, 1 año en sistemas de riego y 3 meses en cualquier mantención. Si algo no funciona como prometimos, volvemos sin costo adicional.'
  }
];

/* ---------- Estadísticas ---------- */
const ESTADISTICAS = [
  { numero: 520, sufijo: '+', etiqueta: 'Jardines diseñados' },
  { numero: 10, sufijo: '', etiqueta: 'Años de experiencia' },
  { numero: 1200, sufijo: '+', etiqueta: 'Clientes felices' },
  { numero: 98, sufijo: '%', etiqueta: 'Satisfacción' }
];

/* ---------- Línea de tiempo ---------- */
const HISTORIA = [
  {
    año: '2014',
    titulo: 'El inicio',
    descripcion: 'Tomás Vargas funda Verde Vita en un pequeño taller de Las Condes, con la visión de crear jardines sustentables y personalizados para cada familia.'
  },
  {
    año: '2017',
    titulo: 'Primer equipo',
    descripcion: 'Conformamos nuestro primer equipo de 4 jardineros certificados e inauguramos nuestra oficina actual en Av. Las Condes 4521.'
  },
  {
    año: '2020',
    titulo: 'Certificación Eco',
    descripcion: 'Recibimos la certificación de Manejo Integrado de Plagas y nos convertimos en una de las primeras empresas 100% eco-friendly del sector.'
  },
  {
    año: '2023',
    titulo: 'División comercial',
    descripcion: 'Abrimos la División Empresas, atendiendo a condominios, oficinas y retail. Sumamos tecnología de diseño 3D y drones para topografía.'
  },
  {
    año: '2026',
    titulo: 'Vita Digital',
    descripcion: 'Lanzamos nuestra plataforma de seguimiento online donde los clientes pueden ver reportes, fotos y agendar visitas desde su celular.'
  }
];

/* ---------- Galería de proyectos ---------- */
const GALERIA = [
  {
    id: 1,
    titulo: 'Jardín mediterráneo Las Condes',
    categoria: 'Jardines residenciales',
    imagen: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80',
    descripcion: 'Diseño mediterráneo con lavandas, romero y olivos en jardín de 250 m².'
  },
  {
    id: 2,
    titulo: 'Huerto orgánico Providencia',
    categoria: 'Huerto',
    imagen: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80',
    descripcion: 'Huerto familiar con 6 camas de cultivo y sistema de compostaje integrado.'
  },
  {
    id: 3,
    titulo: 'Iluminación nocturna Vitacura',
    categoria: 'Iluminación',
    imagen: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&q=80',
    descripcion: 'Iluminación LED cálida en senderos y árboles centenarios.'
  },
  {
    id: 4,
    titulo: 'Jardín minimalista Lo Barnechea',
    categoria: 'Jardines residenciales',
    imagen: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80',
    descripcion: 'Diseño minimalista con cubos de hormigón y especies suculentas.'
  },
  {
    id: 5,
    titulo: 'Área verde condominio',
    categoria: 'Áreas verdes',
    imagen: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80',
    descripcion: 'Renovación de 1.200 m² de áreas comunes con sistema de riego automatizado.'
  },
  {
    id: 6,
    titulo: 'Huerto vertical Ñuñoa',
    categoria: 'Huerto',
    imagen: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80',
    descripcion: 'Huerto vertical con hierbas aromáticas para cocina gourmet.'
  },
  {
    id: 7,
    titulo: 'Jardín zen Maipú',
    categoria: 'Jardines residenciales',
    imagen: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=800&q=80',
    descripcion: 'Jardín zen japonés con estanque de koi y puente de madera.'
  },
  {
    id: 8,
    titulo: 'Iluminación piscina',
    categoria: 'Iluminación',
    imagen: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80',
    descripcion: 'Iluminación subacuática y alrededor de piscina temperada.'
  },
  {
    id: 9,
    titulo: 'Plaza corporativa Huechuraba',
    categoria: 'Áreas verdes',
    imagen: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
    descripcion: 'Diseño de plaza corporativa con 45 árboles nativos y sector de descanso.'
  },
  {
    id: 10,
    titulo: 'Jardín tropical La Reina',
    categoria: 'Jardines residenciales',
    imagen: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80',
    descripcion: 'Jardín tropical con palmas, bananos ornamentales y cascada artificial.'
  },
  {
    id: 11,
    titulo: 'Iluminación solar',
    categoria: 'Iluminación',
    imagen: 'https://images.unsplash.com/photo-1545158539-1709d62b8a31?w=800&q=80',
    descripcion: 'Sistema de iluminación solar autónoma en senderos de jardín.'
  },
  {
    id: 12,
    titulo: 'Huerto escolar',
    categoria: 'Huerto',
    imagen: 'https://images.unsplash.com/photo-1572450043130-7dc6c5b6c0c8?w=800&q=80',
    descripcion: 'Huerto educativo para colegio con bancales accesibles para niños.'
  }
];

const CATEGORIAS_GALERIA = ['Todos', 'Jardines residenciales', 'Áreas verdes', 'Huerto', 'Iluminación'];

/* ---------- Proceso de trabajo ---------- */
const PROCESO = [
  { paso: 1, titulo: 'Consulta', descripcion: 'Visitamos tu espacio sin compromiso, escuchamos tus ideas y evaluamos las condiciones del terreno.', icono: 'bi-chat-dots' },
  { paso: 2, titulo: 'Diseño', descripcion: 'Creamos una propuesta personalizada con renders 3D y un presupuesto detallado.', icono: 'bi-pencil-square' },
  { paso: 3, titulo: 'Ejecución', descripcion: 'Nuestro equipo certificado ejecuta el proyecto en los plazos acordados, con supervisión constante.', icono: 'bi-tools' },
  { paso: 4, titulo: 'Mantención', descripcion: 'Ofrecemos planes de mantención para que tu jardín se mantenga hermoso todo el año.', icono: 'bi-droplet-half' }
];

/* ---------- Por qué elegirnos ---------- */
const VALORES = [
  {
    icono: 'bi-award',
    titulo: 'Equipo certificado',
    descripcion: 'Ingenieros agrónomos, arquitectos paisajistas y técnicos certificados con educación continua.'
  },
  {
    icono: 'bi-flower2',
    titulo: '100% Eco-friendly',
    descripcion: 'Usamos solo productos orgánicos, compostaje propio y técnicas sustentables.'
  },
  {
    icono: 'bi-shield-check',
    titulo: 'Garantía real',
    descripcion: 'Hasta 1 año de garantía en todos nuestros trabajos. Si no quedas conforme, volvemos.'
  },
  {
    icono: 'bi-cash-coin',
    titulo: 'Precios justos',
    descripcion: 'Cotizaciones transparentes sin sorpresas. Aceptamos hasta 12 cuotas precio contado.'
  }
];
