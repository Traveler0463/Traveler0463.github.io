   if (typeof Waline !== 'undefined' && typeof document !== 'undefined') {
        
        // 这是一个全局函数，hexo-blog-encrypt 插件在解密成功后会自动调用它
        window.showEncryptArticle = function() {
            console.log("Article decrypted. Loading Waline comments now.");
            
            // 1. 动态创建 Waline 评论容器
            // 目标容器是主题中用于放置评论系统的 #post-comment
            let commentContainer = document.getElementById('post-comment');
    
            if (commentContainer) {
                // 清空原有的静态内容，然后插入 Waline 容器
                commentContainer.innerHTML = '<div id="waline_container" class="waline-comment-container"></div>';
    
                // 2. 初始化 Waline 脚本
                Waline.init({
                    el: '#waline_container', 
                    // !!! 请将这里替换为您的 Vercel 域名 !!!
                    serverURL: 'https://您的Vercel域名.vercel.app', 
                    
                    // 确保您的其他 Waline 配置也复制到这里
                    path: window.location.pathname,
                    
                    // 假设您可能需要的其他选项
                    // dark: 'html[data-theme="dark"]',
                    // emoji: ['https://cdn.jsdelivr.net/gh/walinejs/emojis@1.1.0/bilibili'],
                    // comment: true, // 启用评论
                    // pageview: true, // 启用文章阅读量统计
                    // ...
                });
            } else {
                console.error("Waline Initialization Error: #post-comment container not found.");
            }
        };
    }