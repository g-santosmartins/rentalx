import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entities/user";


interface IUsersRepository {
    // methods
    findByEmail(email: string) : Promise<User>;

    create(data: ICreateUserDTO): Promise<void>;

}


export {IUsersRepository}