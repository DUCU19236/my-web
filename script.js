// 获取实时内容并动态更新
const liveContainer = document.getElementById('live-content');

// 使用 fetch 定期加载 kaitou.live 的内容
async function loadLiveContent() {
    try {
        const response = await fetch('kaitou.live');
        if (response.ok) {
            const content = await response.text();
            liveContainer.innerHTML = content;
        } else {
            liveContainer.innerHTML = '加载实时内容失败，请稍后重试。';
        }
    } catch (error) {
        console.error('加载实时内容出错:', error);
        liveContainer.innerHTML = '加载实时内容出错，请检查网络连接。';
    }
}

// 页面加载时立即加载一次内容
loadLiveContent();

// 每隔 5 秒刷新一次内容
setInterval(loadLiveContent, 5000);
