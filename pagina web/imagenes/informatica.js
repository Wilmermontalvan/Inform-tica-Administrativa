document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    const slides = document.querySelectorAll(".banner-slide");
    const totalSlides = slides.length;
    const bannerContainer = document.querySelector(".banner-container");
    let autoSlideInterval;

    // Función para actualizar el banner
    function updateBanner() {
        const offset = currentIndex * window.innerWidth;
        bannerContainer.scrollTo({
            left: offset,
            behavior: "smooth"
        });
    }

    // Función para avanzar automáticamente
    function autoSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateBanner();
    }

    // Inicia el cambio automático de diapositiva cada 3 segundos (3000 ms)
    function startAutoSlide() {
        autoSlideInterval = setInterval(autoSlide, 3000);
    }

    // Detiene el cambio automático
    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    // Iniciar el slider al cargar la página
    startAutoSlide();

    // Opcional: Agregar eventos para detener y reiniciar el auto-slide al pasar el mouse
    bannerContainer.addEventListener('mouseenter', stopAutoSlide);
    bannerContainer.addEventListener('mouseleave', startAutoSlide);
});
