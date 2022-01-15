import { Category } from "../model/Category";

// a layer to treat data, so routes can be free of this kind of task

// DTO -> Data Transfer object

interface ICreateCategoryDTO {
  name: string;
  description: string;
}
class CategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = []
  }

  create({ name, description }: ICreateCategoryDTO): void {
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
}

export { CategoriesRepository }