function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //if(html.classList.contains('light')){
  //html.classList.remove('light')
  //} else {
  //html.classList.add('light')
  //}

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/assets/avatar-light.png")
    img.setAttribute('alt', "Foto de Evandro no galpão, usando roupa branca")
  } else {
    img.setAttribute("src", "./assets/assets/avatar.png")
    img.setAttribute('alt', "Foto do Evandro no carro com óculos de sol")
  }
}
