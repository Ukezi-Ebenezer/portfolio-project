AOS.init({duration:1000, once:true});

const hamburger = document.getElementById('hamburger');
const navBar = document.getElementById('navBar');
const navOverlay = document.getElementById('navOverlay');

hamburger.addEventListener("click", () => {
    navBar.classList.toggle('active');
})

new Typed ("#typing", {
    strings:['UI/UX Designer.', "Web Developer.", "Creative Thinker", "Stragetic Thinker"],
    typeSpeed: 60, backSpeed: 30, backDelay: 1000, loop:true,
});

// counter animations
document.querySelectorAll('.counter').forEach(counter => {
    const target = +counter.getAttribute('data-target');
    let count = 0;
    const speed = 200; // Lower is faster

    function updateCounter() {
        const increment = Math.ceil(target / speed);
        if (count < target) {
            count += increment;
            if (count > target) count = target;
            counter.textContent = count;
            requestAnimationFrame(updateCounter);
        } else {
            counter.textContent = target;
        }
    }
    updateCounter();
});

// run counter when section is visible
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            counters.forEach(counter => runCounter(counter));
            observer.disconnect();
        }
    })
})

const statsSection = document.querySelector('.stats');
if (statsSection) {
    observer.observe(statsSection);
}

// Exchange rate: 1 USD = 1500 NGN (update as needed)
const exchangeRate = 1500;
const nairaBudget = document.getElementById('nairaBudget');
const usdBudget = document.getElementById('usdBudget');
const countrySelect = document.getElementById('countrySelect');

function updateUSDBudget() {
    let value = nairaBudget.value;
    let country = countrySelect.value;
    if (country && country !== "Nigeria" && value) {
        let [min, max] = value.split('-').map(Number);
        let usdMin = Math.round(min / exchangeRate);
        let usdMax = Math.round(max / exchangeRate);
        usdBudget.textContent = `USD Budget: $${usdMin} - $${usdMax}`;
        usdBudget.style.display = "block";
    } else {
        usdBudget.textContent = "USD Budget: $0";
        usdBudget.style.display = "none";
    }
}

if (nairaBudget && usdBudget && countrySelect) {
    nairaBudget.addEventListener('change', updateUSDBudget);
    countrySelect.addEventListener('change', updateUSDBudget);
}

// Optionally, call once on page load to set initial state
updateUSDBudget();

// Scrolling Events

window.onscroll = () =>{
    const scrollY = window.scrollY,
          topBtn = document.getElementById("backtoTop");

    if (topBtn){
    topBtn.style.display = scrollY > 300 ? "block" : "none";  
    }    
};

document.getElementById("backtoTop")?.addEventListener ("click", () =>
window.scrollTo ({top:0, behavior: "smooth" })
);

if (hamburger && navBar) {
    hamburger.addEventListener('click', () => {
        navBar.classList.toggle('active');
        hamburger.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    // Optional: close menu when a link is clicked
    navBar.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navBar.classList.remove('active');
            hamburger.classList.remove('active');
            const hamburger = document.getElementById('hamburger');
const navBar = document.getElementById('NavBar');
const navOverlay = document.getElementById('navOverlay');

if (hamburger && navBar && navOverlay) {
    hamburger.addEventListener('click', () => {
        navBar.classList.toggle('active');
        navOverlay.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    navBar.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navBar.classList.remove('active');
            navOverlay.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    navOverlay.addEventListener('click', () => {
        navBar.classList.remove('active');
        navOverlay.classList.remove('active');
        hamburger.classList.remove('active');
    });
}
        });
    });

    if (navOverlay) {
        navOverlay.addEventListener('click', () => {
            navBar.classList.remove('active');
            hamburger.classList.remove('active');
            navOverlay.style.display = 'none';
        });
    }
}
