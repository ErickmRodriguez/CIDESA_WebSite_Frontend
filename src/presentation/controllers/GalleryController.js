export class GalleryController {
  #view;
  #getProjects;
  #filterProjects;
  #allProjects = [];
  #currentFilter = "all";

  constructor({ view, getProjectsUseCase, filterProjectsUseCase }) {
    this.#view = view;
    this.#getProjects = getProjectsUseCase;
    this.#filterProjects = filterProjectsUseCase;
  }

  async init() {
    try {
      this.#allProjects = await this.#getProjects.execute();
      this.#view.render(this.#allProjects);
      this.#view.bindFilterChange((filter) => this.#handleFilter(filter));
    } catch (error) {
      console.error("[GalleryController] Error al cargar proyectos:", error);
    }
  }

  #handleFilter(filter) {
    this.#currentFilter = filter;
    const visible = this.#filterProjects.execute(this.#allProjects, filter);
    this.#view.render(visible);
  }
}