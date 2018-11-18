'use strict';

const Koa = require('koa');
const modules = require('./modules');
const path = require('path');
const serve = require('koa-static');
const Router = require('koa-router');
const initHandlers = require('./handlers');

const app = new Koa();
const client = new Router();

initHandlers(app);

app.use(serve(path.join(__dirname, 'public')));

app.use(modules);

app.use(client.routes());

client.get('/', require('./routes/main').main);

app.use(async ctx => {
    ctx.status = 404;
		ctx.body = 'NOT FOUND!!!';
});


module.exports = app;
