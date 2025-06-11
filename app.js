// Mobile menu toggle
document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".menu");
    const nav = document.querySelector("nav");

    menuButton.addEventListener("click", () => {
        nav.classList.toggle("open");
        nav.style.display = nav.classList.contains("open") ? "block" : "none";
    });

    // Buy Now alert or PHP submission simulation
    const buyButtons = document.querySelectorAll(".buy-now");
    buyButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const productTitle = this.closest("div").querySelector("h3").textContent;
            alert(`You selected: ${productTitle}\nThank you! Visit our new store at Sunway Carnival Mall, Ground Floor on 11th June.`);
        });
    });
});