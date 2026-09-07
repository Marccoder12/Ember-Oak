const burger = document.querySelector(".burger");
const aside = document.querySelector("aside");

burger.addEventListener("click", (event) => {
    event.stopPropagation();
    aside.classList.toggle("open");
});

aside.addEventListener("click", (event) => {
    event.stopPropagation();
});

document.addEventListener("click", () => {
    aside.classList.remove("open");
});