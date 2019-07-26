const DB = require('./DB');
const Koa = require('koa');
const logger = require('koa-logger');
const bodyParser = require('koa-bodyparser');
const json = require('koa-json')
const Router = require('@koa/router');

const app = new Koa();
const router = new Router();
const api = new Router();
const db = new DB();

api
  .get('/todo', (ctx, next) => {
    ctx.body = db.all();
  })
  .post('/todo', (ctx, next) => {
    const { body: { val } } = ctx.request;
    if (val) {
      db.create(val);
      ctx.response.status = 204;
    } else {
      ctx.response.status = 400;
    }
  })
  .get('/todo/:pk', (ctx, next) => {
    const item = db.read(ctx.params.pk);
    if (item) {
      ctx.body = item;
    } else {
      ctx.response.status = 404;
    }
  })
  .put('/todo/:pk', (ctx, next) => {
    const { body: { val } } = ctx.request;
    if (val) {
      db.update(ctx.params.pk, val);
      ctx.response.status = 204;
    } else {
      ctx.response.status = 400;
    }
  })
  .delete('/todo/:pk', (ctx, next) => {
    db.delete(ctx.params.pk);
    ctx.response.status = 204;
  });
router
  .use('/api', api.routes(), api.allowedMethods());

app
  .use(logger())
  .use(bodyParser())
  .use(json())
  .use(router.routes())
  .use(router.allowedMethods());
app.listen(8000);