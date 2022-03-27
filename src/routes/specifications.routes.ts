import {Router, Request, Response} from 'express'
import ensureAuthenticated from '../middleware/ensureAuthenticated'
import { CreateSpecificationController } from '../modules/cars/useCases/createSpecification/CreateSpecificationController'
import { ListCategoriesController } from '../modules/cars/useCases/listCategories/ListCategoriesController'
// import { createSpecificationController } from '../modules/cars/useCases/createSpecification'

const specificationsRoutes = Router()

// call it here as a middleware
specificationsRoutes.use(ensureAuthenticated)

const createSpecificationController = new CreateSpecificationController()

const listSpecificationController = new ListCategoriesController()

specificationsRoutes.post("/", (request: Request, response: Response) => {
  return createSpecificationController.handle(request, response)
})

specificationsRoutes.get("/", (request: Request, response: Response) => {
  return listSpecificationController.handle(request, response)
})

export {specificationsRoutes}