import { ICreateUserDTO } from "../dtos/ICreateUserDTO";


interface IUsersRepository {
    // methods

    create(data: ICreateUserDTO): Promise<void>;

}


export {IUsersRepository}