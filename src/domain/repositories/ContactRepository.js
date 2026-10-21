/**
 * @interface
 */
export class ContactRepository {
  /** @param {import('../models/ContactMessage.js').ContactMessage} message */
  async save(_message) { throw new Error("Not implemented"); }
}