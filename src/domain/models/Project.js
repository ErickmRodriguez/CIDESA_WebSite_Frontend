export class Project {
  constructor({ id, title, category, image, description = "" }) {
    this.id = id;
    this.title = title;
    this.category = category;
    this.image = image;
    this.description = description;
  }

  matchesFilter(filter) {
    return filter === "all" || this.category === filter;
  }
}