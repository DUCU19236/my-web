function changeModule(moduleNumber) {
    const module = document.getElementById(`module${moduleNumber}`);
    switch (moduleNumber) {
        case 1:
            // 模块 1：改变背景颜色
            module.style.backgroundColor = module.style.backgroundColor === 'lightblue' ? 'white' : 'lightblue';
            break;
        case 2:
            // 模块 2：改变文字内容
            const heading = module.querySelector('h2');
            heading.textContent = heading.textContent === '模块 2' ? '内容已改变！' : '模块 2';
            break;
        case 3:
            // 模块 3：隐藏或显示
            module.classList.toggle('hidden');
            break;
    }
}
