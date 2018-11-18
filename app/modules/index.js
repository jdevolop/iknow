const Router = require('koa-router');
const facebook = require('./facebook');
const aws = require('./aws');
const wiki = require('./wiki');

const router = new Router({ prefix: '/api' });

router.use(facebook);
router.use(aws);
router.use(wiki);


module.exports = router.routes();

