export type Language = 'es' | 'en' | 'fr';

export interface Translations {
  nav: {
    services: string;
    projects: string;
    calculator: string;
    plans: string;
    faq: string;
    contact: string;
    whatsappDirect: string;
    interfaceTheme: string;
    interfaceLanguage: string;
  };
  hero: {
    kicker: string;
    kickerSub: string;
    titlePart1: string;
    titleGradient: string;
    description: string;
    ctaWhatsapp: string;
    ctaCalculator: string;
    proofMobile: string;
    proofSpeed: string;
    proofDirect: string;
    badgeTitle: string;
    badgeResponsive: string;
    badgeDesc: string;
  };
  services: {
    kicker: string;
    kickerSub: string;
    title: string;
    description: string;
    mostPopular: string;
    includesTitle: string;
    items: {
      personal: {
        title: string;
        target: string;
        description: string;
        features: string[];
        buttonText: string;
        whatsappMessage: string;
      };
      corporate: {
        title: string;
        target: string;
        description: string;
        features: string[];
        buttonText: string;
        whatsappMessage: string;
      };
      landing: {
        title: string;
        target: string;
        description: string;
        features: string[];
        buttonText: string;
        whatsappMessage: string;
      };
      maintenance: {
        title: string;
        target: string;
        description: string;
        features: string[];
        buttonText: string;
        whatsappMessage: string;
      };
    };
  };
  calculator: {
    kicker: string;
    kickerSub: string;
    title: string;
    description: string;
    step1Title: string;
    types: {
      corporate: { label: string; desc: string };
      personal: { label: string; desc: string };
      landing: { label: string; desc: string };
      catalog: { label: string; desc: string };
    };
    step2Title: string;
    scopes: {
      onepage: { label: string; pages: string };
      standard: { label: string; pages: string };
      extended: { label: string; pages: string };
    };
    step3Title: string;
    extras: {
      brand_identity: { name: string; desc: string };
      whatsapp_direct: { name: string; desc: string };
      mobile_first: { name: string; desc: string };
      seo_optimization: { name: string; desc: string };
      domain_hosting: { name: string; desc: string };
      catalog_filter: { name: string; desc: string };
      custom_form: { name: string; desc: string };
    };
    summaryTitle: string;
    summaryBrand: string;
    typeLabel: string;
    scopeLabel: string;
    extrasLabel: string;
    extrasCount: string;
    deliveryTimeLabel: string;
    daysUnit: string;
    guaranteeText: string;
    ctaWhatsapp: string;
    ctaFootnote: string;
    whatsappMsgIntro: string;
    whatsappMsgType: string;
    whatsappMsgScope: string;
    whatsappMsgDelivery: string;
    whatsappMsgExtras: string;
    whatsappMsgOutro: string;
  };
  showcase: {
    kicker: string;
    kickerSub: string;
    title: string;
    description: string;
    filterAll: string;
    filterCorporate: string;
    filterPersonal: string;
    ctaProject: string;
    projects: {
      aurora: {
        categoryLabel: string;
        title: string;
        client: string;
        description: string;
        stats: string;
        features: string[];
        whatsappMessage: string;
      };
      eliza: {
        categoryLabel: string;
        title: string;
        client: string;
        description: string;
        stats: string;
        features: string[];
        whatsappMessage: string;
      };
    };
  };
  whyUs: {
    kicker: string;
    kickerSub: string;
    title: string;
    description: string;
    benefits: {
      title: string;
      description: string;
    }[];
  };
  plans: {
    kicker: string;
    kickerSub: string;
    title: string;
    description: string;
    recommendedBadge: string;
    includesTitle: string;
    personal: {
      name: string;
      tagline: string;
      deliveryTime: string;
      features: string[];
      buttonText: string;
      whatsappMessage: string;
    };
    corporate: {
      name: string;
      tagline: string;
      deliveryTime: string;
      features: string[];
      buttonText: string;
      whatsappMessage: string;
    };
    catalog: {
      name: string;
      tagline: string;
      deliveryTime: string;
      features: string[];
      buttonText: string;
      whatsappMessage: string;
    };
  };
  contact: {
    kicker: string;
    kickerSub: string;
    title: string;
    description: string;
    chatTitle: string;
    openChat: string;
    callTitle: string;
    callAction: string;
    hoursTitle: string;
    hoursDesc: string;
    formTitle: string;
    formSub: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    typeLabel: string;
    typeOptions: string[];
    detailsLabel: string;
    detailsPlaceholder: string;
    submitButton: string;
    copyButton: string;
    copiedButton: string;
    successMessage: string;
  };
  faq: {
    kicker: string;
    kickerSub: string;
    title: string;
    description: string;
    items: {
      question: string;
      answer: string;
    }[];
    supportQuestion: string;
    supportButton: string;
  };
  footer: {
    description: string;
    contactOfficial: string;
    navTitle: string;
    channelsTitle: string;
    internationalNote: string;
    copyright: string;
    responsiveNote: string;
  };
  floating: {
    greeting: string;
    optionCorporate: string;
    optionPersonal: string;
    optionGeneral: string;
    responseDirect: string;
    buttonLabel: string;
  };
}

