import { Response, Request } from 'express'
import { container } from 'tsyringe'
import { UpdataUserAvatarUseCase } from './UpdateUserAvatarUseCase'

class UpdateUserAvatarController {
   async handle(request: Request, response: Response) {
      const {id} = request.user

      // receiving the file
      const avatar_file = null

      const updateUserAvatarUseCase =  container.resolve(UpdataUserAvatarUseCase)

      await updateUserAvatarUseCase.execute({user_id: id, avatar_file})

      return response.status(200).send()
   }
}

export { UpdateUserAvatarController }