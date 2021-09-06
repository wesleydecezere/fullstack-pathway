
function consultaCep() {
  $('.barra-progresso').show()
  $('.cep').hide()

  var cep = document.getElementById('cep').value.split('-').join('')
  var url = `https://viacep.com.br/ws/${cep}/json/`

  const res_exp = {
    cep,
    logradouro,
    bairro,
    localidade,
    uf
  }

  $.ajax({
    url: url,
    type: 'GET',
    success: function (response) {
      console.log(response);

      if (response.erro === true) {
        res_exp.cep = 'Inválido'
        res_exp.logradouro, res_exp.bairro, res_exp.localidade, res_exp.uf = ''
      } else {
        res_exp.cep = response.cep
        res_exp.logradouro = response.logradouro
        res_exp.bairro = response.bairro
        res_exp.localidade = response.localidade
        res_exp.uf = response.uf
      }

      $('#titulo-cep').html(`CEP ${res_exp.cep}`)
      $('#logradouro').html(res_exp.logradouro)
      $('#bairro').html(res_exp.bairro)
      $('#localidade').html(res_exp.localidade)
      $('#uf').html(res_exp.uf)
      $('.cep').show()
      $('.barra-progresso').hide()
    }
  })
}

$(function () {
  $('.cep').hide()
  $('.barra-progresso').hide()
})