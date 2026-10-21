export class Service {
  constructor({ id, icon, title, description }) {
    if (!id || !title) throw new Error("Service requiere id y title");
    this.id = id;
    this.icon = icon ?? "•";
    this.title = title;
    this.description = description ?? "";
  }
}