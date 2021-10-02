import { solve } from "../../js/calculator/calculator"

describe('Operações normais', () => {
  test('Deve efetuar operações básicas corretamente', () => {
    const expression = '1 + 2 * 6 / 4'

    expect(solve(expression)).toBe(4)
  })
  test('Deve efetuar operações exponenciais corretamente', () => {
    const expression = '2 ** 2 ** 0.5 ** -1'

    expect(solve(expression)).toBe(0.5)
  })
})

describe('Operações anormais', () => {
  test('Deve utilizar o último operador inserido, quando houver mais de um operador entre dois operandos', () => {
    const expression = '1 + 2 * / - / 4 - 2 / * 2'

    expect(solve(expression)).toBe(-2.5)
  })
  test('Deve interpretar um número iniciado por zero como decimal, e não octal', () => {
    const expression = '0011 + 0111 + 0011'

    expect(solve(expression)).toBe(133)
  })
})


