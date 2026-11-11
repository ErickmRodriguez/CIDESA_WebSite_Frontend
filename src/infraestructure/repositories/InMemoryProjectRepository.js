import { Project } from "../../domain/models/Project.js";
import { ProjectRepository } from "../../domain/repositories/ProjectRepository.js";

/**
 * Repositorio en memoria (mock). Reemplazable por HttpProjectRepository
 * sin tocar nada del resto de la app.
 */
export class InMemoryProjectRepository extends ProjectRepository {
  #data = [
    { id: 1, title: "Entrada a lotificación Playa Gigante (Imágen de referencia) - Rivas, Nicaragua.",  category: "inversion", image: "assets/images/projects/lotes/EntradaLotesReferencia.jpg" },
    { id: 2, title: "Vista aérea de la lotificación en Playa Gigante - Rivas, Nicaragua.", category: "inversion",  image: "assets/images/projects/lotes/LoteVistaAerea.jpg" },
    { id: 3, title: "Ubicación de lotificación",     category: "inversion", image: "assets/images/projects/lotes/Location.jpg" },
    { id: 4, title: "Lotificacion Playa Gigante - Rivas, Nicaragua.", category: "inversion", image: "assets/images/projects/lotes/playaGigante.jpg" },
    { id: 5, title: "Centro Corporativo - Managua, Nicaragua.", category: "obrasVerticales", image: "assets/images/projects/ctro_corp/CTRO_CORP1.jpg"},
    { id: 6, title: "Centro Corporativo - Managua, Nicaragua.", category: "obrasVerticales", image: "assets/images/projects/ctro_corp/CTRO_CORP2.jpg"},
    { id: 7, title: "Centro Corporativo - Managua, Nicaragua.", category: "obrasVerticales", image: "assets/images/projects/ctro_corp/CTRO_CORP3.jpg"},
    { id: 8, title: "Centro Corporativo - Managua, Nicaragua.", category: "obrasVerticales", image: "assets/images/projects/ctro_corp/CTRO_CORP4.jpg"},
    { id: 9, title: "Centro Corporativo - Managua, Nicaragua.", category: "obrasVerticales", image: "assets/images/projects/ctro_corp/CTRO_CORP5.jpg"},
    { id: 10, title: "Centro Corporativo - Managua, Nicaragua.", category: "obrasVerticales", image: "assets/images/projects/ctro_corp/CTRO_CORP6.jpg"},
    { id: 11, title: "Rehabilitación y Ampliación de la Planta de Tratamiento de Aguas Servidas - Granada, Nicaragua.", category: "obrasHorizontales", image: "assets/images/projects/ptas/PTAS_GRANADA1.jpg"},
    { id: 12, title: "Rehabilitación y Ampliación de la Planta de Tratamiento de Aguas Servidas - Granada, Nicaragua.", category: "obrasHorizontales", image: "assets/images/projects/ptas/PTAS_GRANADA2.jpg"},
    { id: 13, title: "Adecuación Mecanizada de 317.96 HA del suelo con vegetación tipo pastizal, HDA - San Juan del Chagüite, Tipitapa, Nicaragua.", category: "obrasHorizontales", image: "assets/images/projects/mov_tierra/AdecuacionMecanizada1.jpg"},
    { id: 14, title: "Adecuación Mecanizada de 317.96 HA del suelo con vegetación tipo pastizal, HDA - San Juan del Chagüite, Tipitapa, Nicaragua.", category: "obrasHorizontales", image: "assets/images/projects/mov_tierra/AdecuacionMecanizada2.jpg"},
    { id: 15, title: "Adecuación Mecanizada de 317.96 HA del suelo con vegetación tipo pastizal, HDA - San Juan del Chagüite, Tipitapa, Nicaragua.", category: "obrasHorizontales", image: "assets/images/projects/mov_tierra/AdecuacionMecanizada4.jpg"},
    { id: 16, title: "Adecuación Mecanizada de 317.96 HA del suelo con vegetación tipo pastizal, HDA - San Juan del Chagüite, Tipitapa, Nicaragua.", category: "obrasHorizontales", image: "assets/images/projects/mov_tierra/AdecuacionMecanizada5.jpg"},
    { id: 17, title: "Edificio ENTHEOS - Managua, Nicaragua.", category: "obrasVerticales", image: "assets/images/projects/entheos/EDIFICIO_ENTHEOS1.jpg"},
    { id: 18, title: "Edificio ENTHEOS - Managua, Nicaragua.", category: "obrasVerticales", image: "assets/images/projects/entheos/EDIFICIO_ENTHEOS2.jpg"},
    { id: 19, title: "Edificio ENTHEOS - Managua, Nicaragua.", category: "obrasVerticales", image: "assets/images/projects/entheos/EDIFICIO_ENTHEOS3.jpg"},
    { id: 20, title: "Edificio ENTHEOS - Managua, Nicaragua.", category: "obrasVerticales", image: "assets/images/projects/entheos/EDIFICIO_ENTHEOS4.jpg"},
    { id: 21, title: "Edificio ENTHEOS - Managua, Nicaragua.", category: "obrasVerticales", image: "assets/images/projects/entheos/EDIFICIO_ENTHEOS5.jpg"},
    { id: 22, title: "Edificio ENTHEOS - Managua, Nicaragua.", category: "obrasVerticales", image: "assets/images/projects/entheos/EDIFICIO_ENTHEOS6.jpg"},
    { id: 23, title: "Casa N° 1 Urbanización Las Cimas - Managua, Nicaragua.", category: "obrasVerticales", image: "assets/images/projects/casa_cimas/URB_CIMAS2.jpg"},
    { id: 24, title: "Casa N° 1 Urbanización Las Cimas - Managua, Nicaragua.", category: "obrasVerticales", image: "assets/images/projects/casa_cimas/URB_CIMAS3.jpg"},
    { id: 25, title: "Casa N° 1 Urbanización Las Cimas - Managua, Nicaragua.", category: "obrasVerticales", image: "assets/images/projects/casa_cimas/URB_CIMAS4.jpg"},
    { id: 26, title: "Casa N° 1 Urbanización Las Cimas - Managua, Nicaragua.", category: "obrasVerticales", image: "assets/images/projects/casa_cimas/URB_CIMAS5.jpg"},
    { id: 27, title: "Casa N° 1 Urbanización Las Cimas - Managua, Nicaragua.", category: "obrasVerticales", image: "assets/images/projects/casa_cimas/URB_CIMAS6.jpg"},
    { id: 28, title: "Casa N° 1 Urbanización Las Cimas - Managua, Nicaragua.", category: "obrasVerticales", image: "assets/images/projects/casa_cimas/URB_CIMAS7.jpg"},
    { id: 29, title: "Casa N° 1 Urbanización Las Cimas - Managua, Nicaragua.", category: "obrasVerticales", image: "assets/images/projects/casa_cimas/URB_CIMAS8.jpg"},
    { id: 30, title: "Casa N° 1 Urbanización Las Cimas - Managua, Nicaragua.", category: "obrasVerticales", image: "assets/images/projects/casa_cimas/URB_CIMAS9.jpg"},
    { id: 31, title: "Calle La Bolsa - Las Sierritas, Managua, Nicaragua.", category: "obrasHorizontales", image: "assets/images/projects/calle/BOLSA1.jpg"},
    { id: 32, title: "Calle La Bolsa - Las Sierritas, Managua, Nicaragua.", category: "obrasHorizontales", image: "assets/images/projects/calle/BOLSA2.jpg"},
    { id: 33, title: "Calle La Bolsa - Las Sierritas, Managua, Nicaragua.", category: "obrasHorizontales", image: "assets/images/projects/calle/BOLSA3.jpg"},
    { id: 34, title: "Calle La Bolsa - Las Sierritas, Managua, Nicaragua.", category: "obrasHorizontales", image: "assets/images/projects/calle/BOLSA4.jpg"},
    { id: 35, title: "Calle La Bolsa - Las Sierritas, Managua, Nicaragua.", category: "obrasHorizontales", image: "assets/images/projects/calle/BOLSA5.jpg"},
    { id: 36, title: "Calle La Bolsa - Las Sierritas, Managua, Nicaragua.", category: "obrasHorizontales", image: "assets/images/projects/calle/BOLSA6.jpg"},
    { id: 37, title: "Movimiento de Tierra - Praderas de Sandino, Managua, Nicaragua.", category: "obrasHorizontales", image: "assets/images/projects/pras_sandino/PRAS_SANDINO1.jpg"},
    { id: 38, title: "Movimiento de Tierra - Praderas de Sandino, Managua, Nicaragua.", category: "obrasHorizontales", image: "assets/images/projects/pras_sandino/PRAS_SANDINO2.jpg"},
    { id: 39, title: "Movimiento de Tierra - Praderas de Sandino, Managua, Nicaragua.", category: "obrasHorizontales", image: "assets/images/projects/pras_sandino/PRAS_SANDINO3.jpg"},
    { id: 40, title: "Movimiento de Tierra - Praderas de Sandino, Managua, Nicaragua.", category: "obrasHorizontales", image: "assets/images/projects/pras_sandino/PRAS_SANDINO4.jpg"},
    { id: 41, title: "Movimiento de Tierra - Praderas de Sandino, Managua, Nicaragua.", category: "obrasHorizontales", image: "assets/images/projects/pras_sandino/PRAS_SANDINO5.jpg"},
    { id: 42, title: "Movimiento de Tierra - Praderas de Sandino, Managua, Nicaragua.", category: "obrasHorizontales", image: "assets/images/projects/pras_sandino/PRAS_SANDINO6.jpg"},
  ];

  async getAll() {
    // Simula latencia de red
    await new Promise(r => setTimeout(r, 150));
    return this.#data.map(dto => new Project(dto));
  }
}