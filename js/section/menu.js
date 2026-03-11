export default function initTabs() {
    const tabs = document.querySelector("[data-menu]");

    if (tabs) {
        const tabButtons = tabs.querySelectorAll("[role='tab']");
        const panels = tabs.querySelectorAll("[role='tabpanel']");

        tabButtons.forEach(btn => {
            btn.addEventListener("click", () => {

                tabButtons.forEach(b => {
                    b.classList.remove("is-active");
                    b.setAttribute("aria-selected", "false");
                });

                btn.classList.add("is-active");
                btn.setAttribute("aria-selected", "true");

                panels.forEach(p => {
                    p.classList.remove("is-active");
                    p.hidden = true;
                });

                const target = document.getElementById(
                    btn.getAttribute("aria-controls")
                );

                if (target) {
                    target.classList.add("is-active");
                    target.hidden = false;
                }
            });
        });
    }
}