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

/* --- ELEMENTOS DE BIENVENIDA Y LOCAL STORAGE --- */
// Declaramos bienvenida aquí arriba para que la puedan usar tanto el formulario como la carga inicial
const bienvenida = document.getElementById("bienvenida");
const clienteGuardado = localStorage.getItem("cliente");

if (clienteGuardado) {
    bienvenida.textContent = "👋 Bienvenido nuevamente, " + clienteGuardado;
}

/* --- FORMULARIO DE RESERVACIÓN --- */
const formulario = document.getElementById("formReserva");
const mensaje = document.getElementById("mensaje-reserva");

formulario.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que la página se recargue

    const nombre = document.getElementById("nombre").value;

    localStorage.setItem("cliente", nombre); // Guarda el nombre de forma permanente

    bienvenida.textContent = "👋 Bienvenido nuevamente, " + nombre; // Modifica el header

    mensaje.textContent = "✅ Gracias por su reservación. Nos pondremos en contacto pronto.";
    mensaje.style.color = "#D4AF37";

    formulario.reset(); // Limpia los campos del formulario
});

/* --- MENÚ HAMBURGUESA --- */
const menuToggle = document.getElementById("menuToggle");
const navbar = document.querySelector(".navbar");

menuToggle.addEventListener("click", function () {
    navbar.classList.toggle("active"); // Abre o cierra visualmente
    
    const estaAbierto = navbar.classList.contains("active");
    menuToggle.setAttribute("aria-expanded", estaAbierto); // Actualiza la accesibilidad ARIA
});

/* --- CAMBIO DE TEMA VISUAL --- */
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

const temaGuardado = localStorage.getItem('tema');

if (temaGuardado === 'claro') {
    body.classList.add('light-theme');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    
    if (body.classList.contains('light-theme')) {
        localStorage.setItem('tema', 'claro');
    } else {
        localStorage.setItem('tema', 'oscuro');
    }
});