const Koa = require('koa');
const router = require('koa-router')();
const koaBody = require('koa-body')();

const app = new Koa();

// 日志

// 首页 —— 轮播图数据
const homeCateGory = require('./home/homeCategory');
router.get('/api/homeCategory', (ctx, next) => {
    ctx.body = homeCateGory;
});

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

// 搜索结果页 - 搜索结果 - 三个参数
const searchListData = require('./search/list');
router.get('/api/search/:page/:city/:category/:keyword', (ctx, next) => {
    // 参数
    const params = ctx.params;
    const paramsPage = params.page;
    const paramsCity = params.city;
    const paramsCategory = params.category;
    const paramsKeyword = params.keyword;

    console.log('当前页数：' + paramsPage)
    console.log('当前城市：' + paramsCity)
    console.log('当前类别：' + paramsCategory)
    console.log('关键字：' + paramsKeyword)

    ctx.body = searchListData;
});

// 搜索结果页 - 搜索结果 - 两个参数
router.get('/api/search/:page/:city/:category', (ctx, next) => {
    console.log('搜索结果页 - 搜索结果')

    // 参数
    const params = ctx.params;
    const paramsPage = params.page;
    const paramsCity = params.city;
    const paramsCategory = params.category;

    console.log('当前页数：' + paramsPage)
    console.log('当前城市：' + paramsCity)
    console.log('当前类别：' + paramsCategory)

    ctx.body = searchListData;
})

// 详情 - 商户详情
const detailInfoData = require('./detail/info');
router.get('/api/detail/info/:id', (ctx, next) => {
    ctx.body = detailInfoData;
});

// 详情 - 商户评论
const detailCommentData = require('./detail/comment');
router.get('/api/detail/comment/:page/:id', (ctx, next) => {
    ctx.body = detailCommentData;
});

// 用户主页-订单详情 
const orderListData = require('./orderList/orderList');
router.get('/api/orderList/:username', (ctx, next) => {
    ctx.body = orderListData;
});

// 用户主页-提交评价
router.post('/api/submitComment', (ctx, next) => {
    console.log('提交评论');
    // 获取参数
    ctx.body = {
        errno: 0,
        msg: 'ok'
    }
});

app.use(router.routes())
    .use(router.allowedMethods());

app.listen(3000, () => {
    console.log('mock服务器已启动: http://localhost:3000/');
});