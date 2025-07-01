// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navBar = document.getElementById('NavBar');

hamburger.addEventListener('click', () => {
    navBar.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.NavBar a').forEach(link => {
    link.addEventListener('click', () => {
        navBar.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Back to top button
const backToTopBtn = document.getElementById('backtoTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Currency converter for contact form
const nairaBudget = document.getElementById('nairaBudget');
const usdBudget = document.getElementById('usdBudget');
const countrySelect = document.getElementById('countrySelect');

nairaBudget.addEventListener('change', convertCurrency);
countrySelect.addEventListener('change', checkCountry);

function convertCurrency() {
    const selectedValue = nairaBudget.value;
    if (selectedValue === '5000-10000') {
        usdBudget.textContent = 'USD Budget: $10 - $20';
    } else if (selectedValue === '100000-500000') {
        usdBudget.textContent = 'USD Budget: $200 - $1000';
    }
    usdBudget.style.display = 'block';
}

function checkCountry() {
    if (countrySelect.value === 'Nigeria') {
        nairaBudget.style.display = 'block';
        usdBudget.style.display = 'none';
    } else {
        nairaBudget.style.display = 'none';
        usdBudget.style.display = 'none';
    }
}

// Initialize AOS animation
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});

// Typing animation
const typed = new Typed('#typing', {
    strings: ['Frontend Developer', 'UI/UX Designer', 'Mobile App Developer'],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
});