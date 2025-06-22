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