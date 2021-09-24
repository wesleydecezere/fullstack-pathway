import { lastOperandSize } from './utils/last-operand-size.js';
import { calc } from './utils/calculator.js';

const visorOut = document.getElementsByClassName('visor-out')[0]
const visorHist = document.getElementsByClassName('visor-hist')[0]

function erase(e) {
  const expressions = visorHist.innerHTML.split('<br>')
  let lastExpression = expressions.at(-1).slice(0, -1).trim()
  expressions[expressions.length - 1] = lastExpression

  visorHist.innerHTML = expressions.join('<br>')
  visorOut.value = calc(lastExpression)
}

function clearAll(e) {
  visorHist.innerHTML = ''
  visorOut.value = '0'
}

function clearEntry(e) {
  visorHist.innerHTML = visorHist.innerHTML.split('<br>').slice(0, -1).join('<br>') + '<br>'
  visorOut.value = ''
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

document.body.addEventListener('click', (e) => {
  const target = e.target

  switch (target.className) {
    case 'key num':
    case 'key op-reg':
      put(target.innerText)
      break;

    case 'key op-exp':
      put('**')
      put(target.value)
      break;

    case 'key op-pct':
      put('/')
      put('100')
      break;

    case 'key cmd':
      let cmd = target.value

      if (cmd === 'backspace') erase()
      if (cmd === 'clear-entry') clearEntry()
      if (cmd === 'clear-all') clearAll()
      break;
  }
})

visorOut.addEventListener('keydown', (e) => {
  const key = e.key
  console.log('key: ' + key)

  e.preventDefault()

  if (key === 'Backspace') erase()
  else if (key === 'Delete') clearEntry()
  else if (key === 'Enter') put('=')
  else if (key === 'Dead') put('**')
  //else if (!isNaN(key) || '=+-*/'.includes(key)) put(key)
  else if (key.match(/[0-9\=\+\-\*\/]/)) put(key)

  return false
})
