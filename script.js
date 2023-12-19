function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //Pegar a tag Img
  const img = document.querySelector("#profile img")

  //Substituir a Imagem
  if (html.classList.contains("light")) {
    //Se tiver em light mod adicionar a img light
    img.setAttribute("src", "./assets/avatar-light.jpg")
  } else {
    //se tiver sem light mod, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}
