import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entities/User";


interface IUsersRepository {
    // methods
    create(data: ICreateUserDTO): Promise<void>;
    findByEmail(email: string) : Promise<User>;
    findById(id: string) : Promise<User>
    list() : Promise<User[]>
    
}


export {IUsersRepository}