export default function initInView() {
    const targets = document.querySelectorAll(
        [
            ".section__header",
            ".concept__item",
            ".concept__media",
            ".menu__item",
            ".staff__item",
            ".news__item",
            ".accordion__item",
            ".access__group",
            ".access__map",
            ".reserve__inner",
        ].join(",")
    );

    if (!targets.length) return;


    targets.forEach((el) => {
        el.classList.add("reveal")
    });

    const io = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-inview");
                    io.unobserve(entry.target);
                }
            });
        },
        { root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.15 }
    );

    targets.forEach((el) => io.observe(el));
}