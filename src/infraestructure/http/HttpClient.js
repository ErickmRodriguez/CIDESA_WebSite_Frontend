import { appConfig } from "../../config/appConfig.js";

export const httpClient = {
  /**
   * Envoltorio sobre fetch con timeout y manejo de errores uniforme.
   * Por ahora SIMULA la petición (no hay backend real).
   */
  async post(url, payload, options = {}) {
    const { timeoutMs = appConfig.http.timeoutMs } = options;

    console.info(`[httpClient] POST ${url}`, payload);

    // Simulación: latencia + log. Reemplazar por fetch real cuando exista backend.
    await new Promise(resolve => setTimeout(resolve, timeoutMs));

    return { ok: true, status: 200, data: { received: payload } };
  },

  async get(url) {
    console.info(`[httpClient] GET ${url}`);
    await new Promise(resolve => setTimeout(resolve, 200));
    return { ok: true, status: 200, data: null };
  },
};