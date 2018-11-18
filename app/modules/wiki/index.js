const Router = require('koa-router');
const wikiConroller = require('./controllers/wiki-controller');


const router = new Router({ prefix: '/wiki' });

router.post('/search', wikiConroller.search);

module.exports = router.routes();
