export function lastOperandSize(expression) {
  const lastOperand = expression.match(/[0-9]+/g).slice(-1)[0]

  return lastOperand.length
}
