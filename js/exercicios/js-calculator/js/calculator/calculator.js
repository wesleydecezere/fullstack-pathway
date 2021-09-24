export function calc(expression) {
  let r
  let nExp = expression

  try {
    r = new Function(`return ${expression}`)()
  }
  catch (error) {
    //r = calc(expression.split(' ').slice(0, -1).join(' '))
    nExp = expression.replace(/(.*)\s[\+\-\*\/]{1,2}/i, '$1')
    if (!nExp.match(/[\+\-\*\/]/)) return 'ERR'

    console.error(error.message)
    console.warn('Next expression to process: ' + nExp)

    r = calc(nExp)
  }

  return r ? r : 0
}