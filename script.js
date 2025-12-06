// AÑO AUTOMÁTICO
document.getElementById("year").textContent = new Date().getFullYear();

// MENU RESPONSIVO
const toggleMenu = document.getElementById("menuToggle");
const mainMenu = document.getElementById("main-menu");

toggleMenu.addEventListener("click", () => {
    mainMenu.classList.toggle("open");
});

// SLIDER
const slider = document.getElementById("slider");
const totalSlides = slider.children.length;
let index = 0;

document.getElementById("next").addEventListener("click", () => move(1));
document.getElementById("prev").addEventListener("click", () => move(-1));

function move(direction) {
    index = (index + direction + totalSlides) % totalSlides;
    slider.style.transform = `translateX(-${index * 100}%)`;
}

// AUTO SLIDER
setInterval(() => move(1), 6000);

// TABS
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        contents.forEach(c => c.classList.remove("active"));

        tab.classList.add("active");
        document.getElementById(tab.dataset.tab).classList.add("active");
    });
});

// CONTACTO
document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Gracias por contactarnos. Te responderemos pronto.");
    e.target.reset();
});