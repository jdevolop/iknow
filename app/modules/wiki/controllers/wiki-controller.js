'use strict';

const wikiService = require('../../../services/wiki-service');

module.exports = {
    async search(ctx) {
        const { query } = ctx.request.body;

        if (!query) {
            ctx.throw(400, 'Search query required');
        }

        const resp = await wikiService.search(query);

        ctx.body = { resp };
    }
}