document.addEventListener('DOMContentLoaded', () => {
    // Floating Banner (Pop-up)
    const floatingBanner = document.getElementById('floating-banner');
    setTimeout(() => {
        floatingBanner.style.display = 'block';
    }, 500); // Afficher après 500ms

    // Disparition du pop-up après 1,5 seconde
    setTimeout(() => {
        floatingBanner.style.display = 'none';
    }, 2000); // Disparition après 2 secondes

    // Toggle pour les questions FAQ avec animation de hauteur
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const arrow = question.querySelector('.arrow');
            
            // Affichage ou masquage de la réponse
            answer.classList.toggle('show');
            if (answer.classList.contains('show')) {
                arrow.innerHTML = '&#9650;'; // Flèche vers le haut
            } else {
                arrow.innerHTML = '&#9660;'; // Flèche vers le bas
            }
        });
    });

    // Animation de la vidéo en arrière-plan
    const videoIntro = document.querySelector('.video-intro');
    const videoContent = document.querySelector('.video-content');
    
    videoIntro.addEventListener('mouseenter', () => {
        videoContent.style.transform = 'translate(-50%, -50%) scale(1.1)';
    });
    
    videoIntro.addEventListener('mouseleave', () => {
        videoContent.style.transform = 'translate(-50%, -50%) scale(1)';
    });

    // Navbar hide/show on scroll
    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > lastScrollTop) {
            navbar.style.top = '-80px'; // Hide navbar
        } else {
            navbar.style.top = '0'; // Show navbar
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative scroll
    });
});

// Menu hamburger pour mobile
const hamburgerMenu = document.getElementById('hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburgerMenu.classList.toggle('open');
});

// Cacher le menu après clic sur un lien
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburgerMenu.classList.remove('open');
    });
});
