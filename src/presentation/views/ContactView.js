import { qs } from "../../infraestructure/dom/domHelpers.js";

export class ContactView {
  #formEl;
  #statusEl;
  #onSubmit = null;

  constructor({ rootSelector = "#contacto" }) {
    const root = qs(rootSelector);
    if (!root) throw new Error("ContactView: sección #contacto no encontrada");

    this.#formEl   = qs('[data-role="contact-form"]', root);
    this.#statusEl = qs('[data-role="form-status"]', root);
  }

  bindSubmit(handler) {
    this.#onSubmit = handler;
    this.#formEl.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(this.#formEl);
      const payload = Object.fromEntries(formData.entries());
      this.#onSubmit?.(payload);
    });
  }

  clearErrors() {
    this.#formEl.querySelectorAll(".form-error").forEach(el => (el.textContent = ""));
    this.#formEl.querySelectorAll(".is-invalid").forEach(el => el.classList.remove("is-invalid"));
  }

  showErrors(errors) {
    this.clearErrors();
    errors.forEach(({ field, message }) => {
      const input = qs(`[name="${field}"]`, this.#formEl);
      const slot  = qs(`[data-error-for="${field}"]`, this.#formEl);
      input?.classList.add("is-invalid");
      if (slot) slot.textContent = message;
    });
  }

  showStatus(message, type = "info") {
    if (!this.#statusEl) return;
    this.#statusEl.textContent = message;
    this.#statusEl.dataset.type = type;
  }

  setSubmitting(isSubmitting) {
    const btn = this.#formEl.querySelector('button[type="submit"]');
    if (!btn) return;
    btn.disabled = isSubmitting;
    btn.textContent = isSubmitting ? "Enviando…" : "Enviar mensaje";
  }

  reset() {
    this.#formEl.reset();
    this.clearErrors();
  }
}