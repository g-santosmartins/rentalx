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
    this.specifications = []
  }

  async create({ description, name }: ICreateSpecificationDTO) {
    const specification = this.repository.create({
      name,
      description,
    })
    console.log(specification)

    await this.repository.save(specification)
  }

  async list() : Promise<Specification[]> {
    return this.specifications
  }

  async findByName(name: string): Promise<Specification> {
    const specification = this.specifications.find(
      specification => specification.name === name
    )
    return specification
  }
}

export { SpecificationsRepository }