import { container } from 'tsyringe';

import {Response, Request} from 'express'
import { ListCategoriesUseCase } from './ListCategoriesUseCase';

class ListCategoriesController {
  
  async handle(request: Request, response: Response): Promise<Response>{
    const listCategoryUseCase = container.resolve(ListCategoriesUseCase)

    const categoriesResponse = await listCategoryUseCase.execute()
    return response.status(201).json(categoriesResponse)
  }
}
export { ListCategoriesController }