document.addEventListener("DOMContentLoaded", () => {
    const butterflyContainer = document.querySelector(".butterflies");

    // 动态生成多个蝴蝶
    const numberOfButterflies = 10; // 可以调整数量
    for (let i = 0; i < numberOfButterflies; i++) {
        const butterfly = document.createElement("img");
        butterfly.src = "images/butterfly.png";
        butterfly.className = "butterfly";
        butterfly.style.animation = `fly${(i % 2) + 1} ${Math.random() * 5 + 5}s linear infinite`;
        butterfly.style.left = Math.random() * window.innerWidth + "px";
        butterfly.style.top = Math.random() * window.innerHeight + "px";
        butterflyContainer.appendChild(butterfly);
    }
});
