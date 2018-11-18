'use strict';

const graph = require('fbgraph');

graph.setGraphUrl('https://graph.facebook.com');

graph.setAppSecret('286171775573133');

graph.setAccessToken('286171775573133|ctMckCzv5RcBnxxBCEwxaRVmKNM');

graph.setVersion("3.2");

module.exports = {
    async search(query, fields, cb, type = 'place') {
        const searchOptions = {
            q: query,
            type,
            fields
        }
        
        graph.search(searchOptions, (err, res) => {
            if (err) {
                throw new Error(err.message);
            } else {
                cb(res);
            }
        })
    }
}
