const burger = document.querySelector(".burger");
const menu = document.querySelector(".navigation");
const close_menu = document.querySelector(".nav__header_close_menu");
const submenu_btn = document.querySelector(".expand_submenu_btn");
const submenu = document.querySelector(".nav__item_submenu-services");
const nav__menu = document.querySelector(".nav__menu");
const btn_back = document.querySelector(".btn_back");

submenu_btn.addEventListener("click", ()=> {
    submenu.classList.add("active");
})

btn_back.addEventListener("click", () => {
    submenu.classList.remove("active");
}
)

burger.addEventListener("click", () => {
    menu.classList.add("open_menu");

}
)

close_menu.addEventListener("click", () => {
    menu.classList.remove("open_menu");
    
}
)
