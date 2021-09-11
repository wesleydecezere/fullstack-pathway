function erase() {
  const visorHist = document.getElementsByClassName('visor-hist')
  const visorHistContent = visorHist[0].innerHTML

  visorHist[0].innerHTML = visorHistContent.substring(0, visorHistContent.length - 1)
}

function eraseAll() {
  document.getElementsByClassName('visor-hist')[0].innerHTML = ''
  document.getElementsByClassName('visor-out')[0].innerHTML = '0'
}

function put(value) {
  const visorHist = document.getElementsByClassName('visor-hist')

  if (Number.parseInt(value)) {
    let lastExpression = visorHist[0].innerText
      .split('\n').at(-1)

    lastExpression += value

    document.getElementsByClassName('visor-out')[0].innerHTML = calc(lastExpression)
  } else if (value === '=') {
    value += '<br>'
  }

  visorHist[0].innerHTML += value
}

function calc(expression) {
  return new Function(`return ${expression}`)()
}
