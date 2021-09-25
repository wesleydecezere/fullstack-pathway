import { lastOperandSize } from './utils/last-operand-size.js';
import { calc } from '../calculator/calculator.js';

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
    console.log('value: ' + value)

    if (!isNaN(value)) {
      if (lastOperandSize(lastExpression) >= 8) {
        this.visorOut.value = answer
        return
      }

      lastExpression += value
      answer = calc(lastExpression)
      console.log('answer: ' + answer)
    } else if (value === '=') {
      value = ` = ${answer}<br>`
    } else if (lastExpression.length == 0) {
      // caso do undefined
      value = `${answer} ${value} `
    } else {
      value = ` ${value} `
    }

    this.visorOut.value = answer
    this.visorHist.innerHTML += value
    this.visorHist.scrollTop = this.visorHist.scrollHeight
  }
}

export default Visor