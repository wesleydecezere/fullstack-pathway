export function lastOperandSize(expression) {
  const lastOperand = expression.split(/\s[\+\-\*\/]+\s?/).slice(-1)[0]

  return lastOperand.length
}
