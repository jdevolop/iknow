const axios = require('axios');

let wikiUrl = 'https://ru.wikipedia.org/w/api.php?action=opensearch&origin=*&limit=5&format=json&search=';

module.exports = {
    async search(query) {
        let search = wikiUrl+query;

        const { data: res } = await axios.get(search);

        return {
            titles: res[1],
            body: res[2],
        }        
    }
}
