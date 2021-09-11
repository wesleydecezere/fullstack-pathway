let operator = ' '
let answer = 0

function erase() {
  const visorHist = document.getElementsByClassName('visor-hist')
  const visorHistContent = visorHist[0].innerHTML

  visorHist[0].innerHTML = visorHistContent.substring(0, visorHistContent.length - 1)
}

function eraseAll() {
  document.getElementsByClassName('visor-hist')[0].innerHTML = ''
}

function put(value) {
  if (!Number.parseInt(value)) {
    value = calc(value)
  }

  document.getElementsByClassName('visor-hist')[0].innerHTML += value
  document.getElementsByClassName('visor-out')[0].innerHTML = answer
}


function calc(newOperator) {
  const visorLine = document.getElementsByClassName('visor-out')
  const visorHist = document.getElementsByClassName('visor-hist')
  const lastTerms = visorHist[0].innerText.split('\n').at(-1).split(operator)
  console.log(lastTerms)
  let v


  if (lastTerms.length != 1) {
    switch (operator) {
      case '+':
        console.log()
        answer = lastTerms.reduce((acc, val) => acc + Number.parseInt(val), 0)
        break
    }
  } else if (lastTerms[0] === '') {
    newOperator = `${answer}${newOperator}`
  }

  operator = newOperator

  if (newOperator === '=') {
    return '=<br>'
  }
  return newOperator
}