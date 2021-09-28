export function formatOperator(value, lastExpression, answer) {
  return `${lastExpression ? '' : answer
    } ${value
    } ${value === '=' ? answer + '<br>' : ''
    }`
}