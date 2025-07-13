let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
console.log(menuicon); // Check if menuicon is selected
console.log(navbar);   // Check if navbar is selected
menuicon.onclick = () => {
    menuicon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

// Scroll section active link
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // Sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove toggle icon and navbar
    menuicon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};
//scroll-reveal
ScrollReveal({ 
    distance:'80px',
    duration:2000,
    delay:200,
});
ScrollReveal().reveal('.home-content,heading', { origin:'top' });
ScrollReveal().reveal('.home-img,.services-container,.portfolio-box,.contact form', { origin:'bottom' });
ScrollReveal().reveal('.home-contact h1,.about-img', { origin:'left' });
ScrollReveal().reveal('.home-contact p,.about-content', { origin:'right' });
// typed js
const typed = new Typed('.multiple-text',
{
    strings: ["Mern-Stack-Developer","Web Designer","UI/UX Designer"],
    typespeed:30,
    backspeed:30,
    backdelay:500,
    loop:true,

});

// EmailJS Configuration
(function(){
    emailjs.init("8svHja4WmLd9AA0bk"); // Replace with your EmailJS public key
})();

// Contact Form Handler
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Show loading state
    const submitBtn = document.querySelector('input[type="submit"]');
    const originalText = submitBtn.value;
    submitBtn.value = 'Sending...';
    submitBtn.disabled = true;
    
    // Send email using EmailJS
    emailjs.sendForm('service_zm0n3of', 'template_3x8h62c', this)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Message sent successfully! Thank you for contacting me.');
            document.getElementById('contact-form').reset();
        }, function(error) {
            console.log('FAILED...', error);
            alert('Failed to send message. Please try again or contact me directly.');
        })
        .finally(function() {
            // Reset button state
            submitBtn.value = originalText;
            submitBtn.disabled = false;
        });
});


