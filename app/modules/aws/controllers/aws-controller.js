'use strict';

const awsService = require('../../../services/aws-servise');
const axios = require('axios');
const url = require('url');

function setUrl (query, fields) {
    return url.format({
            protocol: 'https',
            hostname: 'graph.facebook.com',
            pathname: '/v3.2/search',
            query: {
                access_token: '286171775573133|ctMckCzv5RcBnxxBCEwxaRVmKNM',
                limit: 10,
                type: 'place',
                fields,
                q: query
            }
        });
}


const comprehend = new awsService.Comprehend();
const translate = new awsService.Translate();

module.exports = {
   async description(ctx) {
        const { query } = ctx.request.body;

        if (!query) {
            ctx.throw(400, 'QUERY REQUIRED');
        }


        const res = await comprehend.dominantLanguage([query]);

        const lang = res.ResultList[0].Languages[0].LanguageCode;

        let data;

       async function main() {
            const { data: res } = await axios.get(setUrl(query, 'id,description'));
                let result = [];
            for (let i =0; i <= (res.data.length - 1); i++) {
                console.log(typeof res.data[i].description + 'assd');

                if ( res.data[i].description != undefined)
                {

                    let translated = await translate.tran(res.data[i].description, lang, lang);
                    result.push(translated);

                }

            }
        
            return result;
        }

    

        data = await main();

        ctx.body = { data };
    },
    async search(ctx) {
        const { query } = ctx.request.body;

        if (!query) {
            ctx.throw(400, 'QUERY REQUIRED');
        }

        let data;
        const result = await comprehend.dominantLanguage([query]);

        const lang = result.ResultList[0].Languages[0].LanguageCode;

        const { data: res } = await axios.get(setUrl(query, 'id,name,location,picture,description,photos'));

        ctx.body = { data: res.data };

    },
    async wikiText(ctx) {
        const { query } = ctx.request.body;

        if (!query) {
            ctx.throw(400, 'query requored');
        }

        const result = await comprehend.dominantLanguage([query]);

        const lang = result.ResultList[0].Languages[0].LanguageCode;

        const payload = JSON.stringify({ query });

        const { data: res } = await axios({
            method: 'post',
            url: 'http://localhost:3000/api/wiki/search',
            data: payload,
            headers: {
                'Content-Type': 'application/json'
            }
          });

          
            let rest = await translate.tran(res.resp.body[2], 'ru', lang); 

        
          ctx.body = { rest };

    }
}
