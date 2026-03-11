export default function initHeader() {
    const header = document.querySelector(".header");
    const hamburger = document.querySelector(".hamburger__button");
    const nav = document.querySelector(".header__nav");

    if (!header || !hamburger || !nav) return;


    const open = () => {
        header.classList.add("open");
        hamburger.setAttribute("aria-expanded", "true");
    };

    const close = () => {
        header.classList.remove("open");
        hamburger.setAttribute("aria-expanded", "false");
    };

    hamburger.addEventListener("click", () => {
        const isOpen = header.classList.contains("open");
        isOpen ? close() : open();
    });


    nav.querySelectorAll("a").forEach((a) => {
        a.addEventListener("click", () => {
            close()
        });
    });

    document.addEventListener("click", (e) => {
        const isOpen = header.classList.contains("open");
        if (!isOpen) return;

        const clickedHamburger = hamburger.contains(e.target);
        const clickedNav = nav.contains(e.target);

        if (!clickedHamburger && !clickedNav) close();
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") close();
    });
}