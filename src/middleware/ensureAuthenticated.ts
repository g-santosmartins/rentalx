import { Response, Request, NextFunction } from "express"
import { verify } from 'jsonwebtoken'
import { AppError } from "../errors/AppError";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayload {
  sub: string;
}

// middleware to validate the token before the request of something
export default async function ensureAuthenticated(request: Request, reponse: Response, next: NextFunction) {
  //Bearer - 123ho123i12io3hj12io3h12io3

  const authHeader = request.headers.authorization

  if (!authHeader) {
    throw new AppError("Token is missing", 401)
  }

  const [, token] = authHeader.split(" ")

  try {

    // as was used here to associate the IPayload interface with the return
    const { sub: user_id } = verify(
      token,
      "e65bdb6c4759008269e9ded066c11d64"
    ) as IPayload

    const usersRepository = new UsersRepository()
    const user = await usersRepository.findById(user_id)

    if(!user) {
      throw new AppError("User does not exists!", 401)
    }

    // it needs a next() to procedure
    next()

  } catch {
    throw new AppError("Invalid Token", 401)
  }
}