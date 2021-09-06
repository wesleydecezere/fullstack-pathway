function soma(n1, n2) {
  return n1 + n2;
}

function setReplace(str, old_str, new_str) {
  return str.replace(old_str, new_str);
}

function validaIdade(idade) {
  var val // utiliza a variável val localmente
  if (idade >= 18) {
    val = true
  } else {
    val = false
  }
  return val
}

/* alert(soma(1, 1))
alert(setReplace('Vai Brazil!', 'z', 's'))

var idade = prompt('Digite sua idade: ')
console.log(validaIdade(idade)) */

function botao() {
  var majority = document.getElementById('majority');
  var idade = prompt('Digite sua idade: ')
  var idade_class

  idade_class = validaIdade(idade) ? 'maior' : 'menor'

  majority.innerHTML = `Você é <b>${idade_class}</b> de idade.`
  majority.setAttribute('class', idade_class)
  //alert('Thanks for clicking')
}

function pointer() {
  document.getElementById('majority').style = 'cursor: pointer;'
}

function redirect(element) {
  if (element.getAttribute('class') == 'maior') {
    window.open('https://www.youtube.com/watch?v=h1A9Kc5iNkQ')
    //window.location.href = 'https://www.youtube.com/watch?v=h1A9Kc5iNkQ'
  }
}

function change_content(element) {
  element.innerHTML = 'Você posicionou o cursor aqui :)'
}

function unchange_content(element) {
  element.innerHTML = 'O cursor não está aqui...'
}

function load() {
  alert('Página carregada com sucesso!')
}

function change_func(element) {
  console.log(element.value)
}


