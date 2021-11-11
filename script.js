const burger = document.querySelector(".burger");
const menu = document.querySelector(".navigation");
const close_menu = document.querySelector(".nav__header_close_menu");
const main_menu = document.querySelector(".main_menu");
const submenu = document.querySelector(".submenu");
const nav__menu = document.querySelector(".nav__menu");
const btn_back = document.querySelector(".btn_back");

main_menu.addEventListener("click", (event) => {
    console.log('ok');
    console.log(event.target);
    console.log(event.currentTarget);
    if(event.target.classList.contains("services_link")){
        event.target.classList.add("active");
    }
})

// submenu_btn.addEventListener("click", ()=> {
//     submenu.classList.add("active");
// })

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

// function expandMenu() {
//     console.log('ok');
// }
