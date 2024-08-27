function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('luz')

  //pegar a imagem
  const img = document.querySelector("#profile img")

  //substituir a imagem

  if(html.classList.contains('luz')){
    img.setAttribute('src', './assets/avatar-jv.jpeg')
  }else{
    img.setAttribute("src", "./assets/avatar-jv.jpeg")
  }

}