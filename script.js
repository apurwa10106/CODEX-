/* =========================
   CODEX HACKATHON 2026
========================= */

/* LOADER */

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    setTimeout(() => {
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);

    }, 1000);
});

/* =========================
   AOS ANIMATION
========================= */

AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

/* =========================
   CUSTOM CURSOR
========================= */

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});

/* =========================
   COUNTDOWN TIMER
========================= */

const targetDate = new Date(
    "September 20, 2026 09:00:00"
).getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const distance = targetDate - now;

    if (distance < 0) {
        return;
    }

    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();

/* =========================
   DARK LIGHT MODE
========================= */

const themeBtn =
    document.getElementById("themeToggle");

const savedTheme =
    localStorage.getItem("theme");

if (savedTheme === "light") {

    document.body.classList.add("light");

    themeBtn.innerHTML =
        '<i class="fa-solid fa-sun"></i>';
}

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if (
        document.body.classList.contains("light")
    ) {

        localStorage.setItem(
            "theme",
            "light"
        );

        themeBtn.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    } else {

        localStorage.setItem(
            "theme",
            "dark"
        );

        themeBtn.innerHTML =
            '<i class="fa-solid fa-moon"></i>';
    }

});

/* =========================
   PARTICLES BACKGROUND
========================= */

particlesJS("particles-js", {

    particles: {

        number: {
            value: 80
        },

        color: {
            value: "#8B5CF6"
        },

        shape: {
            type: "circle"
        },

        opacity: {
            value: 0.4
        },

        size: {
            value: 3
        },

        move: {
            enable: true,
            speed: 2
        },

        line_linked: {
            enable: true,
            distance: 150,
            color: "#8B5CF6",
            opacity: 0.3
        }

    }

});

/* =========================
   SPONSOR CAROUSEL
========================= */

new Swiper(".sponsorSwiper", {

    slidesPerView: 4,
    spaceBetween: 30,

    loop: true,

    autoplay: {
        delay: 1800,
        disableOnInteraction: false
    },

    breakpoints: {

        320: {
            slidesPerView: 1
        },

        768: {
            slidesPerView: 2
        },

        1024: {
            slidesPerView: 4
        }
    }

});

/* =========================
   GALLERY LIGHTBOX
========================= */

GLightbox({
    selector: ".gallery"
});

/* =========================
   ANIMATED COUNTERS
========================= */

const countersStarted = {
    value: false
};

function startCounters() {

    if (countersStarted.value) return;

    countersStarted.value = true;

    new countUp.CountUp(
        "counter1",
        1500
    ).start();

    new countUp.CountUp(
        "counter2",
        420
    ).start();

    new countUp.CountUp(
        "counter3",
        65
    ).start();

    new countUp.CountUp(
        "counter4",
        120
    ).start();
}

const statsSection =
    document.querySelector(".stats-section");

const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {
                    startCounters();
                }

            });

        },

        {
            threshold: 0.4
        }

    );

if (statsSection) {
    observer.observe(statsSection);
}

/* =========================
   FAQ ACCORDION
========================= */

const faqQuestions =
    document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {

    question.addEventListener("click", () => {

        const answer =
            question.nextElementSibling;

        const isVisible =
            answer.style.display === "block";

        document
            .querySelectorAll(".faq-answer")
            .forEach(item => {

                item.style.display = "none";

            });

        if (!isVisible) {
            answer.style.display = "block";
        }

    });

});

/* =========================
   FORM VALIDATION
========================= */

const form =
    document.getElementById(
        "hackathonForm"
    );

form.addEventListener(
    "submit",
    (e) => {

        e.preventDefault();

        const teamName =
            document.getElementById(
                "teamName"
            ).value.trim();

        const leaderName =
            document.getElementById(
                "leaderName"
            ).value.trim();

        const email =
            document.getElementById(
                "email"
            ).value.trim();

        const phone =
            document.getElementById(
                "phone"
            ).value.trim();

        const formMessage =
            document.getElementById(
                "formMessage"
            );

        const emailRegex =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const phoneRegex =
            /^[0-9]{10}$/;

        if (
            !teamName ||
            !leaderName ||
            !email ||
            !phone
        ) {

            formMessage.style.color =
                "#ff4d4d";

            formMessage.textContent =
                "Please fill all required fields.";

            return;
        }

        if (
            !emailRegex.test(email)
        ) {

            formMessage.style.color =
                "#ff4d4d";

            formMessage.textContent =
                "Please enter a valid email.";

            return;
        }

        if (
            !phoneRegex.test(phone)
        ) {

            formMessage.style.color =
                "#ff4d4d";

            formMessage.textContent =
                "Enter a valid 10-digit phone number.";

            return;
        }

        formMessage.style.color =
            "#22c55e";

        formMessage.textContent =
            "🎉 Registration Successful!";

        form.reset();

    }
);

/* =========================
   BACK TO TOP BUTTON
========================= */

const topBtn =
    document.getElementById("topBtn");

window.addEventListener(
    "scroll",
    () => {

        if (
            window.scrollY > 500
        ) {

            topBtn.style.display =
                "flex";

        } else {

            topBtn.style.display =
                "none";
        }

    }
);

topBtn.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    }
);

/* =========================
   MOBILE MENU
========================= */

const hamburger =
    document.querySelector(
        ".hamburger"
    );

const navLinks =
    document.querySelector(
        ".nav-links"
    );

hamburger.addEventListener(
    "click",
    () => {

        navLinks.classList.toggle(
            "mobile-active"
        );

    }
);

/* =========================
   NAV LINK CLOSE
========================= */

document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                navLinks.classList.remove(
                    "mobile-active"
                );

            }
        );

    });

/* =========================
   SCROLL INDICATOR HIDE
========================= */

window.addEventListener(
    "scroll",
    () => {

        const indicator =
            document.querySelector(
                ".scroll-indicator"
            );

        if (!indicator) return;

        if (
            window.scrollY > 100
        ) {

            indicator.style.opacity = 0;

        } else {

            indicator.style.opacity = 1;
        }

    }
);

/* =========================
   HERO CARD HOVER EFFECT
========================= */

const cards =
    document.querySelectorAll(
        ".glass-card"
    );

cards.forEach(card => {

    card.addEventListener(
        "mousemove",
        (e) => {

            const rect =
                card.getBoundingClientRect();

            const x =
                e.clientX - rect.left;

            const y =
                e.clientY - rect.top;

            card.style.background =
                `radial-gradient(circle at ${x}px ${y}px,
                rgba(139,92,246,.25),
                rgba(255,255,255,.05))`;

        }
    );

    card.addEventListener(
        "mouseleave",
        () => {

            card.style.background =
                "var(--card)";

        }
    );

});

/* =========================
   CONSOLE MESSAGE
========================= */

console.log(
`
🚀 CodeX Hackathon 2026

Build The Future

Premium Frontend Project Loaded Successfully.
`
);
