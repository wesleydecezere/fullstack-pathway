export function lastOperandSize(expression) {
  const lastOperand = expression.split(/\s[\+\-\*\/]{1,2}\s/).slice(-1)[0]

  return lastOperand.length
}
