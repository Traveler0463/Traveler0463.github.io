document.addEventListener('DOMContentLoaded', function() {
    // 目标元素：首页 Banner 中的大标题和小标题
    const siteTitle = document.getElementById('site-title');
    const siteSubtitle = document.getElementById('site-subtitle');

    if (siteTitle) {
        // 强制将颜色设置为黑色
        siteTitle.style.color = '#000000';
        // 移除可能影响显示的白色阴影
        siteTitle.style.textShadow = 'none'; 
    }

    if (siteSubtitle) {
        siteSubtitle.style.color = '#000000';
        siteSubtitle.style.textShadow = 'none';
    }

    // 针对导航栏中的标题（防止滚动后变色）
    const navTitle = document.querySelector('#nav .site-title a');
    if (navTitle) {
        navTitle.style.color = '#000000';
    }
});