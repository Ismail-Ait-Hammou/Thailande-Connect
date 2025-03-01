// start NavBar
hamburger = document.querySelector(".hamburger");
hamburger.onclick = function() {
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}
// end NavBar
// start Section : Coordonnées de l’Ambassade
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert("Adresse copiée !");
    }).catch(err => {
        console.error("Erreur lors de la copie", err);
    });
}
// end Section : Coordonnées de l’Ambassade
// start section : formulaire
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();
    let formMessage = document.getElementById("form-message");

    if (name === "" || email === "" || subject === "" || message === "") {
        alert("Veuillez remplir tous les champs.");
        return;
    }

    formMessage.classList.remove("hidden");

    setTimeout(() => {
        formMessage.classList.add("hidden");
        document.getElementById("contactForm").reset();
    }, 3000);
});

function sendEmail(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    let mailtoLink = `mailto:ismailaithammou@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("Nom: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message)}`;
}
// end section : formulaire