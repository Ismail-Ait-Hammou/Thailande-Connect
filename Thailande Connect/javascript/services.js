// start NavBar
hamburger = document.querySelector(".hamburger");
hamburger.onclick = function() {
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}
// end NavBar
// start title section 
document.addEventListener("DOMContentLoaded", function () {
    const section = document.querySelector(".title-section");
    section.classList.add("visible");
    section.style.transition = 'all 1s ease';
});
// end title section 
// start section relation economique 
const initiativeItems = document.querySelectorAll('.initiatives-list li');

initiativeItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'scale(1.05)';
        item.style.transition = 'transform 0.3s ease';
    });

    item.addEventListener('mouseout', () => {
        item.style.transform = 'scale(1)';
    });
});
// end section relation economique 
// start section FAQ
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    item.addEventListener('click', () => {

        faqItems.forEach(i => {
            if (i !== item) {
            i.classList.remove('open');
            }
        });

        item.classList.toggle('open');
    });
});

// end section FAQ