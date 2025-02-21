// script.js
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const header = document.querySelector("header");
    const navbar = document.querySelector(".navbar");

    function updateNavbar() {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }

    // Ejecutar la función en el evento de scroll
    window.addEventListener("scroll", updateNavbar);

    updateNavbar();

    const navLinks = document.querySelectorAll(".navbar ul li a");
    const welcomeSection = document.querySelector(".welcome-section");
    const aboutSection = document.querySelector(".about-section");
    const educationSection = document.querySelector(".education-section");
    const educationIcons = document.querySelector(".education-icons");

    // Asegurar que la sección de bienvenida ocupe toda la pantalla
    welcomeSection.style.height = "70vh";

    // Ajustar espacio para 'Sobre mí' y 'Educación'
    aboutSection.style.minHeight = "400px";
    educationSection.style.minHeight = "400px";

    // Agregar espacio para texto
    const aboutText = document.createElement("p");
    aboutText.textContent = "Aquí irá una descripción detallada sobre mí, con al menos 300 caracteres para brindar una mejor perspectiva sobre mi experiencia y habilidades.";
    aboutSection.appendChild(aboutText);

    const educationText = document.createElement("p");
    educationText.textContent = "Esta sección detalla mi educación y conocimientos en programación, incluyendo el dominio de diversos lenguajes y tecnologías.";
    educationSection.appendChild(educationText);

    // Agregar iconos de lenguajes de programación
    const languages = ["HTML", "CSS", "JS", "Python"];
    languages.forEach(lang => {
        const icon = document.createElement("div");
        icon.classList.add("language-icon");
        icon.textContent = lang;
        educationIcons.appendChild(icon);
    });

    // Barra de navegación oscura al inicio
    navLinks.forEach(link => link.style.color = "white"); // Letras blancas al inicio

    // Animación al enviar el formulario
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("¡Formulario enviado con éxito!");
        form.reset();
    });
});