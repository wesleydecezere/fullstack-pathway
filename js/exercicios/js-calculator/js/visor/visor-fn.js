import { lastOperandSize } from './utils/last-operand-size.js';
import { calc } from '../calculator/calculator.js';
// import { visorOut } from '../index.js'
// import { visorHist } from '../index.js'

function erase() {
  const expressions = visorHist.innerHTML.split('<br>')
  let lastExpression = expressions.at(-1).slice(0, -1).trim()
  expressions[expressions.length - 1] = lastExpression

  visorHist.innerHTML = expressions.join('<br>')
  visorOut.value = calc(lastExpression)
}

function clearAll() {
  visorHist.innerHTML = ''
  visorOut.value = '0'
}

function clearEntry() {
  visorHist.innerHTML = visorHist.innerHTML.split('<br>').slice(0, -1).join('<br>') + '<br>'
  visorOut.value = '0'
}

function put(value) {
  let lastExpression = visorHist.innerHTML.split('<br>').at(-1)
  let answer = visorOut.value
  console.log('value: ' + value)

  if (!isNaN(value)) {
    if (lastOperandSize(lastExpression) >= 8) {
      visorOut.value = answer
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

  visorOut.value = answer
  visorHist.innerHTML += value
  visorHist.scrollTop = visorHist.scrollHeight
}




export default { put, erase, clearEntry, clearAll }