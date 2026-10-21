export const filterButtonTemplate = ({ filter, label, active = false }) => {
  const el = document.createElement("button");
  el.type = "button";
  el.className = `filter-btn${active ? " is-active" : ""}`;
  el.dataset.filter = filter;
  el.textContent = label;
  return el;
};

export const projectCardTemplate = (project) => `
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

export const serviceCardTemplate = (service) => `
  <article class="service-card">
    <div class="service-card__icon" aria-hidden="true">${service.icon}</div>
    <h3 class="service-card__title">${service.title}</h3>
    <p class="service-card__text">${service.description}</p>
  </article>
`;