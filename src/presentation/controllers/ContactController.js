export class ContactController {
  #view;
  #sendContactMessageUseCase;

  constructor({ view, sendContactMessageUseCase }) {
    this.#view = view;
    this.#sendContactMessageUseCase = sendContactMessageUseCase;
  }

  init() {
    this.#view.bindSubmit((payload) => this.#handleSubmit(payload));
  }

  async #handleSubmit(payload) {
    this.#view.clearErrors();
    this.#view.showStatus("");
    this.#view.setSubmitting(true);

    try {
      const result = await this.#sendContactMessageUseCase.execute(payload);

      if (!result.ok) {
        this.#view.showErrors(result.errors);
        this.#view.showStatus("Revisa los campos marcados en rojo.", "error");
        return;
      }

      this.#view.reset();
      this.#view.showStatus("¡Mensaje enviado con éxito! Te contactaremos pronto.", "success");
    } catch (error) {
      console.error("[ContactController] Fallo en el envío:", error);
      this.#view.showStatus("Ocurrió un error al enviar el mensaje. Intenta de nuevo.", "error");
    } finally {
      this.#view.setSubmitting(false);
    }
  }
}