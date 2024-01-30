function toggleMode() {
  const hmtl = document.documentElement
  hmtl.classList.toggle("light-mode")

  let avatar = document.querySelector(".profile img")
  if (hmtl.classList.contains("light-mode")) {
    // se tiver com light mode o avatar deve mudar
    avatar.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se tiver root o avatar deve permancer
    avatar.setAttribute("src", "./assets/avatar.png")
  }
}
