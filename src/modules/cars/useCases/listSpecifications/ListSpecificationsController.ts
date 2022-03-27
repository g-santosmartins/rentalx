import { Response, Request } from "express"
import { container } from "tsyringe"
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase"


class listSpecificationsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listSpecificationsUseCase = container.resolve(ListSpecificationsUseCase)

    const specificationsResponse = await listSpecificationsUseCase.execute()
    return response.status(201).json(specificationsResponse)
  }
}

export { listSpecificationsController }