document.getElementById("scroll-button").addEventListener("click", () => {
    const videoSection = document.getElementById("fullscreen-video");
    const mainContent = document.getElementById("main-content");

    // 隐藏视频部分
    videoSection.style.display = "none";

    // 显示模块内容并滚动到该区域
    mainContent.style.display = "block";
    mainContent.scrollIntoView({ behavior: "smooth" });
});

// 模块点击功能已经在 HTML 中通过 onclick 实现
