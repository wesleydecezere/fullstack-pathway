import { lastOperandSize } from './utils/last-operand-size.js';
import { calc } from '../calculator/calculator.js';
import { formatOperator } from './utils/format-operator.js';

class Visor {
  constructor(visorContext) {
    this.historyEl = visorContext.visorHist
    this.outputEl = visorContext.visorOut
  }

  get history() { return this.historyEl.innerHTML }
  get output() { return this.outputEl.value }
  get lastExpression() { return this.history.split('<br>').at(-1) }

  set history(str) { this.historyEl.innerHTML = str }
  set output(n) { this.outputEl.value = n }

  erase() {
    this.history = this.history.replace(/(\s[\+\-\*\/]+\s$)|(\d$)/, '')
    this.output = calc(this.lastExpression)
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

    if (lastOperandSize(lastExpression) >= 8) return

    if (value.match(/^\d+$/)) answer = calc(lastExpression + value)
    else value = formatOperator(value, lastExpression, answer)

    // answer, expression = value.match() ?
    //   calc(expression) :
    //   formatOperator(answer, value)

    this.output = answer
    this.history += value
    this.historyEl.scrollTop = this.historyEl.scrollHeight
  }
}

export default Visor