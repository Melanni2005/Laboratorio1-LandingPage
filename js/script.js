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
/* MENÚ HAMBURGUESA (Funciona excelente abriendo y cerrando en celular) */
const menuToggle = document.getElementById("menuToggle");
const navbar = document.querySelector(".navbar");

menuToggle.addEventListener("click", function () {
    navbar.classList.toggle("active");
});