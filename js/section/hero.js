export default function initHero() {
    const hero = document.querySelector(".hero");
    if (!hero) return;

    const items =
        hero.querySelectorAll(".hero__eyebrow, .hero__title, .hero__lead, .hero__cta, .hero__meta");

    if (items.length) {
        items.forEach((el, i) => {
            el.classList.add("hero-reveal");
            el.style.transitionDelay = `${i * 120}ms`;
        });

        requestAnimationFrame(() => {
            hero.classList.add("is-ready");
        });

        return;
    }
}