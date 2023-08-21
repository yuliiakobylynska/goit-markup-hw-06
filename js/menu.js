(() => {
  const refs = {
    openMenuBtn: document.querySelector("[data-menu-open]"),
    closeMenuBtn: document.querySelector("[data-menu-close]"),
    menu: document.querySelector("[data-menu]"),
  };

  refs.openMenuBtn.addEventListener("click", togglemenu);
  refs.closeMenuBtn.addEventListener("click", togglemenu);

  function togglemenu() {
    refs.menu.classList.toggle("is-hidden");
  }
})();