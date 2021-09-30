import { solve } from "../../js/calculator/calculator"

describe('Operações normais', () => {
  test('Deve efetuar operações básicas corretamente', () => {
    const expression = '1 + 2 * 6 / 4'

    expect(solve(expression)).toBe(4)
  })

  test('Deve efetuar operações exponenciais corretamente', () => {
    const expression = '2 ** 2 ** 0.5 ** -1'

    expect(solve(expression)).toBe(16)
  })
})

describe('Operações anormais', () => {
  test('Deve utilizar o último operador inserido, quando houver mais de um operador entre dois operandos', () => {
    const expression = '1 + 2 * / - / 4'

    expect(solve(expression)).toBe(1.5)
  })
  test('Deve retornar a expressão efetivamente calculada, além do resultado', () => {
    const expression = '1 + 2 * / - / 4 - 2 / * 2'

    let answer
    let newExpression
    [answer, newExpression] = solve(expression)

    expect(answer).toBe(2)
    expect(expression).toBe('1 + 2 / 4 * 2')
  })
  test('Deve interpretar um número iniciado por zero como decimal, e não octal', () => {
    const expression = '0123'

    expect(solve(expression)).toBe(123)
  })
})


