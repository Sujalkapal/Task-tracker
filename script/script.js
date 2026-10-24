const menuIcon = document.getElementById("menuIcon");
const nav = document.getElementById("nav");

menuIcon.onclick = () => {
    nav.classList.toggle("active");
};

document.querySelectorAll("nav a").forEach(link => {
    link.onclick = () => nav.classList.remove("active");
});


const reveal = document.querySelectorAll(".reveal");

function showElements() {
    reveal.forEach(element => {
        if (element.getBoundingClientRect().top < window.innerHeight - 80) {
            element.classList.add("show");
        }
    });
}

window.addEventListener("scroll", showElements);
window.addEventListener("load", showElements);


function showOffer() {
    alert("Enjoy 20% OFF on selected coffees and desserts!");
}


document.getElementById("bookingForm").onsubmit = function(e) {
    e.preventDefault();
    alert("Thank you! Your table has been reserved.");
    this.reset();
};