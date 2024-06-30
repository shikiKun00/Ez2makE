const container = document.querySelector(".container");

const navbar = container.querySelector("navbar");
const navLinks = navbar.querySelector(".navLinks");
const opnNavBtn = navbar.querySelector(".opnNavBtn");

const foodsRecipe = container.querySelectorAll(".foodsRecipe");

const showRecipeBtn = container.querySelectorAll(".show-recipe-btn");
const recipeModalBox = container.querySelectorAll(".recipe");
const closeModalRecipeBox = container.querySelectorAll(".close");

const modalBoxAuthor = container.querySelector(".modal-box-author");
let link = modalBoxAuthor.querySelector("a");
const closeModalBox = modalBoxAuthor.querySelector(".close-modal-box");

const image = container.querySelectorAll("img");

opnNavBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    modalBoxAuthor.style.top = -100 + "%";
});

showRecipeBtn.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        recipeModalBox[i].style.display = "grid";
        modalBoxAuthor.style.top = -100 + "%";
    });
});

closeModalRecipeBox.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        recipeModalBox[i].style.display = "none";
    });
});

let modalBoxAuthorOpened = false;

closeModalBox.addEventListener("click", () => {
    modalBoxAuthor.style.top = -100 + "%";
});

window.addEventListener("load", () => {
    navLinks.style.top = navbar.clientHeight + "px";
    container.style.paddingTop = navbar.clientHeight + "px";

    image.forEach(img => {
        img.addEventListener("click", () => {
            modalBoxAuthor.style.top = navbar.clientHeight + "px";
            link.href += img.dataset.author;
            link.textContent = img.dataset.author;
            modalBoxAuthorOpened = true;
        });
    });

    foodsRecipe.forEach(el => {
        el.style.paddingTop = navbar.clientHeight + 30 + "px";
    });
});

window.addEventListener("scroll", () => {
    navbar.style.boxShadow = "20px 0 30px 0.05px var(--btn-light)";
    if (window.scrollY < 3) {
        navbar.style.boxShadow = "none";
    }
});

document.addEventListener("click", function (e) {
    if (
        !opnNavBtn.contains(e.target) &&
        !navLinks.contains(e.target)
    ) {
        navLinks.classList.remove("active");
    }
});
