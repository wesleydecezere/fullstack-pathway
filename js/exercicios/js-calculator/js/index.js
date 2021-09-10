let operator = ' '

function erase() {
  const visorLine = document.getElementsByClassName('visor-line')
  const visorLineContent = visorLine[0].innerHTML

  visorLine[0].innerHTML = visorLineContent.substring(0, visorLineContent.length - 1)
}

function eraseAll() {
  document.getElementsByClassName('visor-line')[0].innerHTML = ''
}

function put(value) {
  if (!Number.parseInt(value)) {
    calc(value)
  }

  document.getElementsByClassName('visor-line')[0].innerHTML += value
}


function calc(op) {
  const visorLine = document.getElementsByClassName('visor-line')
  const terms = visorLine[0].innerHTML.split(operator)

  if (terms.length == 1) {
    operator = op
  } else {
    switch (operator) {
      case '+':
        console.log()
        visorLine[0].innerHTML = terms.reduce((acc, val) => acc + Number.parseInt(val), 0)
        break;
    }
    console.log(terms)
  }

}