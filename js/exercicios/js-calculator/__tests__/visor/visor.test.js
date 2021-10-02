import 'core-js/features/array/at'
import 'core-js/features/dom-collections/for-each'

import Visor from '../../js/visor/visor'

// let value
// let innerHTML
let visorOut
let visorHist
let visor

beforeEach(() => {
  // value = 0
  // innerHTML = ''
  // visor = new Visor({ visorOut: { value }, visorHist: { innerHTML } })

  visorOut = { value: 0 }
  visorHist = { innerHTML: '' }
  visor = new Visor({ visorOut, visorHist })
})

describe('put', () => {
  describe('Inserção de caracteres numéricos', () => {
    test('Deve inserir corretamente um novo caractere numérico', () => {
      const number = '0'

      visor.put(number)

      expect(visor.output).toBe(0)
      expect(visor.history).toBe('0')
    })
    test('Deve acrescentar corretamente caracteres numéricos', () => {
      const number = '123'

      visor.output = 0
      visor.history = '0'

      visor.put(number)

      expect(visor.history).toBe('0123')
      expect(visor.output).toBe(123)
    })
    test('Quando inserir mais de 8 caracteres em um mesmo número, deve ignorar os caracteres extra', () => {
      const characters = '1234567890'.split('')

      characters.forEach(c => visor.put(c))

      expect(visor.history).toBe('12345678')
      expect(visor.output).toBe(12345678)
    })
  })

  describe('Inserção de operadores', () => {
    test('Deve inserir corretamente um novo operador', () => {
      const operator = '+'

      visor.put(operator)

      expect(visor.history).toBe('0 + ')
      expect(visor.output).toBe(0)
    })
    test('Deve inserir corretamente qualquer operador', () => {
      const operators = '+ - * / **'.split(' ')

      operators.forEach(op => visor.put(op))

      expect(visor.history).toBe('0 ' + operators.join('  ') + ' ')
      expect(visor.output).toBe(0)
    })
    test('Ao inserir operador "=", deve acrescentar resultado expressão e uma quebra de linha', () => {
      const operator = '='
      const expression = '1 + 2 * 3'

      visor.history = '1 + 2 * 3'
      visor.output = 7

      visor.put(operator)

      expect(visor.history).toBe(expression + ' = 7<br>')
      expect(visor.output).toBe(7)
    })
  })
})

describe('erase', () => {
  test('Deve eliminar o último caractere numerico da expressão e recalcular o seu valor', () => {
    visor.history = '1 + 2 * 12'
    visor.output = 24

    visor.erase()

    expect(visor.history).toBe('1 + 2 * 1')
    expect(visor.output).toBe(3)
  })
  test('Quando último(s) caractere(s) da expressão for um operador, deve eliminá-lo corretamente e recalcular o valor da expressão', () => {
    visor.history = '1 + 3 ** 2'
    visor.output = 10

    visor.erase()
    visor.erase()

    expect(visor.history).toBe('1 + 3')
    expect(visor.output).toBe(4)
  })
  test('Quando houver mais de uma expressão no histórico, deve eliminar o último caractere da expressão atual e recalcular o seu valor', () => {
    const hist = '1 + 2 * 12 = 25<br>2 + 4 * 24 = 98<br>4 + 8 * 48'

    visor.history = hist
    visor.output = 388
    visor.erase()

    expect(visor.history).toBe(hist.slice(0, -1))
    expect(visor.output).toBe(36)
  })
  test.only('Quando houver mais de uma expressão no histórico e nenhum caractere na expressão atual, o comando de erase não deve ter efeito sobre nenhuma outra expressão, mas deve recalcular o valor da expressão atual', () => {
    const hist = '1 + 2 * 12 = 25<br>2 + 4 * 24 = 98<br>'

    visor.history = hist
    visor.output = 394
    visor.erase()

    expect(visor.history).toBe(hist)
    expect(visor.output).toBe(0)
  })
})

describe('clear entry', () => {
  test('Quando houver somente uma expressão, deve apagá-la', () => {
    visor.history = '1 + 2 * 12'
    visor.output = 24

    visor.clearEntry()

    expect(visor.history).toBe('')
    expect(visor.output).toBe(0)
  })
  test('Quando houver mais de uma expressão no histórico, deve apagar somente expressão atual', () => {
    visor.history = '1 + 2 * 12 = 25<br>2 + 4 * 24 = 98<br>4 + 8 * 48'
    visor.output = 388

    visor.clearEntry()

    expect(visor.history).toBe('1 + 2 * 12 = 25<br>2 + 4 * 24 = 98<br>')
    expect(visor.output).toBe(0)
  })
})