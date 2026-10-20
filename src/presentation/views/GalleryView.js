export class GalleryView {
  #gridEl;
  #emptyEl;
  #filtersEl;
  #onFilterChange = null;

  constructor(rootSelector = "#proyectos") {
    const root = document.querySelector(rootSelector);
    if (!root) throw new Error("Gallery root no encontrado");

    this.#gridEl    = root.querySelector('[data-role="gallery-grid"]');
    this.#emptyEl   = root.querySelector('[data-role="gallery-empty"]');
    this.#filtersEl = root.querySelector('[data-role="gallery-filters"]');
  }

  /** Registra el handler externo del filtro (lo llama el Controller). */
  bindFilterChange(handler) {
    this.#onFilterChange = handler;
    this.#filtersEl.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;
      const filter = btn.dataset.filter;
      this.#setActiveFilter(filter);
      this.#onFilterChange?.(filter);
    });
  }

  #setActiveFilter(filter) {
    this.#filtersEl
      .querySelectorAll(".filter-btn")
      .forEach(b => b.classList.toggle("is-active", b.dataset.filter === filter));
  }

  render(projects) {
    if (!projects.length) {
      this.#gridEl.innerHTML = "";
      this.#emptyEl.hidden = false;
      return;
    }
    this.#emptyEl.hidden = true;
    this.#gridEl.innerHTML = projects.map(this.#projectCardTemplate).join("");
  }

  /** Template aislado — fácil de testear o mover a templates/. */
  #projectCardTemplate(project) {
    return `
      <article class="project-card" data-id="${project.id}">
        <figure class="project-card__media">
          <img src="${project.image}" alt="${project.title}" loading="lazy" width="400" height="300" />
        </figure>
        <div class="project-card__body">
          <h3 class="project-card__title">${project.title}</h3>
          <p class="project-card__category">${project.category}</p>
        </div>
      </article>
    `;
  }
}