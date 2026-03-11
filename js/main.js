import initHeader from "./section/header.js";
import initHeaderScroll from "./section/headerScroll.js";
import initHero from "./section/hero.js";
import initInView from "./section/inview.js";
import initTabs from "./section/menu.js";
import initModal from "./section/modal.js";

document.addEventListener("DOMContentLoaded", () => {
    initHeader();
    initHeaderScroll();
    initHero();
    initInView();
    initTabs();
    initModal();
});
