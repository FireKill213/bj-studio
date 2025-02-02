// Funktion zum Aktualisieren des Karussells
function updateCarousel(carouselContainer) {
    const carouselImages = carouselContainer.querySelector('.carousel-images');
    const carouselItems = carouselContainer.querySelectorAll('.carousel-item');
    const indicators = carouselContainer.querySelectorAll('.carousel-indicator');

    let currentIndex = parseInt(carouselContainer.getAttribute('data-current-index')) || 0;

    const translateX = -currentIndex * 100;
    carouselImages.style.transform = `translateX(${translateX}%)`;
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });

    carouselContainer.setAttribute('data-current-index', currentIndex);
}

// Event-Listener für die Buttons und Indikatoren hinzufügen
function addCarouselEventListeners(carouselContainer) {
    const prevBtn = carouselContainer.querySelector('.prev-btn');
    const nextBtn = carouselContainer.querySelector('.next-btn');
    const indicators = carouselContainer.querySelectorAll('.carousel-indicator');

    prevBtn.addEventListener('click', () => {
        let currentIndex = parseInt(carouselContainer.getAttribute('data-current-index')) || 0;
        const carouselItems = carouselContainer.querySelectorAll('.carousel-item');
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : carouselItems.length - 1;
        carouselContainer.setAttribute('data-current-index', currentIndex);
        updateCarousel(carouselContainer);
    });

    nextBtn.addEventListener('click', () => {
        let currentIndex = parseInt(carouselContainer.getAttribute('data-current-index')) || 0;
        const carouselItems = carouselContainer.querySelectorAll('.carousel-item');
        currentIndex = (currentIndex < carouselItems.length - 1) ? currentIndex + 1 : 0;
        carouselContainer.setAttribute('data-current-index', currentIndex);
        updateCarousel(carouselContainer);
    });

    indicators.forEach(indicator => {
        indicator.addEventListener('click', () => {
            const currentIndex = parseInt(indicator.getAttribute('data-slide'));
            carouselContainer.setAttribute('data-current-index', currentIndex);
            updateCarousel(carouselContainer);
        });
    });
}

// Initialisierung für alle Karussells auf der Seite
document.querySelectorAll('.carousel').forEach(carouselContainer => {
    addCarouselEventListeners(carouselContainer);
    updateCarousel(carouselContainer);
});
