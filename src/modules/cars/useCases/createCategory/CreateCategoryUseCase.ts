import { ICategoriesRepository } from "../../repositories/ICategoriesRepository"


interface IRequest {
  name: string
  description: string
}

class CreateCategoryUseCase {

  // Little hack with private here
  constructor(private categoriesRepository: ICategoriesRepository) {}

  async execute({ name, description }: IRequest): Promise<void> {

    const categoryAlreadyExists = await this.categoriesRepository.findByName(name)

    if (categoryAlreadyExists) {
      throw new Error("Category has already been declared, please try another name")
    }

    this.categoriesRepository.create({ name, description })
  }
}


export { CreateCategoryUseCase }