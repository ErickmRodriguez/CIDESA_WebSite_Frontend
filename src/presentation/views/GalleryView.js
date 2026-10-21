import { projectCardTemplate } from "../templates/galleryTemplates";
import { qs, delegate } from "../../infraestructure/dom/domHelpers";

export class GalleryView {
  #gridEl;
  #emptyEl;
  #filtersEl;
  #factory;
  #onFilterChange = null;

  constructor({ rootSelector = "#proyectos", componentFactory }) {
    const root = qs(rootSelector);

    if (!root) throw new Error(`GalleryView: raíz ${rootSelector} no encontrada`);

    this.#gridEl    = qs('[data-role="gallery-grid"]', root);
    this.#emptyEl   = qs('[data-role="gallery-empty"]', root);
    this.#filtersEl = qs('[data-role="gallery-filters"]', root);
    this.#factory = componentFactory;
  }

  renderFilters(filters, activeFilter) {
    this.#filtersEl.innerHTML = "";
    filters.forEach(f => {
      this.#filtersEl.appendChild(
        this.#factory.createFilterButton({
          label: f.label,
          filter: f.filter,
          active: f.filter === activeFilter,
        })
      );
    });
  }

  /** Registra el handler externo del filtro (lo llama el Controller). */
  bindFilterChange(handler) {
    this.#onFilterChange = handler;
    delegate(this.#filtersEl, "click", ".filter-btn", (_e, btn) => {
      const filter = btn.dataset.filter;
      this.#setActiveFilter(filter);
      this.#onFilterChange?.(filter);
    });
  }

  #setActiveFilter(filter) {
    this.#filtersEl
      .querySelectorAll(".filter-btn")
      .forEach(btn => {btn.classList.toggle("is-active", btn.dataset.filter === filter);
      });
  }

  render(projects) {
    if (!projects.length) {
      this.#gridEl.innerHTML = "";
      this.#emptyEl.hidden = false;
      return;
    }
    this.#emptyEl.hidden = true;
    this.#gridEl.innerHTML = projects.map(projectCardTemplate).join("");
  }
}