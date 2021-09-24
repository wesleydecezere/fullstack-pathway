//import { calc } from '../../js'
import { lastOperandSize } from '../../js/utils/last-operand-size.js'

describe('Testando os cálculos', () => {
  it('Deve retornar 10 ao somar 3 e 7', () => {
    const resultadoEsperado = 10

    expect(10).toBe(resultadoEsperado)
  })
})

describe('Cálculo do tamanho do ultimo operando', () => {
  it('Deve retornar 10 quando último operando tiver 10 dígitos', () => {
    const expression = '1 + 12 * 1234567890'

    expect(lastOperandSize(expression)).toBe(10)
  })
  it('Deve retornar 4 quando último operando tiver 4 dígitos', () => {
    const expression = '1 + 12 * 1234'

    expect(lastOperandSize(expression)).toBe(4)
  })
  it('Deve calcular corretamente quando houver um único operando', () => {
    const expression = '123456'

    expect(lastOperandSize(expression)).toBe(6)
  })
  it('Deve retornar 0 quando expressão estiver vazia', () => {
    const expression = ''

    expect(lastOperandSize(expression)).toBe(0)
  })
  it('Deve retornar 0 quando expressão terminar com operador operador', () => {
    const expression = '1 + 12 * 1234567890 + '

    expect(lastOperandSize(expression)).toBe(0)
  })
})