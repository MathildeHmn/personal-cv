// Navbar
let lastScrollTop = 0;
navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageTOffset ||
    this.document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        navbar.style.top = "-50px";
    } else {
        navbar.style.top = "0";
    }
    lastScrollTop = scrollTop;
});

// Typed 
let typed = new Typed('.typed', {
    strings: ["- Passionnée par la création sous toutes ses formes et l'univers du Web en général depuis de quelques années, j'ai naturellement choisi de m'orienter vers le métier de développeur web. Après une formation en Développement Web et Web Mobile, je recherche un poste en tant que Développeuse Web. -"],
    typeSpeed: 20,
});

// AOS
AOS.init();