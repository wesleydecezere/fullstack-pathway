import { lastOperandSize } from './utils/last-operand-size.js';
import { calc } from '../calculator/calculator.js';

import { formatOperator } from './utils/format-operator.js';

class Visor {
  constructor(visorContext) {
    this.visorHist = visorContext.visorHist
    this.visorOut = visorContext.visorOut
  }

  erase() {
    const expressions = this.visorHist.innerHTML.split('<br>')
    let lastExpression = expressions.at(-1).slice(0, -1).trim()
    expressions[expressions.length - 1] = lastExpression

    this.visorHist.innerHTML = expressions.join('<br>')
    this.visorOut.value = calc(lastExpression)
  }

  clearAll() {
    this.visorHist.innerHTML = ''
    this.visorOut.value = '0'
  }

  clearEntry() {
    this.visorHist.innerHTML = this.visorHist.innerHTML.split('<br>').slice(0, -1).join('<br>') + '<br>'
    this.visorOut.value = '0'
  }

  put(value) {
    let lastExpression = this.visorHist.innerHTML.split('<br>').at(-1)
    let answer = this.visorOut.value

    if (lastOperandSize(lastExpression) >= 8) return

    if (value.match(/^\d+$/)) answer = calc(lastExpression + value)
    else value = formatOperator(value, lastExpression, answer)

    // answer, expression = value.match() ?
    //   calc(expression) :
    //   formatOperator(answer, value)

    this.visorOut.value = answer
    this.visorHist.innerHTML += value
    this.visorHist.scrollTop = this.visorHist.scrollHeight
  }
}

export default Visor