// first test how to write tests

import { Not } from "typeorm"

// Block - unit testes
describe("Criar categoria", () => {

  // One unit test
  it("Espero que 2 + 2 seja 4", () => {
    
    // testing a premisse
    const soma =  2 + 2
    const resultado = 4

    // comparing and expecting some result
    expect(soma).toBe(resultado)
  })

  it("Espero que 2 mais dois não seja 5", () => {
     // testing a premisse
     const soma =  2 + 2
     const resultado = 5


     expect(soma).not.toBe(resultado)
  })

}) 