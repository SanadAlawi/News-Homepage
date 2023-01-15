let menu = document.querySelector(".navbar .menu")
let open_menu = document.querySelector(".navbar .open-menu")
let close_menu = document.querySelector(".navbar .menu .close-menu")

open_menu.addEventListener("click", () => {
    menu.classList.add("active")
})
close_menu.addEventListener("click", () => {
    menu.classList.remove("active")
})