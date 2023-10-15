const myCarouselElement = document.querySelector('#myCarousel')

$(document).ready(function () {
    $('#textCarousel').carousel({
        interval: 2000
    });
});

/*Mostrar los juegos populares*/ 
document.addEventListener("DOMContentLoaded", function() {
    var enlace = document.getElementById("smmdCarruselIr");
    var elemento = document.getElementById("accordionFlushExample");

    enlace.addEventListener("click", function(event) {
        event.preventDefault(); 
        elemento.style.display = (elemento.style.display === "none") ? "block" : "none";
    });
});