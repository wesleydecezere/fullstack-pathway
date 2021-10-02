import { solve } from '../calculator/calculator.js';
import { formatOperator } from './utils/format-operator.js';

class Visor {
  constructor(visorContext) {
    this.historyEl = visorContext.visorHist
    this.outputEl = visorContext.visorOut
  }

  get history() { return this.historyEl.innerHTML }
  get output() { return this.outputEl.value }
  get lastExpression() { return this.history.split('<br>').at(-1) }
  get lastOperand() { return this.lastExpression.split(/\s[\+\-\*\/]+\s?/).at(-1) }

  set history(str) { this.historyEl.innerHTML = str }
  set output(n) { this.outputEl.value = n }

  erase() {
    this.history = this.history.replace(/(\s[\+\-\*\/]+\s$)|(\d$)/, '')
    this.output = solve(this.lastExpression)
  }

  clearAll() {
    this.history = ''
    this.output = 0
  }

  clearEntry() {
    this.history = this.history.includes('<br>') ?
      this.history.replace(/(.*<br>).*$/, '$1')
      : ''

    this.output = 0
  }

  put(value) {
    let lastExpression = this.lastExpression
    let answer = this.output

    if (this.lastOperand.length >= 8) return

    if (value.match(/^\d+$/)) answer = solve(lastExpression + value)
    else value = formatOperator(value, lastExpression, answer)

    this.output = answer
    this.history += value
    this.historyEl.scrollTop = this.historyEl.scrollHeight
  }
}

export default Visor