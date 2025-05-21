document.addEventListener('DOMContentLoaded', () => {
    const glitchElements = document.querySelectorAll('.glitch');
    const fadeElements = document.querySelectorAll('.fade-in');
    const slides = document.querySelectorAll('.game-slideshow .slide');
    const carouselSlides = document.querySelectorAll('.featured-carousel .carousel-slide');
    let currentSlide = 0;
    let currentCarousel = 0;

    fadeElements.forEach((element, index) => {
        element.style.animationDelay = '${index * 0.5}s';
    });

    glitchElements.forEach(element => {
        element.setAttribute('data-text', element.textContent);
    });

    if (slides.length > 0) {
        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.remove('active');
                if (i === index) {
                    slide.classList.add('active');
                }
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }

        showSlide(currentSlide);
        setInterval(nextSlide, 5000);
    }

    if (carouselSlides.length > 0) {
        function showCarousel(index) {
            carouselSlides.forEach((slide, i) => {
                slide.style.transform = 'translateX(-${index * 100}%)';
            });
        }
        
        function nextCarousel() {
            currentCarousel = (currentCarousel + 1) % carouselSlides.length;
            showCarousel(currentCarousel);
        }

        showCarousel(currentCarousel);
        setInterval(nextCarousel, 5000);
    }
});


