module.exports = {
    // 多语言下拉菜单的标题
    selectText: '选择语言',
    ariaLabel: '选择语言',
    // 该语言在下拉菜单中的标签
    label: '简体中文',
    // 编辑链接文字
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: '上次更新',
    // Service Worker 的配置
    serviceWorker: {
        updatePopup: {
            message: '发现新内容可用.',
            buttonText: '刷新'
        }
    },
    // 当前 locale 的 algolia docsearch 选项
    algolia: {},
    nav: [
        { text: '首页', link: '/zh-cn/' },
        {
            text: '软件列表',
            ariaLabel: '软件列表',
            items: [
                { text: '文件搜索工具', link: '/zh-cn/filesearcher' },
                { text: 'GUI应用生成器', link: '/zh-cn/pyinstaller-desktop' },
                { text: '显示系统所有文件 for Mac', link: '/zh-cn/show-all-files-for-mac' },
                { text: '字符串处理工具', link: '/zh-cn/string-utilities' },
                {
                    text: 'DouFTP',
                    items: [
                        { text: 'DouFTP 客户端', link: '/zh-cn/douftp/client' },
                        { text: 'DouFTP 服务端', link: '/zh-cn/douftp/server' }
                    ]
                }
            ]
        }
    ]
    // sidebar: 'auto'
    // sidebar: {
    //     '/zh-cn/': [],
    //     '/zh-cn/nested/': []
    // }
}
