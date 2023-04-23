(function () {
    var desktopElement = document.getElementById("mw-mf-display-toggle");
    if (desktopElement) {
        var href = desktopElement.getAttribute('href');
        if (href.indexOf("toggle_view_desktop") != -1) {
            window.location.replace(
                href.replace('&variant=zh-cn', '')
                    .replace('&variant=zh-hk', '')
                    .replace('&variant=zh-mo', '')
                    .replace('&variant=zh-my', '')
                    .replace('&variant=zh-sg', '')
                    .replace('&variant=zh-tw', '')
                    .replace('&variant=zh-hans', '')
                    .replace('&variant=zh-hant', '')
                    .replace('&variant=zh', ''));
            return;
        }
    }
    else {
        var href = window.location.href;
        if (href.indexOf('.m.') > -1 || href.indexOf('/zh/') > -1 || href.indexOf('/zh-') > -1) {
            window.location.replace(
                href.replace('.m.', '.')
                    .replace('/zh-cn/', '/wiki/')
                    .replace('/zh-hk/', '/wiki/')
                    .replace('/zh-mo/', '/wiki/')
                    .replace('/zh-my/', '/wiki/')
                    .replace('/zh-sg/', '/wiki/')
                    .replace('/zh-tw/', '/wiki/')
                    .replace('/zh-hans/', '/wiki/')
                    .replace('/zh-hant/', '/wiki/')
                    .replace('/zh/', '/wiki/'));
            return;
        }
    }
    document.querySelector("#personal>h2").innerText = ""
})()



