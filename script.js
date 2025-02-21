// script.js
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const header = document.querySelector("header");
    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelectorAll(".navbar ul li a");
    const welcomeSection = document.querySelector(".welcome-section");
    const aboutSection = document.querySelector(".about-section");
    const educationSection = document.querySelector(".education-section");
    const educationIcons = document.querySelector(".education-icons");
    
    // Asegurar que la sección de bienvenida ocupe toda la pantalla
    welcomeSection.style.height = "100vh";
    
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
    
    // Agregar animación al ingresar
    header.style.opacity = "0";
    header.style.transform = "translateY(-20px)";
    setTimeout(() => {
        header.style.transition = "opacity 1.5s ease-in-out, transform 1.5s ease-in-out";
        header.style.opacity = "1";
        header.style.transform = "translateY(0)";
    }, 100);
    
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("¡Formulario enviado con éxito!");
        form.reset();
    });
    
    // Cambiar la transparencia de la barra de navegación al hacer scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = "rgba(245, 245, 220, 0.9)"; // Color crema con menor transparencia
            navbar.style.transition = "background-color 0.5s ease-in-out";
            navLinks.forEach(link => link.style.color = "black"); // Cambiar color de letras a oscuro
        } else {
            navbar.style.backgroundColor = "#333";
            navLinks.forEach(link => link.style.color = "white"); // Restaurar color de letras
        }
    });
});
