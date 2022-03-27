import { Repository, getRepository } from "typeorm";
import { Specification } from "../../entities/Specification";
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository
} from "../ISpecificationRepository";

class SpecificationsRepository implements ISpecificationsRepository {
  private repository: Repository<Specification>
  private specifications: Specification[]

  constructor() {
    this.repository = getRepository(Specification)
    
  }
  async create({ description, name }: ICreateSpecificationDTO): Promise<void> {
    const specification = this.repository.create({
      name,
      description,
    })
    console.log(specification)

    await this.repository.save(specification)
  }

   // lists all specifications repo method
  async list() : Promise<Specification[]> {
    const specifications = await this.repository.find()
    return specifications
  }

   // Validates if the name was repeated
   async findByName(name: string): Promise<Specification> {
    const specification = await this.repository.findOne({name})
    return specification
  }
}

export { SpecificationsRepository }