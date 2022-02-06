import { Category } from "../entities/Category";

// typing for DTO
interface ICreateCategoryDTO {
  name: string;
  description: string;
}

// A deal for liskov principle
interface ICategoriesRepository {
  findByName(name: string):Category
  list(): Category[]
  create({name, description} : ICreateCategoryDTO):void
}

export {ICategoriesRepository, ICreateCategoryDTO}