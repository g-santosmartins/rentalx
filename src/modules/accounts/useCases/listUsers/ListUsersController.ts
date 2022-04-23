import { container } from "tsyringe";
import { Request, Response } from "express";
import { ListUsersUseCase } from "./ListUsersUseCase";

class ListUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    // const { name, email,  password, driver_license } = request.body;

    const listUsersUseCase = container.resolve(ListUsersUseCase);

    const listOfUsers =  await listUsersUseCase.execute();

    // filtering the password function
    const listOfUsersFiltered = []
    listOfUsers.map((item) => {
      delete item.password
      listOfUsersFiltered.push(item)
    })
    
    return response.status(201).json(listOfUsersFiltered);
  }
}
export {ListUsersController}