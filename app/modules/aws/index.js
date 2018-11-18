const Router = require('koa-router');
const awsConroller = require('./controllers/aws-controller');

const router = new Router({ prefix: '/aws' });

router
    .post('/search', awsConroller.search)
    .post('/descriptions', awsConroller.description)
    .post('/wiki/text', awsConroller.wikiText);

module.exports = router.routes();
