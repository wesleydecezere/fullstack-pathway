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
    test('Deve inserir corretamente um novo caractere numerico', () => {
      const number = '0'

      visor.put(number)
      expect(visorOut.value).toBe(0)
      expect(visorHist.innerHTML).toBe('0')
    })
    test('Deve acrescentar corretamente um caractere numerico', () => {
      const number = '123'

      visorOut.value = 0
      visorHist.innerHTML = '0'

      visor.put(number)
      expect(visorOut.value).toBe(123)
      expect(visorHist.innerHTML).toBe('0123')
    })
    test('Quando inserir mais de 8 caracteres em um mesmo número, deve ignorar os caracteres extra', () => {
      const characters = '1234567890'.split('')

      characters.forEach(c => visor.put(c))
      expect(visorOut.value).toBe(12345678)
      expect(visorHist.innerHTML).toBe('12345678')
    })
  })

  describe('Inserção de operadores', () => {
    test('Deve inserir corretamente um novo operador', () => {
      const operator = '+'

      visor.put(operator)
      expect(visorOut.value).toBe(0)
      expect(visorHist.innerHTML).toBe('0 + ')
    })
    test('Deve inserir corretamente qualquer operador', () => {
      const operators = '+ - * / **'.split(' ')

      operators.forEach(op => visor.put(op))
      expect(visorOut.value).toBe(0)
      expect(visorHist.innerHTML).toBe('0 ' + operators.join('  ') + ' ')
    })
    test('Ao inserir operador "=", deve acrescentar resultado expressão e uma quebra de linha', () => {
      const operator = '='
      const expression = '1 + 2 * 3'

      visorHist.innerHTML = '1 + 2 * 3'
      visorOut.value = 7

      visor.put(operator)
      expect(visorOut.value).toBe(7)
      expect(visorHist.innerHTML).toBe(expression + ' = 7<br>')
    })
  })
})

describe('erase', () => {
  test('Deve eliminar o último caractere numerico da expressão e recalcular o seu valor', () => {
    visorHist.innerHTML = '1 + 2 * 12'
    visorOut.value = 24

    visor.erase()

    expect(visorHist.innerHTML).toBe('1 + 2 * 1')
    expect(visorOut.value).toBe(3)
  })
  test('Quando último(s) caractere(s) da expressão for um operador, deve eliminá-lo corretamente e recalcular o valor da expressão', () => {
    visorHist.innerHTML = '1 + 3 ** 2'
    visorOut.value = 10

    visor.erase()
    visor.erase()

    expect(visorHist.innerHTML).toBe('1 + 3')
    expect(visorOut.value).toBe(4)
  })
  test('Quando houver mais de uma expressão no histórico, deve eliminar o último caractere da expressão atual e recalcular o seu valor', () => {
    const hist = '1 + 2 * 12 = 25<br>2 + 4 * 24 = 98<br>4 + 8 * 48'

    visorHist.innerHTML = hist
    visorOut.value = 388
    visor.erase()

    expect(visorHist.innerHTML).toBe(hist.slice(0, -1))
    expect(visorOut.value).toBe(36)
  })
  test('Quando houver mais de uma expressão no histórico e nenhum caractere na expressão atual, o comando de erase não deve ter efeito sobre nenhuma outra expressão, mas deve recalcular o valor da expressão atual', () => {
    const hist = '1 + 2 * 12 = 25<br>2 + 4 * 24 = 98<br>'

    visorHist.innerHTML = hist
    visorOut.value = 394
    visor.erase()

    expect(visorHist.innerHTML).toBe(hist)
    expect(visorOut.value).toBe(0)
  })
})

describe('clear entry', () => {
  test('Quando houver somente uma expressão, deve apagá-la', () => {
    visorHist.innerHTML = '1 + 2 * 12'
    visorOut.value = 24

    visor.clearEntry()

    expect(visorHist.innerHTML).toBe('')
    expect(visorOut.value).toBe(0)
  })
  test('Quando houver mais de uma expressão no histórico, deve apagar somente expressão atual', () => {
    visorHist.innerHTML = '1 + 2 * 12 = 25<br>2 + 4 * 24 = 98<br>4 + 8 * 48'
    visorOut.value = 388

    visor.clearEntry()

    expect(visorHist.innerHTML).toBe('1 + 2 * 12 = 25<br>2 + 4 * 24 = 98<br>')
    expect(visorOut.value).toBe(0)
  })
})