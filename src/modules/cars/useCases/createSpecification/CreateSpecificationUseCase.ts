import { inject, injectable } from "tsyringe";
import { isFunctionDeclaration } from "typescript";
import { ISpecificationsRepository } from "../../repositories/ISpecificationRepository";


interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationUseCase {

  constructor(
    @inject("SpecificationsRepository")
    private specificationsRepository: ISpecificationsRepository) { }

  execute({ name, description }: IRequest): void {

    const specificationAlreadExists = this.specificationsRepository.findByName(name);

    if (specificationAlreadExists) {
      throw new Error("Specification already exists!")
    }
    this.specificationsRepository.create({
      name,
      description
    })
  }
}


export { CreateSpecificationUseCase }


name => console.log(name) //arrow functions


