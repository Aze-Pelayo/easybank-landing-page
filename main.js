(function navListener() {
    const burgerButton = document.querySelector(".header__burgerBtn");
    const nav = document.querySelector(".nav");
    const navbg = document.querySelector(".navbg")

    burgerButton.addEventListener("click", () => {
        burgerButton.classList.toggle("active");
        nav.classList.toggle("active");
        navbg.classList.toggle("active");
    })
})();