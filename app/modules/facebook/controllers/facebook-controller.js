'use strict';

const axios = require('axios');
const url = require('url');

function setUrl (id, fields) {
    return url.format({
            protocol: 'https',
            hostname: 'graph.facebook.com',
            pathname: '/v3.2/'+id,
            query: {
                access_token: '286171775573133|ctMckCzv5RcBnxxBCEwxaRVmKNM',
                limit: 10,
                fields,
            }
        });
}

module.exports = {
   async getImages(ctx) {
       const { id } = ctx.request.body;

       if (!id) {
           ctx.throw(400, 'id required');
       }

       const { data: res } = await axios.get(setUrl(id, 'id,album,images'));

       const data = res;

       ctx.body = { data };

   }
}
