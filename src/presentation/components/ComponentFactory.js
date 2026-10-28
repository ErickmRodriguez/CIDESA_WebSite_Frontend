import { filterButtonTemplate, serviceCardTemplate } from "../templates/galleryTemplates.js";

export class ComponentFactory {
  createFilterButton({ label, filter, active = false }) {
    return filterButtonTemplate({ label, filter, active });
  }

  createServiceCard(service) {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = serviceCardTemplate(service).trim();
    return wrapper.firstElementChild;
  }
}