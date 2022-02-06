import { Category } from "../entities/Category";

// typing for DTO
interface ICreateCategoryDTO {
  name: string;
  description: string;
}

// A deal for liskov principle
interface ICategoriesRepository {
  findByName(name: string): Promise<Category>
  list(): Promise<Category[]>
  create({name, description} : ICreateCategoryDTO): Promise<void>
}

export {ICategoriesRepository, ICreateCategoryDTO}