// Typing Animation

const texts = [
    "Aspiring Web Developer",
    "ASP.NET Developer",
    "PHP Developer",
    "Frontend Designer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {

    if (count === texts.length) {
        count = 0;
    }

    currentText = texts[count];

    letter = currentText.slice(0, ++index);

    document.querySelector(".typing").textContent = letter;

    if (letter.length === currentText.length) {

        setTimeout(() => {

            index = 0;
            count++;

            type();

        }, 1500);

    } else {

        setTimeout(type, 100);

    }

})();


// Scroll Animation

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});

const hiddenElements = document.querySelectorAll(".hidden");

hiddenElements.forEach((el) => observer.observe(el));


// Dark Mode Toggle

const toggleBtn = document.getElementById("theme-toggle");


// Load saved theme

if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark-mode");

    toggleBtn.innerHTML = "☀️";

} else {

    toggleBtn.innerHTML = "🌙";

}


// Toggle Theme

toggleBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        toggleBtn.innerHTML = "☀️";

        localStorage.setItem("theme", "dark");

    } else {

        toggleBtn.innerHTML = "🌙";

        localStorage.setItem("theme", "light");

    }

});


// Smooth Scroll for Navbar

document.querySelectorAll('nav a').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        const targetId = this.getAttribute('href');

        const targetSection = document.querySelector(targetId);

        if (targetSection) {

            targetSection.scrollIntoView({
                behavior: 'smooth'
            });

        }

    });

});