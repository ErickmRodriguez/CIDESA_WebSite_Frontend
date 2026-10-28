export class FilterProjectsUseCase {
  /**
   * @param {Project[]} projects
   * @param {string} filter
   */
  execute(projects, filter) {
    return projects.filter(p => p.matchesFilter(filter));
  }
}