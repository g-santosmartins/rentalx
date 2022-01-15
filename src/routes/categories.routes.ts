import { Router, Request, Response } from 'express'
import { CategoriesRepository } from '../repositories/CategoriesRepository'

const categoriesRoutes = Router()

const categoriesRepository = new CategoriesRepository()

// Route to register a new category based on the params
categoriesRoutes.post("/", (request: Request, response: Response) => {
  const { name, description } = request.body

  const categoryAlreadyExists = categoriesRepository.findByName(name)

  if(categoryAlreadyExists) {
    return response.status(400).json({ message: "Category has already been declared, please try another name"})
  }

  categoriesRepository.create({name, description})
  return response.status(201).send()
})

categoriesRoutes.get("/", (request: Request, response: Response) => {
  const all = categoriesRepository.list()
  // returns all categories
  return response.status(200).json(all)
})

export { categoriesRoutes }
