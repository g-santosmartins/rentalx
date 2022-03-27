import { Specification } from "../entities/Specification"


interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({description, name} : ICreateSpecificationDTO):void 
  list(): Promise<Specification[]>
  findByName(name: string): Promise<Specification>
}

export {ISpecificationsRepository,ICreateSpecificationDTO }