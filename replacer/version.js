const path = require('path');
const {
    getBookDir
} = require('../helper');
module.exports = function (page, config) {
    try {
        const version = require(path.join(getBookDir(), config.packageJsonPath)).version;
        page.content = page.content.replace(/\{\{VERSION}}/g, version);
    }
    catch (e) {
        // nothing
        console.error(e);
    }
};
