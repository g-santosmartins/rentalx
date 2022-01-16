import { Router} from 'express'
import { createCategoryController } from '../modules/cars/useCases/createCategory'
import { listCategoriesController } from '../modules/cars/useCases/listCategories'

const categoriesRoutes = Router()

// Route to register a new category based on the params
categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response)
})

categoriesRoutes.get("/", (request, response) => {
  return listCategoriesController.handle(request, response)
})

export { categoriesRoutes }
