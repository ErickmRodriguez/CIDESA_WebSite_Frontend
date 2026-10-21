export class ValidatorService {
  /** @param {import('../../domain/models/ContactMessage.js').ContactMessage} msg */
  validate(msg) {
    const errors = [];

    if (!msg.name) {
      errors.push({ field: "name", message: "El nombre es obligatorio." });
    } else if (msg.name.length < 2) {
      errors.push({ field: "name", message: "El nombre es demasiado corto." });
    }

    if (!msg.email) {
      errors.push({ field: "email", message: "El email es obligatorio." });
    } else if (!this.#isValidEmail(msg.email)) {
      errors.push({ field: "email", message: "El email no es válido." });
    }

    if (!msg.message) {
      errors.push({ field: "message", message: "El mensaje es obligatorio." });
    } else if (msg.message.length < 10) {
      errors.push({ field: "message", message: "El mensaje debe tener al menos 10 caracteres." });
    }

    return errors;
  }

  #isValidEmail(value) {
    // Validación razonable sin caer en regex sobre-ingeniería.
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }
}