import { FaqItem, ServiceItem, Lead } from "./types";

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "redes_basicas",
    icon: "MessageSquare",
    title: "Gestión básica de redes",
    description: "Publicaciones periódicas para mantener tus perfiles profesionales, activos y con presencia constante.",
    extendedDescription: "Ideal para pequeños negocios que necesitan visibilidad regular sin complicaciones. Nos encargamos de organizar tus publicaciones semanales, optimizar tu perfil y responder consultas básicas.",
    costEstimate: "$20.000 - $40.000 ARS/mes"
  },
  {
    id: "redes_diseno",
    icon: "Palette",
    title: "Redes + diseño de publicaciones",
    description: "Creamos diseños premium, placas atractivas y contenido visual personalizado con tu marca.",
    extendedDescription: "Dedicado a marcas que buscan una estética impecable. Diseñamos banners, historias interactivas, flyers digitales y carruseles con tu paleta de colores y logotipo, logrando una imagen de máxima calidad.",
    costEstimate: "$50.000 - $80.000 ARS/mes"
  },
  {
    id: "redes_anuncios",
    icon: "Zap",
    title: "Redes + anuncios en Facebook/Instagram",
    description: "Publicidad paga diseñada quirúrgicamente para atraer clientes reales a tu WhatsApp o local a diario.",
    extendedDescription: "Configuración, monitoreo y optimización diaria de Meta Ads (Facebook e Instagram). Dirigimos anuncios a tu cliente ideal en tu zona geográfica para consultas reales de compra.",
    costEstimate: "$60.000 - $120.000 ARS/mes"
  },
  {
    id: "pagina_web",
    icon: "Monitor",
    title: "Diseño de página web simple",
    description: "Sitios rápidos, estéticos y claros, ideales para celulares y listos para recibir visitas.",
    extendedDescription: "Página web de aterrizaje ideal para emprendedores. Incluye accesos directos de WhatsApp, mapa de ubicación, catálogo descriptivo de tus productos/servicios y un formulario directo de contacto.",
    costEstimate: "$80.000 - $250.000 ARS"
  },
  {
    id: "logo_branding",
    icon: "PenTool",
    title: "Logo básico e Imagen Visual",
    description: "Diseño de logotipos memorables y flyers listos para que tu negocio destaque frente a tus competidores.",
    extendedDescription: "La base visual para arrancar de forma profesional. Diseñamos tu logotipo oficial en alta calidad, seleccionamos colores corporativos atractivos y te preparamos folletos listos para publicar.",
    costEstimate: "$15.000 - $50.000 ARS"
  },
  {
    id: "excel_databases",
    icon: "Database",
    title: "Excel o base de datos simple",
    description: "Organizamos tu control de stock, contabilidad básica y clientes con herramientas sencillas y automatizadas.",
    extendedDescription: "Simplifica la gestión de tu emprendimiento. Diseñamos planillas automáticas e inteligentes en Microsoft Excel o Google Sheets con fórmulas de fácil lectura para que lleves las cuentas sin dolores de cabeza.",
    costEstimate: "$20.000 - $80.000 ARS"
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    question: "¿En cuánto tiempo se ven los resultados?",
    answer: "Trabajamos rápido: en la primera semana ya tenés tus publicaciones y diseños listos. Si sumás anuncios de publicidad, los clientes te van a empezar a escribir a tu WhatsApp casi al instante."
  },
  {
    question: "¿Tengo que firmar un contrato obligatorio?",
    answer: "No, para nada. No hay contratos obligatorios ni te atamos a nada. Pagás mes a mes y si querés pausar o dejar el servicio, solo nos avisás antes de empezar el siguiente mes."
  },
  {
    question: "¿Cómo se realizan los pagos?",
    answer: "Súper fácil: podés pagar con transferencia bancaria directa (CBU/CVU) o usando Mercado Pago. El mes se abona por adelantado entre el 1 y el 10."
  },
  {
    question: "¿La plata de la publicidad está incluida en el precio?",
    answer: "No, el dinero para los anuncios en Facebook o Instagram va por fuera de nuestra tarifa. Vos elegís cuánto querés gastar (por ejemplo, un monto por día) y ese dinero se le paga directo a Facebook o Instagram con tu tarjeta. Nosotros nos encargamos de que esa inversión rinda y te traiga clientes."
  }
];