export const translations: Record<Language, Translations> = {
  es: {
    nav: {
      services: 'Servicios',
      projects: 'Proyectos',
      calculator: 'Cotizador',
      plans: 'Planes',
      faq: 'Preguntas',
      contact: 'Contacto',
      whatsappDirect: 'WhatsApp Directo',
      interfaceTheme: 'Tema de la interfaz',
      interfaceLanguage: 'Idioma',
    },
    hero: {
      kicker: 'Diseño & Desarrollo Web Profesional',
      kickerSub: 'Personal & Empresarial',
      titlePart1: 'Tu página web moderna, elegante y ',
      titleGradient: '100% responsiva',
      description:
        'Creo sitios web de alto rendimiento para marcas personales, profesionales independientes y empresas consolidadas. Diseños limpios, carga ultrarrápida y conexión directa a tu WhatsApp para captar clientes desde el primer día.',
      ctaWhatsapp: 'Cotizar Proyecto por WhatsApp',
      ctaCalculator: 'Calcular Presupuesto',
      proofMobile: 'Optimizado para teléfonos',
      proofSpeed: 'Carga rápida sin demoras',
      proofDirect: 'Atención directa al +53 54956111',
      badgeTitle: 'Sitios Web con Identidad Única',
      badgeResponsive: '100% Responsivo',
      badgeDesc:
        'Diseñado para visualizarse con fluidez en Android, iPhone, tabletas y ordenadores portátiles o de escritorio.',
    },
    services: {
      kicker: 'Servicios Especializados',
      kickerSub: 'Desarrollo Web Integral',
      title: 'Soluciones a tu medida: desde tu marca personal hasta tu empresa',
      description:
        'Cada proyecto es desarrollado con atención meticulosa a la velocidad, la elegancia visual y la facilidad con la que tus clientes pueden comunicarse directamente con tu WhatsApp.',
      mostPopular: 'Más Solicitado',
      includesTitle: '¿Qué incluye?',
      items: {
        personal: {
          title: 'Páginas Web Personales & Portafolios',
          target: 'Profesionales, Consultores, Médicos, Artistas y Creadores de Contenido',
          description:
            'Construye una presencia digital impecable que hable por tu experiencia. Un sitio diseñado a la medida de tu identidad profesional que destaque tus trabajos, servicios y trayectoria.',
          features: [
            'Presentación personal y biografía profesional',
            'Galería de proyectos o casos de éxito',
            'Logo digital e icono de página (Favicon) personalizado',
            'Currículum interactivo descargable en PDF',
            'Integración directa con WhatsApp y redes sociales',
            'Formulario de contacto y agenda de reuniones',
          ],
          buttonText: 'Cotizar Web Personal',
          whatsappMessage:
            '¡Hola! Me interesa solicitar una cotización para una página web personal (portafolio / currículum / marca personal).',
        },
        corporate: {
          title: 'Páginas Web Empresariales & Corporativas',
          target: 'Pymes, Empresas, Agencias, Talleres, Negocios Locales y Firmas Comerciales',
          description:
            'Eleva la credibilidad de tu negocio con una plataforma corporativa robusta. Diseñada para generar confianza en clientes potenciales y presentar tu catálogo de productos o servicios con claridad.',
          features: [
            'Estructura multipágina: Inicio, Nosotros, Servicios y Contacto',
            'Logotipo optimizado, favicon para navegador y paleta de marca',
            'Catálogo digital interactivo de productos o servicios',
            'Botones de cotización directa por WhatsApp por producto',
            'Mapa interactivo y ubicación de tu local o sucursal',
            'Optimización de posicionamiento local y Google Search',
          ],
          buttonText: 'Cotizar Web Empresarial',
          whatsappMessage:
            '¡Hola! Deseo cotizar el desarrollo de una página web empresarial / corporativa para mi negocio.',
        },
        landing: {
          title: 'Landing Pages de Alta Conversión',
          target: 'Lanzamientos, Promociones Especiales y Campañas Publicitarias',
          description:
            'Páginas de aterrizaje de una sola sección optimizadas para un único objetivo: convertir visitantes en contactos directos de WhatsApp y ventas inmediatas.',
          features: [
            'Estructura persuasiva enfocada en la acción inmediata',
            'Carga ultrarrápida (menos de 1.5 segundos)',
            'Botones fijos y flotantes de WhatsApp para respuesta rápida',
            'Presentación de ofertas exclusivas y testimonios reales',
          ],
          buttonText: 'Cotizar Landing Page',
          whatsappMessage:
            '¡Hola! Quisiera información y presupuesto para una Landing Page optimizada para ventas.',
        },
        maintenance: {
          title: 'Rediseño, Optimización & Mantenimiento',
          target: 'Sitios existentes que necesitan verse modernos o cargar velozmente',
          description:
            '¿Tienes una página antigua o que no se ve bien en teléfonos móviles? Modernizo tu código, mejoro su velocidad y adapto el diseño a los estándares actuales.',
          features: [
            'Adaptación responsiva 100% móvil',
            'Mejora drástica en tiempos de carga y rendimiento',
            'Actualización estética con tipografía e imágenes modernas',
            'Soporte técnico continuo y actualizaciones de contenido',
          ],
          buttonText: 'Consultar Rediseño',
          whatsappMessage:
            '¡Hola! Me gustaría cotizar el rediseño y modernización de mi página web actual.',
        },
      },
    },
    calculator: {
      kicker: 'Herramienta Interactiva',
      kickerSub: 'Sin Compromiso',
      title: 'Configura y cotiza tu página web en segundos',
      description:
        'Personaliza el tipo de sitio, la cantidad de páginas y las funciones clave que necesitas. Luego envíame tu selección directa a WhatsApp con un solo clic.',
      step1Title: '1. Selecciona el tipo de sitio web',
      types: {
        corporate: { label: 'Empresarial / Pymes', desc: 'Para empresas y negocios comerciales' },
        personal: { label: 'Personal / Portafolio', desc: 'Para marcas personales y profesionales' },
        landing: { label: 'Landing Page', desc: 'Para campañas y ventas inmediatas' },
        catalog: { label: 'Catálogo de Productos', desc: 'Presentación interactiva de catálogo' },
      },
      step2Title: '2. Alcance y estructura de contenido',
      scopes: {
        onepage: { label: 'One-Page', pages: '1 Página continua' },
        standard: { label: 'Estándar', pages: '3 a 5 Páginas' },
        extended: { label: 'Extendido', pages: '6 a 10 Páginas' },
      },
      step3Title: '3. Funcionalidades adicionales recomendadas',
      extras: {
        brand_identity: {
          name: 'Diseño de Logotipo & Icono de Página (Favicon)',
          desc: 'Emblema vectorial y el icono que se muestra en la pestaña del navegador',
        },
        whatsapp_direct: {
          name: 'Botón Flotante y Enlaces Directos a WhatsApp',
          desc: 'Llamadas a la acción inteligentes configuradas en cada sección',
        },
        mobile_first: {
          name: 'Diseño 100% Adaptable a Móviles (Mobile-First)',
          desc: 'Pruebas rigurosas en pantallas de iPhone y dispositivos Android',
        },
        seo_optimization: {
          name: 'Optimización SEO Básica para Google',
          desc: 'Estructura semántica, meta descripciones y OpenGraph para redes',
        },
        domain_hosting: {
          name: 'Asesoría y Configuración de Dominio & Hosting',
          desc: 'Te ayudo a configurar tu nombre de dominio y servidor seguro',
        },
        catalog_filter: {
          name: 'Catálogo de Productos o Servicios con Filtros',
          desc: 'Buscador y visualización ordenada por categorías',
        },
        custom_form: {
          name: 'Formulario con Envío Directo a tu WhatsApp',
          desc: 'Los clientes llenan sus datos y te llegan redactados a tu chat',
        },
      },
      summaryTitle: 'Resumen de tu Cotización',
      summaryBrand: 'Batista Studio',
      typeLabel: 'Tipo de Sitio Web',
      scopeLabel: 'Estructura & Páginas',
      extrasLabel: 'Funcionalidades Seleccionadas',
      extrasCount: 'componentes seleccionados',
      deliveryTimeLabel: 'Entrega estimada:',
      daysUnit: 'días hábiles',
      guaranteeText: 'Atención directa y personalizada con el desarrollador al +53 54956111. Sin intermediarios.',
      ctaWhatsapp: 'Enviar esta Cotización por WhatsApp',
      ctaFootnote: 'Abre WhatsApp automáticamente con los detalles seleccionados.',
      whatsappMsgIntro: '¡Hola! Acabo de configurar mi proyecto en tu sitio web:',
      whatsappMsgType: 'Tipo de Proyecto:',
      whatsappMsgScope: 'Estructura:',
      whatsappMsgDelivery: 'Tiempo de entrega aproximado:',
      whatsappMsgExtras: 'Funcionalidades elegidas:',
      whatsappMsgOutro: '¿Podrías darme la cotización definitiva y detalles para iniciar? ¡Gracias!',
    },
    showcase: {
      kicker: 'Muestrario de Trabajos',
      kickerSub: 'Casos Reales',
      title: 'Diseños modernos pensados para convertir',
      description:
        'Explora ejemplos de páginas web diseñadas a medida, con navegación intuitiva en smartphones y ordenadores.',
      filterAll: 'Todos',
      filterCorporate: 'Empresariales',
      filterPersonal: 'Personales',
      ctaProject: 'Pedir un diseño similar a este por WhatsApp',
      projects: {
        aurora: {
          categoryLabel: 'Empresarial & Corporativo',
          title: 'Portal Corporativo B2B con Catálogo Integrado',
          client: 'Grupo Industrial & Consultoría Empresarial',
          description:
            'Diseño minimalista y limpio enfocado en transmitir solidez corporativa, presentación de cartera de servicios y sistema de captación de leads comerciales con enlace directo a WhatsApp.',
          stats: '100% Móvil · Carga <1.2s · Catálogo Digital',
          features: [
            'Estructura corporativa multi-sección',
            'Llamadas a la acción estratégicas',
            'Optimización visual en pantallas Retina',
          ],
          whatsappMessage:
            '¡Hola! Vi el proyecto de Portal Corporativo en tu web y me gustaría un diseño similar para mi empresa.',
        },
        eliza: {
          categoryLabel: 'Personal & Marca Profesional',
          title: 'Portafolio Creativo & Marca Personal',
          client: 'Fotógrafa & Directora de Arte',
          description:
            'Página de presentación personal con galería editorial en alta definición, biografía destacada, enlace a redes y botón de contacto para contrataciones inmediatas.',
          stats: 'Responsive Touch · Tipografía Editorial · Contacto 1-Clic',
          features: [
            'Galería fotográfica con carga diferida',
            'Descarga de PDF / Curriculum vitae',
            'Diseñado para interacción táctil en smartphone',
          ],
          whatsappMessage:
            '¡Hola! Me encantó el diseño de marca personal y portafolio que tienes en tu web. Quisiera cotizar uno similar para mis servicios.',
        },
      },
    },
    whyUs: {
      kicker: 'Ventajas Competitivas',
      kickerSub: 'Calidad Superior',
      title: '¿Por qué una página web hecha a la medida de tu negocio?',
      description:
        'Una presencia digital descuidada ahuyenta clientes. Un sitio moderno, rápido y conectado a WhatsApp multiplica la confianza y las consultas diarias.',
      benefits: [
        {
          title: 'Estructura 100% Responsiva para Móviles',
          description:
            'Más del 85% de las visitas provienen de teléfonos móviles. Tu sitio se verá impecable en Android, iPhone, tablets y monitores grandes con navegación táctil fluida.',
        },
        {
          title: 'Conexión Directa a tu WhatsApp',
          description:
            'Cada sección cuenta con llamadas a la acción que abren WhatsApp con un solo toque, enviándote un mensaje personalizado para cerrar tratos rápidamente.',
        },
        {
          title: 'Carga Ultrarrápida & Código Optimizado',
          description:
            'Desarrollado con estándares web modernos y ligeros que aseguran aperturas instantáneas, ideal incluso para conexiones con cobertura de datos limitada.',
        },
        {
          title: 'Diseño Minimalista & Profesional',
          description:
            'Sin elementos recargados ni desorden visual. Estética limpia, tipografía legible y colores que proyectan máxima confianza corporativa y personal.',
        },
        {
          title: 'Trato Directo sin Intermediarios',
          description:
            'Conversas y coordinas directamente conmigo al +53 54956111. Atención cercana, seguimiento paso a paso y entrega puntual garantizada.',
        },
        {
          title: 'SEO & Visibilidad en Google',
          description:
            'Estructura de código pensada para que los motores de búsqueda encuentren y posicionen tu marca o negocio cuando busquen tus servicios.',
        },
      ],
    },
    plans: {
      kicker: 'Planes de Desarrollo',
      kickerSub: 'Inversión Transparente',
      title: 'Elige el plan ideal para tu proyecto web',
      description:
        'Sin costos ocultos ni complicaciones técnicas. Trabajo de forma directa contigo desde el primer bosquejo hasta la publicación.',
      recommendedBadge: 'Recomendado para Empresas',
      includesTitle: 'Incluye:',
      personal: {
        name: 'Plan Personal',
        tagline: 'Ideal para profesionales, médicos, consultores, fotógrafos y marcas personales.',
        deliveryTime: 'Entrega en 3 a 5 días',
        features: [
          'Diseño moderno 100% responsivo (Móvil y Escritorio)',
          'Hasta 3 secciones o páginas fluidas',
          'Presentación de biografía y trayectoria profesional',
          'Logotipo digital optimizado e icono de página (Favicon)',
          'Galería de fotos o proyectos realizados',
          'Botones de contacto directo a tu WhatsApp (+53 54956111)',
          'Iconos enlazados a tus redes sociales',
          'Alojamiento y código optimizado de carga rápida',
        ],
        buttonText: 'Elegir Plan Personal',
        whatsappMessage:
          '¡Hola! Me gustaría contratar el *Plan Personal* para mi sitio web. ¿Qué pasos seguimos para comenzar?',
      },
      corporate: {
        name: 'Plan Empresarial Pro',
        tagline: 'La solución definitiva para pymes, negocios locales y empresas consolidadas.',
        deliveryTime: 'Entrega en 5 a 7 días',
        features: [
          'Estructura corporativa de 4 a 6 páginas independientes',
          'Páginas: Inicio, Sobre Nosotros, Servicios, Catálogo y Contacto',
          'Identidad de marca: Logotipo corporativo, icono favicon y diseño visual',
          'Catálogo de servicios o productos con botón de consulta WhatsApp por ítem',
          'Formulario de contacto interactivo con envío directo a tu chat',
          'Mapa interactivo con la ubicación de tu empresa',
          'Optimización SEO completa para aparecer en Google Search',
          'Soporte técnico y asesoría personalizada directa',
        ],
        buttonText: 'Elegir Plan Empresarial',
        whatsappMessage:
          '¡Hola! Me interesa contratar el *Plan Empresarial Pro* para mi negocio. Quisiera coordinar los detalles.',
      },
      catalog: {
        name: 'Plan a Medida / Catálogo',
        tagline: 'Para negocios con alta variedad de productos, menús interactivos o requerimientos únicos.',
        deliveryTime: 'Entrega en 7 a 10 días',
        features: [
          'Estructura web personalizada sin límite estricto de secciones',
          'Catálogo digital interactivo con categorías y filtros',
          'Generador de pedidos directos por WhatsApp',
          'Integración multilingüe (Español / Inglés / Francés) si se requiere',
          'Optimización de máxima velocidad en conexiones lentas',
          'Capacitación para actualizar contenidos y fotos',
          'Soporte prioritario y garantía extendida',
        ],
        buttonText: 'Cotizar Plan a Medida',
        whatsappMessage:
          '¡Hola! Tengo requerimientos específicos y me gustaría cotizar el *Plan a Medida / Catálogo*.',
      },
    },
    contact: {
      kicker: 'Canales Directos',
      kickerSub: 'Atención Personalizada',
      title: 'Iniciemos tu proyecto web hoy mismo',
      description:
        'Escríbeme directamente por WhatsApp para resolver tus dudas, asesorarte sobre la mejor estructura para tu negocio y brindarte una cotización a medida.',
      chatTitle: 'Chat WhatsApp',
      openChat: 'Abrir Chat',
      callTitle: 'Llamada Directa',
      callAction: 'Llamar',
      hoursTitle: 'Horario de atención rápida: Lunes a Sábado, 8:00 AM - 9:00 PM',
      hoursDesc:
        'Respuesta en menos de 1 hora. Si estás en Cuba o en el exterior, podemos coordinar por llamada o mensajes de voz de WhatsApp.',
      formTitle: 'Formulario Directo a WhatsApp',
      formSub: 'Sin registro previo',
      nameLabel: 'Tu Nombre o Empresa *',
      namePlaceholder: 'Ej. Carlos Martínez / Taller AutoPro',
      phoneLabel: 'Tu Teléfono o WhatsApp',
      phonePlaceholder: 'Ej. +53 5xxxxxxx',
      typeLabel: 'Tipo de Proyecto',
      typeOptions: [
        'Página Web Empresarial / Corporativa',
        'Página Web Personal / Portafolio',
        'Landing Page de Ventas',
        'Catálogo Digital de Productos',
        'Rediseño / Optimización de Web Existente',
        'Otro tipo de proyecto',
      ],
      detailsLabel: 'Cuéntame brevemente qué necesitas *',
      detailsPlaceholder:
        'Ej. Necesito una página web para mi negocio con catálogo de servicios, fotos, información de contacto y botón para que me escriban a WhatsApp...',
      submitButton: 'Enviar Consulta a WhatsApp',
      copyButton: 'Copiar',
      copiedButton: 'Copiado',
      successMessage:
        'Se abrió WhatsApp con tu mensaje redactado listo para enviar. ¡Te responderé a la brevedad!',
    },
    faq: {
      kicker: 'Dudas Habituales',
      kickerSub: 'Transparencia Total',
      title: 'Preguntas Frecuentes',
      description:
        'Todo lo que necesitas saber antes de iniciar el diseño y desarrollo de tu página web.',
      items: [
        {
          question: '¿Cuánto tiempo tarda la creación y entrega de mi página web?',
          answer:
            'Para páginas personales o landing pages el tiempo habitual es de 3 a 5 días hábiles. Para sitios empresariales o corporativos con catálogo y múltiples secciones, suele demorar entre 5 y 8 días hábiles tras recibir los textos y fotos de tu proyecto.',
        },
        {
          question: '¿Mi página web funcionará perfectamente en teléfonos móviles?',
          answer:
            'Totalmente. Aplico una arquitectura 100% responsiva (Mobile-First). Tu web se adapta de manera automática y fluida a cualquier tamaño de pantalla, ya sea un iPhone, smartphone Android, tableta o computadora de escritorio.',
        },
        {
          question: '¿Cómo funciona la integración con WhatsApp?',
          answer:
            'Tu página incluye botones estratégicos (tanto fijos como flotantes y en cada producto o servicio). Cuando un visitante hace clic, se abre automáticamente la app de WhatsApp con un mensaje redactado con la consulta exacta, para que no pierdas ningún cliente potencial.',
        },
        {
          question: '¿Qué información necesito facilitarte para comenzar?',
          answer:
            'Lo básico: el nombre de tu marca o empresa, una breve descripción de tus servicios, tus datos de contacto y, si tienes, tu logotipo e imágenes. Si no tienes logotipo o fotos profesionales, puedo asesorarte y proporcionarte opciones visuales modernas.',
        },
        {
          question: '¿Puedo solicitar cambios o agregar más páginas después?',
          answer:
            'Sí, por supuesto. Todos los sitios se diseñan de manera modular y escalable para que podamos añadir nuevas secciones, productos o funciones en el futuro sin tener que rehacer la web desde cero.',
        },
        {
          question: '¿Cómo coordinamos los detalles y el pago del servicio?',
          answer:
            'Puedes escribirme directamente a WhatsApp al +53 54956111. Acordamos los detalles del proyecto, establecemos un anticipo inicial para comenzar el desarrollo y el saldo final se abona cuando revises tu página web completamente terminada y a tu entera satisfacción.',
        },
        {
          question: '¿La página web final puede ser visitada desde Cuba sin necesidad de VPN?',
          answer:
            'Sí, 100%. Las páginas web que entrego son sitios web estáticos ultra optimizados listos para alojarse en redes CDN como Cloudflare Pages, GitHub Pages o cualquier hosting web estándar. Estas plataformas están completamente abiertas y accesibles desde Cuba (ETECSA, datos 4G y WiFi Nauta) sin requerir VPN, cargando a máxima velocidad tanto en Cuba como en el resto del mundo.',
        },
      ],
      supportQuestion: '¿Tienes alguna otra duda o consulta específica sobre tu proyecto?',
      supportButton: 'Pregúntame directo por WhatsApp (+53 54956111)',
    },
    footer: {
      description:
        'Diseño y creación de páginas web modernas, responsivas y de alto impacto para proyectos personales y empresariales. Desarrolladas con código limpio y conexión directa a WhatsApp.',
      contactOfficial: 'Contacto oficial:',
      navTitle: 'Navegación',
      channelsTitle: 'Atención Directa',
      internationalNote: 'Disponible para proyectos en Cuba e Internacionales',
      copyright: 'Batista · Web Studio. Todos los derechos reservados.',
      responsiveNote: 'Diseño Web Moderno & Responsivo',
    },
    floating: {
      greeting: '¿En qué podemos ayudarte hoy? Haz clic en tu opción y conversamos por WhatsApp:',
      optionCorporate: '💼 Web Empresarial / Corporativa',
      optionPersonal: '👤 Web Personal / Portafolio',
      optionGeneral: '💬 Consulta General o Cotización',
      responseDirect: 'Respuesta directa al +53 54956111',
      buttonLabel: 'Chatear al WhatsApp',
    },
  },

  en: {
    nav: {
      services: 'Services',
      projects: 'Projects',
      calculator: 'Price Estimator',
      plans: 'Plans',
      faq: 'FAQ',
      contact: 'Contact',
      whatsappDirect: 'Direct WhatsApp',
      interfaceTheme: 'Interface theme',
      interfaceLanguage: 'Language',
    },
    hero: {
      kicker: 'Professional Web Design & Development',
      kickerSub: 'Personal & Enterprise',
      titlePart1: 'Your modern, sleek, and ',
      titleGradient: '100% responsive website',
      description:
        'I build high-performance websites for personal brands, independent professionals, and established companies. Clean layouts, ultra-fast loading, and direct WhatsApp integration to turn visitors into clients from day one.',
      ctaWhatsapp: 'Get a Quote via WhatsApp',
      ctaCalculator: 'Calculate Estimate',
      proofMobile: 'Optimized for smartphones',
      proofSpeed: 'Ultra-fast loading speed',
      proofDirect: 'Direct support at +53 54956111',
      badgeTitle: 'Unique Brand Websites',
      badgeResponsive: '100% Responsive',
      badgeDesc:
        'Crafted to look stunning and function smoothly on Android, iPhone, tablets, and desktop computers.',
    },
    services: {
      kicker: 'Specialized Services',
      kickerSub: 'Full-Stack Web Solutions',
      title: 'Custom solutions: from your personal brand to your enterprise',
      description:
        'Every project is engineered with meticulous attention to speed, visual elegance, and the seamless ability for clients to reach you directly on WhatsApp.',
      mostPopular: 'Most Popular',
      includesTitle: "What's included?",
      items: {
        personal: {
          title: 'Personal Websites & Portfolios',
          target: 'Professionals, Consultants, Doctors, Artists & Content Creators',
          description:
            'Build an impeccable digital presence that reflects your expertise. A custom website tailored to your professional brand to showcase your work, services, and achievements.',
          features: [
            'Personal introduction & professional biography',
            'Project showcase gallery & case studies',
            'Digital logo & custom website icon (Favicon)',
            'Interactive downloadable PDF curriculum vitae',
            'Direct integration with WhatsApp & social networks',
            'Contact form and meeting scheduling link',
          ],
          buttonText: 'Quote Personal Website',
          whatsappMessage:
            'Hello! I would like to request a quote for a personal website (portfolio / resume / personal brand).',
        },
        corporate: {
          title: 'Corporate & Business Websites',
          target: 'SMBs, Enterprises, Agencies, Local Businesses & Commercial Firms',
          description:
            'Elevate your business credibility with a solid corporate web platform. Designed to generate trust among prospective clients and showcase your products or services clearly.',
          features: [
            'Multi-page structure: Home, About Us, Services & Contact',
            'Optimized logo, browser favicon & brand color palette',
            'Interactive digital product or service catalog',
            'Direct WhatsApp quote buttons for each item',
            'Interactive map with branch/office location',
            'Local SEO & Google Search optimization',
          ],
          buttonText: 'Quote Business Website',
          whatsappMessage:
            'Hello! I would like to get a quote for developing a corporate / business website for my company.',
        },
        landing: {
          title: 'High-Conversion Landing Pages',
          target: 'Product Launches, Special Offers & Advertising Campaigns',
          description:
            'Single-page websites optimized for one single purpose: turning visitors into direct WhatsApp contacts and immediate sales.',
          features: [
            'Persuasive layout focused on immediate customer action',
            'Ultra-fast load time (under 1.5 seconds)',
            'Fixed and floating WhatsApp action buttons for quick replies',
            'Exclusive offer presentation and genuine customer testimonials',
          ],
          buttonText: 'Quote Landing Page',
          whatsappMessage:
            'Hello! I would like information and pricing for a high-converting sales Landing Page.',
        },
        maintenance: {
          title: 'Redesign, Optimization & Maintenance',
          target: 'Existing websites that need a modern look or faster loading',
          description:
            'Do you have an outdated site that looks broken on phones? I modernize your codebase, boost performance, and align design with modern standards.',
          features: [
            '100% mobile responsive redesign',
            'Dramatic improvement in load times and performance',
            'Aesthetic revamp with modern typography and graphics',
            'Continuous technical support and content updates',
          ],
          buttonText: 'Inquire About Redesign',
          whatsappMessage:
            'Hello! I would like to get a quote to redesign and modernize my current website.',
        },
      },
    },
    calculator: {
      kicker: 'Interactive Tool',
      kickerSub: 'No Commitment',
      title: 'Configure and estimate your website in seconds',
      description:
        'Customize the website type, number of pages, and essential features you need. Then send your exact selection directly to WhatsApp with one click.',
      step1Title: '1. Select website type',
      types: {
        corporate: { label: 'Corporate / SMB', desc: 'For businesses and commercial enterprises' },
        personal: { label: 'Personal / Portfolio', desc: 'For personal branding and professionals' },
        landing: { label: 'Landing Page', desc: 'For campaigns and immediate sales' },
        catalog: { label: 'Product Catalog', desc: 'Interactive showcase for product lines' },
      },
      step2Title: '2. Scope and content structure',
      scopes: {
        onepage: { label: 'One-Page', pages: '1 Continuous page' },
        standard: { label: 'Standard', pages: '3 to 5 Pages' },
        extended: { label: 'Extended', pages: '6 to 10 Pages' },
      },
      step3Title: '3. Recommended extra features',
      extras: {
        brand_identity: {
          name: 'Logo Design & Custom Website Icon (Favicon)',
          desc: 'Vector brand insignia and the icon displayed in the browser tab',
        },
        whatsapp_direct: {
          name: 'Floating Button & Direct WhatsApp Links',
          desc: 'Smart call-to-action buttons configured in each section',
        },
        mobile_first: {
          name: '100% Mobile-First Responsive Design',
          desc: 'Rigorous testing on iPhone and Android screen viewports',
        },
        seo_optimization: {
          name: 'Basic Google SEO Optimization',
          desc: 'Semantic HTML markup, meta tags, and OpenGraph social sharing preview',
        },
        domain_hosting: {
          name: 'Domain & Hosting Setup Assistance',
          desc: 'Assistance setting up your custom domain and secure hosting server',
        },
        catalog_filter: {
          name: 'Filtered Product or Service Catalog',
          desc: 'Search bar and categorized visual display for your offerings',
        },
        custom_form: {
          name: 'Custom Form with Direct WhatsApp Dispatch',
          desc: 'Clients fill in their requirements and you receive a formatted chat message',
        },
      },
      summaryTitle: 'Your Project Estimate',
      summaryBrand: 'Batista Studio',
      typeLabel: 'Website Type',
      scopeLabel: 'Structure & Pages',
      extrasLabel: 'Selected Features',
      extrasCount: 'features selected',
      deliveryTimeLabel: 'Estimated delivery:',
      daysUnit: 'business days',
      guaranteeText: 'Direct one-on-one communication with the developer at +53 54956111. No intermediaries.',
      ctaWhatsapp: 'Send this Estimate via WhatsApp',
      ctaFootnote: 'Opens WhatsApp automatically with your selected project specifications.',
      whatsappMsgIntro: 'Hello! I just configured my website project on your page:',
      whatsappMsgType: 'Project Type:',
      whatsappMsgScope: 'Structure:',
      whatsappMsgDelivery: 'Estimated delivery time:',
      whatsappMsgExtras: 'Selected features:',
      whatsappMsgOutro: 'Could you give me the definitive quote and details to get started? Thank you!',
    },
    showcase: {
      kicker: 'Portfolio Showcase',
      kickerSub: 'Real Case Studies',
      title: 'Modern designs crafted to convert',
      description:
        'Explore examples of bespoke websites featuring intuitive touch navigation on smartphones and desktop computers.',
      filterAll: 'All',
      filterCorporate: 'Corporate',
      filterPersonal: 'Personal',
      ctaProject: 'Request a similar design via WhatsApp',
      projects: {
        aurora: {
          categoryLabel: 'Enterprise & Corporate',
          title: 'B2B Corporate Portal with Integrated Catalog',
          client: 'Industrial Group & Management Consulting',
          description:
            'Clean minimalist design tailored to project corporate authority, showcase service lines, and capture commercial sales leads with direct WhatsApp routing.',
          stats: '100% Mobile · <1.2s Load · Digital Catalog',
          features: [
            'Multi-section corporate architecture',
            'Strategic call-to-action touchpoints',
            'Crisp visual rendering on Retina displays',
          ],
          whatsappMessage:
            'Hello! I saw the Corporate Portal project on your site and would like a similar design for my company.',
        },
        eliza: {
          categoryLabel: 'Personal & Professional Brand',
          title: 'Creative Portfolio & Personal Branding',
          client: 'Photographer & Art Director',
          description:
            'Editorial presentation website with high-definition photo gallery, prominent bio, social links, and one-tap booking contact button.',
          stats: 'Responsive Touch · Editorial Typography · 1-Click Contact',
          features: [
            'Lazy-loaded high-resolution image gallery',
            'Downloadable PDF resume / curriculum vitae',
            'Engineered for natural touch ergonomics on mobile',
          ],
          whatsappMessage:
            'Hello! I loved the personal brand & portfolio showcase on your site. I would like to get a quote for a similar design.',
        },
      },
    },
    whyUs: {
      kicker: 'Key Advantages',
      kickerSub: 'Premium Quality',
      title: 'Why choose a tailored website for your business?',
      description:
        'A sloppy digital presence turns potential clients away. A fast, modern site connected to WhatsApp builds immediate trust and increases daily inquiries.',
      benefits: [
        {
          title: '100% Mobile Responsive Architecture',
          description:
            'Over 85% of visitors browse from smartphones. Your website will look flawless on Android, iPhone, tablets, and large displays with smooth touch navigation.',
        },
        {
          title: 'Direct Instant WhatsApp Connection',
          description:
            'Each section features clear call-to-action buttons that launch WhatsApp with a pre-filled message to close deals without friction.',
        },
        {
          title: 'Blazing Fast Speed & Clean Codebase',
          description:
            'Built with lightweight modern web standards ensuring instant opening times, even on limited or moderate mobile data connections.',
        },
        {
          title: 'Minimalist & Sophisticated Aesthetic',
          description:
            'No cluttered gimmicks. Clean layout, legible typography, and colors that project maximum personal and corporate authority.',
        },
        {
          title: 'Direct Communication Without Middlemen',
          description:
            'You speak and coordinate directly with me at +53 54956111. Close attention, transparent milestone updates, and on-time delivery.',
        },
        {
          title: 'SEO & Google Search Visibility',
          description:
            'Clean semantic markup designed to help search engines discover and rank your business when clients look for your services.',
        },
      ],
    },
    plans: {
      kicker: 'Development Plans',
      kickerSub: 'Transparent Pricing',
      title: 'Choose the ideal plan for your web project',
      description:
        'No hidden costs or technical hassle. I work directly with you from the initial mockup to publication.',
      recommendedBadge: 'Recommended for Businesses',
      includesTitle: 'Includes:',
      personal: {
        name: 'Personal Plan',
        tagline: 'Ideal for independent professionals, doctors, consultants, artists, and personal brands.',
        deliveryTime: 'Delivery in 3 to 5 business days',
        features: [
          'Modern 100% responsive design (Mobile & Desktop)',
          'Up to 3 fluid sections or pages',
          'Professional biography and career achievements',
          'Optimized digital logo & custom browser favicon',
          'Photo gallery or portfolio project showcase',
          'Direct contact buttons to your WhatsApp (+53 54956111)',
          'Icons linked to your social media profiles',
          'Fast-loading code and secure hosting setup',
        ],
        buttonText: 'Choose Personal Plan',
        whatsappMessage:
          'Hello! I would like to get started with the *Personal Plan* for my website. What are the next steps?',
      },
      corporate: {
        name: 'Corporate Pro Plan',
        tagline: 'The complete solution for SMBs, local businesses, and established commercial companies.',
        deliveryTime: 'Delivery in 5 to 7 business days',
        features: [
          'Corporate structure with 4 to 6 dedicated pages',
          'Pages: Home, About Us, Services, Catalog & Contact',
          'Brand identity: Corporate logo, favicon icon, and color theme',
          'Interactive service/product catalog with WhatsApp quote button per item',
          'Interactive contact form with direct chat routing',
          'Interactive Google Maps location of your company',
          'Full on-page SEO optimization for Google Search',
          'Continuous technical support and direct developer consulting',
        ],
        buttonText: 'Choose Corporate Plan',
        whatsappMessage:
          'Hello! I am interested in hiring the *Corporate Pro Plan* for my business. I would like to coordinate details.',
      },
      catalog: {
        name: 'Custom / Catalog Plan',
        tagline: 'For businesses with extensive product lines, interactive menus, or bespoke requirements.',
        deliveryTime: 'Delivery in 7 to 10 business days',
        features: [
          'Bespoke web architecture without rigid section limits',
          'Interactive digital catalog with categories & search filters',
          'Direct WhatsApp order generator',
          'Multilingual support (Spanish / English / French) if needed',
          'Maximum performance optimization for low-bandwidth connections',
          'Training on updating images, prices, and text content',
          'Priority support and extended maintenance warranty',
        ],
        buttonText: 'Quote Custom Plan',
        whatsappMessage:
          'Hello! I have specific requirements and would like to quote the *Custom / Catalog Plan*.',
      },
    },
    contact: {
      kicker: 'Direct Channels',
      kickerSub: 'Personalized Support',
      title: "Let's start your web project today",
      description:
        'Message me directly on WhatsApp to resolve your questions, determine the best architecture for your business, and receive a tailored quote.',
      chatTitle: 'WhatsApp Chat',
      openChat: 'Open Chat',
      callTitle: 'Direct Phone Call',
      callAction: 'Call',
      hoursTitle: 'Quick response hours: Mon - Sat, 8:00 AM - 9:00 PM',
      hoursDesc:
        'Response in under 1 hour. Whether you are in Cuba or international, we can coordinate via phone or WhatsApp voice notes.',
      formTitle: 'Direct WhatsApp Form',
      formSub: 'No registration required',
      nameLabel: 'Your Name or Company *',
      namePlaceholder: 'e.g., Alex Johnson / AutoPro Services',
      phoneLabel: 'Your Phone or WhatsApp',
      phonePlaceholder: 'e.g., +1 555-0199',
      typeLabel: 'Project Type',
      typeOptions: [
        'Corporate / Business Website',
        'Personal Website / Portfolio',
        'Sales Landing Page',
        'Digital Product Catalog',
        'Website Redesign / Optimization',
        'Other custom project',
      ],
      detailsLabel: 'Briefly tell me what you need *',
      detailsPlaceholder:
        'e.g., I need a website for my business with a catalog of services, photo gallery, contact details, and a button for clients to reach me on WhatsApp...',
      submitButton: 'Send Inquiry to WhatsApp',
      copyButton: 'Copy',
      copiedButton: 'Copied',
      successMessage:
        'WhatsApp was opened with your pre-formatted message ready to send. I will reply right away!',
    },
    faq: {
      kicker: 'Common Questions',
      kickerSub: 'Total Transparency',
      title: 'Frequently Asked Questions',
      description:
        'Everything you need to know before starting the design and development of your website.',
      items: [
        {
          question: 'How long does it take to create and deliver my website?',
          answer:
            'Personal websites or landing pages usually take 3 to 5 business days. Corporate sites with catalogs and multiple pages typically take 5 to 8 business days once project text and photos are received.',
        },
        {
          question: 'Will my website work smoothly on mobile phones?',
          answer:
            '100%. I use a Mobile-First responsive architecture. Your site automatically adapts with natural touch ergonomics to iPhones, Android smartphones, tablets, and desktop displays.',
        },
        {
          question: 'How does the WhatsApp integration work?',
          answer:
            'Your site includes strategic action buttons (fixed, floating, and on each product/service). When a visitor taps, WhatsApp automatically opens with a pre-filled inquiry so you never miss a lead.',
        },
        {
          question: 'What information do I need to provide to get started?',
          answer:
            'Just the essentials: your business or brand name, a brief overview of your services, contact details, and any logos or photos you have. If you do not have a logo or professional photos, I can assist you with modern digital assets.',
        },
        {
          question: 'Can I request updates or add more pages later?',
          answer:
            'Yes, absolutely. All websites are built modularly so we can seamlessly add new sections, products, or features down the road without starting from scratch.',
        },
        {
          question: 'How are milestones and payments handled?',
          answer:
            'You can reach me directly on WhatsApp at +53 54956111. We agree on project specs, set an initial deposit to start development, and the remainder is paid once you review the completed website to your full satisfaction.',
        },
        {
          question: 'Can the finished website be accessed from Cuba without needing a VPN?',
          answer:
            'Yes, 100%. The delivered websites are lightweight, high-performance static builds ready to be hosted on global CDN networks such as Cloudflare Pages, GitHub Pages, or any standard web server. These providers are completely accessible from Cuba (ETECSA, 4G, and Wi-Fi Nauta) with zero VPN needed, loading at peak speed both in Cuba and worldwide.',
        },
      ],
      supportQuestion: 'Have a specific question about your project requirements?',
      supportButton: 'Ask me directly on WhatsApp (+53 54956111)',
    },
    footer: {
      description:
        'Design and development of modern, responsive, high-impact websites for personal and corporate projects. Crafted with clean code and direct WhatsApp connection.',
      contactOfficial: 'Official contact:',
      navTitle: 'Navigation',
      channelsTitle: 'Direct Support',
      internationalNote: 'Available for projects in Cuba and worldwide',
      copyright: 'Batista · Web Studio. All rights reserved.',
      responsiveNote: 'Modern & Responsive Web Design',
    },
    floating: {
      greeting: 'How can we help you today? Tap an option to chat on WhatsApp:',
      optionCorporate: '💼 Corporate / Business Website',
      optionPersonal: '👤 Personal Website / Portfolio',
      optionGeneral: '💬 General Inquiry or Quote',
      responseDirect: 'Direct reply at +53 54956111',
      buttonLabel: 'Chat on WhatsApp',
    },
  },

  fr: {
    nav: {
      services: 'Services',
      projects: 'Projets',
      calculator: 'Devis en ligne',
      plans: 'Forfaits',
      faq: 'FAQ',
      contact: 'Contact',
      whatsappDirect: 'WhatsApp Direct',
      interfaceTheme: "Thème de l'interface",
      interfaceLanguage: 'Langue',
    },
    hero: {
      kicker: 'Conception & Développement Web Professionnel',
      kickerSub: 'Personnel & Entreprise',
      titlePart1: 'Votre site web moderne, élégant et ',
      titleGradient: '100% responsive',
      description:
        'Je crée des sites web haute performance pour marques personnelles, indépendants et entreprises établies. Design soigné, chargement ultra-rapide et connexion directe avec votre WhatsApp pour transformer vos visiteurs en clients dès le premier jour.',
      ctaWhatsapp: 'Demander un devis sur WhatsApp',
      ctaCalculator: 'Estimer mon budget',
      proofMobile: 'Optimisé pour smartphones',
      proofSpeed: 'Chargement ultra-rapide',
      proofDirect: 'Contact direct au +53 54956111',
      badgeTitle: 'Sites Web à Identité Unique',
      badgeResponsive: '100% Responsive',
      badgeDesc:
        'Conçu pour une navigation fluide sur Android, iPhone, tablettes et ordinateurs portables ou fixes.',
    },
    services: {
      kicker: 'Services Spécialisés',
      kickerSub: 'Développement Web Intégral',
      title: 'Des solutions sur mesure : de votre marque personnelle à votre entreprise',
      description:
        'Chaque projet est développé avec une attention méticuleuse portée à la vitesse, à l’élégance visuelle et à la facilité avec laquelle vos clients peuvent vous contacter sur WhatsApp.',
      mostPopular: 'Le Plus Demandé',
      includesTitle: 'Ce qui est inclus :',
      items: {
        personal: {
          title: 'Sites Web Personnels & Portfolios',
          target: 'Professionnels, Consultants, Médecins, Artistes et Créateurs',
          description:
            'Construisez une présence numérique impeccable qui valorise votre expertise. Un site pensé sur mesure pour votre identité professionnelle mettant en valeur vos réalisations et votre parcours.',
          features: [
            'Présentation personnelle et biographie professionnelle',
            'Galerie de projets et études de cas',
            'Logo numérique et favicon de navigateur personnalisé',
            'Curriculum vitae interactif téléchargeable en PDF',
            'Intégration directe de WhatsApp et réseaux sociaux',
            'Formulaire de contact et prise de rendez-vous',
          ],
          buttonText: 'Devis Site Personnel',
          whatsappMessage:
            'Bonjour ! J’aimerais demander un devis pour un site web personnel (portfolio / CV / marque personnelle).',
        },
        corporate: {
          title: 'Sites Web d’Entreprise & Institutionnels',
          target: 'PME, Entreprises, Agences, Artisans et Sociétés Commerciales',
          description:
            'Renforcez la crédibilité de votre entreprise avec une plateforme professionnelle robuste. Conçue pour instaurer la confiance et présenter clairement vos produits et services.',
          features: [
            'Structure multi-pages : Accueil, À Propos, Services et Contact',
            'Logo optimisé, favicon et charte graphique de marque',
            'Catalogue numérique interactif de produits ou services',
            'Boutons de devis WhatsApp direct par article',
            'Carte interactive avec localisation de votre établissement',
            'Optimisation du référencement local et Google Search',
          ],
          buttonText: 'Devis Site Entreprise',
          whatsappMessage:
            'Bonjour ! Je souhaite obtenir un devis pour la création d’un site web d’entreprise / institutionnel.',
        },
        landing: {
          title: 'Landing Pages Haute Conversion',
          target: 'Lancements, Offres Spéciales et Campagnes Publicitaires',
          description:
            'Des pages de vente ciblées optimisées pour un objectif précis : convertir les visiteurs en contacts WhatsApp directs et ventes immédiates.',
          features: [
            'Structure persuasive axée sur le passage à l’action rapide',
            'Temps de chargement éclair (moins de 1,5 seconde)',
            'Boutons WhatsApp fixes et flottants pour une réponse immédiate',
            'Mise en valeur d’offres exclusives et témoignages clients',
          ],
          buttonText: 'Devis Landing Page',
          whatsappMessage:
            'Bonjour ! Je souhaite obtenir des informations et un devis pour une Landing Page de vente.',
        },
        maintenance: {
          title: 'Refonte, Optimisation & Maintenance',
          target: 'Sites existants nécessitant un coup de jeune ou plus de rapidité',
          description:
            'Votre site actuel est-il ancien ou mal adapté aux smartphones ? Je modernise votre code, améliore sa vitesse et aligne le design sur les standards actuels.',
          features: [
            'Refonte 100% responsive adaptée aux téléphones',
            'Amélioration spectaculaire de la vitesse de chargement',
            'Modernisation esthétique : typographies et visuels haut de gamme',
            'Support technique continu et mise à jour des contenus',
          ],
          buttonText: 'Demander une Refonte',
          whatsappMessage:
            'Bonjour ! J’aimerais obtenir un devis pour la refonte et la modernisation de mon site web actuel.',
        },
      },
    },
    calculator: {
      kicker: 'Outil Interactif',
      kickerSub: 'Sans Engagement',
      title: 'Configurez et estimez votre site web en quelques secondes',
      description:
        'Personnalisez le type de site, le nombre de pages et les fonctionnalités clés requises. Envoyez ensuite votre sélection directement sur WhatsApp en un clic.',
      step1Title: '1. Choisissez le type de site web',
      types: {
        corporate: { label: 'Entreprise / PME', desc: 'Pour sociétés et activités commerciales' },
        personal: { label: 'Personnel / Portfolio', desc: 'Pour indépendants et marque personnelle' },
        landing: { label: 'Landing Page', desc: 'Pour campagnes et ventes immédiates' },
        catalog: { label: 'Catalogue Produits', desc: 'Présentation interactive de catalogue' },
      },
      step2Title: '2. Envergure et structure du contenu',
      scopes: {
        onepage: { label: 'One-Page', pages: '1 Page continue fluide' },
        standard: { label: 'Standard', pages: '3 à 5 Pages' },
        extended: { label: 'Étendu', pages: '6 à 10 Pages' },
      },
      step3Title: '3. Fonctionnalités complémentaires recommandées',
      extras: {
        brand_identity: {
          name: 'Conception de Logo & Favicon Personnalisé',
          desc: 'Emblème vectoriel et icône affichée dans l’onglet du navigateur',
        },
        whatsapp_direct: {
          name: 'Bouton Flottant & Liens Directs WhatsApp',
          desc: 'Boutons d’action intelligents configurés sur chaque section',
        },
        mobile_first: {
          name: 'Conception 100% Mobile-First',
          desc: 'Tests rigoureux sur les écrans iPhone et appareils Android',
        },
        seo_optimization: {
          name: 'Optimisation SEO Fondamentale pour Google',
          desc: 'Balises sémantiques, méta-descriptions et OpenGraph pour réseaux',
        },
        domain_hosting: {
          name: 'Accompagnement Domaine & Hébergement',
          desc: 'Aide à la configuration de votre nom de domaine et serveur sécurisé',
        },
        catalog_filter: {
          name: 'Catalogue avec Recherche et Filtres',
          desc: 'Moteur de recherche et classement ordonné par catégories',
        },
        custom_form: {
          name: 'Formulaire avec Envoi Direct sur WhatsApp',
          desc: 'Les clients remplissent leurs coordonnées et vous recevez un message clair',
        },
      },
      summaryTitle: 'Récapitulatif de votre Devis',
      summaryBrand: 'Batista Studio',
      typeLabel: 'Type de Site Web',
      scopeLabel: 'Structure & Pages',
      extrasLabel: 'Fonctionnalités Choisies',
      extrasCount: 'options sélectionnées',
      deliveryTimeLabel: 'Délai de livraison estimé :',
      daysUnit: 'jours ouvrés',
      guaranteeText: 'Échange direct et personnalisé avec le développeur au +53 54956111. Aucun intermédiaire.',
      ctaWhatsapp: 'Envoyer cette Estimation sur WhatsApp',
      ctaFootnote: 'Ouvre automatiquement WhatsApp avec l’ensemble de vos critères choisis.',
      whatsappMsgIntro: 'Bonjour ! Je viens de configurer mon projet de site sur votre page :',
      whatsappMsgType: 'Type de Projet :',
      whatsappMsgScope: 'Structure :',
      whatsappMsgDelivery: 'Délai de livraison estimé :',
      whatsappMsgExtras: 'Fonctionnalités retenues :',
      whatsappMsgOutro: 'Pourriez-vous me transmettre le devis définitif et les étapes pour démarrer ? Merci !',
    },
    showcase: {
      kicker: 'Galerie de Réalisations',
      kickerSub: 'Cas Concrets',
      title: 'Des designs modernes conçus pour convertir',
      description:
        'Explorez des exemples de sites sur mesure avec une navigation tactile intuitive sur smartphones et ordinateurs.',
      filterAll: 'Tous',
      filterCorporate: 'Entreprises',
      filterPersonal: 'Personnels',
      ctaProject: 'Demander un design similaire sur WhatsApp',
      projects: {
        aurora: {
          categoryLabel: 'Entreprise & Institutionnel',
          title: 'Portail B2B avec Catalogue Produits Intégré',
          client: 'Groupe Industriel & Conseil en Management',
          description:
            'Design épuré et minimaliste pour asseoir la réputation de l’entreprise, valoriser les offres et capter des leads commerciaux avec redirection WhatsApp.',
          stats: '100% Mobile · Chargement <1,2s · Catalogue Digital',
          features: [
            'Architecture multi-sections d’entreprise',
            'Points de conversion stratégiques',
            'Rendu visuel haute précision sur écrans Retina',
          ],
          whatsappMessage:
            'Bonjour ! J’ai vu le projet de Portail d’Entreprise sur votre site et j’aimerais un design similaire pour ma société.',
        },
        eliza: {
          categoryLabel: 'Personnel & Marque Professionnelle',
          title: 'Portfolio Créatif & Image de Marque',
          client: 'Photographe & Directrice Artistique',
          description:
            'Site éditorial avec galerie photo haute définition, biographie détaillée, liens sociaux et bouton de contact direct pour réservations rapides.',
          stats: 'Tactile Fluide · Typographie Éditoriale · Contact en 1 Clic',
          features: [
            'Galerie photo optimisée avec chargement différé',
            'Téléchargement de CV / Curriculum Vitae en PDF',
            'Ergonomie tactile pensée pour l’usage sur smartphone',
          ],
          whatsappMessage:
            'Bonjour ! J’ai adoré le portfolio et l’identité de marque sur votre site. J’aimerais un devis pour un projet équivalent.',
        },
      },
    },
    whyUs: {
      kicker: 'Avantages Clés',
      kickerSub: 'Qualité Supérieure',
      title: 'Pourquoi choisir un site web développé sur mesure ?',
      description:
        'Une présence numérique négligée fait fuir vos prospects. Un site moderne, rapide et connecté à WhatsApp inspire confiance et multiplie vos prises de contact.',
      benefits: [
        {
          title: 'Structure 100% Adaptée aux Mobiles',
          description:
            'Plus de 85% du trafic provient des téléphones. Votre site sera parfait sur Android, iPhone, tablettes et grands écrans avec une navigation fluide.',
        },
        {
          title: 'Liaison Directe avec votre WhatsApp',
          description:
            'Chaque section intègre des appels à l’action qui ouvrent WhatsApp d’un simple clic avec un message pré-rempli pour conclure rapidement.',
        },
        {
          title: 'Vitesse de Chargement Éclair & Code Léger',
          description:
            'Développé selon les technologies web les plus récentes pour garantir une ouverture instantanée, même avec un réseau mobile limité.',
        },
        {
          title: 'Design Minimaliste & Haut de Gamme',
          description:
            'Aucun élément superflu. Une esthétique soignée, des typographies lisibles et des contrastes qui valorisent votre image.',
        },
        {
          title: 'Interlocuteur Unique Sans Intermédiaire',
          description:
            'Vous échangez directement avec moi au +53 54956111. Un suivi attentif, une écoute bienveillante et des délais respectés.',
        },
        {
          title: 'Référencement & Visibilité Google',
          description:
            'Un code sémantique propre conçu pour aider les moteurs de recherche à indexer et positionner efficacement votre activité.',
        },
      ],
    },
    plans: {
      kicker: 'Nos Forfaits',
      kickerSub: 'Tarification Claire',
      title: 'Choisissez la formule idéale pour votre projet web',
      description:
        'Aucun coût caché ni complication technique. Je vous accompagne de la première esquisse jusqu’à la mise en ligne.',
      recommendedBadge: 'Recommandé pour Entreprises',
      includesTitle: 'Comprend :',
      personal: {
        name: 'Forfait Personnel',
        tagline: 'Idéal pour indépendants, médecins, consultants, photographes et marques personnelles.',
        deliveryTime: 'Livraison en 3 à 5 jours ouvrés',
        features: [
          'Design moderne 100% responsive (Mobile & Ordinateur)',
          'Jusqu’à 3 sections ou pages fluides',
          'Présentation de votre biographie et parcours professionnel',
          'Logo numérique et favicon de marque pour navigateur',
          'Galerie de photos ou réalisations clés',
          'Boutons d’accès direct à votre WhatsApp (+53 54956111)',
          'Liens vers vos réseaux sociaux',
          'Hébergement et code optimisé pour un chargement rapide',
        ],
        buttonText: 'Choisir le Forfait Personnel',
        whatsappMessage:
          'Bonjour ! Je souhaite souscrire au *Forfait Personnel* pour mon site web. Comment pouvons-nous débuter ?',
      },
      corporate: {
        name: 'Forfait Entreprise Pro',
        tagline: 'La solution complète pour PME, commerces locaux et entreprises établies.',
        deliveryTime: 'Livraison en 5 à 7 jours ouvrés',
        features: [
          'Architecture professionnelle de 4 à 6 pages dédiées',
          'Pages : Accueil, À Propos, Services, Catalogue et Contact',
          'Identité visuelle : Logo d’entreprise, favicon et palette de marque',
          'Catalogue interactif de produits/services avec bouton WhatsApp par article',
          'Formulaire de contact avec envoi direct sur votre WhatsApp',
          'Carte interactive Google Maps avec localisation de vos locaux',
          'Optimisation SEO complète pour le référencement Google',
          'Assistance technique et conseils personnalisés continus',
        ],
        buttonText: 'Choisir le Forfait Entreprise',
        whatsappMessage:
          'Bonjour ! Je suis intéressé(e) par le *Forfait Entreprise Pro* pour mon activité. J’aimerais échanger sur les détails.',
      },
      catalog: {
        name: 'Forfait Sur Mesure / Catalogue',
        tagline: 'Pour les projets avec un large volume de produits, menus interactifs ou besoins spécifiques.',
        deliveryTime: 'Livraison en 7 à 10 jours ouvrés',
        features: [
          'Architecture sur mesure sans restriction rigide de sections',
          'Catalogue numérique interactif avec catégories et filtres',
          'Module de commande directe via WhatsApp',
          'Prise en charge multilingue (Espagnol / Anglais / Français) si besoin',
          'Optimisation extrême des performances pour connexions lentes',
          'Formation pour actualiser vos photos, prix et textes facilement',
          'Assistance prioritaire et garantie de maintenance étendue',
        ],
        buttonText: 'Devis Forfait Sur Mesure',
        whatsappMessage:
          'Bonjour ! J’ai des besoins spécifiques et je souhaite un devis pour le *Forfait Sur Mesure / Catalogue*.',
      },
    },
    contact: {
      kicker: 'Canaux Directs',
      kickerSub: 'Service Personnalisé',
      title: 'Donnons vie à votre projet web dès aujourd’hui',
      description:
        'Contactez-moi directement sur WhatsApp pour poser vos questions, définir la meilleure structure pour votre activité et recevoir une proposition adaptée.',
      chatTitle: 'Chat WhatsApp',
      openChat: 'Ouvrir le Chat',
      callTitle: 'Appel Téléphonique',
      callAction: 'Appeler',
      hoursTitle: 'Horaires d’assistance rapide : Lun - Sam, 8h00 - 21h00',
      hoursDesc:
        'Réponse en moins d’une heure. Que vous soyez à Cuba ou à l’international, nous pouvons échanger par appel ou messages vocaux WhatsApp.',
      formTitle: 'Formulaire Direct vers WhatsApp',
      formSub: 'Aucune inscription requise',
      nameLabel: 'Votre Nom ou Entreprise *',
      namePlaceholder: 'Ex. Thomas Dupont / Garage AutoPro',
      phoneLabel: 'Votre Téléphone ou WhatsApp',
      phonePlaceholder: 'Ex. +33 6 12 34 56 78',
      typeLabel: 'Type de Projet',
      typeOptions: [
        'Site Web d’Entreprise / Institutionnel',
        'Site Web Personnel / Portfolio',
        'Landing Page de Vente',
        'Catalogue Numérique de Produits',
        'Refonte / Optimisation de Site Existant',
        'Autre projet sur mesure',
      ],
      detailsLabel: 'Décrivez brièvement vos attentes *',
      detailsPlaceholder:
        'Ex. Je recherche un site pour mon activité avec un catalogue de services, une galerie photos, mes coordonnées et un bouton WhatsApp direct pour mes clients...',
      submitButton: 'Envoyer ma Demande sur WhatsApp',
      copyButton: 'Copier',
      copiedButton: 'Copié',
      successMessage:
        'WhatsApp s’est ouvert avec votre message rédigé prêt à l’envoi. Je vous répondrai dans les plus brefs délais !',
    },
    faq: {
      kicker: 'Questions Fréquentes',
      kickerSub: 'Transparence Totale',
      title: 'Foire Aux Questions',
      description:
        'Tout ce que vous devez savoir avant de confier la création et le développement de votre site web.',
      items: [
        {
          question: 'Quel est le délai de création et de livraison d’un site ?',
          answer:
            'Pour un site personnel ou une landing page, le délai habituel est de 3 à 5 jours ouvrés. Pour un site d’entreprise complet avec catalogue et plusieurs rubriques, comptez entre 5 et 8 jours ouvrés après réception de vos éléments.',
        },
        {
          question: 'Mon site s’affichera-t-il correctement sur smartphone ?',
          answer:
            'Absolument. J’applique une méthode 100% Mobile-First. Votre site s’adapte naturellement et confortablement à n’importe quelle taille d’écran : iPhone, smartphone Android, tablette et ordinateur.',
        },
        {
          question: 'Comment fonctionne l’intégration avec WhatsApp ?',
          answer:
            'Votre site intègre des boutons d’action ergonomiques (fixes, flottants et sur chaque offre). Lorsqu’un visiteur clique, WhatsApp s’ouvre instantanément avec un message pré-rédigé pour vous garantir un maximum de prospects qualifiés.',
        },
        {
          question: 'Quels éléments dois-je fournir pour débuter ?',
          answer:
            'Le principal : le nom de votre marque ou société, un descriptif de vos prestations, vos coordonnées et vos visuels/logo si vous en avez. Si vous manquez de photos ou de logo, je peux vous guider et concevoir des éléments visuels modernes.',
        },
        {
          question: 'Puis-je faire évoluer mon site ou ajouter des pages plus tard ?',
          answer:
            'Oui, tout à fait. Tous les sites sont conçus de manière modulaire afin d’intégrer de nouveaux produits, sections ou options sans avoir à tout recommencer.',
        },
        {
          question: 'Comment s’organisent le suivi et les modalités de règlement ?',
          answer:
            'Vous pouvez m’écrire directement sur WhatsApp au +53 54956111. Nous convenons des spécifications, un acompte initial est versé pour démarrer le développement, et le solde est réglé une fois le site validé à votre entière satisfaction.',
        },
        {
          question: 'Le site web final peut-il être consulté depuis Cuba sans utiliser de VPN ?',
          answer:
            'Oui, à 100%. Les sites web livrés sont des applications web statiques ultra-performantes conçues pour être déployées sur des réseaux CDN mondiaux tels que Cloudflare Pages, GitHub Pages ou n’importe quel hébergement web standard. Ces plateformes sont entièrement ouvertes et accessibles depuis Cuba (ETECSA, 4G et Wi-Fi Nauta) sans aucun VPN, garantissant une rapidité optimale locale et internationale.',
        },
      ],
      supportQuestion: 'Vous avez une question spécifique concernant votre projet ?',
      supportButton: 'Écrivez-moi directement sur WhatsApp (+53 54956111)',
    },
    footer: {
      description:
        'Conception et développement de sites web modernes, responsives et percutants pour projets personnels et d’entreprise. Réalisés avec un code propre et une liaison directe avec WhatsApp.',
      contactOfficial: 'Contact officiel :',
      navTitle: 'Navigation',
      channelsTitle: 'Contact Direct',
      internationalNote: 'Disponible pour des projets à Cuba et à l’international',
      copyright: 'Batista · Web Studio. Tous droits réservés.',
      responsiveNote: 'Design Web Moderne & Responsive',
    },
    floating: {
      greeting: 'Comment pouvons-nous vous aider ? Cliquez pour discuter sur WhatsApp :',
      optionCorporate: '💼 Site d’Entreprise / Institutionnel',
      optionPersonal: '👤 Site Personnel / Portfolio',
      optionGeneral: '💬 Renseignements Généraux ou Devis',
      responseDirect: 'Réponse directe au +53 54956111',
      buttonLabel: 'Discuter sur WhatsApp',
    },
  },
};
