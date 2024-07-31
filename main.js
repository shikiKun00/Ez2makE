const navbar = document.querySelector("navbar");
const navLinks = navbar.querySelector(".navLinks");
const opnNavBtn = navbar.querySelector(".opnNavBtn");

const section = document.querySelectorAll("section");

const showRecipeBtn = document.querySelectorAll(".show-recipe-btn");
const recipeModalBox = document.querySelectorAll(".recipe");
const closeModalRecipeBox = document.querySelectorAll(".close");

const modalBoxAuthor = document.querySelector(".modal-box-author");
let link = modalBoxAuthor.querySelector("a");
const closeModalBox = modalBoxAuthor.querySelector(".close-modal-box");

const image = document.querySelectorAll("img");

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

    image.forEach(img => {
        img.addEventListener("click", () => {
            modalBoxAuthor.style.top = navbar.clientHeight + "px";

            link.href = "https://";
            link.href += img.dataset.author;

            link.textContent = img.dataset.author;
            modalBoxAuthorOpened = true;
        });
    });

    section.forEach(el => {
        el.className === "hero"
            ? (el.style.paddingTop = el.style.paddingTop =
                  navbar.clientHeight + "px")
            : (el.style.paddingTop = navbar.clientHeight + 40 + "px");
    });
});

window.addEventListener("scroll", () => {
    navbar.style.boxShadow = "20px 0 30px 0.05px var(--btn-light)";
    if (window.scrollY < 3) {
        navbar.style.boxShadow = "none";
    }
});

document.addEventListener("click", function (e) {
    if (!opnNavBtn.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove("active");
    }
});
