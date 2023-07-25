var hamburger = document.querySelector(".hamb");
var navlist = document.querySelector(".nav-list");
var links = document.querySelector(".nav-list li");

hamburger.addEventListener("click", function(){
    this.classList.toggle("click");
    navlist.classList.toggle("open");
});

/* ======= ADD BLUR TO HEADER ===== */
const blurHeader = () =>{
    const header = document.getElementById('header')

    this.scrollY >= 50 ? header.classList.add('blur-header')
                        : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/* ======= EMAIL JS ===== */

const contactForm = document.getElementById('contact-form'),
        contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    
}

contactForm.addEventListener('submit', sendEmail)





/* ======= SCROLLREVEAL JS ===== */

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true // Animations repeat
})

sr.reveal('.hero-text, .skills_data, .contact__headline')
sr.reveal('.homeimage, .btn, .services__container, .contact__button, .footer-col', {origin: 'bottom'})
sr.reveal('.about-img, .skills__content, .services__headline, .projects_container', {origin: 'right'})
sr.reveal('.about-content, .projects__headline, .contact__group, .contact__input', {origin: 'left'})