export function solve(expression) {
  let answer
  let newExpression
  let n = 0

  // interpret numbers started by 0 as decimal
  expression = expression.replace(/^0([0-9]+)/g, '$1')

  try {
    r = new Function(`return ${expression}`)()
  }
  catch (error) {
    //r = calc(expression.split(' ').slice(0, -1).join(' '))
    nExp = expression.replace(/(.*)\s[=\+\-\*\/]+/, '$1')
    if (!nExp.match(/[\+\-\*\/]/)) return 'ERR'
    if (n === 2) return 'ERR'
    n++

    r = solve(nExp)
  }

  return r ?? 0
}

// function fn(a,b) { return [a, b] }
// [a,b] = fn(1,2)
// out >> (2) [1, 2]