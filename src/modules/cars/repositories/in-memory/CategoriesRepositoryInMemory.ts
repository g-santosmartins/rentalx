import { Category } from "../../entities/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "../ICategoriesRepository";


class CategoriesRepositoryInMemory implements ICategoriesRepository{

  categories: Category[] = []

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = new Category();


    // mounting an object
    Object.assign(category, {
      name,
      description
    })
    // pushing category
    this.categories.push(category)
  }
  async list(): Promise<Category[]> {
    // listing all categories
    const all = this.categories
    return all
  }
  async findByName(name: string): Promise<Category> {

    // finding category
    const category = this.categories.find(category => category.name ===name)
    return category
  }

}


export {CategoriesRepositoryInMemory}