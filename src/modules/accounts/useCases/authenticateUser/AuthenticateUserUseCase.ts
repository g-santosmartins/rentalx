import { compare } from "bcrypt"
import { sign } from "jsonwebtoken"
import { inject, injectable } from "tsyringe"
import { AppError } from "../../../../errors/AppError"
import { User } from "../../entities/user"

import { IUsersRepository } from "../../repositories/IUsersRepository"


interface IRequest {
  email: string,
  password: string
}

interface IResponse {
  user: {
    name: string,
    email: string
  },
  token: string
}

@injectable()
class AuthenticateUserUseCase {


  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) { }
  async execute({ email, password }: IRequest): Promise<IResponse> {

    const user = await this.usersRepository.findByEmail(email)

    //check if user exists
    if (!user) {
      // to prevent brute force attacks
      throw new AppError("Email or password incorrect")
    }

    const passwordMatch = await compare(password, user.password)


    if (!passwordMatch) {
      throw new AppError("Email or password incorrect")
    }


    // MD5 hash from e65bdb6c4759008269e9ded066c11d64 - cursoIgniteRocket
    const token = sign({}, "e65bdb6c4759008269e9ded066c11d64", {
      subject: user.id,
      expiresIn: "1d"
    })

    const tokenReturn: IResponse = {
      token,
      user: {
        name: user.name,
        email: user.email
      }
    }

    // returning user and token to who requests it
    return tokenReturn
  }
}

export { AuthenticateUserUseCase }