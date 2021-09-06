fetch('./data.json', {})
  .then(responseStream => {
    if (responseStream.status == 200) {
      return responseStream.json() // exemplo de tratamento processamento da resposta
    } else {
      throw new Error('Request error')
    }
  })
  .then(data => {
    console.log(data) // tratamento da resposta processada
  })
  .catch(err => {
    console.log('Error: ', err)
  })