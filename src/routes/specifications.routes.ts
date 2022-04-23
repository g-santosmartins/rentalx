import {Router, Request, Response} from 'express'
import ensureAuthenticated from '../middleware/ensureAuthenticated'
import { CreateSpecificationController } from '../modules/cars/useCases/createSpecification/CreateSpecificationController'
import { ListCategoriesController } from '../modules/cars/useCases/listCategories/ListCategoriesController'
import { listSpecificationsController } from '../modules/cars/useCases/listSpecifications/ListSpecificationsController'
// import { createSpecificationController } from '../modules/cars/useCases/createSpecification'

const specificationsRoutes = Router()

// call it here as a middleware, to use in all routes
specificationsRoutes.use(ensureAuthenticated)

const createSpecificationController = new CreateSpecificationController()

const listSpecificationController = new listSpecificationsController()

specificationsRoutes.post("/", (request: Request, response: Response) => {
  return createSpecificationController.handle(request, response)
})

specificationsRoutes.get("/", (request: Request, response: Response) => {
  return listSpecificationController.handle(request, response)
})

export {specificationsRoutes}