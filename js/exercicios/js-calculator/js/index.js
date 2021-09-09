function erase(element) {
  const visorLine = document.getElementsByClassName('visor-line')
  const visorLineContent = visorLine[0].innerHTML

  element.style.backgroundColor = 'yellow'
  visorLine[0] = (visorLineContent.substring(0, visorLineContent.length - 1))
}