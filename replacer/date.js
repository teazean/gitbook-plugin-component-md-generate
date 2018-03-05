const moment = require('moment');
module.exports = function (page) {
    page.content = page.content.replace(
        /\{\{DATE(\(.*?\))?}}/g,
        ($0, $1 = 'YYYY-MM-DD') => moment().format($1)
    );
}
