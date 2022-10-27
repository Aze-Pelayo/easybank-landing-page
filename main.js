(function navListener() {
    const burgerButton = document.querySelector(".header__burgerBtn");
    const nav = document.querySelector(".nav");

    burgerButton.addEventListener("click", () => {
        burgerButton.classList.toggle("active");
        nav.classList.toggle("active");
    })
})();