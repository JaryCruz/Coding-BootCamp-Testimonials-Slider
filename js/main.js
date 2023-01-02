let sliderTestimonial = document.querySelectorAll(".slide"),
arrowLeft = document.querySelector("[data-arrow-left]"),
arrowRight = document.querySelector("[data-arrow-right]"),
current = 0;

// Clear all images
function reset() {
    sliderTestimonial.forEach(slide => {
        slide.style.display = "none";
    })
}
    
// Initial slide
function startSlide() {
    reset();
    sliderTestimonial[0].style.display = "flex";
}
    
// Show previous
function slideLeft() {
    reset();
    sliderTestimonial[current - 1].style.display = "flex";
    current--;
}

// Show next
function slideRight() {
    reset();
    sliderTestimonial[current + 1].style.display = "flex";
    current++;
}

// Left arrow click
arrowLeft.addEventListener("click", function () {
    if (current === 0) {
        current = sliderTestimonial.length;
    }
    slideLeft();
});

// Right arrow click
arrowRight.addEventListener("click", function () {
    if (current === sliderTestimonial.length - 1) {
        current = -1;
    }
    slideRight();
});

startSlide();
