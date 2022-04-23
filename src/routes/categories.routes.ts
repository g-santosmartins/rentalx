import { Router} from 'express'
import multer from 'multer'

// import  createCategoryController  from '../modules/cars/useCases/createCategory'

import { CreateCategoryController } from '../modules/cars/useCases/createCategory/CreateCategoryController'
import { ImportCategoryController } from '../modules/cars/useCases/importCategory/ImportCategoryController'
import { ListCategoriesController } from '../modules/cars/useCases/listCategories/ListCategoriesController'

const categoriesRoutes = Router()

const upload = multer({
  dest: "./tmp",
})

// internal imports Controllers
const createCategoryController = new CreateCategoryController()

const listCategoriesController = new ListCategoriesController()

const importCategoryController = new ImportCategoryController()

// Route to register a new category based on the params
categoriesRoutes.post("/", createCategoryController.handle)

categoriesRoutes.get("/", (request, response) => {
  return listCategoriesController.handle(request, response)
})

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
  return importCategoryController.handle(request, response)
})

export { categoriesRoutes }
