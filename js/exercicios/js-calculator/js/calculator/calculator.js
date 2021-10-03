export function solve(expression) {
  let answer
  let treatedExpression

  treatedExpression = removeLeadingZeros(expression)
  treatedExpression = removeFirstExtraOperatorsBetweenOperands(treatedExpression)
  treatedExpression = removeOperatorsOnTheRight(treatedExpression)

  try { answer = new Function(`return ${treatedExpression}`)() }
  catch (error) {
    console.log(error.message)
    console.log(treatedExpression)
    return 'ERR'
  }

  return answer ?? 0
}

const removeLeadingZeros = (e) => e.replace(/(?:^|(\s))0+([\d]+)/g, '$1$2')
const removeFirstExtraOperatorsBetweenOperands = (e) => e.replace(/\1*([+-/*]+\s)/g, '$1')
const removeOperatorsOnTheRight = (e) => e.replace(/\s([+-/*]+\s)+$/g, '')
