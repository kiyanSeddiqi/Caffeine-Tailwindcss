"strict mode";

const cookieCloseBtn = document.querySelector(".cookie-close-btn");
const cookieMessage = document.querySelector(".cookie-message");
const header = document.querySelector(".header");
const themeBtns = document.querySelectorAll(".toggle-theme");
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const sidebarMenu = document.querySelector(".sidebar-menu");
const sidebarMenuCloseBtn = document.querySelector(".sidebar-menu__close-btn");
const sidebarMenuSubmenu = document.querySelector(".sidebar-menu__submenu");
const sidebarMenuSubmenuToggler = document.querySelector(".sidebar-menu__submenu-toggler");
const sidebarMenuSubmenuBtn = document.querySelector(".sidebar-menu__submenu-btn");
const shopCartBtn = document.querySelectorAll(".shopcart-btn");
const shopCartMenu = document.querySelector(".shopcart-menu");
const shopCartCloseBtn = document.querySelector(".shopcart__close-btn");
const overlay = document.querySelector(".overlay");

cookieCloseBtn.addEventListener("click", () => {
  cookieMessage.classList.add("hidden");
});

themeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  });
});

mobileMenuBtn.addEventListener("click", () => {
  sidebarMenu.classList.remove("hide-sidemenu");
  overlay.classList.remove("hidden");

  overlay.addEventListener("click", () => {
    overlay.classList.add("hidden");
    sidebarMenu.classList.add("hide-sidemenu");
  });

  sidebarMenuCloseBtn.addEventListener("click", () => {
    overlay.classList.add("hidden");
    sidebarMenu.classList.add("hide-sidemenu");
  });
});

sidebarMenuSubmenuToggler.addEventListener("click", () => {
  sidebarMenuSubmenu.classList.toggle("show-submenu");
  sidebarMenuSubmenuBtn.classList.toggle("rotate-arrow");
  sidebarMenuSubmenuToggler.classList.toggle("text-green-500");
});

shopCartBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    shopCartMenu.classList.remove("hide-shopcart");
    overlay.classList.remove("hidden");

    overlay.addEventListener("click", () => {
      overlay.classList.add("hidden");
      shopCartMenu.classList.add("hide-shopcart");
    });
    shopCartCloseBtn.addEventListener("click", () => {
      overlay.classList.add("hidden");
      shopCartMenu.classList.add("hide-shopcart");
    });
  });
});
