export const appConfig = Object.freeze({
  api: {
    contactEndpoint: "/api/contact", // placeholder
  },
  http: {
    timeoutMs: 800, // simulación
  },
  gallery: {
    defaultFilter: "all",
    filters: [
      { filter: "all",         label: "Todos" },
      { filter: "inversion",  label: "Inversión" },
      { filter: "obrasVerticales",   label: "Obras Verticales" },
      { filter: "obrasHorizontales", label: "Obras Horizontales" },
    ],
  },
  services: [
    { id: "s1", icon: "⚙️", title: "Construcción",  description: "Construcción, Inversión y Desarrollo S.A. (CIDESA) integra experiencia, dirección técnica, maquinaria y soporte administrativo para ejecutar proyectos de movimiento de tierra, drenaje, vialidad, urbanización, plataformas y obras civiles. Su propuesta combina planificación de producción, control geométrico, coordinación de equipos, gestión de materiales y seguimiento contractual." },
    { id: "s2", icon: "🏗️", title: "Desarrollo",   description: "Impulsamos proyectos estratégicos de alta plusvalía. Adquiere lotes exclusivos en ubicaciones privilegiadas con espectaculares vistas al mar, ideales para construir tu futuro o asegurar tu inversión." },
  ],
});