export const INITIAL_LEADS: Lead[] = [
  {
    id: "lead_1",
    name: "Sofía Martínez",
    email: "smartinez@nexustech.io",
    service: "SEO / SEM",
    brandName: "NexusTech Solutions",
    websiteUrl: "https://nexustech.io",
    message: "Buscamos aumentar un 40% el tráfico de leads corporativos B2B en los próximos trimestres. Actualmente dependemos mucho de referidos tradicionales y queremos canal orgánico.",
    status: "new",
    submittedAt: "2026-05-30T10:15:00Z",
    notes: "Lead corporativo muy calificado de software. Interesada en SEO técnico.",
    budget: 2500
  },
  {
    id: "lead_2",
    name: "Carlos Mendoza",
    email: "direccion@cateringsolid.es",
    service: "E-commerce",
    brandName: "Sabor Express",
    websiteUrl: "https://saborexpress-catering.com",
    message: "Queremos habilitar un módulo interactivo para que oficinas programen almuerzos y eventos corporativos semanales en Madrid.",
    status: "in_progress",
    submittedAt: "2026-05-29T14:30:00Z",
    notes: "Presentada propuesta de e-commerce Shopify B2B con programación semanal. Pendiente de firma de contrato.",
    budget: 4500
  },
  {
    id: "lead_3",
    name: "Doctora Elena Vega",
    email: "consultas@clinica-vegaskin.com",
    service: "Google Ads (SEM)",
    brandName: "Clínica VegaSkin",
    websiteUrl: "",
    message: "Tengo un nuevo centro estético de dermatología avanzada y necesito captar pacientes para tratamientos de rejuvenecimiento facial con urgencia.",
    status: "contacted",
    submittedAt: "2026-05-28T09:12:00Z",
    notes: "Llamada inicial realizada. Explicada la estrategia de palabras clave transaccionales de bajo costo local.",
    budget: 1800
  },
  {
    id: "lead_4",
    name: "Julio Ordóñez",
    email: "j.ordonez@vintageliving.com",
    service: "Redes Sociales",
    brandName: "Vintage Living Co",
    websiteUrl: "https://vintageliving.es",
    message: "Buscamos una agencia que cree reel y contenido orgánico estético con anuncios dinámicos para promocionar nuestros muebles artesanales.",
    status: "closed",
    submittedAt: "2026-05-25T17:45:00Z",
    notes: "Contrato firmado y planificado el primer shooting de video. Inicio de pauta programado para la próxima semana.",
    budget: 1200
  }
];

export const CLIENT_LOGOS = [
  { name: "Aluna Software", url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBX5PdRjU590rKpqTkIwkVti0JkRz1_mx0iQYWMt7-VISUv_9G5fwAAKlE3A5x9-A7h0e6ciWguK2eRWqmvlueJwR_yG37p_T5vf8pM6Ah5sR0j46GiTB7aUmF2VkTmbq9u_9fcEvdJSnoaNhpKbu8c7EIcbsFRaZrYFYpUI9JhQQb20voX9r5yHveYgof_J55xAdgEI312-lPP-Z9Uyqz7PFPtw_sJsHwSm8vDffHXfIHpcuGRNC3NLUa7yzRWFXiIm67efFgIk7CT" },
  { name: "Samsara Logistics", url: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6a1qONNlaCHYSQ7_GMtVtyKpo937r7nKc4tv-neB-qJFRnSaDqO1cNrbJ8gwNcgMK0Wbx7ReyUZ2e_95qA-yXAlmpaTkjpW3d0W_hrEiEvtr-BoTcFa6L5BBC9SE5cWcLBf0D_hjUFbj6T2effTBXLC9T607PEpg9LS2ufbIl-ZaGKfoyrDSh-Vrjq3jT7nsssWTbWDp8AqXO_4fbC26ZDBjlPR5h0j-sqXQcygcFZMiUWDuKsqRNh3IHxWQdiMj9VceYRqPiwt9_" },
  { name: "Kinetix Bio", url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBgXr-d11eVaeVIpLuQhX6w_SGJTHwK_ATPsUx05xLDHTv-Ya-vG1mmtPvvufsmJX_fHTgq8F7r6qNCkyR1r4gvaovKeHkCsC6cExhiMTAKab9VvwXAutaCQMHzfSD1UvgmDzacBa-iUf2gI-irhTYB1SFq2SRDlj6LJWS4dtBco3yI6verdpVDgfhznkYC2vcaWH4wHXGwBY6L0r9SPeZh16QKt45xEQnky4EFlDlsbHONBbjUzSKzpRfa9GyYZVmeoSRN7HO9hmDZ" },
  { name: "Helix Retail", url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDwDxLyxpMm_XWVpPsJXEZhTBPhsCLJ6yctfCZMDigY2MLuwTWpYjy9oRtebRCImfxJVzqMxz--p0tI44XYxXwp1rgabemwVu6zOc38d1BmMS_ilecozaeCjdgoQmuotdUS6UuIFKFbTIFnOmbVFG5BeKZU0n9NI0IRqiBMMz1e0NxsGlkr3gONlJVgIfi-DCpccTkPkpQ_qhAVK-c-cm8_qanJivqaBTKZdroPHX3JcA8-_4_gQ3a1x-d2QDmM0QQiNOo9B84l8-8R" },
  { name: "Solari Energy", url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwkyAfuceuDDVy9F7JdlCUsJyTD4mMoNgFy7jXNo-ij9BK8Qpuc5XvJ9x6MioK68KvsfcEG1vNwsgMmVjdH5JINA_PjoK_JhGv4Q_pZFVXyAK_bxyC_eYyCLqr1aDDLlYW8ST1v3xhJPsyLOB1q_VWIDSZlSI7y_L50c56BhOqLaFP0oyIS4ZOI-lFsMT43AAAsTIG9baZK6Za35mSCrcLD13Na5HrIBkaDyzDshhr3Em3lT8Z6wBTxQzN2XM4v7-eCUfc0YPVe_GU" },
  { name: "Zenith Real Estate", url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsbjstKBgbahgvgT5aa66-w5DI8ugkXcNWSFuy4L3PmoGqK0A5Mv0YJQwB7UcoJ3rUZUFAZxqcit2GB2FqzLMFDATTTaanxHrFNU2dMbqIj0sAk-ju-yMC_JxjuFZuVwvoZr_nj_lMnK0kc81XL-hqIxJn5rCgZ-remE4I5VS0hNR0LkUtqL5YGRk-Oc5GbcJ9WxbGBHO_IIVrNRMdHx99Cra9KLmYSJRJ_P9f2GRN6MDu6eUvVXrI5sjtCi57RpUehJ0PhNgipum6" }
];
