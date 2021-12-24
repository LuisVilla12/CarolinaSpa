// Crear un nuevo objeto
window.swiper = new Swiper({
    // Padre de los elementos
    el: '.slider__contenedor',
    // Elementos
    slideClass: 'slider__slide',
    createElements: true,
    // Iniciar automaticamente
    autoplay: {
        // cambiar cada 3s
        delay: 3000
    },
    // Ciclo cuando acaba volver a iniciar
    loop: true,
    // Espacio entre las imagenes
    spaceBetween: 30,
    // Muesta la ubicacion
    pagination: {
        el: '.slider__paginacion',
    },
    // Flechitas
    navigation: true
});