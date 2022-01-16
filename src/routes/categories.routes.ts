import { Router} from 'express'
import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository'
import { createCategoryController } from '../modules/cars/useCases/createCategory'

const categoriesRoutes = Router()

const categoriesRepository = new CategoriesRepository()

// Route to register a new category based on the params
categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response)
})

categoriesRoutes.get("/", (request, response) => {
  const all = categoriesRepository.list()
  // returns all categories
  return response.status(200).json(all)
})

export { categoriesRoutes }
