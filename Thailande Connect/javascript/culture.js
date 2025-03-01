// start NavBar
hamburger = document.querySelector(".hamburger");
hamburger.onclick = function() {
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}
// end NavBar
// start Section Art et Architecture
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".image-item img");

    function checkScroll() {
        images.forEach((img) => {
            const rect = img.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                img.style.opacity = "1";
                img.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();
});
// end Section Art et Architecture
// start section payasages naturels
document.querySelectorAll(".filter-btn").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        let filter = button.getAttribute("data-filter");
        document.querySelectorAll(".gallery-item").forEach(item => {
            if (filter === "all" || item.classList.contains(filter)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
});
// end section payasages naturels