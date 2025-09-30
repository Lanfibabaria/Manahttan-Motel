document.addEventListener("DOMContentLoaded", function() {

    // --- GESTION DU MENU BURGER POUR LE HEADER RESPONSIVE ---
    const burger = document.querySelector('.nav-burger');
    const navMenu = document.querySelector('.nav-menu');

    if (burger && navMenu) {
        burger.addEventListener('click', () => {
            // Bascule les classes pour afficher/cacher le menu et animer le bouton
            navMenu.classList.toggle('active');
            burger.classList.toggle('active');
        });

        // Ferme le menu si un lien est cliqué (utile pour la navigation)
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    burger.classList.remove('active');
                }
            });
        });
    }


    // --- GESTION DU SLIDER POUR LA PAGE CHAMBRES ---
    // On vérifie si l'élément .rooms-slider existe avant d'initialiser Swiper
    // pour ne pas causer d'erreur sur les autres pages.
    if (document.querySelector('.rooms-slider')) {
        const swiper = new Swiper('.rooms-slider', {
            // Options de la bibliothèque Swiper.js
            loop: true, // Pour que le slider boucle à l'infini
            slidesPerView: 1, // Nombre de slides visibles par défaut (mobile)
            spaceBetween: 20, // Espace entre les slides
            
            // Points de rupture pour rendre le slider responsive
            breakpoints: {
                // quand la largeur de la fenêtre est >= 640px
                640: {
                  slidesPerView: 2, // Affiche 2 slides
                  spaceBetween: 20
                },
                // quand la largeur de la fenêtre est >= 1024px
                1024: {
                  slidesPerView: 3, // Affiche 3 slides
                  spaceBetween: 30
                }
            },

            // Pagination (les petits points en bas)
            pagination: {
                el: '.swiper-pagination',
                clickable: true, // Permet de cliquer sur les points pour naviguer
            },

            // Boutons de navigation (flèches gauche/droite)
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }

});

