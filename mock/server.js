const Koa = require('koa');
const router = require('koa-router')();
const koaBody = require('koa-body')();

const app = new Koa();

// 首页 —— 广告（超值特惠） 
const homeAdData = require('./home/ad');

router.get('/api/homead', (ctx, next) => {
    ctx.body = homeAdData;
});

// 首页 —— 推荐雷彪（猜你喜欢）
const homeListData = require('./home/list');

router.get('/api/homelist/:city/:page', (ctx, next) => {
    // 参数
    const params = ctx.params;
    const paramsCity = params.city;
    const paramsPage = params.page;

    console.log(`当前城市：${paramsCity}`);
    console.log(`当前页数：${paramsPage}`);
    
    ctx.body = homeListData;
});

// 选择城市 - 热门城市
const hotCityListData = require('./home/hotCityList');
router.get('/api/hotCityList', ctx => {
    ctx.body = hotCityListData;
});

// router.post('/api/post', koaBody, (ctx, next) => {
//     console.log(ctx.request.body);
//     ctx.body = JSON.stringify(ctx.request.body)
// });

app.use(router.routes())
    .use(router.allowedMethods());

app.listen(3000, () => {
    console.log('mock服务器已启动: http://localhost:3000/');
});
