document.addEventListener("DOMContentLoaded", () => {
    const butterflies = document.querySelectorAll(".butterfly");
    butterflies.forEach((butterfly) => {
        butterfly.style.left = Math.random() * window.innerWidth + "px";
        butterfly.style.animationDuration = Math.random() * 5 + 5 + "s";
    });
});
