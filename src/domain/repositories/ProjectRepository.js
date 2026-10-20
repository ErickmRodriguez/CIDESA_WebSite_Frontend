/**
 * Contrato (interfaz). Cualquier implementación debe respetar esta firma.
 * @interface
 */
export class ProjectRepository {
  /** @returns {Promise<Project[]>} */
  async getAll() { throw new Error("Not implemented"); }
}