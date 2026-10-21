export class ContactMessage {
  constructor({ name = "", email = "", phone = "", message = "" }) {
    this.name = name.trim();
    this.email = email.trim().toLowerCase();
    this.phone = phone.trim();
    this.message = message.trim();
    this.createdAt = new Date().toISOString();
  }

  toDTO() {
    return {
      name: this.name,
      email: this.email,
      phone: this.phone,
      message: this.message,
      createdAt: this.createdAt,
    };
  }
}