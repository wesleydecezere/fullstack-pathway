function erase() {
  const visorHist = document.getElementsByClassName('visor-hist')

  const expressions = visorHist[0].innerHTML.split('<br>')
  let lastExpression = expressions.at(-1).slice(0, -1).trim()
  expressions[expressions.length - 1] = lastExpression

  visorHist[0].innerHTML = expressions.join('<br>')
}

function eraseAll() {
  document.getElementsByClassName('visor-hist')[0].innerHTML = ''
  document.getElementsByClassName('visor-out')[0].innerHTML = '0'
}

function put(value) {
  const visorOut = document.getElementsByClassName('visor-out')
  const visorHist = document.getElementsByClassName('visor-hist')

  let lastExpression = visorHist[0].innerHTML.split('<br>').at(-1)
  let answer = visorOut[0].innerHTML

  if (Number.parseInt(value)) {
    lastExpression += value
    answer = calc(lastExpression)
    console.log(answer)
  } else if (value === '=') {
    value = ` = ${answer}<br>`
  } else if (lastExpression.length == 0) {
    value = `${answer} ${value} `
  } else {
    value = ` ${value} `
  }

  visorOut[0].innerHTML = answer
  visorHist[0].innerHTML += value
}

function calc(expression) {
  return new Function(`return ${expression} `)()
}
