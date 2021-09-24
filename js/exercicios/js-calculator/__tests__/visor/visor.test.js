import 'core-js/proposals/relative-indexing-method'
import 'core-js/features/array/at'
import 'core-js/web/dom-collections'
import 'core-js/features/dom-collections/iterator'
import 'core-js/features/dom-collections/for-each'

import '@testing-library/jest-dom/extend-expect'
import { JSDOM } from 'jsdom'
import fs from 'fs'
import path from 'path'

import Visor from '../../js/visor/visor'


const html = fs.readFileSync(path.resolve(__dirname.replace('__tests__\\visor', ''), './index.html'), 'utf8');
let dom = new JSDOM(html, { runScripts: 'dangerously', resources: 'usable' })
let document = dom.window.document

let visorOut
let visorHist
let visor

beforeEach(() => {
  //dom = new JSDOM(html, { runScripts: 'dangerously', resources: 'usable' })
  //document = dom.window.document

  //visorOut = document.getElementsByClassName('visor-out')[0]
  //visorHist = document.getElementsByClassName('visor-hist')[0]

  visorOut = { value: 0 }
  visorHist = { innerHTML: '' }

  visor = new Visor({ visorOut, visorHist })
})

describe('Inserção de caracteres numéricos', () => {
  test('Deve inserir corretamente um novo caractere numerico', () => {
    const number = '0'

    visor.put(number)
    expect(visorOut.value).toBe(0)
    expect(visorHist.innerHTML).toBe('0')
  })
  test('Deve acrescentar corretamente um caractere numerico', () => {
    const number = '1'

    visorOut.value = 0
    visorHist.innerHTML = '0'

    visor.put(number)
    expect(visorOut.value).toBe(1)
    expect(visorHist.innerHTML).toBe('1')
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
