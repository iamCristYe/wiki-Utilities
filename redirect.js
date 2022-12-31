(function () {
    var desktopElement = document.getElementById("mw-mf-display-toggle");

    if (desktopElement) {
        var link = desktopElement.getAttribute('href');
        if (link.indexOf("toggle_view_desktop") != -1) {
            window.location.replace(
                link.replace('=zh', '=zh-cn')
                    .replace('=zh-hans', '=zh-cn')
                    .replace('=zh-hant', '=zh-cn')
                    .replace('=zh-cn', '=zh-cn')
                    .replace('=zh-hk', '=zh-cn')
                    .replace('=zh-mo', '=zh-cn')
                    .replace('=zh-my', '=zh-cn')
                    .replace('=zh-sg', '=zh-cn')
                    .replace('=zh-tw', '=zh-cn'));
            return;
        }
    }

    var href = window.location.href;

    if (href.indexOf('.m.') > -1 || href.indexOf('/zh/') > -1 || href.indexOf('/zh-') > -1) {
        window.location.replace(
            href.replace('.m.', '.')
                .replace('/zh/', '/wiki/')
                .replace('/zh-hans/', '/wiki/')
                .replace('/zh-hant/', '/wiki/')
                .replace('/zh-cn/', '/wiki/')
                .replace('/zh-hk/', '/wiki/')
                .replace('/zh-mo/', '/wiki/')
                .replace('/zh-my/', '/wiki/')
                .replace('/zh-sg/', '/wiki/')
                .replace('/zh-tw/', '/wiki/'));
    }
})()
