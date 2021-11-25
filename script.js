const burger = document.querySelector(".burger");
const menu = document.querySelector(".navigation");
const close_menu = document.querySelector(".nav__header_close_menu");
const main_menu = document.querySelector(".main_menu");
const submenus = document.querySelectorAll(".submenu");
const btns_back = document.querySelectorAll(".return-link");
const active_elements = document.getElementsByClassName("active");
const switch_lang_div = document.querySelector(".navigation__header-switch_languages");
const switch_lang_button = document.querySelector(".expand_lang-menu");
const lang_menu = document.querySelector(".lang-menu");
const lang_menu_list = document.querySelector(".lang-menu_list");
const flag = document.querySelector(".chosen_flag");
const lang = document.querySelector(".language");
const ticks = document.querySelectorAll(".tick");


switch_lang_div.addEventListener("click", (ev)=>{
  ev.stopImmediatePropagation();
  switch_lang_button.classList.toggle("active");
  lang_menu.classList.toggle("active");
})

lang_menu_list.addEventListener("click", (ev) => {
  const country = ev.target.dataset.lan;
  flag.style.backgroundImage = `url(icons/Icon_${country}.png)`;
  lang.textContent = country;
  ticks.forEach((tick) => {
    if(tick.closest(`.${country}`) === ev.target){
      tick.classList.add("current");
    }else{
      tick.classList.remove("current");
    }
  })
  
})

burger.addEventListener("click", () => {
  menu.classList.add("open_menu");
});
main_menu.addEventListener("click", openSubmenu);
submenus.forEach((submenu) => {
  submenu.addEventListener("click", openSubmenu);
});
btns_back.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.target.closest(".submenu").classList.remove("active");
  });
});

close_menu.addEventListener("click", closeMobileMenu);
window.addEventListener("click", (event) => {
  if(!menu.contains(event.target) && !burger.contains(event.target)) {
    closeMobileMenu();
}  
})

function openSubmenu(event){
  if (event.target.classList.contains("acilacak")) {
    event.target.children[1].classList.add("active");
  }
}

function closeMobileMenu() {
  menu.classList.remove("open_menu");
  [...active_elements].forEach((el) => el.classList.remove("active"));
}
