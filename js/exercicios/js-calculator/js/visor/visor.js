import { lastOperandSize } from './utils/last-operand-size.js';
import { calc } from '../calculator/calculator.js';
import { formatOperator } from './utils/format-operator.js';

class Visor {
  constructor(visorContext) {
    this.hist = visorContext.visorHist
    this.out = visorContext.visorOut
  }

  getLastExpression() {
    return this.hist.innerHTML.split('<br>').at(-1)
  }

  erase() {
    this.hist.innerHTML = this.hist.innerHTML.replace(/(\s[\+\-\*\/]+\s$)|(\d$)/, '')
    this.out.value = calc(this.getLastExpression())
  }

  clearAll() {
    this.hist.innerHTML = ''
    this.out.value = 0
  }

  clearEntry() {
    const history = this.hist.innerHTML

    this.hist.innerHTML = history.includes('<br>') ?
      history.replace(/(.*<br>).*$/, '$1')
      : ''

    this.out.value = 0
  }

  put(value) {
    let lastExpression = this.hist.innerHTML.split('<br>').at(-1)
    let answer = this.out.value

    if (lastOperandSize(lastExpression) >= 8) return

    if (value.match(/^\d+$/)) answer = calc(lastExpression + value)
    else value = formatOperator(value, lastExpression, answer)

    // answer, expression = value.match() ?
    //   calc(expression) :
    //   formatOperator(answer, value)

    this.out.value = answer
    this.hist.innerHTML += value
    this.hist.scrollTop = this.hist.scrollHeight
  }
}

export default Visor