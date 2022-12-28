(function () {
    var href = window.location.href;

    if (href.indexOf('.m.') > -1 || href.indexOf('/zh') > -1) {
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
                .replace('/zh-tw/', '/wiki/')
        );
    }
})()
