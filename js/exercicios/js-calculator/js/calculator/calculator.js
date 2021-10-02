export function solve(expression) {
  let answer
  let treatedExpression

  // interpret numbers started by 0 as decimal
  treatedExpression = expression.replace(/(?:^|(\s))0+([\d]+)/g, '$1$2')
  // remove extra operators between operands
  treatedExpression = treatedExpression.replace(/([\+\-\*\/]+\s)+([\+\-\*\/]+\s)/g, '$2')
  // remove operators without enough operands
  treatedExpression = treatedExpression.replace(/\s([\+\-\*\/]+\s)+$/g, '')

  try { answer = new Function(`return ${treatedExpression}`)() }
  catch (error) {
    console.log(error.message)
    console.log(treatedExpression)
    return 'ERR'
  }

  return answer ?? 0
}