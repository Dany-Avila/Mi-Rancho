document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
});

ScrollReveal({ reset: true});
ScrollReveal().reveal('.showcase', {delay: 255});
ScrollReveal().reveal('.news-cards', {delay: 255});
ScrollReveal().reveal('.cards-banner-one', {delay: 255});
ScrollReveal().reveal('.cards-banner-two', {delay: 255});
