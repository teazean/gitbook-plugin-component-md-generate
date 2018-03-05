const replacers = [
    require('./replacer/version'),
    require('./replacer/date')
]

module.exports = {
    // Map of hooks
    hooks: {
        "page:before": function(page) {
            const config = this.config.get('pluginsConfig')['component-md-generate'];
            replacers.forEach(replacer => replacer(page, config));
            return page;
        }
    },

    // Map of new blocks
    blocks: {},

    // Map of new filters
    filters: {}
};
