import { calc } from "../../js/calculator/calculator"

describe('Operações normais', () => {
  test('Deve efetuar operações básicas corretamente', () => {
    const expression = '1 + 2 * 6 / 4'

    expect(calc(expression)).toBe(4)
  })

  test('Deve efetuar operações exponenciais corretamente', () => {
    const expression = '2 ** 2 ** 0.5 ** -1'

    expect(calc(expression)).toBe(16)
  })
})

describe('Operações anormais', () => {
  test('Deve utilizar o último operador inserido, quando houver mais de um operador entre dois operandos', () => {
    const expression = '1 + 2 * / - / 4'

    expect(calc(expression)).toBe(1.5)
  })
  test('Deve retornar a expressão efetivamente calculada, além do resultado', () => {

  })
})
