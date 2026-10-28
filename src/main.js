/* ============ Config ============ */
import { appConfig } from "./config/appConfig.js";

/* ============ Domain ============ */
import { Service } from "./domain/models/Service.js";

/* ============ Application ============ */
import { GetProjectsUseCase }        from "./application/useCases/GetProjectsUseCase.js";
import { FilterProjectsUseCase }     from "./application/useCases/FilterProjectsUseCase.js";
//import { SendContactMessageUseCase } from "./application/useCases/SendContactMessageUseCase.js";
//import { ValidatorService }          from "./application/services/ValidatorService.js";

/* ============ Infrastructure ============ */
import { InMemoryProjectRepository } from "./infraestructure/repositories/InMemoryProjectRepository.js";
//import { HttpContactRepository }     from "./infrastructure/repositories/HttpContactRepository.js";
import { qs }                        from "./infraestructure/dom/domHelpers.js";

/* ============ Presentation ============ */
import { ComponentFactory }          from "./presentation/components/ComponentFactory.js";
import { GalleryView }               from "./presentation/views/GalleryView.js";
import { GalleryController }         from "./presentation/controllers/GalleryController.js";
//import { ContactView }               from "./presentation/views/ContactView.js";
//import { ContactController }         from "./presentation/controllers/ContactController.js";

/* =====================================================
   COMPOSITION ROOT — única capa que conoce todos los "new"
   ===================================================== */

const componentFactory = new ComponentFactory();

/* ---------- Servicios (domain → presentation) ---------- */
const servicesGrid = qs('[data-role="services-grid"]');
if (servicesGrid) {
  appConfig.services
    .map(dto => new Service(dto))
    .forEach(service => servicesGrid.appendChild(componentFactory.createServiceCard(service)));
}

/* ---------- Galería de Proyectos (MVC) ---------- */
const projectRepository = new InMemoryProjectRepository();

const galleryController = new GalleryController({
  view: new GalleryView({
    rootSelector: "#proyectos",
    componentFactory,
  }),
  getProjectsUseCase:    new GetProjectsUseCase(projectRepository),
  filterProjectsUseCase: new FilterProjectsUseCase(),
});

galleryController.init();

// Render inicial de los botones de filtro (los crea la factory).
qs('[data-role="gallery-filters"]'); // garantiza que exista antes del bind
//galleryController.renderFilters?.(appConfig.gallery);

/* ---------- Formulario de Contacto (MVC) ---------- */
/*const contactRepository = new HttpContactRepository();
const validatorService  = new ValidatorService();

const contactController = new ContactController({
  view: new ContactView({ rootSelector: "#contacto" }),
  sendContactMessageUseCase: new SendContactMessageUseCase({
    contactRepository,
    validatorService,
  }),
});

contactController.init();*/

/* ---------- Detalle: año dinámico del footer ---------- */
const yearEl = qs('[data-role="year"]');
if (yearEl) yearEl.textContent = new Date().getFullYear();