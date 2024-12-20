document.getElementById("scroll-button").addEventListener("click", () => {
    const videoSection = document.getElementById("fullscreen-video");
    const mainContent = document.getElementById("main-content");

    // 平滑滚动到下方内容
    videoSection.style.display = "none"; // 隐藏背景视频
    mainContent.style.display = "block"; // 显示模块内容
    mainContent.scrollIntoView({ behavior: "smooth" });
});
