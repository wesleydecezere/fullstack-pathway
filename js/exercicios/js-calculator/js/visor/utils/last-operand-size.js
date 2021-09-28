export function lastOperandSize(expression) {
  const lastOperand = expression.split(/\s[\+\-\*\/]+\s?/).at(-1)

  return lastOperand.length
}