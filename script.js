let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

document.getElementById('total-slides').textContent = totalSlides;

function showSlide(n) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (n + totalSlides) % totalSlides;
    slides[currentSlide].classList.add('active');

    document.getElementById('current-slide').textContent = currentSlide + 1;

    document.getElementById('prev-btn').disabled = currentSlide === 0;
    document.getElementById('next-btn').disabled = currentSlide === totalSlides - 1;
}

document.getElementById('prev-btn').addEventListener('click', () => {
    if (currentSlide > 0) showSlide(currentSlide - 1);
});

document.getElementById('next-btn').addEventListener('click', () => {
    if (currentSlide < totalSlides - 1) showSlide(currentSlide + 1);
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' && currentSlide > 0) {
        showSlide(currentSlide - 1);
    } else if (e.key === 'ArrowRight' && currentSlide < totalSlides - 1) {
        showSlide(currentSlide + 1);
    }
});
