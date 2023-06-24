function toggleMode() {
  const body = document.body
  body.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (body.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Leonardo Pena de camisa preta em um escritório"
    )
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Leonardo Pena de camisa preta com uma cidade de noite ao fundo"
    )
  }
}
