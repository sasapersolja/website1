/*==================== MENU TOGGLE ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

// Show Menu
if (navToggle) {
    navToggle.addEventListener('click', () => navMenu.classList.add('show-menu'));
}

// Hide Menu
if (navClose) {
    navClose.addEventListener('click', () => navMenu.classList.remove('show-menu'));
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach(link => link.addEventListener('click', () => navMenu.classList.remove('show-menu')));

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const header = document.getElementById('header');
    this.scrollY >= 100 ? header.classList.add('scroll-header') : header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/*==================== SWIPER DISCOVER ====================*/
new Swiper(".discover__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
    coverflowEffect: { rotate: 0 }
});

/*==================== VIDEO PLAY/PAUSE ====================*/
const videoFile = document.getElementById('video-file'),
      videoButton = document.getElementById('video-button'),
      videoIcon = document.getElementById('video-icon');

const togglePlayPause = () => {
    if (videoFile.paused) {
        videoFile.play();
        videoIcon.classList.replace('ri-play-line', 'ri-pause-line');
    } else {
        videoFile.pause();
        videoIcon.classList.replace('ri-pause-line', 'ri-play-line');
    }
};

videoButton.addEventListener('click', togglePlayPause);
videoFile.addEventListener('ended', () => {
    videoIcon.classList.replace('ri-pause-line', 'ri-play-line');
});

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    this.scrollY >= 200 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.add('active-link');
        } else {
            document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', scrollActive);

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    // reset: true, // Uncomment if you want to enable reset on scroll
});

sr.reveal(`.home__data, .home__social-link, .home__info,
           .discover__container,
           .experience__data, .experience__overlay,
           .place__card,
           .sponsor__content,
           .footer__data, .footer__rights`, {
    origin: 'top',
    interval: 100,
});

sr.reveal(`.about__data, 
           .video__description,
           .subscribe__description`, {
    origin: 'left',
});

sr.reveal(`.about__img-overlay, 
           .video__content,
           .subscribe__form`, {
    origin: 'right',
    interval: 100,
});

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

// Get stored user theme preference
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// Get current theme
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

// Apply previously selected theme and icon
if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
}

// Toggle theme and icon
themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // Save user's preference
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});
