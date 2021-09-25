import Visor from './visor/visor.js'

const visorOut = document.getElementsByClassName('visor-out')[0]
const visorHist = document.getElementsByClassName('visor-hist')[0]
const visor = new Visor({ visorOut, visorHist })

const main = document.querySelector('main')

main.addEventListener('click', (e) => {
  const target = e.target

  switch (target.className) {
    case 'key num':
    case 'key op-reg':
      visor.put(target.innerText)
      break;

    case 'key op-exp':
      visor.put('**')
      visor.put(target.value)
      break;

    case 'key op-pct':
      visor.put('/')
      visor.put('100')
      break;

    case 'key cmd':
      let cmd = target.value

      if (cmd === 'backspace') visor.erase()
      if (cmd === 'clear-entry') visor.clearEntry()
      if (cmd === 'clear-all') visor.clearAll()
      break;
  }
})

visorOut.addEventListener('keydown', (e) => {
  const key = e.key
  console.log('key: ' + key)

  e.preventDefault()

  if (key === 'Backspace') visor.erase()
  else if (key === 'Delete') visor.clearEntry()
  else if (key === 'Enter') visor.put('=')
  else if (key === 'Dead') visor.put('**')
  //else if (!isNaN(key) || '=+-*/'.includes(key)) put(key)
  else if (key.match(/[0-9\=\+\-\*\/]/)) visor.put(key)

  return false
})
