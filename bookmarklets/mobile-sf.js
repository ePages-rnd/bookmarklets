(function () {
    var path = window.location.pathname;

    if (window.location.href.indexOf('.mobile') > -1) {
        return;
    }

    path = path.replace('.sf', '.mobile')
    window.location = window.location.href.replace(window.location.pathname, path);
}());
