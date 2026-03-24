
document.addEventListener('DOMContentLoaded', function () {

    const detailButtons = document.querySelectorAll('.btn-primary');
    detailButtons.forEach(button => {
        if (button.textContent.trim() === 'Ver Detalles') {
            button.addEventListener('click', function (e) {
                e.preventDefault();
                const movieTitle = this.parentElement.querySelector('.card-title').textContent;
                alert(`Detalles de ${movieTitle}: ¡Las entradas estarán disponibles pronto!`);
            });
        }
    });


    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});

let cineNombre = "Cine Dominicano";
let cineTema = "Estrenos Internacionales";
let anioApertura = 2026;
let estaAbierto = true;
let promocionActual = null;
let proximoEstreno;

console.log("Nombre del Cine (String 1):", cineNombre);
console.log("Tema del Cine (String 2):", cineTema);
console.log("Año (Number):", anioApertura);
console.log("¿Está Abierto? (Boolean):", estaAbierto);
console.log("Promoción (Null):", promocionActual);
console.log("Próximo Estreno (Undefined):", proximoEstreno);


alert(`¡Bienvenido al ${cineNombre}las mejores peiculas dominicas ${cineTema} del año ${anioApertura}.`);
