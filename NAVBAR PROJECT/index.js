const bar = document.querySelector(".fa-bars")
const menu = document.querySelector(".menu")

/* if someone clicks on the bar, add "show-menu class" to the menu.
the toggle means - if there's "show-menu class", just remove it, but if there's not, just add it. */
bar.addEventListener("click", ()=>{
    menu.classList.toggle("show-menu")
}
)