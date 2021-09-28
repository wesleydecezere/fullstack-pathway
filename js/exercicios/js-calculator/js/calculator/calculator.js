export function calc(expression) {
  let r
  let nExp
  let n = 0

  // interpret numbers started by 0 as decimal
  expression = expression.replace(/^0([0-9]+)/g, '$1')

  try {
    r = new Function(`return ${expression}`)()
  }
  catch (error) {
    //r = calc(expression.split(' ').slice(0, -1).join(' '))
    nExp = expression.replace(/(.*)\s[=\+\-\*\/]{1,2}/i, '$1')
    if (!nExp.match(/[\+\-\*\/]/)) return 'ERR'
    if (n === 2) return 'ERR'
    else n++
    //console.error(error.message)
    //console.warn('Next expression to process: ' + nExp)

    r = calc(nExp)
  }

  return r ? r : 0
}