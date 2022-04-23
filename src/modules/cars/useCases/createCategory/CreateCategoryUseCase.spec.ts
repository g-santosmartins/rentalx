import { AppError } from "../../../../errors/AppError"
import { CategoriesRepositoryInMemory } from "../../repositories/in-memory/CategoriesRepositoryInMemory"
import { CreateCategoryUseCase } from "./CreateCategoryUseCase"


let createCategoryUseCase: CreateCategoryUseCase
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory
// Block - unit testes
describe("Create Category", () => {

  beforeEach(() => {
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory()
    createCategoryUseCase = new CreateCategoryUseCase(categoriesRepositoryInMemory)
  })

  it("should be able to create a new category", async () => {
    const category = {
      name: "Category test",
      description: "Category description test"
    }

    // creating category test core
    await createCategoryUseCase.execute({
      name:category.name,
      description: category.description
    })

    // finding category by name test core
    const categoryCreated = await categoriesRepositoryInMemory.findByName(category.name)

    console.log("Category Created INFO:", categoryCreated)
    // expecting the created category to have the property ID once it is created
    expect(categoryCreated).toHaveProperty("id")
  })


  it("should not be able to create a new category with name exists", async () => {
    const category = {
      name: "Category Test",
      description: "Category description Test",
    };

    // creating category test core
    await createCategoryUseCase.execute({
      name: category.name,
      description: category.description,
    });
    // expecting an error
    await expect(
      createCategoryUseCase.execute({
        name: category.name,
        description: category.description,
      })
    ).rejects.toEqual(new AppError("Category already exists!"));
  });

})