import { Category } from "../../entities/Category"
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository"


class ListCategoriesUseCase {
  // Little hack with private here
  constructor(private categoriesRepository: ICategoriesRepository) {}

    execute(): Category[] {
      const categories = this.categoriesRepository.list()

      return categories
  }
}

export { ListCategoriesUseCase }