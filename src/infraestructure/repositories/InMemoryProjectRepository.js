import { Project } from "../../domain/models/Project.js";
import { ProjectRepository } from "../../domain/repositories/ProjectRepository.js";

/**
 * Repositorio en memoria (mock). Reemplazable por HttpProjectRepository
 * sin tocar nada del resto de la app.
 */
export class InMemoryProjectRepository extends ProjectRepository {
  #data = [
    { id: 1, title: "Lotificacion Playa Gigante - Rivas, Nicaragua.", category: "inversion", image: "assets/images/projects/playaGigante.jpg" },
    { id: 2, title: "Vista aérea de la lotificación en Playa Gigante - Rivas, Nicaragua.", category: "inversion",  image: "assets/images/projects/LoteVistaAerea.jpg" },
    { id: 3, title: "Entrada a lotificación Playa Gigante (Imágen de referencia) - Rivas, Nicaragua.",  category: "inversion",image: "assets/images/projects/EntradaLotesReferencia.jpg" },
    { id: 4, title: "Ubicación de lotificación",     category: "inversion", image: "assets/images/projects/Location.jpg" },
    { id: 5, title: "Centro Corporativo - Managua, Nicaragua.", category: "obrasVerticales", image: "assets/images/projects/CTRO_CORP1.jpg"},
    { id: 5, title: "Centro Corporativo - Managua, Nicaragua.", category: "obrasVerticales", image: "assets/images/projects/CTRO_CORP2.jpg"},
    { id: 5, title: "Centro Corporativo - Managua, Nicaragua.", category: "obrasVerticales", image: "assets/images/projects/CTRO_CORP3.jpg"},
    { id: 5, title: "Centro Corporativo - Managua, Nicaragua.", category: "obrasVerticales", image: "assets/images/projects/CTRO_CORP4.jpg"},
    { id: 5, title: "Centro Corporativo - Managua, Nicaragua.", category: "obrasVerticales", image: "assets/images/projects/CTRO_CORP5.jpg"},
    { id: 5, title: "Centro Corporativo - Managua, Nicaragua.", category: "obrasVerticales", image: "assets/images/projects/CTRO_CORP6.jpg"},
    { id: 5, title: "Rehabilitación y Ampliación de la Planta de Tratamiento de Aguas Servidas - Granada, Nicaragua.", category: "obrasHorizontales", image: "assets/images/projects/PTAS_GRANADA1.jpg"},
    { id: 5, title: "Rehabilitación y Ampliación de la Planta de Tratamiento de Aguas Servidas - Granada, Nicaragua.", category: "obrasHorizontales", image: "assets/images/projects/PTAS_GRANADA2.jpg"},
    { id: 5, title: "Adecuación Mecanizada de 317.96 HA del suelo con vegetación tipo pastizal, HDA - San Juan del Chagüite, Tipitapa, Nicaragua.", category: "obrasHorizontales", image: "assets/images/projects/AdecuacionMecanizada1.jpg"},
    { id: 5, title: "Adecuación Mecanizada de 317.96 HA del suelo con vegetación tipo pastizal, HDA - San Juan del Chagüite, Tipitapa, Nicaragua.", category: "obrasHorizontales", image: "assets/images/projects/AdecuacionMecanizada2.jpg"},
  ];

  async getAll() {
    // Simula latencia de red
    await new Promise(r => setTimeout(r, 150));
    return this.#data.map(dto => new Project(dto));
  }
}