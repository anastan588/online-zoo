const BURGER_IMAGE = document.querySelector(".burger_image");
const BURGER_MENU_CLOSE_ICON = document.querySelector(
  ".burger_menu_close_icon"
);
const BURGER_MENU = document.querySelector(".burger_menu");
const OVERLAY_MOBILE = document.querySelector(".overlay-mobile");
const BURGER_NAV_ITEMS = document.querySelectorAll(".burger_nav_item");

function openBurgerMenu() {
  BURGER_MENU.classList.add("open");
  OVERLAY_MOBILE.classList.add("open");
}

BURGER_IMAGE.addEventListener("click", openBurgerMenu);

function closeBurgerMenu() {
  BURGER_MENU.classList.remove("open");
  OVERLAY_MOBILE.classList.remove("open");
}

BURGER_MENU_CLOSE_ICON.addEventListener("click", closeBurgerMenu);
BURGER_NAV_ITEMS.forEach((el) => el.addEventListener("click", closeBurgerMenu));
OVERLAY_MOBILE.addEventListener("click", closeBurgerMenu);