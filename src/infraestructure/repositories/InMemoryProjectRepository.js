import { Project } from "../../domain/models/Project.js";
import { ProjectRepository } from "../../domain/repositories/ProjectRepository.js";

/**
 * Repositorio en memoria (mock). Reemplazable por HttpProjectRepository
 * sin tocar nada del resto de la app.
 */
export class InMemoryProjectRepository extends ProjectRepository {
  #data = [
    { id: 1, title: "Lotificacion playa Gigante", category: "lotificacion", image: "assets/images/projects/playaGigante.jpg" },
    /** { id: 2, title: "Centro Comercial Aurora", category: "comercial",  image: "assets/images/projects/p2.jpg" },
    { id: 3, title: "Residencial Los Pinos",  category: "residencial",image: "assets/images/projects/p3.jpg" },
    { id: 4, title: "Nave Logística Sur",     category: "industrial", image: "assets/images/projects/p4.jpg" },**/
  ];

  async getAll() {
    // Simula latencia de red
    await new Promise(r => setTimeout(r, 150));
    return this.#data.map(dto => new Project(dto));
  }
}