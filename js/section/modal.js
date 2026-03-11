export default function initModal() {
    const modal = document.querySelector(".modal[data-modal]");
    if (!modal) return;

    const openers = document.querySelectorAll("[data-modal-open]");
    const closers = modal.querySelectorAll("[data-modal-close]");

    const modalName = document.getElementById("modalTitle");
    const modalPosition = document.getElementById("modalPosition");
    const modalSkill = document.getElementById("modalSkill");
    const modalDesc = document.getElementById("modalDesc");
    const modalImg = document.getElementById("modalImg");

    if (!modalImg || !modalName || !modalPosition || !modalSkill || !modalDesc) return;

    const openModal = (item) => {
        modalName.textContent = item.dataset.name || "";
        modalPosition.textContent = item.dataset.position || "";
        modalSkill.textContent = item.dataset.skill || "";
        modalDesc.textContent = item.dataset.desc || "";
        modalImg.src = item.dataset.img || "";

        modal.classList.add("is-open");
        modal.setAttribute("aria-hidden", "false");
        document.body.classList.add("is-modal-open");
    };

    const closeModal = () => {
        modal.classList.remove("is-open");
        modal.setAttribute("aria-hidden", "true");
        document.body.classList.remove("is-modal-open");
    };

    openers.forEach((btn) => {
        btn.addEventListener("click", () => openModal(btn));
    });

    closers.forEach((btn) => {
        btn.addEventListener("click", closeModal);
    });

    modal.addEventListener("click", (e) => {
        if (e.target.classList.contains("modal__overlay")) {
            closeModal();
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeModal();
    });
}

