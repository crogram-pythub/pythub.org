module.exports = {
    selectText: 'Languages',
    label: 'English',
    ariaLabel: 'Languages',
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',
    serviceWorker: {
        updatePopup: {
            message: 'New content is available.',
            buttonText: 'Refresh'
        }
    },
    algolia: {},
    nav: [
        { text: 'Home', link: '/' },
        {
            text: 'Software List',
            ariaLabel: 'Software List',
            items: [
                { text: 'File Searcher', link: '/filesearcher/' },
                { text: 'PyInstaller Desktop', link: '/pyinstaller-desktop/' },
                { text: 'Show All Files', link: '/show-all-files/' },
                { text: 'String Utilities', link: '/string-utilities/' },
                { text: 'Password Assistant', link: '/password-assistant/' },
                {
                    text: 'DouFTP',
                    items: [
                        { text: 'DouFTP Client', link: '/douftp/client' },
                        { text: 'DouFTP Server', link: '/douftp/server' }
                    ]
                }
            ]
        },
        {
            text: 'Resources',
            items: [
                { text: 'Python', link: 'https://www.python.org/' },
                { text: 'GUI with Tk', link: 'https://docs.python.org/3/library/tk.html' },
                { text: 'PyInstaller', link: 'http://www.pyinstaller.org/' }
            ]
        }
    ]
    // sidebar: 'auto'
    // sidebar: {
    //     '/': [],
    //     '/nested/': []
    // }
}
