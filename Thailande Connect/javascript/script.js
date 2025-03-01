// start NavBar
hamburger = document.querySelector(".hamburger");
hamburger.onclick = function() {
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}
// end NavBar
// start hero
const ScrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".hero_content", {
    ...ScrollRevealOption,
    origin: "top",
});

ScrollReveal().reveal(".hero_content h1 ", {
    ...ScrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".hero_content p ", {
    ...ScrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".hero_content .test", {
    ...ScrollRevealOption,
    delay: 1500,
});
// end hero
// start saction : a la une 
const allPosts = [
    {
        title: "Déjeuner et Rencontre des Ambassadeurs Asie-Pacifique",
        label: "Actualités",
        thumbnail: "../Images/news.jpg",
        summary: "L'ambassadeur à Rabat a animé un déjeuner et une rencontre entre les ambassadeurs de la région Asie-Pacifique au Maroc.",
        link: "https://rabat.thaiembassy.org/fr/content/d%C3%A9jeuner-et-r%C3%A9union-mensuelle-des-ambassadeurs-du?cate=606150cf88a76d57a718011b",
        button: "Lire Plus",
    },
    {
        title: "Visite de Courtoisie de l'Ambassadeur de Thaïlande auprès de la Maire de Rabat",
        label: "Événements",
        thumbnail: "../Images/event.jpg",
        summary: "L'Ambassadeur de Thaïlande et la Maire de Rabat ont échangé sur des coopérations bilatérales et salué les préparatifs pour les grands événements à venir.",
        link: "https://www.facebook.com/share/p/1Ycx3SDWyx/",
        button: "En Savoir Plus",
    },
    {
        title: "Bangkok en Tête des Destinations pour le Nouvel An Lunaire – Agoda",
        label: "Cultures",
        thumbnail: "../Images/culture.webp",
        summary: "Bangkok reste la destination préférée pour célébrer le Nouvel An Lunaire, attirant voyageurs thaïlandais et internationaux avec des recherches en forte hausse.",
        link: "https://www.tourismthailand.org/Articles/agoda-top-destination",
        button: "Explorer",
    },
];

const blogPostsContainer = document.querySelector(".blog-posts-container");

const generatePostsHTML = () => {
    allPosts.forEach(p => {
        const HTML = `
        <div class="thumbnail">
                <img src="${p.thumbnail}" alt="">
            </div>
            <div class="text-content">
                <div class="label">${p.label}</div>
                <h3 class="post-title">
                    ${p.title}
                </h3>
                <div class="summary">
                    ${p.summary}
                </div>
                <a class="read-more-btn" href="${p.link}" target="_blank" >${p.button}</a>
        </div>
        `;

        const blogPost = document.createElement("div");
        blogPost.classList.add("blog-post");
        blogPost.innerHTML = HTML;

        blogPostsContainer.appendChild(blogPost);
    })
}

generatePostsHTML();
// end section : a la une
// start section : services
ScrollReveal().reveal(".about__image img", {
    ...ScrollRevealOption,
    origin: "left",
});

ScrollReveal().reveal(".about__content .section__subheader", {
    ...ScrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".about__content .section__header", {
    ...ScrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".about__content .section__description", {
    ...ScrollRevealOption,
    delay: 1500,
});

ScrollReveal().reveal(".about__btn", {
    ...ScrollRevealOption,
    delay: 2000,
});
// end section : services
// start section : contact
ScrollReveal().reveal(".quick-contact .container .image", {
    ...ScrollRevealOption,
    origin: "left",
});

ScrollReveal().reveal(".info .address", {
    ...ScrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".info .hours", {
    ...ScrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".info .contact-button", {
    ...ScrollRevealOption,
    delay: 1500,
});
// end section : contact