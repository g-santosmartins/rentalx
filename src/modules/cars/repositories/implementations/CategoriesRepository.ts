import { Category } from "../../entities/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO
} from "../ICategoriesRepository";

import { getRepository, Repository } from 'typeorm'

// a layer to treat data, so routes can be free of this kind of task

// DTO -> Data Transfer object

class CategoriesRepository
  implements ICategoriesRepository {

  private repository: Repository<Category>

  private static INSTANCE: CategoriesRepository;

  constructor() {
    this.repository = getRepository(Category)
  }
  async create({ name, description }: ICreateCategoryDTO):  Promise<void>{

   const category = this.repository.create({
      description,
      name,
   })

    await this.repository.save(category)

  }
  // lists all categories repo method
  async list(): Promise<Category[]>{
    const categories = await this.repository.find()
    console.log(categories)
    return categories
  }

  // Validates if the name was repeated
  async findByName(name: string): Promise<Category> {
    const category = await this.repository.findOne({name})
    return category
  }
}

export { CategoriesRepository }