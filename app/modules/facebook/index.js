const Router = require('koa-router');
const fbConroller = require('./controllers/facebook-controller');


const router = new Router({ prefix: '/fb' });

router.post('/images', fbConroller.getImages);

module.exports = router.routes();
