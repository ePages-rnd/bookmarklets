(function(){
    var param = 'ChangeAction=SetDebugSession&Debug=1';

    if (window.location.href.indexOf(param) > -1) {
        return;
    }

    if (window.location.href.indexOf('?') > -1) {
        param = '&' + param;
    } else {
        param = '?' + param;
    }

    window.location = window.location + param;
}());
