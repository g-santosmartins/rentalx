import { ICreateUserDTO } from "../dtos/ICreateUserDTO";


interface IUsersRepository {
    findByEmail(email: string);
    // methods

    create(data: ICreateUserDTO): Promise<void>;

}


export {IUsersRepository}