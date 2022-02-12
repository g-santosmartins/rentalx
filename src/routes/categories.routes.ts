import { Router} from 'express'
import multer from 'multer'

// import  createCategoryController  from '../modules/cars/useCases/createCategory'

import { CreateCategoryController } from '../modules/cars/useCases/createCategory/CreateCategoryController'
import { importCategoryController } from '../modules/cars/useCases/importCategory'
import { listCategoriesController } from '../modules/cars/useCases/listCategories'

const categoriesRoutes = Router()

const upload = multer({
  dest: "./tmp",
})

const createCategoryController = new CreateCategoryController()

// Route to register a new category based on the params
categoriesRoutes.post("/", createCategoryController.handle)

categoriesRoutes.get("/", (request, response) => {
  return listCategoriesController.handle(request, response)
})

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
  return importCategoryController.handle(request, response)
})

export { categoriesRoutes }
