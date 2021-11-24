const burger = document.querySelector(".burger");
const menu = document.querySelector(".navigation");
const close_menu = document.querySelector(".nav__header_close_menu");
const main_menu = document.querySelector(".main_menu");
const submenus = document.querySelectorAll(".submenu");
const btns_back = document.querySelectorAll(".return-link");
const active_elements = document.getElementsByClassName("active");

main_menu.addEventListener("click", (event) => {
  if (event.target.classList.contains("acilacak")) {
    event.target.children[1].classList.add("active");
  }
});

submenus.forEach((submenu) => {
  submenu.addEventListener("click", (event) => {
    if (event.target.classList.contains("acilacak")) {
      event.target.children[1].classList.add("active");
    }
  });
});

btns_back.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.target.closest(".submenu").classList.remove("active");
  });
});

burger.addEventListener("click", () => {
  menu.classList.add("open_menu");
});

close_menu.addEventListener("click", () => {
  menu.classList.remove("open_menu");
  [...active_elements].forEach((el) => el.classList.remove("active"));
});
