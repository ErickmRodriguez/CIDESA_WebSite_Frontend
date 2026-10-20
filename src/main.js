import { InMemoryProjectRepository } from "./infrastructure/repositories/InMemoryProjectRepository.js";
import { GetProjectsUseCase } from "./application/useCases/GetProjectsUseCase.js";
import { FilterProjectsUseCase } from "./application/useCases/FilterProjectsUseCase.js";
import { GalleryView } from "./presentation/views/GalleryView.js";
import { GalleryController } from "./presentation/controllers/GalleryController.js";

/* ---------- Composición de la Galería ---------- */
const projectRepository = new InMemoryProjectRepository();

const galleryController = new GalleryController({
  view: new GalleryView("#proyectos"),
  getProjectsUseCase: new GetProjectsUseCase(projectRepository),
  filterProjectsUseCase: new FilterProjectsUseCase(),
});

galleryController.init();

/* ---------- Año dinámico del footer ---------- */
document.querySelector('[data-role="year"]').textContent = new Date().getFullYear();