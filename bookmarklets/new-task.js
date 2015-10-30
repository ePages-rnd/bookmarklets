(function () {
    var url = 'https://epages.atlassian.net/browse/',
        task = prompt('JIRA Task ID').trim(),
        validate = new RegExp('^[A-Z]{2,5}-[0-9]+$');

    if (validate.test(task)) {
        window.location = url + task;
    } else {
        alert('invalid');
    }
}());
