function erase() {
  const visorHist = document.getElementsByClassName('visor-hist')[0]

  const expressions = visorHist.innerHTML.split('<br>')
  let lastExpression = expressions.at(-1).slice(0, -1).trim()
  expressions[expressions.length - 1] = lastExpression

  visorHist.innerHTML = expressions.join('<br>')
  visorOut.value = calc(lastExpression)
}

function clearAll() {
  document.getElementsByClassName('visor-hist')[0].innerHTML = ''
  document.getElementsByClassName('visor-out')[0].value = '0'
}

function clearEntry() {
  const visorHist = document.getElementsByClassName('visor-hist')[0]

  visorHist.innerHTML = visorHist.innerHTML.split('<br>').slice(0, -1).join('<br>') + '<br>'
  document.getElementsByClassName('visor-out')[0].value = ''
}

function put(value) {
  const visorOut = document.getElementsByClassName('visor-out')[0]
  const visorHist = document.getElementsByClassName('visor-hist')[0]

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

function calc(expression) {
  let r
  let nExp = expression

  try {
    r = new Function(`return ${expression}`)()
  }
  catch (error) {
    //r = calc(expression.split(' ').slice(0, -1).join(' '))
    nExp = expression.replace(/(.*)\s[\+\-\*\/]{1,2}/i, '$1')
    console.error(error.message)
    console.warn('Next expression to process: ' + nExp)
    r = calc(nExp)
  }

  return r ? r : 0
}

function lastOperandSize(expression) {
  const lastOperand = expression.split('').reverse().reduce((n_arr, value, idx, arr) => {
    if (isNaN(value) || (idx === arr.length - 1)) {
      return n_arr.concat(arr.slice(0, idx + 1).join(''))
    } else {
      return n_arr
    }

  }, [])[0]

  return lastOperand === undefined ? 0 : lastOperand.length
}

const visorOut = document.getElementsByClassName('visor-out')[0]

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
})





