const path = require('path');
exports.getBookDir = function () {
    return path.join(__dirname, '../..');
}
