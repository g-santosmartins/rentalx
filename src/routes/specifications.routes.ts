import {Router, Request, Response} from 'express'
import ensureAuthenticated from '../middleware/ensureAuthenticated'
import { CreateSpecificationController } from '../modules/cars/useCases/createSpecification/CreateSpecificationController'
// import { createSpecificationController } from '../modules/cars/useCases/createSpecification'

const specificationsRoutes = Router()

// call it here as a middleware
specificationsRoutes.use(ensureAuthenticated)

const createSpecificationController = new CreateSpecificationController()

specificationsRoutes.post("/", (request: Request, response: Response) => {
  return createSpecificationController.handle(request, response)
 
})



export {specificationsRoutes}