window.sr = ScrollReveal();

sr.reveal('.main--pic, .skills', {
    duration: 3000,
    origin: 'bottom',
    reset: true,
    delay: 50
        /* distance: '-100px' */
});

/* animación con origen desde la derecha y delay */
sr.reveal('.main--title, .skills-title', {
    duration: 3000,
    origin: 'right',
    distance: '-200px',
    delay: 100,

});
/* animación desde abajo y delay */
sr.reveal('.main--description, skills-description', {
    duration: 3000,
    origin: 'right',
    distance: '-200px',
    delay: 200,

});
/* animación top sin delay */