document.addEventListener("DOMContentLoaded", function () {
    // 1. On injecte le Header (CORRIGÉ avec la classe nav-link sur chaque lien)
    const headerElement = document.querySelector("header");
    if (headerElement) {
        headerElement.innerHTML = `
        <div class="logo-container">
            <img src="./image/autochtones_quebec.jpg" alt="Belhaouari" class="avatar">
            <h1>Belhaouari</h1>
        </div>
        <nav>
            <ul>
                <li><a href="index.html" class="nav-link">Accueil</a></li>
                <li><a href="sur-moi.html" class="nav-link">Sur moi</a></li>
                <li><a href="cv.html" class="nav-link">CV</a></li>
                <li><a href="portfolio.html" class="nav-link">Portfolio</a></li>
                <li><a href="blog.html" class="nav-link">Blog</a></li>
                <li><a href="contact.html" class="nav-link">Contact</a></li>
            </ul>
        </nav>
        `;
    }

    // 2. On injecte le Footer
    const footerElement = document.querySelector("footer");
    if (footerElement) {
        footerElement.innerHTML = `
            <p>&copy; 2026 mustapha Belhaouari. Tous droits réservés.</p>
            <div class="social-links">
                <a href="#" target="_blank" rel="noopener">LinkedIn</a>
                <a href="#" target="_blank" rel="noopener">GitHub</a>
                <a href="#" target="_blank" rel="noopener">Twitter</a>
            </div>
        `;
    }

    // 3. Gestion automatique de la classe "active" sur les liens
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const links = document.querySelectorAll(".nav-link");
    
    links.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        } else {
            link.classList.remove("active"); // Sécurité : retire active des autres pages
        }
    });
});
