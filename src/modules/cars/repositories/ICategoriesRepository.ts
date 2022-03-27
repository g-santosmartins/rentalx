import { Category } from "../entities/Category";

// typing for DTO
interface ICreateCategoryDTO {
  name: string;
  description: string;
}

// A deal for liskov principle
interface ICategoriesRepository {
  create({name, description} : ICreateCategoryDTO): Promise<void>
  list(): Promise<Category[]>
  findByName(name: string): Promise<Category>
}

export {ICategoriesRepository, ICreateCategoryDTO}