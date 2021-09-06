const questions = [
  'O que aprendi hoje?',
  'O que me deixou aborrecido? Como eu poderia para melhorar?',
  'O que me deixou feliz hoje?',
  'Quantas pessoas ajudei hoje?'
]
const answers = []

const ask = (index = 0) => {
  process.stdout.write(questions[index] + '\n> ')
}

ask()
process.stdin.on('data', (data) => {
  answers.push(data.toString().trim())
  if (answers.length < questions.length) {
    process.stdout.write('\n')
    ask(answers.length)
  } else {
    process.exit()
  }
})

process.on('exit', () => {
  console.log(`
  Bacana, Wesley!

  O que você aprendeu hoje foi:
  ${answers[0]}

  O que te aborreceu e como você poderia melhorar:
  ${answers[1]}

  O que te deixou feliz hoje foi:
  ${answers[2]}

  Você ajudou ${answers[3]} pessoas hoje!

  Volte amanhã para novas reflexões...
  `)
})