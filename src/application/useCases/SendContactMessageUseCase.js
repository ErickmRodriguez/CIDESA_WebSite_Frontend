import { ContactMessage } from "../../domain/models/ContactMessage.js";

export class SendContactMessageUseCase {
  #repository;
  #validator;

  constructor({ contactRepository, validatorService }) {
    this.#repository = contactRepository;
    this.#validator = validatorService;
  }

  /**
   * @param {{name:string,email:string,phone:string,message:string}} rawData
   * @returns {Promise<{ok:true}|{ok:false, errors:Array}>}
   */
  async execute(rawData) {
    const contactMessage = new ContactMessage(rawData);
    const errors = this.#validator.validate(contactMessage);

    if (errors.length) {
      return { ok: false, errors };
    }

    await this.#repository.save(contactMessage);
    return { ok: true };
  }
}