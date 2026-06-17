const hero = document.querySelector(".hero");

const imagenes = [
    "img/hero1.jpg",
    "img/hero2.jpg",
    "img/hero3.jpg",
    "img/hero4.jpg"
];

let indice = 0;

function cambiarHero() {

    hero.style.backgroundImage =
        `linear-gradient(
            rgba(0,0,0,0.7),
            rgba(0,0,0,0.7)
        ),
        url('${imagenes[indice]}')`;

    indice++;

    if (indice >= imagenes.length) {
        indice = 0;
    }
}

cambiarHero();

setInterval(cambiarHero, 5000);

/* Formulario de recervación */

const formulario = document.getElementById("formReserva");
const mensaje = document.getElementById("mensaje-reserva");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nombre = document.getElementById("nombre").value;

localStorage.setItem("cliente", nombre);

bienvenida.textContent =
    "👋 Bienvenido nuevamente, " + nombre;

mensaje.textContent =
    "✅ Gracias por su reservación. Nos pondremos en contacto pronto.";

    mensaje.style.color = "#D4AF37";

    formulario.reset();

});

/* BIENVENIDA CON LOCAL STORAGE */

const bienvenida = document.getElementById("bienvenida");

const clienteGuardado = localStorage.getItem("cliente");

if (clienteGuardado) {

    bienvenida.textContent =
        "👋 Bienvenido nuevamente, " + clienteGuardado;

}

/* MENÚ HAMBURGUESA */

const menuToggle =
    document.getElementById("menuToggle");

const navbar =
    document.querySelector(".navbar");

menuToggle.addEventListener("click", function () {

    navbar.classList.toggle("active");

});

/* EFECTO: Ocultar barra al bajar, mostrar al subir (SOLO EN CELULARES) */
let ultimaPosicionScroll = window.scrollY;
const header = document.querySelector(".header");

window.addEventListener("scroll", function() {
    // Detectamos el ancho de la pantalla actual
    let anchoPantalla = window.innerWidth;

    // SI LA PANTALLA ES MAYOR A 768px (PC/Laptop), NO HACE NADA Y SE QUEDA ESTÁTICA
    if (anchoPantalla > 768) {
        header.style.transform = "translateY(0)";
        return; // Detiene la función aquí para la PC
    }

    // SI LA PANTALLA ES MENOR O IGUAL A 768px (Celular), CORRE EL EFECTO:
    let posicionActualScroll = window.scrollY;

    if (ultimaPosicionScroll < posicionActualScroll && posicionActualScroll > 100) {
        // Si bajas en celular, se esconde
        header.style.transform = "translateY(-100%)";
        
        if (typeof navbar !== 'undefined') {
            navbar.classList.remove("active");
        }
    } else {
        // Si subes en celular, aparece
        header.style.transform = "translateY(0)";
    }
    
    ultimaPosicionScroll = posicionActualScroll;
});