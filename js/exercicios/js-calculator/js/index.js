let operator = ' '
let answer = 0

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
    const lastTerms = visorHist[0].innerText
      .split('\n').at(-1)
      .split(operator)

    lastTerms[lastTerms.length - 1] += value
    answer = calc(lastTerms /*, operator */)

    document.getElementsByClassName('visor-out')[0].innerHTML = answer
  } else if (value === '=') {
    value += '<br>'
  } else {
    operator = value
  }

  visorHist[0].innerHTML += value
}


function calc(operands) {
  if (operands.length == 1) {
    return operands[0]
  }

  console.log(operands)
  let ans = 0

  switch (operator) {
    case '+':
      ans = operands.reduce((acc, value) => { return acc + Number.parseInt(value) }, ans)
      break
  }

  return ans
}

const tempFunc = (exp) => {
  return new Function(`return ${exp}`)();
};