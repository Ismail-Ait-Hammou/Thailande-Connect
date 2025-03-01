// start NavBar
hamburger = document.querySelector(".hamburger");
hamburger.onclick = function() {
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}
// end NavBar
// start Section Title
document.addEventListener("DOMContentLoaded", () => {
    const titleSection = document.querySelector(".about-title");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            }
        });
    });

    observer.observe(titleSection);
});
// end Section Title
// start Section: Introduction à l'ambassade
document.addEventListener("DOMContentLoaded", () => {
    const introSection = document.querySelector(".introduction-ambassade");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            }
        });
    });

    observer.observe(introSection);
});
// end Section: Introduction à l'ambassade
// start Section Mission et Objectifs
document.addEventListener("DOMContentLoaded", () => {
    const objectifItems = document.querySelectorAll(".objectifs-list li");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            }
        });
    });

    objectifItems.forEach((item) => observer.observe(item));
});
// end Section Mission et Objectifs
// start section : Historique de l'ambassade
document.addEventListener("DOMContentLoaded", () => {
    const achievementItems = document.querySelectorAll(".achievement-item");
    achievementItems.forEach((item) => {
        item.style.opacity = "0";
        item.style.transform = "translateY(20px)";
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                entry.target.style.transition = "all 1.2s ease-in-out";
            }
        });
    });

    achievementItems.forEach((item) => observer.observe(item));
});
// end section : Historique de l'ambassade
// start section : Equipe
document.addEventListener("DOMContentLoaded", () => {
    const teamMembers = document.querySelectorAll(".team-member");

    teamMembers.forEach((member) => {
        member.style.opacity = "0";
        member.style.transform = "scale(0.8)";
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "scale(1)";
                entry.target.style.transition = "all 0.5s ease-in-out";
            }
        });
    });

    teamMembers.forEach((member) => observer.observe(member));
});
// end section : Equipe
// start section : Valeurs et Engagement
document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".values-list li");
    items.forEach((item) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(20px)";
    item.style.transition = "opacity 1s ease, transform 1s ease";
    });

    window.addEventListener("scroll", () => {
    items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.top <= window.innerHeight - 100) {
        item.style.opacity = "1";
        item.style.transform = "translateY(0)";
        }
    });
    });
});
// end section : Valeurs et Engagement