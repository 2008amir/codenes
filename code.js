// ===== SMOOTH SCROLLING =====
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        const targetID = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetID);
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// ===== CONTACT FORM SUBMISSION =====
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e){
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if(name === "" || email === "" || message === ""){
        alert("Please fill in all fields.");
        return;
    }

    // Here you can add backend API integration if needed
    alert(`Thank you, ${name}! Your message has been sent successfully.`);

    // Reset form after submission
    contactForm.reset();
});

// ===== DYNAMIC GREETING =====
const heroContent = document.querySelector('.hero-content h1');
const hours = new Date().getHours();
let greeting = "Welcome to CodeNest Academy";

if(hours >= 5 && hours < 12){
    greeting = "Good Morning! Welcome to CodeNest Academy";
}else if(hours >= 12 && hours < 17){
    greeting = "Good Afternoon! Welcome to CodeNest Academy";
}else if(hours >= 17 && hours < 21){
    greeting = "Good Evening! Welcome to CodeNest Academy";
}else{
    greeting = "Hello! Welcome to CodeNest Academy";
}

heroContent.textContent = greeting;

// ===== GALLERY IMAGE ANIMATION =====
const galleryImages = document.querySelectorAll('.gallery-grid img');

galleryImages.forEach(img => {
    img.addEventListener('mouseenter', () => {
        img.style.transform = 'scale(1.1)';
        img.style.transition = 'transform 0.5s';
    });
    img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)';
    });
});

// ===== NAVBAR ACTIVE LINK HIGHLIGHT =====
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(pageYOffset >= sectionTop - 60){
            current = section.getAttribute('id');
        }
    });

    navLi.forEach(a => {
        a.classList.remove('active');
        if(a.getAttribute('href').includes(current)){
            a.classList.add('active');
        }
    });
});

// ===== OPTIONAL: RANDOM COLOR BUTTON EFFECT =====
const buttons = document.querySelectorAll('.btn, .btn-small');

buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        button.style.color = '#fff';
    });
    button.addEventListener('mouseleave', () => {
        button.style.backgroundColor = '';
        button.style.color = '';
    });
});