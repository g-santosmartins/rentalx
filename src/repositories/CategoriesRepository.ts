import { Category } from "../model/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "./ICategoriesRepository";

// a layer to treat data, so routes can be free of this kind of task

// DTO -> Data Transfer object

class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = []
  }

  // creates a new category repo method
  create({ name, description } :  ICreateCategoryDTO): void {

    // uuid initializes here
    const categoriesArray = new Category()

    Object.assign(categoriesArray,
      {
        name,
        description,
        createdAt: new Date(),
      }
    );

    console.log(categoriesArray)
    this.categories.push(categoriesArray)
  }

  // lists all categories repo method
  list(): Category[] {
    return this.categories
  }

  // Validates if the name was repeated
  findByName(name: string): Category {
    const category = this.categories.find((category) => category.name === name)
    return category
  }
}

export { CategoriesRepository }