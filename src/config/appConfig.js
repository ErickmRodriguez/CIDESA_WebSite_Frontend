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
      { filter: "industrial",  label: "Industrial" },
      { filter: "comercial",   label: "Comercial" },
      { filter: "residencial", label: "Residencial" },
    ],
  },
  services: [
    { id: "s1", icon: "⚙️", title: "Consultoría",  description: "Asesoría estratégica personalizada." },
    { id: "s2", icon: "🏗️", title: "Desarrollo",   description: "Soluciones llave en mano." },
    { id: "s3", icon: "📈", title: "Optimización", description: "Mejora continua de procesos." },
  ],
});