const track = document.querySelector(".track");
const dotsContainer = document.querySelector(".dots");
const nextButton = document.querySelector(".next");
const previousButton = document.querySelector(".previous");

const slides = Array.from(track.children);
const totalSlides = slides.length;

let currentIndex = 0;


slides.forEach((slide, index) => {
    const dot = document.createElement("button");
    dot.setAttribute("aria-label", `Image ${index + 1}`);

    dot.addEventListener("click", () => {
        showSlide(index);
    });

    dotsContainer.appendChild(dot);
});

function showSlide(index) {
    currentIndex = (index + totalSlides) % totalSlides;

    track.style.transform =
        `translateX(-${currentIndex * 100}%)`;

    updateDots();
}

function updateDots() {
    const dots = dotsContainer.querySelectorAll("button");

    dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentIndex);
    });
}


nextButton.addEventListener("click", () => {
    showSlide(currentIndex + 1);
});


previousButton.addEventListener("click", () => {
    showSlide(currentIndex - 1);
});


showSlide(0);