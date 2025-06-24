AOS.init({duration:1000, once:true});

const hamburger = document.getElementById('hamburger');
const navBar = document.getElementById('navBar');

hamburger.addEventListener("click", () => {
    navBar.classList.toggle('active');
})

new Typed ("#typing", {
    strings:['UI/UX Designer.', "Web Developer.", "Creative Thinker", "Stragetic Thinker"],
    typeSpeed: 60, backSpeed: 30, backDelay: 1000, loop:true,
});

// counter animations
const counters = document.querySelectorAll('.counter');
const speed = 50; // The lower the slower

const runCounter = (counter) => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const increment = Math.ceil(target / speed);

    if (count < target) {
        counter.innerText = count + increment;
        setTimeout(() => runCounter(counter), 20);
    } else {
        counter.innerText = target;
    };
};

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